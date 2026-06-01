#!/usr/bin/env node
/**
 * compress-images.js
 * Compresses all JPEGs in public/trades/ to ≤400KB
 * Strategy: resize to max 1400px wide (2× mobile retina), then binary-search quality
 * Output: progressive JPEG, aspect ratio preserved
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/trades");
const MAX_BYTES = 400 * 1024; // 400KB
const MAX_WIDTH = 1400;       // 2× retina for a 700px card max
const INITIAL_QUALITY = 80;
const MIN_QUALITY = 30;

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function compressImage(filePath) {
  const original = fs.statSync(filePath).size;
  const filename = path.basename(filePath);

  if (original <= MAX_BYTES) {
    console.log(`  ✓ ${filename}  ${formatKB(original)} — already under 400KB, skipped`);
    return;
  }

  // Step 1: resize to max MAX_WIDTH, preserving aspect ratio
  let pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

  // Step 2: binary-search quality to hit ≤400KB
  let settledQuality = MIN_QUALITY;
  let lo = MIN_QUALITY;
  let hi = INITIAL_QUALITY;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const buf = await pipeline
      .clone()
      .jpeg({ quality: mid, progressive: true, mozjpeg: true })
      .toBuffer();

    if (buf.length <= MAX_BYTES) {
      settledQuality = mid;
      lo = mid + 1; // try higher quality while still fitting
    } else {
      hi = mid - 1;
    }
  }

  // Final encode at settled quality
  const output = await pipeline
    .jpeg({ quality: settledQuality, progressive: true, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(filePath, output);
  const compressed = output.length;
  const saving = (((original - compressed) / original) * 100).toFixed(0);

  console.log(
    `  ✓ ${filename}  ${formatKB(original)} → ${formatKB(compressed)}  (−${saving}%, q${settledQuality})`
  );
}

async function main() {
  const files = fs.readdirSync(INPUT_DIR).filter((f) => /\.(jpg|jpeg)$/i.test(f));

  if (files.length === 0) {
    console.log("No JPEG files found in public/trades/");
    process.exit(0);
  }

  console.log(`\nCompressing ${files.length} images in public/trades/ (max ${MAX_WIDTH}px wide, ≤400KB)\n`);

  for (const file of files) {
    await compressImage(path.join(INPUT_DIR, file));
  }

  console.log("\nDone.\n");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
