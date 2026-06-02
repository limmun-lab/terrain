**When to use it**
Content generation for platforms where structure repeats.
Any time you need parallel outputs with consistent format.
When you have more than three instances to generate.

**Common mistake**
Generating without a structure template.
Without structure constraints, output quality degrades from instance 3 onward.
Define the exact structure before generating, not after.

---

## How These Patterns Combine

Most sessions use 2–3 patterns in sequence, not one in isolation.

**Token enforcement session:**
Fan-Out Audit → Override with Confirmation → Context Reset if drift appears

**New screen build:**
Metaphoric Brief → Emptiness Specification → Context Reset after round 3

**Production parity fix:**
Screenshot Comparison → Audit Before Change → Override with Confirmation

**Content generation:**
Batch Generation → Audit Before Change (voice check) → Override with Confirmation

---

## The Meta-Pattern

Every pattern in this library follows the same underlying logic:

1. **Scope the work before starting it.** Know what you're changing and why.
2. **Describe intent, not mechanics.** The agent handles mechanics.
3. **Verify with a count, not a "done."** Partial completion looks finished.
4. **Reset when sessions accumulate.** Fresh context plus strong CLAUDE.md
   beats long context every time.

The agent waits for conviction. These patterns are how you bring it.

---

*Built from the Terrain curriculum, 2026. All patterns tested on terrain-psi.vercel.app.*
*Sara Javan · sarajavan.com*
