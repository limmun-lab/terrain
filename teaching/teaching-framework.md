# The Agentic Designer
## A 6-Week Teaching Framework for Designers Ready to Move from AI Operator to Systems Thinker

**Sara Javan · sarajavan.com · 2026**
*Built from the Terrain curriculum. Every claim in this framework is backed by a real build decision.*

---

## What This Framework Is

This is a coaching module for designers who already use AI tools but want to move
from execution to strategy. It is not a prompt engineering course. It is not a tooling
survey. It is a structured engagement where the designer builds one real project while
learning to configure, direct, and compound an AI agent across six weeks.

The vehicle is a real product. The teaching emerges from the friction.

**Duration:** 6 weeks
**Format:** Weekly sessions + independent build work
**Output:** A deployed product, a process book, a prompt library, and a capability claim
**Positioning:** Group 2 → Group 3 transition

---

## The Market Context: Three Groups

The UX industry is splitting. Understanding which group a designer is in — and which
group they want to be in — is the first conversation of Week 1.

**Group 1 — Production Designers**
Focus: screens, components, UI generation
Status: under the most pressure from AI
Signal words: wireframes, Figma, UI, mockups, pixel pushing

**Group 2 — AI Operators**
Focus: prompting, workflows, automation, AI-assisted creation
Status: produce more output but still execution-focused
Signal words: ChatGPT, Claude, Figma AI, automation, vibe coding

**Group 3 — Systems Thinkers**
Focus: behaviour, decision-making, trust, research, strategy, AI-human interaction
Status: becoming more valuable as AI grows
Signal words: AI experience design, trust architecture, probabilistic UX,
graceful failure, design ROI

**This curriculum moves designers from Group 2 to Group 3.**
Not by teaching them to stop using tools. By teaching them to use tools as evidence
of thinking.

---

## The Six Capability Claims

Each week produces a capability claim — a statement the designer can make and prove
with evidence. This is the curriculum's differentiator: every claim is backed by an artifact.

| Week | Theme | Capability Claim | Evidence |
|------|-------|-----------------|----------|
| 1 | Configure | You can configure an agent, not just prompt one | CLAUDE.md + deployed screen |
| 2 | Encode | You can encode design conviction into a system | Token system + prompt library |
| 3 | Enforce | You can enforce design decisions at architecture level | Hook + 0 token violations |
| 4 | Connect | You can connect design systems to live data sources | Notion MCP + real data layer |
| 5 | Ship | You can ship production-quality work from a design brief | Live URL |
| 6 | Teach | You can teach this to others | Process book + coaching module |

---

## Week 1 — Configure

**Theme:** The design-code gap and how agents change who can cross it

**Books:** CC4D Ch 1, 2, 3 · TAD Ch 1

**Build:**
- Install Claude Code and orient it to the project
- Build the first prototype screen in plain HTML
- Write a minimal CLAUDE.md with three rules: colour palette, typography,
  one design principle

**Key sessions:**
- Session 1: The audit — read the existing codebase, build a mental model
  before touching anything
- Session 2: The first prototype loop — Describe → Generate → Review →
  Describe changes → Repeat
- Session 3: CLAUDE.md as design memory — encode decisions before they drift

**Artifacts produced:**
- Working prototype screen (HTML)
- CLAUDE.md v1 — three rules, earnable from the start

**The insight to surface:**
"The bottleneck moves from production to decision-making. Your design judgment —
your risk radar, your ability to describe visual intent — becomes the scarce resource,
not the ability to write CSS."

**Teaching moment — the most important of the six weeks:**
The agent has capability but no conviction. It executes what you describe but it will
not decide what matters. The speed of the loop is a direct function of the clarity of
the designer's conviction. Tell this to every student before their first session.

**Common student mistake:**
Trying to get the agent to decide. "Make it look good" is a real prompt. It produces
real output. But the output is the agent's aesthetic, not the designer's. The only way
to get your design into the output is to know what your design is before the session
opens.

---

## Week 2 — Encode

**Theme:** Prompting mastery and design system foundations

**Books:** CC4D Ch 4, 5 · TAD Ch 3

