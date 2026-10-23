---
name: trades-platform
description: >
  Sara Javan's Trades Platform project — a worker empowerment platform
  designed for 18-year-olds entering trades. Use this skill whenever Sara
  mentions the trades platform, the worker platform, Terrain, trades
  project, or asks about building, designing, researching, or writing content
  for the platform. Also triggers when Sara shares research findings about
  trades, apprenticeships, worker pathways, or career platform features.
  Always load this skill before any work on the trades project — it contains
  the full product vision, design principles, research layer strategy, and
  technical architecture decisions.
---

# Terrain

A worker empowerment platform for 18-year-olds entering trades.
The orientation layer before the commitment.

**Core promise:** Before you choose a trade, see the whole terrain —
the work, the money, the training, the risks, the routes, and the
future it can become.

---

## Product Vision

Terrain gives young workers the full picture of what a trade life looks
like before they commit to a direction. It is not a job board, not a
social network, not a school directory, not a government portal.

It is the map before the maze.

**The feeling on arrival:** Legitimacy. This was built for you.
**The name:** Terrain — from Sara's research concept "given the task,
not the terrain."

---

## Primary User

**18-year-old entering trades for the first time.**
- Facing an acute information asymmetry — interest exists, navigation doesn't
- May have been told trades are a fallback, not a real choice
- Arrives uncertain, possibly defensive about their decision
- Without a trade family, has no informal network to translate the system
- Needs: orientation, possibilities, pathway clarity, life simulation
- Does NOT need: overwhelm, risk-first framing, social media mechanics

Secondary user (design for later): Parent/counsellor trying to help
but poorly equipped to advise on non-traditional pathways.

---

## Design Principles (non-negotiable)

**This platform does NOT:**
- Overwhelm. Information revealed progressively, earned through engagement
- Lead with risk, incidents, or danger — that's the industry's habit
- Make the user feel like a number — no follower counts, no vanity metrics
- Feel like social media — no infinite scroll, no likes, no feeds
- Tell the user what to do — no recommendation algorithm
- Group trades only by job title — group by life pattern instead

**This platform DOES:**
- Give terrain — the real picture of trade life, from people who lived it
- Treat the choice as serious and worthy from second one
- Put ownership in the user's hands
- Show possibilities, not requirements
- Reveal depth progressively — never dump
- Translate: government language → teen language, trade titles → life patterns,
  credentials → decision confidence, scattered pathways → next step

---

## Market research (desk research, not user testing)

### The shift appears real (desk research)
- Vocational-focused community college enrollment up ~20% since Spring 2020
  (National Student Clearinghouse)
- Construction trades up 23%, HVAC up 7% (NAM/Clearinghouse 2024)
- ~680,000 active Registered Apprentices in FY2024, up from 318,000 in 2014
- BLS projects 649,300 construction/extraction openings per year, 2024–2034

### Four structural drivers
1. Debt ROI — 50%+ of Gen Z say 4-year degree no longer worth the investment
2. AI disruption anxiety — trades perceived as automation-resistant
3. "Toolbelt Gen" realignment — Gen Z prioritises stable income (58%) over
   white-collar prestige
4. Layoff resiliency — trades show significantly lower mass-layoff volatility

### The white space appears real (desk research)
No existing platform addresses the pre-commitment exploratory phase.
Every competitor assumes the user already decided. Terrain solves for before.

### Competitors and their gaps
| Platform | What it does | What it misses |
|----------|-------------|----------------|
| Apprenticeship.gov | Federal database, Job Finder | Cold aggregator, no orientation, bureaucratic language |
| CareerOneStop | Career exploration, salary data | Government-style, not designed for 18-year-olds |
| SkillHero | Network, jobs, training | More feed/job-board than orientation system |
| Trade Hounds | Community for tradespeople | Useful after entry, not before |
| BlueRecruit | Job matching | Another job board layer |
| Union portals | Local, trade-specific detail | Fragmented, inconsistent, desktop-era UX |

---

## The Research Layer — Key Findings

### Fast-growing trades (by life pattern, not title)
- **Outdoor infrastructure:** Electricians (9% growth, 81k openings/yr),
  Wind technicians (50% growth), Solar installers (42% growth),
  Power-line installers (7% growth)
- **Building systems:** HVAC/R (8% growth, 40k openings/yr),
  Plumbers/pipefitters (4% growth, 44k openings/yr)
- **Industrial + technical:** Industrial machinery mechanics,
  Heavy vehicle technicians, Network/fiber infrastructure
- **Healthcare trades:** Diagnostic sonographers (13% growth, $89k median),
  Radiologic technologists ($77k median), Medical equipment repairers (13%)
- **High specialisation ceiling:** Pipeline/aerospace welding,
  Industrial cybersecurity technicians, PLC programmers

### The four earning curves (show these, not "trades vs college")
1. **Apprentice curve** — escalating wage over 4 years, ~$140–200k cumulative
2. **Journeyperson curve** — $75–95k base, top earners $120–150k+
3. **Specialist curve** — niche work: controls, medical equipment, line work
4. **Owner/operator curve** — highest upside, highest risk

### Real barriers (from documented worker accounts)
- Hidden financial costs: tools ($500–1,500), boots, transport, test fees,
  union initiation, childcare — block entry before day one
- Irregular application windows — some JATC windows open for 2 weeks every
  2 years, announced via obscure PDF links
- The assessment gate — aptitude tests cover advanced arithmetic,
  spatial reasoning; many fail without targeted prep
- Tribal knowledge gap — job site has its own language; outsiders get
  sidelined to sweeping duties for months
- Fewer than 20% of Gen Z high school students feel well-informed about
  apprenticeship alternatives (Gallup/JFF/Walton)
- 90% of Gen Z students trust parents for guidance — but parents feel
  poorly equipped to advise on trades

### Inclusion reality
- Women were less than 5% of active Registered Apprentices in
  construction/extraction in 2021 (WANTO/Apprenticeship.gov)
- Harassment, poor advancement, and work-family support gaps are real barriers
- Terrain should make this visible without making trades feel impossible

---

## Prototype Scope — Four Screens

**Screen 1 — Landing**
"This was built for you." First 10 seconds. Hero, feeling, one clear CTA.
Headline direction: "The possibilities didn't exist before. They're here now."

**Screen 2 — Explore by Life Pattern**
Not a list of jobs — a map of possibilities.
Group by: outdoor/indoor, hands/diagnostic, local/travel,
business-ownership path, healthcare vs construction vs industrial.
Each trade: what it actually is, day-in-the-life, earning curve,
apprenticeship route, credentials that matter, hidden costs.

**Screen 3 — Worker Story**
One real worker. Structured around:
- What I thought the trade was
- What surprised me
- My first mistake
- What I spent on tools
- What I wish I knew at 18
- How my body feels after five years

**Screen 4 — Your Path**
Light orientation. Not an algorithm — a conversation.
Where are you now? What patterns match your life?
Output: two or three trades worth exploring further + next concrete step.

**Out of scope for prototype:**
Job matching, credential verification, regulatory compliance,
community features, messaging, accounts, backend infrastructure,
parent mode (V2), Red Flag detector (V2), JATC window aggregator (V2).

---

## Technical Architecture

**Stack:** Next.js · React · TypeScript · Tailwind CSS · Framer Motion
**Content:** lib/content.ts — CMS-ready schema from day one
**Fonts:** TBD — distinct from sarajavan.com, appropriate for 18-year-olds
**Design system:** Built from scratch during Week 3 of curriculum
**Repository:** New repo, separate from portfolio-2026
**Deployment:** Vercel

**Architecture rule:** Data structures in Phase 1 must travel to a CMS
without rebuilding. Design for Sanity/Contentful even while using static files.

---

## Curriculum Connection

| Week | Build | Teaching Artifact |
|------|-------|-------------------|
| 3 | Design system + tokens from scratch | How to build a design system with an agent |
| 4 | MCP-connected workflow | Before/after workflow map |
| 5 | Production deployment | Full pipeline documentation |
| 6 | Teaching framework assembly | Coaching module from all artifacts |

---

## Research Log

### Entry 001 — 2026-05-27
**Source:** Gemini + GPT parallel research
**Focus:** US trades landscape, apprenticeship pathways, barriers, competitors

