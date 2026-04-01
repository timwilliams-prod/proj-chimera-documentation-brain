# New Skill Creation Guide

You are helping someone create a **new skill** (slash command) for the Lotus Documentation Brain. Your job is to guide them through the process while protecting the architectural integrity of the system.

> **This is a meta-skill**: it doesn't do project work itself — it helps people extend the brain safely.
> Creating a bad skill can fragment authority, duplicate data, or create maintenance burdens.
> This guide ensures new skills follow established patterns and principles.

---

## Architecture Principles (Non-Negotiable)

Before creating any skill, internalize these. They are the result of hard-won decisions and must be respected.

### 1. Authority Consolidation

**Each piece of information has ONE authoritative home. Never create a second one.**

| Information | Authoritative File | Do NOT duplicate into |
|-------------|-------------------|----------------------|
| Milestone goals & must-have features | `planning/product_targets.md` | Pod plans, feature docs, new files |
| Team staffing, roles, pod assignments | `planning/capacity.md` | Separate people/ownership files |
| Validation hypotheses, BHQs, SHQs | `planning/ValidationPlan.md` | Feature docs (reference by ID only) |
| Feature scope, cost, approach | `planning/features/*.md` | Pod plans (summary only) |
| Pod priorities & validation alignment | `planning/pods/*_Plan.md` | Roadmap (consolidated, not duplicated) |
| Cross-project constraints | `planning/GlobalRules.md` | Pod plans or feature docs |

**Test**: If the new skill needs ownership/people data, it reads `planning/capacity.md`. If it needs the feature list, it reads `planning/product_targets.md`. It does NOT create a new file to track the same information.

### 2. planning/ Is Authoritative, generated/ Is Disposable

- `planning/` files are **human-authored sources of truth**. Skills may update them, but cautiously and with user approval.
- `generated/` files are **skill-generated views** that can be blown away and regenerated. No human should manually edit them.
- A new skill that produces output should decide: is this authoritative (planning/) or a generated view (generated/)?
- If a skill creates a new file, strongly prefer extending an existing file or placing output in `generated/`.

### 3. Reference, Don't Duplicate

- SHQs are referenced by ID (`SHQ3-7`), not copied in full.
- Features are referenced by name and link, not re-described.
- If a skill needs to display information from another file, it reads and summarizes — it doesn't create a copy.

### 4. Skills Are Safe to Run Repeatedly

- Skills should be **idempotent** or **additive** — running them twice shouldn't break anything.
- Skills should never auto-overwrite human-authored content without explicit user approval.
- Skills should never delete files or data without confirmation.

### 5. The Triangle: Targets vs Plans vs Resources

Many skills compare these three:
- `planning/product_targets.md` = WHAT we need
- `generated/roadmap.md` (consolidated from `planning/pods/*_Plan.md`) = WHAT we're building
- `planning/capacity.md` = WHAT we have

New skills should plug into this triangle, not create parallel tracking.

### 6. Template Compliance

- Feature docs follow the template in `planning/features/governors.md`.
- Pod plans follow the pattern in existing `planning/pods/*_Plan.md` files.
- New skills should follow the structure of existing skills (see Skill Template below).

---

## Your Task

### 1. Understand the Request