**Build:**
- Develop the metaphoric prompting vocabulary
- Build the token system: name the colours, the typography rules,
  the interaction principles
- Deepen CLAUDE.md with the token system and design principles

**Key sessions:**
- Session 4: Metaphoric prompting — establish feeling before specifying values
- Session 5: Context drift — the two-shot resolution pattern
- Session 6: Sketch as brief — the notebook sketch is the prompt in its
  most precise form

**Artifacts produced:**
- Prompt pattern library — 8 patterns with real examples
- CLAUDE.md v2 — full token system encoded

**The insight to surface:**
"Designers who think in metaphor have a structural advantage in the prompting loop
that nobody in the developer-first Claude Code world is talking about. Your years of
describing design intent to developers and clients is exactly the skill that makes
the loop fast."

**Pattern to teach this week:**
The Metaphoric Brief (Pattern 01) and the Context Reset (Pattern 05) from the prompt
library. These two patterns together handle the most common friction points in Week 2.

---

## Week 3 — Enforce

**Theme:** Design systems at scale — moving from advisory to enforced

**Books:** CC4D Ch 6, 7

**Build:**
- Token audit: scan the entire project for hardcoded values (Fan-Out Audit pattern)
- Move tokens from CSS custom properties to TypeScript token files
- Install enforcement hook: PreToolUse, blocks direct hex edits
- Three-hook recipe: auto-format, protect tokens, QA on completion

**Key sessions:**
- Session 7: Token enforcement — the audit-before-fix sequence
- Session 8: Production assets — image compression, mobile performance
- Session 10: Automation hooks — three essential hooks every project needs

**Artifacts produced:**
- Token enforcement hook (.claude/hooks/)
- Three-hook recipe card
- 0 hardcoded values remaining

**The insight to surface:**
"There are two kinds of design system rules: the ones you ask people to follow,
and the ones the system enforces. CLAUDE.md rules are advisory — Claude follows
them until context drift, a long session, or an ambiguous prompt causes it to default.
Token files imported into the build system cannot be defaulted."

**Teaching the distinction:**
CLAUDE.md = design memory (advisory)
TypeScript token files = design architecture (enforced)
Hooks = build constraints (cannot be bypassed)

---

## Week 4 — Connect

**Theme:** MCP integrations and real data layers

**Books:** CC4D Ch 8 · TAD Ch 10

**Build:**
- Install Chrome extension (Claude in Chrome)
- Configure .mcp.json in project root
- Connect Notion workspace as research layer
- Build data connections: research notes → content generation

**Key sessions:**
- Session 9: Multi-agent teams (TAD Ch 11) — when single-agent isn't enough
- Session 11: TAD Ch 2, 4 — agent toolkit comparison, design-as-code

**Artifacts produced:**
- .mcp.json template (reusable for clients)
- MCP connection guide
- Multi-agent pipeline documentation

**The insight to surface:**
"You can connect design systems to live data sources. That's not a developer skill.
It's a configuration skill. The .mcp.json file is 10 lines. The research layer it
unlocks is the entire project."

---

## Week 5 — Ship

**Theme:** Production deployment and the full pipeline

**Books:** CC4D Ch 9 · TAD Ch 12

**Build:**
- Migrate from HTML prototype to Next.js production
- Compress and optimise assets
- Deploy to Vercel
- Run the Screenshot Comparison pattern against prototype

**Key sessions:**
- Session 8 (continued): Production assets — image compression, mobile debug
- Session 12: TAD Ch 9 — motion and video, Hyperframes for YouTube workflow

**Artifacts produced:**
- Live deployed URL
- Deployment friction log (4 blockers documented)
- YouTube video workflow (Hyperframes pipeline)

**The insight to surface:**
"Prototype in HTML. Graduate to a framework when decisions are committed.
Build once. The framework is not the product. The design decisions are the product.
The framework is how they ship."

**Route architecture lesson:**
HTML files link to each other by relative path. Next.js routes by folder structure.
Always sketch the route map before migrating. This is a 10-minute decision that
prevents a half-day rework.

---

## Week 6 — Teach

**Theme:** Teaching framework assembly and the coaching module

**Books:** TAD Ch 13, 14