**Key findings from desk research (not yet user-tested):**
- Market shift indicated: enrollment and apprenticeship numbers point the same way
- White space indicated: no platform found that serves pre-commitment orientation
- "Life pattern" grouping > job title grouping — both models independently
- Hidden costs are a major barrier — tools, transport, fees, not just tuition
- The tribal knowledge gap is the core UX problem Terrain solves
- Parent/counsellor mode is a strong V2 differentiator
- Inclusion gaps are real and should be visible, not hidden

**Files:** Shared in conversation 2026-05-27

---

## Key Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-26 | Primary user = 18-year-old entering trades | Fresh perspective, tech-native, most impacted by AI uncertainty shift |
| 2026-05-26 | No social mechanics | Protects dignity, avoids performance anxiety |
| 2026-05-26 | Research layer = static first, CMS-ready schema | Prototype speed without sacrificing forward architecture |
| 2026-05-26 | Build as prototype, not full platform | Curriculum scope + investor demo viability |
| 2026-05-26 | Name = Terrain | From Sara's research concept "given the task, not the terrain" |
| 2026-05-27 | Group by life pattern, not job title | Research confirms this is the missing UX layer |
| 2026-05-27 | Show four earning curves, not trades vs college | More honest, more useful, more defensible |

---

## Curriculum Learning Log

### Day 1 — Week 1
**Build:** Claude Code installed and running on portfolio-2026 (sarajavan.com)
**Build:** Services page built and deployed to sarajavan.com with nav link
**Build:** IDEAS.md created with safety app parked for later
**Artifact:** Coaching curriculum map (visual, interactive)
**Artifact:** Branded B&W study journal PDF with dot grid note zones
**Artifact:** Index day cards (105×74mm, 30 daily + 6 Friday review)

**Key Insight — Day 1:**
Setup was much easier than expected. The barrier to entry is lower
than the fear of it. Most future clients will assume setup is the
hard part. It isn't.

---

### Day 2 — Week 1
**Build:** About bridge section added to sarajavan.com homepage
**Build:** Repo cleaned — .gitignore updated, 19 files removed from tracking
**Deployed:** Both changes live on sarajavan.com

**Key Insight — Day 2:**
Claude Code read the architecture and gave Sara a mental model of
her own codebase, including exceptions to the rules. That's the
agent orienting itself before acting.

**Teaching note:** A clean repo is a design decision. What you
exclude from tracking is as intentional as what you include.

---

### Day 3 — Week 1
**Build:** Terrain project started — terrain/terrain-hero.html
**Build:** Screen 1 (Landing) designed and iterated — three rounds

**Iteration log — Screen 1:**
- Round 1: Gradient background — "like early morning light breaking
  through" translated into warm directional gradient
- Round 2: Button redesigned — terracotta to amber-gold gradient
  with warm glow on hover
- Round 3: "Terrain" word in heading given matching gradient via
  CSS background-clip text

**Key Insight — Day 3 (most important so far):**
"Claude didn't want to cross the boundaries and was waiting for me
to inject more confidence and shape it."

The agent has capability but no conviction. The designer has
conviction but needed the capability. The loop works because the
human brings the courage to name what they want and Claude brings
the precision to execute it.

Design language ("like early morning light breaking through")
gets further faster than technical specifications. Metaphor is
a valid and powerful prompt format.

---

## Essay Topics — Dignity by Design Pipeline

Topics that emerged from the curriculum and Terrain work:

1. **What happens to human confidence when you work alongside an
   agent that waits for you to lead.**
   The hesitation, the surprise, the moment of trust. The emotional
   experience of the human-agent loop that no tutorial describes.

2. **Terrain is not a marketplace. It is a mirror.**
   Held up so a young worker can see their future clearly before
   they walk into it. The difference between transaction platforms
   and dignity platforms.

3. **The one-off product as the highest form of design.**
   Terrain users come once, get clarity, leave. Why designing for
   a single meaningful visit is more honest than designing for
   retention and daily active users.

4. **The tribal knowledge gap as a design problem.**
   Every system that requires insider knowledge to navigate is
   a dignity failure. From trades apprenticeship to corporate
   onboarding — the terrain nobody gives you.

---

## Terrain Design Decisions Log (continued)

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-28 | Screen 1 emotion = Hopeful | Not inspired (too big), not confident (too transactional). Hopeful = the future is navigable |
| 2026-05-28 | Gradient background — warm, directional | Flat dark doesn't feel hopeful. Light moving through it does |
| 2026-05-28 | Button gradient: terracotta to amber-gold | Must feel like the first step toward something good, not a transactional click |
| 2026-05-28 | "Terrain" word gradient-treated | One word carries the warmth — the rest stays clean |
| 2026-05-28 | Design language > hex codes in prompts | Metaphoric description produces better results than technical specification |

---

### Day 3 continued — Screen 3 Worker Story

**Build:** terrain/terrain-worker-story.html — Blake's story

**Design decisions:**
- Worker name: Blake — statistically 50/50 unisex split, sharp
  and pragmatic, allows any 18-year-old to project themselves
- No portrait photo — anonymous by design, reader projects
  themselves into the story
- Five sections, vertical scroll, thin rules dividing each
- Only key sections get display-size impact statements —
  restraint makes them land harder
- Section labels styled as field manual chapter headings
- Section 04 (What I Spent) styled as a monospace receipt —
  honest, itemised, no softening
- Background: warm dark with grain texture — worn document
  aesthetic, not a webpage
- No quotation marks on impact statements — stated not cited

**Content — Blake's five sections:**
01 / What I Thought It Was — impact: "I thought electricity
     was the job. It wasn't."
02 / What Surprised Me — body only, no impact statement
03 / The Cost of Failure — impact: "A mistake here isn't a
     bug report. It's a crushed hand, a ruined shift, or worse."
04 / What I Spent — monospace receipt format
05 / The Lesson at 18 — impact: "Your body is the real tool."

Footer: "One voice. One trade. One reality."

**Key insight — Screen 3:**
"The text is the design." Pure typography and texture.
No images needed when the writing is honest enough.
The impact statement earns its size by being true,
not by being decorated.

**Parked for later:**
Visual dictionary — illustrated trade terminology inline
with worker stories. One term per section, defined visually
not textually. Solves the Vocabulary Wall problem directly.
(Comment added to HTML file for future reference)
Target: Week 4-5 when MCP + illustration workflow is ready.

**Worker name research finding:**
Unisex names with 50/50 statistical split for trade contexts:
Blake, Robin, Alex, Sam, Charlie, Rowan, Parker, Casey.
Blake chosen for Screen 3 — sharp, pragmatic, field-ready.
Future worker stories should rotate through this list.

---

## Terrain Screens Status

| Screen | Name | File | Status |
|--------|------|------|--------|
| 1 | Landing | terrain-hero.html | Complete |
| 2 | Horizon Reveal | terrain-explore.html | Complete |
| 3 | Worker Story | terrain-worker-story.html | In progress — refinements pending |
| 4 | Your Path | terrain-your-path.html | Not started |

---

## Visual Dictionary — Future Feature Brief

**The problem it solves:**
The Vocabulary Wall — worker account from Atlanta research.
19-year-old spent two weeks terrified because he didn't know
what an LB, condulet, or dummy coupling looked like.
No visual reference existed. He felt stupid. He almost quit.

**What it is:**
Illustrated trade terminology inline with worker stories.
One term per section, defined visually not textually.
Each trade gets its own visual dictionary.

**Design principle:**
Not a glossary page. Not a separate section. Inline, contextual,
earned by the reader as they scroll through the story.

