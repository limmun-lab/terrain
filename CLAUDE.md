@AGENTS.md

# Terrain — Project

## What this is
Terrain is a mobile-first trades career exploration app.
Built for 18-year-olds deciding whether a trade is the right path.
The feeling is: hopeful. Every technical decision serves that.

## Stack
- Next.js 16 (App Router) — read AGENTS.md before writing any Next.js code
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion 12

## Commands
```bash
npm run dev     # local dev server
npm run build   # production build
npm run lint    # ESLint
```

## Project layout
```
app/            — Next.js App Router pages and layouts
components/     — shared React components
public/         — static assets
prototype/      — original HTML prototypes (design reference, do not delete)
  terrain-hero.html
  terrain-explore.html
  terrain-worker-story.html
  terrain-your-path.html
  terrain-tokens-test.html
  CLAUDE.md     — design system reference (read this too)
```

---

# Terrain — Design System

## Colour Tokens
```css
--canvas-bg:            #121314
--card-bg:              #241E14
--card-border:          rgba(245,240,235,0.15)
--color-text-body:      rgba(245,240,235,0.88)
--color-text-muted:     rgba(245,240,235,0.75)
--accent:               #0047FF
--input-border-default: rgba(245,240,235,0.45)
--input-border-focus:   #0047FF
--caret-color:          #0047FF
```

## Typography
- Font stack: system fonts — -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Serif display: Georgia, serif — impact statements and worker story headlines only
- Monospace: 'IBM Plex Mono', Courier, monospace — labels, section markers, receipts, data
- Minimum text size: 13px — no exceptions
- Minimum text opacity: 0.75 — no exceptions
- Label size: 0.85rem, letter-spacing: 0.08em
- Placeholder text opacity: 0.45-0.55 — signals empty, not filled

## Buttons
- Fit text content with padding — never full width
- Background: #0047FF
- Text: rgba(245,240,235,0.88)
- Border radius: 6px
- Padding: 10px 20px
- Hover: slight brightness increase, subtle lift

## Cards
- Background: #241E14
- Border: rgba(245,240,235,0.15) 1px solid
- Border radius: 12px
- Padding: 24px

## Design Principles — non-negotiable
- This platform is for 18-year-olds entering trades
- The feeling is: hopeful. Every decision serves that
- No social mechanics — no counts, no feeds, no likes
- Information revealed progressively — never dumped
- One accent colour (#0047FF) used intentionally — never decoratively
- Buttons fit their text — never fill containers
- Text is always accessible — 0.75 opacity minimum

## Screen Architecture
01 — / (home)              — Landing (terrain-hero.html)
02 — /explore              — Horizon Reveal (terrain-explore.html)
03 — /story/[slug]         — Worker Story (terrain-worker-story.html)
04 — /your-path            — Your Path (terrain-your-path.html)

## Voice
- Direct, honest, warm
- No corporate language
- No hedging
- Speaks to the worker, not about them

---

## Prompting Checklist

Before sending any design prompt, confirm:

1. Colours specified with hex values or CSS variable names
2. Fonts and weights named explicitly
3. Layout described with specific values — not "centered" but "flexbox, align-items: center"
4. Existing files referenced — @filename for components Claude should follow
5. Verification instruction included — "confirm what changed"
6. No subjective terms without concrete definitions — not "clean" but "no decorative elements, single accent colour only"

If yes to all six — send it.
If not — fill the gaps first.

## Prompting Principles

- Name the feeling before specifying the values.
  The feeling is the brief. The prompt is the translation.
- Specify what TO do, never what NOT to do.
  "Use #0047FF cobalt" beats "remove the orange."
- Two corrections maximum per session on the same issue.
  After two — run /clear and start fresh with a better prompt.
- Sketch before you prompt.
  The loop converges in one round when design intent
  exists before the session opens.
- Metaphoric description is a valid prompt format.
  "Like early morning light breaking through" is more
  precise than a hex code for establishing feeling.
