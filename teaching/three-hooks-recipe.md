# Three Hooks Every Design Project Needs From Day One

> A copy-paste recipe. Drop these into `.claude/settings.json` before you write your first line of code.
> Hooks are instructions Claude runs automatically — before, during, or after tool calls. You write them once. They work every session without being asked.

---

## What hooks are

When you use Claude Code, every action is a tool call:
- Writing a file → `Write` tool
- Editing a file → `Edit` tool
- Running a command → `Bash` tool

Hooks intercept those calls. `PreToolUse` runs before. `PostToolUse` runs after.
If a PreToolUse hook exits with code `2`, it blocks the action entirely and shows you the error.

Hooks live in `.claude/settings.json` in your project root.
Create that file if it doesn't exist.

---

## Hook 1 — Auto-format on save

**What it does:** After every file edit, runs Prettier automatically on the changed file.
You never think about formatting again. Every file is clean when Claude finishes.

**Why day one:** If you add this later, you get inconsistent formatting in git history.
Start with it and every commit is clean from the first one.

**Create the script at `.claude/hooks/format-on-save.sh`:**

```bash
#!/bin/bash
# Receives the tool call as JSON on stdin
INPUT=$(cat)

# Extract the file path from the Edit or Write tool input
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only run on supported file types
if [ -n "$FILE" ] && echo "$FILE" | grep -qE '\.(ts|tsx|js|jsx|css|json|md)$'; then
  npx prettier --write "$FILE" 2>/dev/null || true
fi

exit 0
```

Make it executable: `chmod +x .claude/hooks/format-on-save.sh`

**Add to `.claude/settings.json`:**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/format-on-save.sh"
          }
        ]
      }
    ]
  }
}
```

**Requires Prettier in your project:** `npm install --save-dev prettier`
Add a `.prettierrc` at your project root to set your preferences (tab width, single quotes, etc.).

---

## Hook 2 — Protect design tokens

**What it does:** Before any file is written or edited, scans the new content for hardcoded hex colour values.
If it finds one (e.g. `#0047FF` written directly in a component), it blocks the edit and tells Claude to use a CSS variable instead.

**Why day one:** Token drift is silent. A hardcoded colour looks exactly like a variable colour in the rendered output. You only discover it when you need to change the brand colour and half the components don't update. This hook makes token drift impossible to introduce accidentally.

**This hook already exists on the Terrain project** at `.claude/hooks/check-hardcoded-values.sh`. Copy it as your template:

```bash
#!/bin/bash
# Receives the full tool call as JSON on stdin
INPUT=$(cat)

# Extract the new content — works for both Edit (newString) and Write (content)
CONTENT=$(echo "$INPUT" | jq -r '.tool_input.newString // .tool_input.content // empty')

# Block if a 6-digit hex colour is found
if echo "$CONTENT" | grep -qE '#[0-9a-fA-F]{6}([^0-9a-fA-F]|$)'; then
  echo "Blocked: Hardcoded hex colour detected. Use a CSS variable from globals.css" >&2
  exit 2   # Exit code 2 = block the tool call and surface the error
fi

exit 0    # Exit code 0 = allow the tool call to proceed
```

Make it executable: `chmod +x .claude/hooks/check-hardcoded-values.sh`

**Add to `.claude/settings.json`:**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/check-hardcoded-values.sh"
          }
        ]
      }
    ]
  }
}
```

**Adapting for your project:** Swap the hex pattern for whatever your project's design contract prohibits. You could check for hardcoded pixel values, non-system fonts, or `!important` declarations. Same pattern, different grep.

---

## Hook 3 — QA check on completion

**What it does:** After every `Edit` or `Write` call on a TypeScript or TSX file, runs a fast TypeScript type check on that file. If types are broken, Claude sees the error immediately and can fix it before moving on — rather than accumulating errors that only surface at build time.

**Why day one:** Without this, Claude can make ten edits and introduce a type error on edit three. The other seven edits make sense individually but the type error silently propagates. With this hook, errors surface immediately, at the moment they're introduced.

**Create the script at `.claude/hooks/qa-check.sh`:**

```bash
#!/bin/bash
INPUT=$(cat)

FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only run on TypeScript files
if [ -n "$FILE" ] && echo "$FILE" | grep -qE '\.(ts|tsx)$'; then
  # Run TypeScript compiler in no-emit mode (check only, no output files)
  npx tsc --noEmit --skipLibCheck 2>&1 | tail -10
  # Exit 0 regardless — this is informational, not blocking
  # Change to exit 2 if you want to block on type errors
fi

exit 0
```

Make it executable: `chmod +x .claude/hooks/qa-check.sh`

**Add to `.claude/settings.json`:**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/qa-check.sh"
          }
        ]
      }
    ]
  }
}
```

**Note:** `tsc --noEmit` on a large project can be slow (2–4 seconds per call). If it slows down your session, change the matcher to `"Write"` only — so it runs after new files are created but not after every small edit.

---

## The complete settings.json — all three hooks combined

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/check-hardcoded-values.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/format-on-save.sh"
          },
          {
            "type": "command",
            "command": "bash .claude/hooks/qa-check.sh"
          }
        ]
      }
    ]
  }
}
```

**Execution order:** PreToolUse hooks run first (in order). If any exits with code 2, the tool call is blocked and PostToolUse hooks never run. PostToolUse hooks run after the tool succeeds, in the order listed.

---

## Checklist for a new project

- [ ] Create `.claude/` folder at project root
- [ ] Create `.claude/hooks/` folder
- [ ] Create `.claude/settings.json` with your hooks
- [ ] Create each `.sh` script and `chmod +x` each one
- [ ] Install Prettier: `npm install --save-dev prettier`
- [ ] Add `.prettierrc` with your formatting preferences
- [ ] Commit all of the above before the first feature commit

The hooks travel with the repo. Everyone who clones it gets the same guardrails.

---

*Built from the Terrain project — June 2026*
