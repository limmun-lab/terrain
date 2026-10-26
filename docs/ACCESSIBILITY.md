# Accessibility checks

An automated scan, run on 26 October 2026. It is evidence of some checks passing. It is not a conformance claim.

## What was run

- Tool: axe-core through Playwright (`scripts/a11y-scan.mjs`), rules tagged WCAG 2.0 A and AA, 2.1 A and AA, and 2.2 AA.
- Ten routes: `/`, `/explore`, `/path`, and the seven worker stories (`/worker/alex`, `blake`, `charlie`, `parker`, `robin`, `rowan`, `sam`).
- Viewport: 390 x 844 (phone). Each page was scrolled to the bottom first so scroll-triggered animations had finished.
- Raw results: `docs/a11y-results.json`.

## Result

No axe-core violations on any of the ten routes.

## What this does not cover

- **Colour contrast was only partly decided.** On every route axe marked some contrast checks "needs review" (about 300 elements in total), usually text over gradients or photos, where it cannot compute a ratio. Those were not machine-verified.
- **No manual review.** There has been no keyboard-only walkthrough, no screen-reader testing and no testing with people who use assistive technology. Automated tools find only a subset of issues.
- **Local run.** The scan ran against a local development server, not the deployed site, with a fallback font because Google Fonts was unreachable from the test machine. Colour and structure checks are unaffected, but target sizes could differ slightly.
- **One viewport, one moment.** Desktop widths and later changes are not covered.

## Run it again

```bash
npm run dev                  # in one terminal
node scripts/a11y-scan.mjs   # in another; set A11Y_BASE_URL to scan a deployed URL
```
