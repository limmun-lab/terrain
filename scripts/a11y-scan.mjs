// Automated accessibility scan: axe-core through Playwright, one pass per route.
// Usage: A11Y_BASE_URL=http://localhost:3000 node scripts/a11y-scan.mjs
// Writes a11y-results.json next to this file's parent folder under docs/.
// An automated scan finds some issues only. It is not a conformance test and
// does not replace manual keyboard or screen-reader review.
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = process.env.A11Y_BASE_URL ?? "http://localhost:3000";
const routes = [
  "/",
  "/explore",
  "/path",
  "/worker/alex",
  "/worker/blake",
  "/worker/charlie",
  "/worker/parker",
  "/worker/robin",
  "/worker/rowan",
  "/worker/sam",
];
const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const results = [];

for (const route of routes) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(BASE + route, { waitUntil: "networkidle" });

  // Scroll to the bottom in steps so scroll-triggered animations finish,
  // then wait, so contrast is measured on settled content.
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight / 2));
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);

  const axe = await new AxeBuilder({ page }).withTags(tags).analyze();
  results.push({
    route,
    violations: axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.length,
    })),
    passes: axe.passes.length,
    incomplete: axe.incomplete.map((v) => ({ id: v.id, nodes: v.nodes.length })),
  });
  await context.close();
}
await browser.close();

const out = {
  date: new Date().toISOString().slice(0, 10),
  base: BASE,
  viewport: "390x844",
  tags,
  routes: results,
  totalViolations: results.reduce((n, r) => n + r.violations.length, 0),
};
mkdirSync(new URL("../docs/", import.meta.url), { recursive: true });
writeFileSync(
  new URL("../docs/a11y-results.json", import.meta.url),
  JSON.stringify(out, null, 2) + "\n",
);
for (const r of results) {
  console.log(`${r.route.padEnd(18)} violations: ${r.violations.length}  needs review: ${r.incomplete.length}`);
  for (const v of r.violations) console.log(`   - ${v.id} (${v.impact}) x${v.nodes}`);
}
console.log(`Total violations: ${out.totalViolations}`);
