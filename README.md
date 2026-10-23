# Terrain

A one-visit orientation product for 18-year-olds deciding whether a trade is right for them. It gives a young person the real picture of a trade before they commit: the work, the money, the training, the risks and the routes.

Live: https://terrain-psi.vercel.app
Case study: https://sarajavan.com/process/terrain

Designed and directed by Sara Javan, Lead Product Designer, AI & Complex Systems, using an agentic build method with Claude Code. The repo is public so you can read how the agent was directed, not only what it produced.

## The problem it solves

Say you are 18 and thinking about a trade. You don't know what the work is really like day to day. You don't know what it pays, how you get in, or what the risks are. Nobody in your family has done it, and the people around you may call it a fallback. So you guess, or you don't start.

Terrain shows you the real picture before you commit. If you need an insider to explain a path, the path is badly designed. Terrain is the explanation you would get from that insider.

## The journey

Four screens, one decision each.

| Screen | Route | Job |
|---|---|---|
| Landing | `/` | Feel it |
| Explore | `/explore` | Understand it |
| Worker story | `/worker/[name]` | Believe it |
| Your path | `/path` | Act on it |

No feeds, no counts, no likes. Trades are grouped by life pattern, not job title. Information is revealed progressively.

## Where to look in this repo

| What | Where | Why it matters |
|---|---|---|
| Design memory for the agent | `CLAUDE.md` | A request. It tells the agent the tokens, type rules and principles. |
| A rule the agent cannot skip | `.claude/hooks/check-hardcoded-values.sh`, wired in `.claude/settings.json` | A PreToolUse hook that blocks a file write or edit containing a hard-coded 6-digit hex colour. A request can be ignored. A hook cannot. |
| Token system | `app/globals.css`, `src/tokens/` | One accent colour, minimum text size and opacity set as rules. |
| Accessibility checks | `.claude/agents/a11y-reviewer.md`, `accessibility-sweep/` | Automated axe-core scan with Playwright, plus a reviewer agent for judgement calls. |
| Process book | `teaching/terrain_process_book.pdf` | Sixteen entries on the decisions, the failures and what I changed. |
| HTML prototypes | `prototype/` | Each screen was designed and validated as HTML before it was built in React. |
| Project knowledge file | `SKILL.md` | The working log: research notes, decisions and session records. Long, and written for the agent as much as for people. |

## Where my judgement mattered

- The agent waited for conviction. It had the capability but not the confidence to cross a boundary until I named what I wanted.
- It added decorative shapes to placeholder cards unprompted. I removed them.
- An orange accent read as an error state. I cut it and kept one accent.
- The first output card on the last screen felt closed. I turned it into three named, doable actions.
- An invisible text input taught me that form field accessibility has to be specified.
- Before fixing hard-coded values I had the agent list every violation first (33 across 11 files), sorted them into three categories, then fixed them. Audit before change. Automate verification, not judgement.

## What is true, and what is not yet

- The build was directed by me with an agent. I am not claiming it was built solo.
- The automated axe-core scan found no violations on the routes scanned. There has been no manual or screen-reader review, and I make no WCAG conformance claim.
- The research behind the product is AI-assisted desk research. It is not user testing. I have not yet tested with real 18-year-olds. That is the honest next step.
- The six worker stories are AI-assisted drafts written as illustrative characters. They are not interviews with real workers, and the names are not real people.
- The hook checks 6-digit hex colours only. The paper-colour receipt card on the worker pages still uses fixed values that have not been moved into the token system. Extending the hook and tokenising the receipt are next.
- Not built yet: a trade-specific output on the last screen, and the Australian content pipeline beyond the drafts in `teaching/`.

## Credit

`accessibility-sweep/` follows the accessibility sweep workflow from Agentic Design School's Claude Code for Designers course. The route list and the results are for this project. The workflow itself is theirs.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Framer Motion 12.
