# Continuing a Claude Project Across Chat Sessions

**Terrain · Teaching Artifact · Sara Javan · 2026**
*Learned from real friction — not from a book.*

---

## The Problem

Claude has no memory between separate chat conversations. When a session gets
too long and you have to start a new chat, the new Claude instance knows nothing
about your project, your repo, your decisions, or your curriculum progress.

This is not a bug. It is the architecture. Understanding it is the first step
to working around it cleanly.

---

## What Breaks Without a Handoff

- Claude gives generic advice instead of project-specific advice
- You re-explain context that took weeks to build
- Claude makes suggestions that contradict decisions already made
- The session opener prompt ("we just finished Session 13") lands in a blank
  context and Claude guesses at what that means

---

## The Two-Layer Recovery

When starting a fresh chat on an existing project, always provide two layers
of context:

### Layer 1 — The Skill File
Upload your project SKILL.md. This is the primary context layer — it contains
the full product vision, all design decisions, session logs, curriculum progress,
and to-do list. Claude reads it the same way CLAUDE.md is read at the start of
a Claude Code session.

If you don't have a skill file yet, this is the reason to create one.

### Layer 2 — The Repo Tree
Paste the output of this command:

```bash
find . -not -path '*/node_modules/*' -not -path '*/.git/*' \
  -not -path '*/.next/*' | sort
```

Run it from inside your project directory. The file tree tells Claude:
- Exactly which files exist
- Which routes are deployed
- Which teaching artifacts have been created
- Which directories are present vs missing

Together, the skill file and the file tree give Claude the same orientation
that CLAUDE.md and a codebase read give Claude Code at session start.

---

## The Orientation Sequence

When starting a fresh chat on an ongoing project:

1. Upload the SKILL.md
2. State where you are: "We just finished Session X — [what was done]"
3. State what's next: "Next priorities are: [list]"
4. Paste the repo tree when asked, or proactively

Claude will ask for the tree if it needs it. You can also paste it immediately
— it costs nothing and saves a round trip.

---

## Finding Your Projects

If you're not sure which directory you're in or where your projects live:

```bash
# Find all Claude-configured projects on your machine
cd ~/Documents && find . -maxdepth 3 -name "CLAUDE.md" 2>/dev/null
```

This lists every project with a CLAUDE.md. From there, navigate to the right
one and run the tree command.

---

## Why the File Tree Matters as Much as the Skill File

The skill file tells Claude what was planned and decided. The file tree tells
Claude what actually exists. These can diverge — a session might have deployed
files not yet logged in the skill file, or a to-do item might be marked complete
when the file isn't there yet.

The tree is ground truth. It resolves ambiguity instantly.

**Real example from Terrain:**
The skill file logged teaching/ directory as something to create. The file tree
showed it already existed with two files inside. Without the tree, Claude would
have suggested creating it. With the tree, Claude immediately knew the existing
state and what was missing.

---

## The Deeper Lesson

This is the same principle as Process Book Entry 01 — The Design-Code Gap.

The gap between what you think exists and what actually exists is always lossy.
For designs, it's the Figma-to-browser gap. For Claude sessions, it's the memory
gap. The fix in both cases is the same: make the actual state visible before
acting on assumptions.

The file tree is the screenshot comparison for your project state.

---

## Teaching Application

When coaching a designer through their first multi-session Claude Code project,
teach this in Session 1:

1. Create your SKILL.md before you need it — not after the first session breaks
2. Keep it updated after every session — it's your project memory
3. Know the two recovery commands by heart:

```bash
# Locate your projects
find . -maxdepth 3 -name "CLAUDE.md"

# Expose your repo state
find . -not -path '*/node_modules/*' -not -path '*/.git/*' \
  -not -path '*/.next/*' | sort
```

The designer who can reorient Claude in under two minutes is operating at a
different level than the one who re-explains their project from scratch every
session.

---

*Terrain curriculum · Process note extracted from live friction · 2026-06-02*