**Build:**
- Complete all process book entries
- Assemble the prompt pattern library
- Document the multi-agent content pipeline
- Write the teaching framework (this document)

**Key sessions:**
- Session 13: TAD Ch 13-14 — case studies and future
- Session 14: Australian content pipeline — three-stage multi-agent workflow
- Session 15: Teaching framework assembly

**Artifacts produced:**
- Process book (15+ entries, A5 printable PDF)
- Prompt pattern library (8 patterns, production-tested)
- Australian worker stories (6 stories, validated)
- Teaching framework (this document)

**The insight to surface:**
"The curriculum is complete when the designer can teach it. Teaching is not a
separate skill. It is design conviction applied to a different audience. If you can
describe why you made each decision in Terrain, you can coach another designer
through the same process."

---

## The Full Artifact Stack

Everything produced across six weeks:

### Product Artifacts
- terrain-psi.vercel.app — live deployed product
- 4 screens: Landing, Horizon Reveal, Worker Story, Your Path
- 13+ worker stories (7 US + 6 Australian)
- Design system: globals.css + TypeScript token files
- CLAUDE.md — full project configuration

### Teaching Artifacts
- Process book — 15+ entries, A5 printable PDF
- Prompt pattern library — 8 patterns with real Terrain examples
- Three-hook recipe card
- Tool comparison guide (v0 vs Claude Code vs Copilot)
- MCP connection guide with .mcp.json template
- Multi-agent pipeline guide (Australian content pipeline)
- Deployment friction log
- This teaching framework

### Content Artifacts
- Australian worker stories — 6 stories, Stage 3 validated
- Process Book Entry queue (15, 16)

---

## The Six Pain Points — How the Curriculum Answers Them

| Pain Point | The Question | The Curriculum Answer |
|-----------|-------------|----------------------|
| Obsolescence anxiety | "What am I actually being paid for?" | The agent waits for conviction. Your judgment is the product. |
| Workflow confusion | "Where does AI fit exactly?" | Configure → Encode → Enforce → Connect → Ship → Teach |
| AI UX debt | "AI made something that looks finished but creates more work" | CLAUDE.md + token enforcement + hooks = prevention not correction |
| Skill uncertainty | "Should I learn code, AI, or strategy?" | All three through one project. Terrain is the proof. |
| Designing AI products | "How do users trust AI?" | TAD case studies — confidence scores, hedged language, acknowledgment workflows |
| Proving value | "Why spend two weeks researching?" | The process book — every decision documented as evidence of thinking |

---

## How to Deliver This Curriculum

**Week 1 session structure:**
1. The three groups conversation (15 min) — where is the designer now,
   where do they want to be
2. Install and audit (45 min) — Claude Code running, codebase read
3. First prototype loop (45 min) — one screen, three rounds
4. CLAUDE.md v1 written together (15 min)

**Recurring session pattern:**
1. Review what was built since last session (10 min)
2. Surface the concept from the book (15 min) — teach through the build,
   not the chapter
3. Apply it live (60 min) — build, friction, resolve, document
4. Process book entry written together (15 min) — the decision, the friction,
   the teaching

**The rule for every session:**
Something must be deployed by end of session. Not designed. Not prototyped.
Deployed. The URL is the accountability mechanism.

**When the student is stuck:**
Pattern 05 (Context Reset) and Pattern 02 (Audit Before Change) resolve 80% of
sticking points. Teach these in Week 1 even though they belong in Week 2-3.
They'll need them early.

---

## The Capability Claim the Designer Exits With

At the end of six weeks, the designer can say:

*"I configured and directed an AI agent to build a production-deployed product from
a design brief. I encoded the design system as enforced architecture, connected live
data sources via MCP, ran a multi-agent content pipeline, and documented every
decision as a teaching artifact. I can do this with any project. I can teach this
to any team."*

That claim is supported by:
- A live URL
- A process book
- A prompt library
- Six Australian worker stories through a three-stage pipeline
- This document

The agent waits for conviction.
The curriculum teaches designers to bring it.

---

*Sara Javan · sarajavan.com · sarajavan.substack.com*
*Dubai, UAE · 2026*
