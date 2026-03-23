# Queue Review Skill

You are reviewing designer answers from the **raw input queue**, validating them, and applying them to feature spec files.

> **Note**: This skill processes `planning/designer_queue/raw_input/` files, moves validated answers through `clean_input/`, and applies them to `planning/features/*.md`.
> Run this after designers have completed `/designer-quiz` sessions.

---

## Project Structure

- `planning/designer_queue/raw_input/` - Unprocessed designer answers (from `/designer-quiz`)
- `planning/designer_queue/clean_input/` - Validated answers ready to apply
- `planning/designer_queue/output/` - Applied changes log
- `planning/designer_queue/designerQueue.md` - Queue tracking (update statuses here)
- `planning/capacity.md` - Designer ownership (Pod Leadership Summary + Design section)
- `planning/features/*.md` - Feature specs (apply answers here)
- `planning/features/governors.md` - Template reference for spec structure

---

## Your Task

### 1. Check for Raw Input

Read all files in `planning/designer_queue/raw_input/`.

If no files exist:
- Tell the user "No raw input to review. Designers need to run `/designer-quiz` first."
- Exit

List what's available:

```
## Raw Input Queue

| File | Designer | Date | Answers | Deferred | Reassign |
|------|----------|------|---------|----------|----------|
| diana_2026-03-23.md | Diana Vasilescu | 2026-03-23 | 5 | 1 | 0 |
| leonard_2026-03-23.md | Leonard [Last Name] | 2026-03-23 | 3 | 0 | 1 |
```

Ask the user: **Review all, or select specific files?**

### 2. Validate Each Answer

For each answer in the raw input file:

#### a. Read Context
- Read the corresponding feature spec in `planning/features/[feature].md`
- Read the original question from `planning/designer_queue/designerQueue.md`
- Understand what section of the spec needs updating

#### b. Present to User

For each answer, show:

```
### Q-001: Governors — Governor slots per city

**Question**: How many governor slots per city at launch?
**Designer**: Diana Vasilescu
**Answer**: "Start with 1 slot for the capital city. Each conquered territory
adds 1 slot. Max 5 slots per city at launch, with potential to expand later."
**Confidence**: HIGH

**Spec Impact**: This would update:
- `planning/features/governors.md` → Scope → Core Mechanics (adds slot count detail)
- `planning/features/governors.md` → Open Questions (resolves question on line 150)

**Action**: [Apply / Edit / Skip / Reject]
```

#### c. User Decision
- **Apply**: Accept the answer as-is, apply to spec
- **Edit**: User wants to modify the answer before applying (let them edit)
- **Skip**: Not ready to apply yet, keep in raw_input
- **Reject**: Answer doesn't make sense or contradicts established decisions — keep question OPEN

### 3. Move to Clean Input

For approved answers (Apply or Edit), create a clean input record:

**File**: `planning/designer_queue/clean_input/[feature]_[date].md`

```markdown
# Clean Input: [Feature Name]

- **Source**: raw_input/[filename]
- **Reviewed**: [today's date]
- **Reviewer**: [user]

## Approved Changes

### Q-001: Governor slots per city
- **Section**: Scope > Core Mechanics
- **Change**: Add governor slot rules (1 for capital, +1 per territory, max 5)
- **Original Answer**: [full text]
- **Final Text**: [edited or original]
```

### 4. Apply to Spec Files

For each approved answer, update the corresponding feature spec:

#### Update Rules:
- **Resolving a [TBD]**: Replace the [TBD] marker with the answer, formatted to match the spec's style
- **Answering an Open Question**: Move the question from "Open Questions" to resolved (mark with `[x]` and add the answer)
- **Adding missing content**: Add to the appropriate section (Scope, Estimate, etc.)
- **Resolving conflicts**: Replace the conflicting content with the approved version, add a note in the change

#### Formatting:
- Match the existing spec's style and voice
- Don't add commentary like "per Diana's input" — the spec should read as a unified document
- If the answer is long/detailed, synthesize it into spec-appropriate format while preserving meaning
- Preserve all existing content that isn't being directly updated

#### Update the "Last Updated" date on the spec file.

### 5. Log to Output

After applying changes, create an output log:

**File**: `planning/designer_queue/output/applied_[date].md`

Append to existing daily file if one exists.

```markdown
# Applied Changes — [date]

## Session Summary
- **Reviewed by**: [user]
- **Raw input processed**: [list of files]
- **Answers applied**: [X]
- **Answers skipped**: [X]
- **Answers rejected**: [X]

---

## Changes Applied

### Q-001: Governors — Governor slots per city
- **Spec**: `planning/features/governors.md`
- **Section**: Scope > Core Mechanics
- **Change**: Added slot count rules (1 capital + 1 per territory, max 5)
- **Designer**: Diana Vasilescu
- **Date answered**: 2026-03-23
- **Date applied**: 2026-03-23
```

### 6. Update Queue Tracking

Update `planning/designer_queue/designerQueue.md`:

- Applied answers: change status from `ANSWERED` to `APPLIED`
- Skipped answers: keep as `ANSWERED` (still in raw_input)
- Rejected answers: change back to `OPEN` (question needs re-asking or rephrasing)
- Reassigned questions: move to the new designer's section

Move fully applied questions to the "Recently Applied" table at the bottom.

Update the Queue Status summary table with current counts.

### 7. Clean Up Raw Input

After all answers in a raw input file have been processed (applied, skipped, or rejected):
- If ALL answers were applied: move the raw input file to output/ (rename to `processed_[original_name]`)
- If SOME answers remain (skipped): keep the file in raw_input/ but add a note at the top marking which were processed

### 8. Handle Deferred & Reassigned

#### Deferred questions:
- Keep as `DEFERRED` in designerQueue.md
- Note the designer's reason and expected follow-up date
- These will show up again in the designer's next `/designer-quiz` session

#### Reassigned questions:
- Move the question to the suggested designer's section in designerQueue.md
- Change status to `OPEN` under the new designer
- If the suggested designer isn't in the Design section of `planning/capacity.md`, flag it for Tim

### 9. Summary

```
## Queue Review Complete

### Applied
- [X] answers applied to [Y] spec files
- Specs updated: governors.md, territory_map_vs.md

### Pending
- [X] answers skipped (still in raw_input)
- [X] answers rejected (questions reopened)

### Queue Status
| Designer | Open | Answered | Deferred | Applied |
|----------|------|----------|----------|---------|
| Diana | 2 | 0 | 1 | 5 |
| Leonard | 3 | 0 | 0 | 3 |

### Recommended Next Steps
1. [Actions based on what was applied/skipped]
2. Run `/spec-sync` to check if new gaps appeared
3. Run `/risk-evaluation` if spec changes affect estimates or scope
```

---

## Rules

### User Controls Everything
- Every answer requires explicit user approval before applying
- Never auto-apply answers, even if they look clean
- The user can edit any answer before it's applied

### Preserve Spec Integrity
- Don't restructure or reformat sections you're not updating
- Don't add new sections — only update within the existing template structure
- If an answer implies a new section is needed, flag it but don't create it

### Audit Trail
- Every change is traceable: raw_input → clean_input → output
- The output log captures what changed, who said it, and when
- Never delete raw_input files — move them to output when fully processed

### Conflict Resolution
- If a designer's answer contradicts another designer's prior answer, flag both and let the user decide
- If a designer's answer contradicts `planning/product_targets.md`, flag it — product_targets.md is the higher authority
- If an answer would change scope significantly, suggest the user also update the pod plan and re-run `/risk-evaluation`