**Scope:**
- Start with electrical trade (Blake's story)
- Five terms per story minimum
- Illustration style: warm line art, consistent with
  Terrain's editorial aesthetic
- Build with MCP + illustration workflow in Week 4-5

---

### Day 3 — End of Day Summary

**Date:** 2026-05-28 (Wednesday)
**Status:** Day 3 complete. Week 2 starts tomorrow.

**All four screens built in one day:**

| Screen | File | Status |
|--------|------|--------|
| 1 — Landing | terrain-hero.html | Complete |
| 2 — Horizon Reveal | terrain-explore.html | Complete |
| 3 — Worker Story (Blake) | terrain-worker-story.html | Complete |
| 4 — Your Path | terrain-your-path.html | Needs one round — Direction A launchpad |

**Screen 4 — Remaining work (tomorrow):**
Direction A — output card becomes a launchpad.
Three specific, immediate, named actions the user
can take tomorrow. Not generic — real and doable.
"Find the r/electricians subreddit and read the last
10 posts tagged apprentice." That level of specificity.

Direction B — card opens into trade-specific view
based on user's three answers. Needs data layer.
Target: Week 2-3 build, not today.

---

## Week 2 Plan

**Theme:** Prompting mastery + skill architecture
**CC4D:** Ch 4 — Prompting, Ch 5 — CLAUDE.md
**TAD:** Ch 3 — Teaching agents

**Builds:**
- Finish Screen 4 Direction A (Day 1 of Week 2)
- Prompt pattern library from real Terrain work
- CLAUDE.md for full consulting practice
- Begin Direction B — trade-specific output card

**Artifacts:**
- Annotated CLAUDE.md template for clients
- Prompt pattern library — tested on Terrain screens

**Key transition:**
Terrain moves from prototype to demo-ready product.
Every Week 2 build decision is documented as
teaching material for the coaching curriculum.

---

## Curriculum Progress vs Plan

Originally Terrain was scheduled for Week 3.
Building it in Week 1 because the project is real
and the stakes are real. The curriculum is working
faster than planned.

**Revised timeline:**
- Week 1 (current): Terrain prototype — four screens
- Week 2: CLAUDE.md + prompt patterns + Screen 4 Direction B
- Week 3: Design system + tokens — Mason Jar encoded,
  Terrain design system formalised
- Week 4: MCP — Figma + Notion connected,
  real data layer for Direction B
- Week 5: Production — Terrain deployed to Vercel
- Week 6: Teaching framework assembled

---

## Day 3 Key Insights (Log-to-Lesson)

**Intent:** Build a demoable four-screen prototype
of Terrain in one session

**Architecture:** Four screens as a journey —
Landing (feel it) → Explore (understand it) →
Worker Story (believe it) → Your Path (act on it)

**Friction:**
- Screen 2 — Claude added decorative shapes inside
  placeholder cards unprompted. Removed in round 2.
- Screen 4 — First output card felt static and closed.
  "That's it? Really?" — right reaction. Fix tomorrow.
- Text input field on Screen 4 was invisible.
  Always specify visual accessibility of form elements.

**Artifact:** terrain/ folder with four HTML files.
Complete demoable prototype.

**Key Insight:**
Your notebook sketch is your brief.
Draw it before you prompt it.
The loop converges fastest when design intent
exists before the session opens.

---

### Day 4 — Week 2, Day 1 (Thursday 2026-05-29)

**Theme:** Token system committed. CLAUDE.md created. 
Terrain migrated to standalone project.

---

## Token System — Final Committed Values

```css
--canvas-bg: #121314
--card-bg: #241E14
--card-border: rgba(245,240,235,0.15)
--color-text-body: rgba(245,240,235,0.88)
--color-text-muted: rgba(245,240,235,0.75)
--accent: #0047FF  /* Electric Cobalt — one accent, used intentionally */
--input-border-default: rgba(245,240,235,0.45)
--input-border-focus: #0047FF
--caret-color: #0047FF
```

**Typography rules:**
- Minimum text size: 13px — no exceptions
- Minimum text opacity: 0.75 — no exceptions
- Placeholder opacity: 0.45–0.55 — UX signal not body text
- Label: 0.85rem, letter-spacing: 0.08em
- Buttons: fit text content, never fill container

**Colour system rationale:**
- Canvas (#121314) vs card (#241E14) — warm earth brown
  card against near-black canvas. Warmth without softness.
- Single accent (#0047FF) used everywhere intentionally.
  Orange (#FF6B00) removed — felt like error/warning state
  not a design accent.
- Warm off-white text rgba(245,240,235) — not pure white,
  not cold grey. Belongs to the same warm world.

---

## CLAUDE.md Created

terrain/CLAUDE.md — design memory file for the project.
Contains: colour tokens, typography rules, button spec,
card spec, design principles, screen architecture, voice.

Every future Claude Code session touching terrain/ files
reads this first. Rules encoded once, applied everywhere.

**This is the Week 2 curriculum lesson made real.**
CLAUDE.md = design memory. Define rules once.
Agent applies them consistently without repetition.

---

## Prompt Pattern Library — Day 4 Entries

### Pattern 1: Audit before change
Instead of "make small text more readable" (too vague),
use: "Audit every text element below 14px or opacity
below 0.7. List each one, then increase to minimum
13px and 0.75 opacity. Show before and after values."

Why it works: Forces Claude Code to find everything
before changing anything. The report keeps it accountable.

### Pattern 2: Override previous decisions explicitly
When Claude Code ignores a change due to context drift,
add: "Override all previous decisions. Search entire
file for [value] and replace every instance. Confirm
how many instances were replaced."

Why it works: "Confirm count" forces a real search,
not a partial one.

### Pattern 3: Prototype in HTML first
Build design decisions in plain HTML with inline CSS.
No frameworks, no build tools. Fastest path from
idea to visible output. Graduate to Next.js only
when design decisions are committed.

Why it works: Committing to a framework before tokens
are settled means rebuilding CSS architecture twice.
HTML first means you build once with confidence.

### Pattern 4: Accessibility vs UX signal tension
Placeholder text needs to be readable (accessible)
but visually distinct from filled text (UX signal).
0.45–0.55 opacity is the right range for placeholders.
0.75+ for all other text.

Why it matters: Sometimes accessibility and UX pull
in opposite directions. Know which one takes priority
in each specific context.

### Pattern 5: Metaphoric description > hex codes
"Like early morning light breaking through" produced
a working gradient in one prompt. Design language
gets further faster than technical specification.
Claude was trained on human language — designers
who think in metaphor have a structural advantage
in the prompting loop.

---

## Architectural Decision — Terrain as Standalone Project

**Decision:** Move terrain/ from portfolio-2026 subfolder
to its own standalone Next.js project.

**Rationale:**
- HTML prototype files served their purpose — fastest
  path from idea to visible design (CC4D Ch 3)
- Now design decisions are committed, Terrain graduates
  to a real project with proper architecture
- Affects: deployment, version control, CLAUDE.md scope,
  future MCP connections, eventual backend
- New location: ~/Documents/Cowork Playground/terrain

**Stack:** Next.js · React · TypeScript · Tailwind CSS ·
Framer Motion (mirror portfolio-2026 stack)

**Prototype files:** moved to /prototype subfolder
within the new project.

**Curriculum insight:**
Prototype in HTML first. Graduate to a framework
when design decisions are committed. This is the
right sequence — not the lazy sequence.

---

## Sara's Prompting Insights — Week 2

**Metaphoric communication advantage:**
Designers who think in metaphor and feeling have a
structural advantage in the prompting loop that
nobody in the developer-first Claude Code world
is talking about yet. "Like early morning light
breaking through" = one prompt, working result.
This is a LinkedIn post, a coaching module,
and a consulting differentiator.

**Sketch first, then prompt:**
Screen 2 worked almost perfectly in round 1 because
the notebook sketch was done first. The sketch was
the brief. When design intent is fully formed before
the session opens, the loop collapses. When it isn't,
you iterate more. Teach this sequence.

**The agent waits for conviction:**
"Claude didn't want to cross the boundaries and was
waiting for me to inject more confidence and shape it."
The agent has capability but no conviction.
The designer has conviction but needed capability.
The loop works because the human brings the courage
to name what they want.

---

### Day 4 continued — First Real Next.js Page

**Build:** app/page.tsx — Screen 1 landing page
**Status:** Live at localhost:3001
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4

**Key decisions in the real build vs prototype:**
- Server Component — no "use client" needed
- Hover/active shadows via Tailwind arbitrary utilities
  not inline styles (inline styles can't handle :hover)
- clamp() sizing preserved from prototype
- Grain texture as inline SVG data URI — no external asset
- Link href="/explore" — ready for Screen 2 route

**Milestone:** Prototype → real product. HTML file became
a Next.js page with proper routing, typography, and
production-ready component architecture.

**Port note:** portfolio-2026 holds :3000, Terrain on :3001.
Kill PID on 3000 when working only on Terrain.

---

## Process Book — Entry Log

The Terrain Design Process Book documents every curriculum
insight as a four-part entry: Concept, Decision, Friction, Teaching.

Current entries: 01–12 (see terrain_process_book.pdf)

### Session Hook — end of every session

At the end of every Claude Code session on Terrain, before closing:

"Generate a curriculum entry summary for this session:
- What concept from CC4D or TAD was applied?
- What was the specific build decision made?
- What broke or surprised you?
- What would you tell a future student?
- What is the one-sentence insight?

Add it to the process book queue."

This ensures no insight is lost between sessions.

---

### Session 5 — Navigation + Production Deployment
**Date:** 2026-05-30 (Friday/Saturday)
**Theme:** Full pipeline — design system → prototype → Next.js → git → Vercel

---

## Curriculum Entry 05 — Progressive Commitment to Deploy

**Concept applied:** CC4D Ch 9 — The full pipeline. Progressive commitment —
you don't deploy until every decision upstream is locked. Tokens committed.
Screens built. Navigation wired. Then deploy. The sequence matters.

**Build decisions:**
1. Navigation as design decision, not technical afterthought.
   - /explore cards link to /worker/blake
   - Hover prompt: "Read a worker story →" on desktop
   - /worker/blake footer: "← Back to Exploration" (not a dead end)
   - /path CTA: opens r/electricians in new tab
   - "← Start over" returns to /
   - Full journey: / → /explore → /worker/blake → /path

2. Git identity fix required before Vercel would accept commit.
   The default machine hostname was rejected as a commit email address.
   Fix: git config user.email, amend commit --reset-author, force push.

**What broke (deployment friction log):**
1. Vercel scope confusion — CLI deployed to team scope with no permissions.
   Fix: delete .vercel/ folder to clear cached project link, reselect scope.
   The stale cache was invisible — no error pointed to it.

2. Commit email block — git auto-configures email from machine hostname
   when not set globally. Vercel validated and blocked. Most tutorials
   skip this step entirely.

3. No SSH key existed — GitHub HTTPS auth failed silently. Required:
   generate key → add to GitHub settings → add GitHub to known_hosts.
   Three steps that beginners don't know are one problem.

4. Vercel CLI ate a typed command as a project name. User typed
   "vercel --prod" thinking previous command hadn't run. CLI accepted
   "terrainvercel --prod" as project name. No undo — delete .vercel/
   and start again.

**Teaching note:**
Set git identity before the first commit — on day one of any project:
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
Skip it and commits get tagged with a machine hostname. Some services
reject deployment because of it. The error message won't tell you why.

Read every CLI prompt before typing. Vercel CLI is conversational —
it records your answer immediately. There is no undo.

**Key insight:**
"Deployment is not a technical step at the end — it is a diagnostic
that reveals every assumption you made about identity, permissions,
and sequence that you never had to state out loud before."

---

## Terrain — Live URLs

**Production:** https://terrain-psi.vercel.app
**GitHub:** Private repo — terrain

---

## Process Book — Entry 13 Queue

Entry 13: Progressive Commitment to Deploy
Source: CC4D Ch 9 + Session 5
Concept: Deploy only when every upstream decision is locked.
Decision: Navigation architecture + Vercel deployment.
Friction: Four deployment blockers — git identity, SSH keys,
          scope cache, CLI prompt eaten as project name.
Teaching: Set git identity on day one. Read every CLI prompt.
          Delete .vercel/ and start again when something goes wrong.
Insight: Deployment reveals every assumption you never stated out loud.

---

## Curriculum Progress — Updated 2026-05-31

### Completed (formally coached + applied)
- CC4D Ch 1 — design-code gap ✓
- CC4D Ch 3 — first prototype loop ✓
- CC4D Ch 4 — prompting patterns ✓ (coached + applied through Terrain)
- CC4D Ch 5 — CLAUDE.md ✓
- CC4D Ch 9 — production deployment ✓ (lived through Terrain deploy)
- TAD Ch 1 — agentic paradigm ✓
- TAD Ch 3 — teaching agents / skill files ✓

### Applied but not formally coached
- CC4D Ch 2 — install and setup (did it, teaching not extracted)

### Not touched yet — priority order for teaching curriculum
Priority 1 — directly unblocks Terrain + coaching framework:
- CC4D Ch 6 — design systems as TypeScript tokens
- CC4D Ch 8 — MCP integrations, Figma, Chrome extension
- TAD Ch 8 — design systems tokens strategic view
- TAD Ch 10 — MCP strategic

Priority 2 — content pipeline + automation:
- CC4D Ch 7 — automation, hooks, batch operations
- TAD Ch 11 — multi-agent teams (worker story pipeline)

Priority 3 — tool landscape + teaching context:
- CC4D Ch 10 — AI tool spectrum comparison
- TAD Ch 2 — agent toolkit comparison
- TAD Ch 4 — design-as-code
- TAD Ch 5–7 — new tools (Paper, Pencil, Open Design)
- TAD Ch 9 — motion and video (YouTube workflow)
- TAD Ch 12 — production UI
- TAD Ch 13–14 — case studies and future

### Teaching curriculum goal
Every chapter produces:
1. One coached session (concept + Terrain application)
2. One process book entry (concept + decision + friction + teaching)
3. One reusable teaching artifact (prompt template, checklist, framework)

By end of curriculum: 20+ entries, fully printable process book,
complete prompt pattern library, Terrain deployed and documented.

---

### Session 6 — CC4D Ch 7 + Ch 8 + Chrome Extension + Screenshot-Driven Iteration
**Date:** 2026-05-31 (Sunday)

---

## Curriculum Entry 06 — Automation, MCP, and Closing the Visual Loop

**Concept applied:** CC4D Ch 7 (Automation) + CC4D Ch 8 (MCP Integrations)

---

### MCP Tool Map — When to Use What

**Figma MCP — when you need it:**
- Client or collaborator hands you a Figma file to turn into code
- Team where design decisions live in Figma before they hit code
- Hired illustrator delivers work in Figma — pull directly into build
- For solo work designing in code (like Terrain) — NOT critical
  Your CLAUDE.md is your design spec. Token system is source of truth.
  You don't need Figma in the middle.

**Chrome Extension — need it now:**
- Gives Claude Code eyes on your browser
- "Open terrain-psi.vercel.app, take a screenshot, compare to this
  reference, list every visual difference" — Claude sees and fixes
  without you describing in words
- Closes the visual feedback loop completely
- Works on Pro plan (uses Haiku 4.5 model)
- Install: chromewebstore.google.com/detail/claude-in-chrome/

**`.mcp.json` file — worth setting up:**
- Makes Notion and Google Drive connections available in Claude Code
- Research notes in Notion → directly feed worker story generation
- Team-shareable: commit to repo, everyone gets same connections
- Scope: project level, checked into version control

---

### Chrome Extension Learnings

**What worked:**
- Claude Code described the live Terrain site accurately from screenshot
- Successfully ran Screenshot-Driven Iteration — compared live site
  against prototype, found two exact diffs, fixed both
- Local file access workaround: `python3 -m http.server 8765`
  serves prototype files so Claude Code can read them via localhost

**What didn't work / friction:**
- Claude Code cannot access local `file://` URLs directly
  (browser security restriction — cross-origin blocked)
- Cannot access private GitHub repos through browser
- File System Access API requires user gesture — not triggerable
  programmatically
- Solution: always run a local HTTP server when comparing
  prototype files

**The two diffs found on Terrain Screen 1:**
- Heading font-size ceiling: 7rem (live) → 5.5rem (prototype)
- Section padding-top: clamp(5rem,10vw,9rem) → clamp(2rem,6vw,5rem)
- Both fixed via sed commands, committed, deployed

---

### Automation — Key Concepts (CC4D Ch 7)

**Five automation levels:**
1. Hooks — fire on file edits (reactive, immediate)
2. /loop — recurring prompts in open session
3. Routines — scheduled cloud tasks (runs when laptop closed)
4. claude -p — non-interactive batch operations
5. CI/GitHub Actions — triggered by repo events

**Most valuable hooks for Terrain:**
- PostToolUse hook: validate tokens after every edit
- Protect-tokens hook: block direct edits to token files
- Completion notification: desktop alert when long batch finishes
- QA prompt hook: naming convention check on Stop event

**Batch operations for Terrain content pipeline:**
- `claude -p` with `--bare` flag for reproducible runs
- Fan-out pattern: generate multiple worker stories in parallel
- Warning: test on 2-3 files first — bad prompt × 200 files = bad day

**Key principle:**
Automate verification, not judgment.
Hooks catch mechanical violations. Your eye is the quality gate.

---

### Screenshot-Driven Iteration — Pattern Documented

Step 1: Start local server: `python3 -m http.server 8765`
Step 2: Tell Claude Code to access both URLs
Step 3: "Compare X against Y. List every visual difference."
Step 4: "Fix each difference."
Step 5: Commit and deploy.

This is the loop that closes itself. No manual description needed.
Claude sees both versions and diagnoses exact CSS values.

---

### Process Book Entry 14 Queue

**Entry 14: Closing the Visual Loop**
Source: CC4D Ch 8 + Chrome Extension session
Concept: Screenshot-Driven Iteration — Claude sees, compares, fixes.
Decision: Chrome extension installed, prototype server, two diffs found.
Friction: file:// blocked, private repos blocked, local server workaround.
Teaching: Always run `python3 -m http.server` before visual comparisons.
Insight: "The feedback loop closes when the agent can see what you see."

---

### Next Steps — Priority Order

**Immediate (this week):**
1. Set up `.mcp.json` in Terrain for Notion connection
   — research notes feed directly into worker story generation
2. Build second worker story — different trade, different name
   — makes Terrain feel real for investor/client demos
3. Token enforcement — move tokens from CLAUDE.md to TypeScript
   files (CC4D Ch 6 application session)

**Short term (Week 3):**
4. Set up protect-tokens hook in .claude/settings.json
5. Build Screen 2 Next.js pages properly using Explore-Plan-Build
   pattern from CC4D Ch 4
6. Add six-question prompting checklist to Terrain CLAUDE.md

**Medium term (Week 4-5):**
7. Multi-agent worker story pipeline (TAD Ch 11)
   — generate multiple stories in parallel
8. Connect Notion MCP for research layer
9. Motion and video (TAD Ch 9) — YouTube AI avatar workflow

**Teaching curriculum artifacts still to produce:**
- Token enforcement tutorial (CC4D Ch 6)
- Three-hook recipe card (CC4D Ch 7)
- MCP connection guide with .mcp.json template (CC4D Ch 8)
- Screenshot-Driven Iteration workflow card
- Second worker story as teaching case study

---

### Terrain Deployment Status

**Live URL:** https://terrain-psi.vercel.app
**GitHub:** Private repo — terrain
**Stack:** Next.js 16.2.6 · React 19 · TypeScript · Tailwind 4 · Framer Motion
**Screens live:** / · /explore · /worker/blake · /path
**Last deploy:** Screen 1 padding + heading size fixed to match prototype

---

## Notion Workspace — Connected via MCP

**URL:** https://www.notion.so/Terrain-37260c229fa680dcaec5cbc0691a1f1e
**Connected via:** .mcp.json in terrain project root
**Status:** Live and populated

**Second Brain workspace:** https://app.notion.com/p/37c97548b0608167b95fd3f3d5673de4
Top-level page "Sara Javan — Second Brain" — operating system for the whole
practice. Contains: Active Projects, Curriculum (Progress Tracker + Prompt
Pattern Library), Terrain Process Book (16 entries with navigation index),
Content Engine (Content Calendar, Essay Drafts, LinkedIn Posts), Clients &
Network, Ideas & Parked.

**Structure:**
- Research / Market Validation
- Research / Trade Data by Pattern
- Research / Worker Stories — Raw Notes
- Product / Design Decisions Log
- Curriculum / Process Book Entries

**Usage:** Any Claude Code session in terrain/ can read
and write to this workspace directly. Worker story
generation pulls from Worker Stories — Raw Notes.
Content updates pull from Trade Data by Pattern.

**Setup note:** First attempt created duplicates due to
context drift. Fixed by creating clean workspace and
populating one page at a time with confirmation between.
Lesson: structure first, content second. Never populate
in the same pass as creation.

---

### Session 7 — CC4D Ch 6 Token Enforcement
**Date:** 2026-06-01 (Monday)

---

## Curriculum Entry 07 — Design System Enforcement

**Concept applied:** CC4D Ch 6 — Design Systems at Scale

**The audit findings:**
- 33 hardcoded values found across 11 files
- Category A (use existing variable): 1 instance
- Category B (needs new token): 5 new tokens created
- Category C (intentional, leave): dot states, card gradients, scrim

**Five new tokens added to globals.css:**
- --bg-gradient — appeared 10 times across 8 files
- --nav-bg — appeared 7 times across worker pages
- --gradient-cobalt — horizontal cobalt gradient
- --gradient-cobalt-vertical — vertical cobalt gradient
- --shadow-accent — button glow rgba value

**Enforcement hook installed:**
- .claude/hooks/check-hardcoded-values.sh
- PreToolUse hook in .claude/settings.json
- Blocks any Edit or Write containing 6-digit hex values
- Error: "Blocked: Hardcoded hex colour detected.
  Use a CSS variable from globals.css"

**The key insight:**
"Change --bg-gradient in globals.css and all 10
screens update at once." That's what a real design
system feels like. Before: change = 10 files.
After: change = 1 line.

**Advisory vs enforced:**
- CLAUDE.md rules = advisory (Claude follows unless drift)
- Hooks = enforced (cannot be bypassed)
- The hook is the auto-layout constraint of code

---

### Process Book Entry 10 — Token Enforcement (now complete)

**Source:** CC4D Ch 6
**Concept:** Design tokens move from advisory to enforced.
**Decision:** Audit found 33 hardcoded values. 5 new tokens
created. Hook blocks future violations at write time.
**Friction:** Not yet encountered — audit was clean and fast.
The fan-out pattern (audit all files in one prompt) worked
first time. Categorising as A/B/C before fixing was the
key — it prevented over-engineering.
**Teaching:** Run the audit before adding enforcement.
You need to know the scope before you set the rules.
A hook that blocks legitimate values is worse than
no hook at all.
**Insight:** "The design system is enforced when changing
one value changes everything that depends on it."

---

### Session 8 — Image Layer, Compression, Mobile Debug
**Date:** 2026-06-01 (Monday afternoon)

---

## Curriculum Entry 08 — Production Assets and Mobile Performance

**Concept applied:** CC4D Ch 9 — Production pipeline + asset optimisation

**What was built:**
- Six trade environment images added to Screen 2 cards
- Ken Burns CSS animation (20s slow pan/zoom)
- Image compression script using sharp — 87% reduction
  14.9MB → 1.86MB across six images
- CSS background-image approach (more reliable than
  Next.js Image with fill on Android)

**Friction log:**
1. Next.js Image with fill didn't render on Android —
   replaced with CSS backgroundImage inline style
2. construction.jpg was 5.3MB — quality-only compression
   couldn't get it under 400KB, needed resize step too
   (max 1400px wide before quality binary search)
3. Samsung browser cached old version — hard clear needed
4. overflow-x-hidden on parent killed peek effect —
   removed to restore adjacent card visibility

**Key decisions:**
- Images served from public/trades/ as static assets
- Compressed to max 400KB each, max 1400px wide
- Progressive JPEG, quality 80
- Ken Burns: scale(1) → scale(1.08), 20s ease-in-out
  infinite alternate with slight position shift

**Teaching note:**
Always compress images before deploying. 14.9MB on mobile
means images don't load — not slow, just absent. Target
under 500KB per image for mobile backgrounds. Use sharp
with both quality AND resize constraints — quality alone
can't shrink high-resolution photos enough.

**Unsplash sources (free, commercial use, no attribution):**
- outdoor.jpg — power transmission towers
- building-systems.jpg — HVAC rooftop units
- industrial.jpg — factory machinery floor
- healthcare.jpg — hospital corridor/equipment
- welding.jpg — welder silhouetted against arc
- construction.jpg — scaffolding at sunrise

---

## Curriculum Progress — Updated 2026-06-01

### Completed
- CC4D Ch 1 — design-code gap ✓
- CC4D Ch 2 — install and setup (applied, teaching extracted) ✓
- CC4D Ch 3 — first prototype loop ✓
- CC4D Ch 4 — prompting patterns ✓
- CC4D Ch 5 — CLAUDE.md ✓
- CC4D Ch 6 — token enforcement ✓
- CC4D Ch 8 — MCP integrations (Chrome extension, .mcp.json) ✓
- CC4D Ch 9 — production deployment + assets ✓
- TAD Ch 1 — agentic paradigm ✓
- TAD Ch 3 — teaching agents / skill files ✓

### Not yet covered
- CC4D Ch 7 — automation hooks (partially covered)
- CC4D Ch 10 — AI tool spectrum
- TAD Ch 2 — agent toolkit comparison
- TAD Ch 4 — design-as-code
- TAD Ch 5–7 — new tools
- TAD Ch 8 — design systems tokens strategic
- TAD Ch 9 — motion and video
- TAD Ch 10 — MCP strategic
- TAD Ch 11 — multi-agent teams (NEXT)
- TAD Ch 12 — production UI
- TAD Ch 13–14 — case studies and future

### Next session priority
TAD Ch 11 — Multi-agent teams
Unlocks: worker story content pipeline for Australian
market. Ten stories in one session instead of ten.

---

## Terrain — Current State 2026-06-01

**Live:** https://terrain-psi.vercel.app
**Screens:** 4 screens, fully connected, deployed
**Worker stories:** 7 (Blake + 6 batch generated)
**Images:** 6 trade cards with Ken Burns animation
**Design system:** Enforced via hooks + globals.css
**Notion:** Connected via .mcp.json
**Research:** Fully populated in Notion workspace

**Known issues to fix (parked):**
- Screen 2 desktop card height proportions
- Carousel position not preserved on back navigation
  (architecture in place, needs testing)
- Video layer for cards (RunwayML not available,
  revisit when budget allows)

**Teaching artifacts produced:**
- Process book (12 entries + appendix, A5 printable)
- Prompt pattern library (7 patterns documented)
- Token enforcement tutorial
- Screenshot-Driven Iteration workflow
- Deployment friction log (4 blockers documented)

**Teaching artifacts still to produce:**
- Three-hook recipe card (CC4D Ch 7)
- MCP connection guide with .mcp.json template
- Multi-agent content pipeline guide (TAD Ch 11)
- Australian market research brief

---

### Session 9 — TAD Ch 11 Multi-Agent Teams
**Date:** 2026-06-01

---

## Curriculum Entry 09 — Multi-Agent Pipeline for Australian Content

**Concept applied:** TAD Ch 11 — Multi-Agent Design Teams

**Key teaching points:**
- Start single-agent. Escalate to multi-agent only when
  task clearly exceeds single-agent capacity.
- The complexity tax is real: orchestration costs,
  context duplication, merge failures, debugging difficulty.
- Three decomposition patterns:
  Spatial (canvas regions), Functional (skill types),
  Pipeline (sequential stages)
- The merge step is where multi-agent fails in practice.
  Human review is always required after merge.

**US batch vs Australian pipeline:**
- US: single-agent fan-out — one agent, six stories,
  same cultural context, no orchestration needed
- Australia: pipeline decomposition — three stages,
  cultural translation requires validation layer

**Australian pipeline architecture (three stages):**
1. Research Agent — reads Notion, produces AU trade briefs
   (TAFE, Certificate III/IV, AUD wages, AU terminology)
2. Generation Agent — writes five-section stories
   using Australian voice and terminology
3. Validation Agent — checks against CLAUDE.md voice rules,
   flags American idioms, institutional language,
   dignity violations

**You are the orchestrator.** No fourth agent needed.
You decompose, delegate via prompts, merge editorially.

**Blocked on:** Australian market research in Notion.
Need: TAFE pathways, Certificate III/IV structure,
Australian Apprenticeships framework, AUD wage data.

**When to run:** After Notion Australian research
is populated. Parked for later session.

---

## Parked Items — To Do Later

1. Australian market research → Notion
   - TAFE pathways per trade
   - Certificate III/IV credential structure
   - Australian Apprenticeships framework
   - AUD wages year 1 and year 5 per trade
   - Hidden costs specific to Australian entry

2. Run Australian multi-agent pipeline
   - Three sessions: Research → Generate → Validate
   - Six stories, one per life pattern
   - New routes: /worker/[au-name]

3. Video layer for Screen 2 cards
   - RunwayML when budget allows
   - Or: animated SVG illustrations (lighter weight)

4. Screen refinements
   - Desktop card height on explore page
   - Carousel position preservation on back nav

5. Teaching artifacts still to produce
   - Three-hook recipe card (CC4D Ch 7)
   - MCP connection guide with .mcp.json template
   - Multi-agent pipeline guide (this session)
   - Australian market research brief

---

## End of Day Summary — 2026-06-01 (Monday)

### What was accomplished today

**Terrain builds:**
- Six worker stories batch generated and deployed ✓
- Explore page cards linked to specific worker stories ✓
- Six trade card images added with Ken Burns animation ✓
- Images compressed 87% (14.9MB → 1.86MB) ✓
- Token enforcement — 33 replacements, hook installed ✓
- Notion workspace connected via .mcp.json ✓
- Notion populated with full research layer ✓
- Mobile header alignment fixed (centered) ✓
- Card gradient scrim strengthened ✓
- Peek effect restored on mobile ✓

**Curriculum chapters coached:**
- CC4D Ch 6 — token enforcement (applied to Terrain) ✓
- CC4D Ch 8 — MCP, Chrome extension, .mcp.json ✓
- TAD Ch 11 — multi-agent teams (coached) ✓

**Process book entries completed:**
- Entry 07 — Design system enforcement
- Entry 08 — Production assets and mobile performance
- Entry 09 — Multi-agent pipeline for Australian content

### Curriculum chapters completed to date
CC4D: Ch 1, 2, 3, 4, 5, 6, 8, 9 (8 of 10)
TAD: Ch 1, 3, 11 (3 of 14)
Remaining: CC4D Ch 7, 10 · TAD Ch 2, 4, 5-10, 12-14

### Tomorrow's priorities
1. CC4D Ch 7 — automation hooks (three-hook recipe)
2. CC4D Ch 10 — AI tool spectrum
3. TAD Ch 9 — motion and video (YouTube workflow)
4. Begin Australian market research in Notion

---

## Curriculum Positioning — Updated 2026-06-01

### The Market Context

The UX industry is splitting into three groups:

**Group 1 — Production Designers**
Focus: screens, components, UI generation
Status: under the most pressure from AI
Keywords: wireframes, Figma, UI, mockups, pixel pushing

**Group 2 — AI Operators**
Focus: prompting, workflows, automation, AI-assisted creation
Status: produce more output but still execution-focused
Keywords: prompt engineering, AI tools, ChatGPT, Claude,
Figma AI, automation, vibe coding

**Group 3 — Systems Thinkers**
Focus: behaviour, decision-making, trust, research,
strategy, AI-human interaction
Status: becoming more valuable as AI grows
Keywords: AI experience design, human-AI systems,
trust architecture, probabilistic UX, graceful failure,
design ROI, systems thinking, ethical AI

Sara's curriculum moves designers from Group 2 to Group 3.

---

### The Core Positioning Statement

"I help designers stay valuable in an AI-first world —
moving from AI operators to systems thinkers."

Or more specifically:
"I help product teams design human-AI decision systems
that users can trust."

---

### The Six Pain Points (from research) + Curriculum Response

| Pain Point | Designer's Question | Curriculum Answer |
|-----------|--------------------|--------------------|
| Obsolescence anxiety | "What am I actually being paid for?" | The agent waits for conviction. Your judgment is the product. |
| Workflow confusion | "Where exactly does AI fit?" | Week-by-week framework: configure, encode, enforce, connect, ship, teach |
| AI UX debt | "AI made something that looks finished but creates more work" | CLAUDE.md + token enforcement + hooks = prevention not correction |
| Skill uncertainty | "Should I learn code, AI, or strategy?" | All three through one project. Terrain is the proof. |
| Designing AI products | "How do users trust AI?" | patient-memory-ai case study — confidence scores, hedged language, acknowledgment workflows |
| Proving value | "Why spend two weeks researching?" | The process book — every decision documented as evidence of thinking |

---

### The Group 2 → Group 3 Curriculum Arc — "Designers Who Ship"

Each week produces a capability claim, not just a build:

**Week 1 — Configure**
Capability: You can configure an agent, not just prompt one.
Keywords: CLAUDE.md, agentic design, design memory,
Claude Code, design-code gap
Evidence: CLAUDE.md + services page deployed

**Week 2 — Encode**
Capability: You can encode design conviction into a system.
Keywords: design tokens, token system, prompting for design,
metaphoric prompting, specificity spectrum
Evidence: Terrain token system + CLAUDE.md + prompt library

**Week 3 — Enforce**
Capability: You can enforce design decisions at architecture level.
Keywords: token enforcement, design system integrity,
hooks, PreToolUse, production-grade design systems,
design system disconnect
Evidence: 33 replacements + hook installed + zero drift

**Week 4 — Connect**
Capability: You can connect design systems to live data sources.
Keywords: MCP integrations, Figma MCP, Notion MCP,
.mcp.json, Screenshot-Driven Iteration, Chrome extension
Evidence: Notion research layer + Chrome extension workflow

**Week 5 — Ship**
Capability: You can ship production-quality work from a design brief.
Keywords: production deployment, Vercel, Next.js,
full pipeline, progressive commitment
Evidence: terrain-psi.vercel.app live

**Week 6 — Teach**
Capability: You can teach this to others.
Keywords: teaching curriculum, reusable frameworks,
process documentation, coaching, Group 3 designer
Evidence: Process book + prompt pattern library + skill file

---

### High-Value Keywords for SEO + Content

**AI anxiety / identity:**
AI replacing UX designers, designer identity crisis,
staying valuable, future-proof UX skills, UX career 2026

**Tooling + workflow:**
Claude Code for designers, agentic design workflow,
AI-native design, design systems AI, prompt engineering
for designers, AI UX workflow

**Systems thinking:**
Human-AI interaction design, AI experience design,
trust architecture, probabilistic UX, graceful failure states,
AI product design, automation complacency

**Pain points:**
AI UX debt, vibe coding, design system disconnect,
component drift, stakeholder illiteracy, brittle prototyping,
the last 20% problem

**Career positioning:**
From pixel pushing to strategy, design ROI,
AI operators vs systems thinkers, Group 3 designer,
UX strategist AI, design leadership AI

---

### Essay Topics — Dignity by Design Pipeline (updated)

1. "The agent waits for conviction" — what remains
   irreplaceable when AI enters the design process.
   Keywords: designer identity, AI anxiety, craft,
   human judgment, Group 3

2. "The designer's dignity in an AI-first world" —
   the identity question nobody is answering honestly.
   Keywords: obsolescence, pixel pushing, systems thinking,
   staying valuable, design career

3. "What happens to human confidence when you work
   alongside an agent that waits for you to lead" —
   the emotional experience of the human-agent loop.
   Keywords: human-AI collaboration, agentic design,
   confidence, conviction

4. "Terrain is not a marketplace. It is a mirror" —
   the difference between transaction platforms and
   dignity platforms.
   Keywords: worker dignity, platform design, Terrain,
   trades, ethical product design

5. "AI UX debt and how to prevent it" —
   the practical case for configured agents over
   vibe coding.
   Keywords: AI UX debt, vibe coding, CLAUDE.md,
   design system integrity, production-grade AI design

6. "Designing for graceful failure" —
   what the patient-memory-ai project taught about
   trust, uncertainty, and human agency in AI systems.
   Keywords: AI failure states, trust architecture,
   probabilistic UX, human-AI decision systems,
   clinical AI, safety UX

---

### LinkedIn Post Series — From the Research

Six posts mapped to the six pain points:

1. "Everyone can generate screens now. Here's what
   they still can't generate." (obsolescence anxiety)

2. "You don't have an AI problem. You have a
   workflow problem." (workflow confusion)

3. "AI UX debt is real. Here's how to prevent it
   before it starts." (AI UX debt)

4. "Stop asking which skill to learn next.
   Start asking which group you're in." (skill confusion)

5. "Designing an AI product that users actually trust
   takes one thing AI can't provide." (AI product design)

6. "The executive thinks the AI prototype is the product.
   Here's what to say." (proving value)

Each post: Universal human truth first → narrow to where
it costs most → named concept in italics → research data →
closing line that lingers. Sara's LinkedIn format.

---

## Master To-Do List — Updated 2026-06-01

### CURRICULUM VEHICLE (6 sessions remaining)

**Session 10**
- [ ] CC4D Ch 7 — automation hooks (three-hook recipe card)
- [ ] CC4D Ch 10 — AI tool spectrum comparison
- [ ] Artifact: Hook recipe card (teaching asset)

**Session 11**
- [ ] TAD Ch 2 — agent toolkit comparison
- [ ] TAD Ch 4 — design-as-code concepts
- [ ] Artifact: Tool comparison guide for clients

**Session 12**
- [ ] TAD Ch 9 — motion and video
- [ ] Apply to YouTube AI avatar workflow
- [ ] Artifact: YouTube workflow documentation

**Session 13**
- [ ] TAD Ch 13-14 — case studies and future
- [ ] Extract MENA/Australia relevant cases
- [ ] Artifact: Evidence base for consulting proposals

**Session 14**
- [ ] Populate Australian research in Notion (PREREQUISITE)
  - TAFE pathways per trade
  - Certificate III/IV structure
  - Australian Apprenticeships framework
  - AUD wages year 1 and year 5
  - Hidden costs specific to Australian entry
- [ ] Run three-stage Australian multi-agent pipeline
  - Stage 1: Research agent → AU trade briefs
  - Stage 2: Generation agent → six AU stories
  - Stage 3: Validation agent → voice check
- [ ] Deploy six Australian worker stories

**Session 15**
- [ ] Complete process book — all 14 entries written properly
- [ ] Assemble teaching framework from all artifacts
- [ ] Final Terrain curriculum vehicle — complete

---

### CONTENT WRITING (parallel track — start now)

**LinkedIn Posts (6 ready to write)**
- [ ] "Everyone can generate screens. Here's what they can't generate." (obsolescence)
- [ ] "You don't have an AI problem. You have a workflow problem." (workflow)
- [ ] "AI UX debt is real. Here's how to prevent it." (AI UX debt)
- [ ] "Stop asking which skill to learn. Start asking which group you're in." (skills)
- [ ] "Designing an AI product users actually trust." (AI product design)
- [ ] "The executive thinks the prototype is the product." (proving value)

**Dignity by Design Essays (6 queued)**
- [ ] "The agent waits for conviction" — identity, irreplaceability
- [ ] "The designer's dignity in an AI-first world" — obsolescence answered
- [ ] "What happens to human confidence working alongside an agent"
- [ ] "Terrain is not a marketplace. It is a mirror."
- [ ] "AI UX debt and how to prevent it"
- [ ] "Designing for graceful failure" — patient-memory-ai case study

**Curriculum Content**
- [ ] Write Week 1-2 curriculum overview for sarajavan.com
- [ ] Write Group 2 → Group 3 positioning page
- [x] Write coaching offer page — sarajavan.com/services updated with "Designers Who Ship" engagement · commit 2 files, 375 insertions
- [ ] Case study: Terrain as agentic design process

---

### TERRAIN — REAL PLATFORM (starts after curriculum)

- [ ] Define MVP scope — safety platform, not career platform
- [ ] Research: accident pattern data sources
- [ ] Research: existing safety communication tools and gaps
- [ ] Define primary user: worker or safety manager?
- [ ] Product brief: risk communication layer
- [ ] Technical architecture: real-time, mobile-first
- [ ] Funding/partnership strategy

---

### FIXES PARKED (curriculum vehicle)

- [ ] Desktop card height on explore page
- [ ] Carousel position preservation on back navigation
- [ ] Video layer for cards (post-curriculum)
- [ ] Screen refinements across all four screens

---

### IMMEDIATE NEXT SESSION

Curriculum is complete. All 15 sessions done. All artifacts committed.

Start with: Content engine — move to dedicated chat
Then: LinkedIn post #1 — obsolescence anxiety
Then: Substack Notes — one per week cadence
Then: Direct outreach — 5 Dubai/MENA target contacts

---

### Session 10 — CC4D Ch 7 + Ch 10
**Date:** 2026-06-02

**Completed:**
- [x] CC4D Ch 7 — automation hooks coached
- [x] CC4D Ch 10 — AI tool spectrum coached
- [x] Artifact: teaching/three-hooks-recipe.md
- [x] Artifact: teaching/tool-comparison-guide.md
- [x] Australian Notion research populated

**Key teaching points — Ch 7:**
- Routines run on Anthropic cloud, even laptop closed
- /loop for lightweight session-scoped scheduling
- Three essential hooks every project needs from day one:
  1. Auto-format on save (PostToolUse, Prettier)
  2. Protect design tokens (PreToolUse, exit code 2)
  3. QA check on completion (PostToolUse, tsc --noEmit)

**Key teaching points — Ch 10:**
- v0/Bolt = exploration, prototype-quality, fast
- Claude Code = production, design-system-aware, ships
- Copilot/Cursor = inline IDE suggestions, not agentic
- Two-tool combo: explore in v0, ship in Claude Code
- The question that cuts through everything:
  "Who maintains this output?"
- Design system integration becoming mandatory across
  all tools. CLAUDE.md compounds in value over time.

**Process Book Entry 15 — COMPLETE ✓**
Source: CC4D Ch 7 + Ch 10
Title: Automation layers
Subtitle: Hooks, routines, and the difference between asking and enforcing
Quote: "CLAUDE.md is a request. A hook is a rule. Know which one you need before you write it."
Added to terrain_process_book.pdf — commit b23bf2b

**To-do list update:**
- [x] Session 10 — CC4D Ch 7 + Ch 10
- [ ] Session 11 — TAD Ch 2 + TAD Ch 4
- [ ] Session 12 — TAD Ch 9 motion and video
- [ ] Session 13 — TAD Ch 13-14 cases and future
- [ ] Session 14 — Australian pipeline
- [ ] Session 15 — Teaching framework assembly
- [ ] LinkedIn post #1 — obsolescence anxiety

---

## Substack Engagement Strategy — Parked

**Goal:** Stay visible to designers on Substack by engaging
with other designers' posts. Comments and responses should
not give away the curriculum or coaching methodology —
only hint at the approach, create curiosity, position Sara
as a practitioner with a distinct point of view.

**The principle:** Give enough to be interesting.
Keep enough to be worth hiring.

**Engagement voice:**
- Practitioner, not teacher
- One sharp observation, not a listicle
- Referencing real work (Terrain, client sessions)
  without explaining the framework behind it
- Questions that reframe rather than answers that resolve

**Example comment approach:**
If a designer writes about AI anxiety:
→ Don't explain the Group 2 → Group 3 framework
→ Do say: "The designers I work with aren't asking
   which tool to use anymore. They're asking what
   their judgment is worth when the tool can execute.
   That's a different and more interesting question."

**Substack posts to engage with:**
- Any post about AI replacing designers
- Any post about prompt engineering for designers
- Any post about design system integrity with AI
- Any post about vibe coding vs production design
- Any post about designer career uncertainty

**Content to produce:**
- [ ] Draft 5 comment templates for common designer topics
- [ ] Identify 10 design Substacks worth following regularly
- [ ] Write one Substack Note per week (not full essay)
  — short, sharp, one insight, links to nothing
- [ ] Respond to at least 3 designer posts per week

**Timing:** Start after Session 15 (curriculum complete)
or earlier if a post directly relates to current work.

---

### Session 12 — TAD Ch 9 Motion and Video
**Date:** 2026-06-02

**Completed:**
- [x] TAD Ch 9 — motion and video coached
- [x] Hyperframes installed and working
- [x] Blake intro video rendered — blake-intro.mp4
- [x] FFmpeg installed via evermeet.cx binary

**Hyperframes setup:**
- Package: hyperframes (no @heygen/ prefix)
- Version: 0.6.69
- Install: npx hyperframes@latest [project-name] init
- Dev server: npm run dev → localhost:3002
- Render: npx hyperframes@0.6.69 render --output file.mp4
- FFmpeg location: ~/bin/ffmpeg
- PATH: export PATH="$HOME/bin:$PATH"

**Remotion vs Hyperframes decision:**
- Remotion: React-based, full ecosystem, Lambda rendering
  Good for: complex compositions, React team, scale
  Cost: $25-100/month above 3 users
- Hyperframes: HTML + GSAP, agent-native, HeyGen-built
  Good for: Sara's YouTube workflow, quick compositions,
  no React dependency, integrates with HeyGen avatar
  Decision: Hyperframes for YouTube channel

**YouTube workflow pipeline:**
1. Brief Claude Code with topic + Terrain tokens
2. Describe scenes in plain language
3. Claude Code generates HTML composition
4. Preview in Hyperframes Studio (localhost:3002)
5. Fix scene visibility kills and font warnings
6. npx hyperframes render --output video.mp4
7. Add HeyGen AI avatar voiceover
8. Combine in editing tool

**Known warnings to fix in production:**
- scene_layer_missing_visibility_kill: add
  tl.set("#sceneN", { visibility: "hidden" })
  after each scene's exit tweens
- google_fonts_import: use local @font-face
  declarations instead of Google Fonts CDN

**Blake intro composition result:**
- 15 seconds, 393KB, 30fps, 1920x1080
- Three scenes: TERRAIN // 03 → Blake intro → impact statement
- Terrain tokens applied: #121314 bg, #0047FF cobalt,
  rgba(245,240,235,0.88) text

**Process Book Entry 16 — COMPLETE ✓**
Source: TAD Ch 9
Title: Programmatic video
Subtitle: When the design system extends into motion
Quote: "The same token system that governs the UI governs the frame. One design language. Two outputs."
Added to terrain_process_book.pdf — commit b23bf2b

**To-do list update:**
- [x] Session 10 — CC4D Ch 7 + Ch 10
- [x] Session 11 — TAD Ch 2 + Ch 4
- [x] Session 12 — TAD Ch 9 motion and video
- [ ] Session 13 — TAD Ch 13-14 cases and future
- [ ] Session 14 — Australian pipeline
- [ ] Session 15 — Teaching framework assembly

---

## Process Book Entry 17 Queue

**Entry 17: The Evidence Layer Needs Its Own Debugging**
Source: Accessibility sweep — Session 16 (2026-06-11)

The friction while it's fresh: the axe-core Playwright adapter refused to run
with a page from browser.newPage() — it requires browser.newContext() then
context.newPage(). The a11y workflow ran second-hand from a repo and still
needed one local fix before the evidence layer worked. The books don't prepare
you for this category: the tool that audits the product has its own bugs.

Scan results (terrain-psi.vercel.app, 4 routes):
- /worker/blake: zero violations untouched. The text-only screen with the
  strictest typography rules is the one that passed clean. The design system
  did its job where it had jurisdiction.
- /path: critical — textareas had no accessible labels, no visible focus.
  Fixed: aria-label per textarea matching the visible question, plus
  :focus-visible outline using the existing --input-border-focus token.
- /explore: serious — carousel dots below 24px touch target. Fixed: padded
  hit areas (24x24 transparent buttons, dot as inner span). Visual weight
  unchanged. 18-year-olds on phones are the literal audience.
- /: color-contrast on the cobalt CTA — RESOLVED, and not how anyone
  expected. The CTA was already the filled button spec and passes at rest
  (4.59:1). Axe had sampled the page mid-fade-up animation and measured the
  button at partial opacity — foreground #7a8cbe on #082f94, colours that
  exist nowhere in the codebase. The fix went in the scan script, not the
  design: wait for entrance animations to settle before measuring.

Second tooling fix in one session. First the adapter needed
browser.newContext(), then the scanner needed an animation-settle wait.
The evidence layer needed two debugging passes before its evidence was true.

Final state: 0 axe-core violations across the four routes scanned. Automated scan only; no manual or screen-reader review yet.

Teaching: automated evidence is still code. Budget a debugging pass for the
audit tooling itself before trusting what it tells you — and before redesigning
anything it flags. The third violation was never in the design. It was in the
measurement. The design system, held to consistently, was already right.