Ask the user:
- **What problem does this skill solve?** (What's painful or missing today?)
- **Who will run it?** (Tim, designers, pod leads, anyone?)
- **What's the expected output?** (Updated file, new file, report, interactive session?)

### 2. Check for Overlap

Before creating anything, check if an existing skill already covers this:

| Existing Skill | What It Does |
|---------------|-------------|
| `/roadmap-update` | Updates pod plans + regenerates `generated/roadmap.md` |
| `/roadmap-options` | Generates N roadmap scenarios for comparison |
| `/risk-evaluation` | Targets vs plans vs resources gap analysis |
| `/validation-review` | Sprint/milestone evaluation of Validation Roadmap |
| `/spec-sync` | Syncs product_targets.md + Notion -> feature specs, populates designer queue |
| `/designer-quiz` | Interactive Q&A for designers, filtered by ownership from capacity.md |
| `/queue-review` | Validates designer answers and applies to spec files |

Ask:
- Could this be an extension of an existing skill instead of a new one?
- Is this skill doing something an existing skill already does but differently?

If there's overlap, suggest extending the existing skill rather than creating a new one. Consolidation over proliferation.

### 3. Run the Architecture Checklist

For the proposed skill, evaluate each item. **Flag any violations before proceeding.**

#### Data Authority
- [ ] Does the skill need ownership/people data? -> It must read `planning/capacity.md`, not create a new file.
- [ ] Does the skill need the feature list? -> It must read `planning/product_targets.md`.
- [ ] Does the skill need validation info? -> It must reference `planning/ValidationPlan.md` by SHQ/BHQ ID.
- [ ] Does the skill create a new "source of truth" file? -> **RED FLAG**. Can this data live in an existing file instead?

#### File Impact
- [ ] Does the skill write to `planning/` files? -> It must ask for user confirmation before changes.
- [ ] Does the skill create new files? -> Prefer `generated/` for outputs. If `planning/`, justify why it's authoritative.
- [ ] Does the skill delete or overwrite? -> Must confirm with user. Should be avoidable in most cases.
- [ ] If the skill creates a new folder, does it need to? -> Prefer using existing folders.

#### Safety
- [ ] Is the skill idempotent or additive? -> Running it twice should be safe.
- [ ] Does the skill have a clear "read first, then act" pattern? -> It should understand current state before changing anything.
- [ ] Does the skill handle missing data gracefully? -> (e.g., Notion MCP not connected, feature doc doesn't exist yet)

#### Maintenance Burden
- [ ] Does this skill create files that someone needs to manually maintain? -> Minimize. Prefer generated/disposable outputs.
- [ ] Does this skill require updating when other files change? -> Keep coupling low.
- [ ] Could this skill's job be done by a simple prompt instead of a formalized skill? -> Only formalize if it'll be run repeatedly.

### 4. Present the Assessment

Show the user:

```
## New Skill Assessment

### Proposed: /[skill-name]
**Problem**: [what it solves]
**Runner**: [who uses it]
**Output**: [what it produces]

### Architecture Check
- Authority: [PASS / FLAG: creates new source of truth for X — should use existing Y instead]
- File Impact: [PASS / FLAG: writes to planning/ without confirmation]
- Safety: [PASS / FLAG: not idempotent — running twice would...]
- Maintenance: [PASS / FLAG: creates files that need manual upkeep]
- Overlap: [NONE / PARTIAL: overlaps with /existing-skill — consider extending instead]

### Recommendation
[PROCEED / PROCEED WITH CHANGES / RETHINK APPROACH]

### Suggested Changes (if any)
- [e.g., "Use capacity.md for ownership instead of a new people file"]
- [e.g., "Output to generated/ instead of planning/"]
```

If there are flags, work with the user to resolve them before writing the skill. Don't just note the flag and proceed — actively help redesign the approach.

### 5. Design the Skill

Once the assessment passes, design the skill with the user:

#### a. Define the Workflow
Map out the steps:
1. What does the skill read first? (Always start by reading current state)
2. What does it ask the user?
3. What does it produce or change?
4. What's the output/summary?

#### b. Define File Interactions
For each file the skill touches:

| File | Access | Why |
|------|--------|-----|
| `planning/capacity.md` | Read | Get designer ownership |
| `planning/features/*.md` | Read + Write | Update specs with new info |
| `generated/roadmap.md` | Read | Cross-reference timeline |

#### c. Define Guardrails
What should the skill explicitly NOT do? (Prevents scope creep and keeps skills focused)

### 6. Write the Skill

Create the skill file at `.claude/commands/[skill-name].md` following the template below.

### 7. Update Documentation

After creating the skill:
- Add it to the skill list in `README.md` under the Skills section
- Add it to `QUICK_START.md` if it's a skill most users should know about
- Note: Do NOT update MEMORY.md — that's managed by the system automatically

---

## Skill Template

All skills should follow this structure (adapted from existing skills):

```markdown
# [Skill Name] Skill

[One-sentence description of what the skill does.]

> **Note**: [How this skill relates to other skills. What it does NOT do.]

---

## Project Structure

[List only the files this skill reads or writes, with brief descriptions.
Group by: Authoritative Sources / Output / Context]

---

## Your Task

### 1. Read Current State
[What files to read first, in what order, and why]

### 2. [Gather Input / Analyze / etc.]
[Core workflow steps]

### 3. [Produce Output / Make Changes]
[What the skill creates or modifies]

### 4. Summary
[Output format for the user]

---

## Rules

[Skill-specific rules that prevent mistakes. Include:]
- What the skill must never auto-modify
- How to handle missing data
- Conflict resolution (what takes priority)

---

## Notes

[Tips, related skills, when to run this skill]
```

---

## Common Patterns to Reuse

### "Read-Assess-Act-Summarize"
Most skills follow this: read project state, assess against criteria, take action (with approval), summarize what changed. New skills should follow this unless there's a good reason not to.

### "Graceful Degradation"
If an external source isn't available (Notion MCP, a file doesn't exist yet), the skill should still do useful work with what's available, not fail entirely.

### "Questions Grouped by Owner"
When generating questions or action items, group by the person responsible (from capacity.md's Pod Leadership Summary), not by file or topic.

### "Flag, Don't Fix"
When a skill spots a problem outside its scope, it flags the issue and suggests which skill to run — it doesn't try to fix everything itself. Each skill has a focused job.

---

## Anti-Patterns to Avoid

### "The Shadow Database"
Creating a new tracking file that duplicates info from an existing authoritative file. Instead: read from the source.

### "The Everything Skill"
A skill that tries to do too much. If a skill has more than ~4 major steps, consider splitting it or leveraging existing skills.

### "The Orphan File"
Creating a file that no other skill reads and no human regularly checks. If nobody uses it, don't create it.

### "The Mandatory Manual Update"
Creating a file that requires someone to manually keep it in sync with other files. If it needs to stay in sync, it should be generated — or the data should live in the source file.

### "The Permission Bypass"
A skill that auto-modifies planning/ files without asking. Human-authored files require human approval for changes.
