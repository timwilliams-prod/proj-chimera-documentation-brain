# Spec Sync Skill

You are synchronizing the project's **feature spec files** (`planning/features/*.md`) with the authoritative feature list in `planning/product_targets.md` and design documents in Notion.

> **Note**: This skill identifies which features need specs, pulls design detail from Notion (when MCP is connected), creates/updates spec files, and populates the designer queue with open questions.
> For roadmap updates, see the roadmap-update skill.
> For validation checks, see the validation-review skill.

---

## Project Structure

### Authoritative Sources
- `planning/product_targets.md` - **Canonical feature list** by milestone (what features must exist)
- **Notion database** (via MCP) - Design detail, descriptions, status, ownership from the design team's working docs

### Spec Files (output)
- `planning/features/*.md` - Feature specs following the template in `planning/features/governors.md`

### Designer Queue (gap tracking)
- `planning/designer_queue/designerQueue.md` - Open questions assigned to designers

### Context
- `planning/capacity.md` - **Designer ownership source**: "Pod Leadership Summary" table maps design leads to pods; "Design" section lists all designers by pod. Also used for discipline availability in feature docs.
- `planning/pods/*_Plan.md` - Pod plans (for validation alignment)
- `planning/ValidationRoadmap.md` - SHQ/BHQ references for feature validation goals

---

## Your Task

### 1. Read Current State

Read these files:
1. `planning/product_targets.md` - Get the canonical feature list across all milestones
2. All files in `planning/features/*.md` - See which specs already exist
3. `planning/capacity.md` - Know who owns what (Pod Leadership Summary + Design section)
4. `planning/designer_queue/designerQueue.md` - See existing open questions
5. `planning/pods/*_Plan.md` - Pod context (validation focus)
6. `planning/ValidationRoadmap.md` - For SHQ references when building spec validation sections

### 2. Build Feature Inventory

Parse `planning/product_targets.md` to extract all features across milestones:

For each feature, capture:
- Feature name
- Pod
- Milestone
- Why it's required (from the table)
- Whether it's must-have or nice-to-have

Build a comparison table:

| Feature | Pod | Milestone | Spec Exists? | Notion Doc? | Status |
|---------|-----|-----------|-------------|-------------|--------|
| Governors | Empire | M&Ms | Yes | [check] | OK / GAPS |
| Territory Map VS | Empire | M&Ms | No | [check] | NEEDS SPEC |

### 3. Query Notion (When MCP Connected)

If the Notion MCP server is available:

1. **Search the feature database** for each feature from the inventory
2. For each Notion page found, extract:
   - Title, status, description/summary
   - Design owner (if set)
   - Any structured properties (pod, milestone, priority)
   - Page content (scope, mechanics, open questions)
3. If a feature from `product_targets.md` has no matching Notion page, flag it

If the Notion MCP is NOT connected:
- Skip this step
- Note in the output that Notion was unavailable
- Still proceed with gap analysis based on local files only

### 4. Create/Update Feature Specs

For each feature that needs a spec (no file in `planning/features/`):

#### a. If Notion doc exists:
Create the spec file using content from Notion, mapped to the template structure:

```markdown
# Feature: [Name]

- **Last Updated**: [today's date]
- **Status**: [from Notion or default to NOT STARTED]
- **Pod**: [from product_targets.md]
- **Design Owner**: [from capacity.md Pod Leadership Summary or Notion]
- **ClickUp**: [link if available]
- **Notion**: [link to Notion page]

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| [SHQ from product_targets.md or pod plan] | [Question text from ValidationRoadmap.md] | [Status] |

**Parent BHQ**: [From pod plan or ValidationRoadmap.md]

**What [Feature] Must Prove**: [Synthesized from product_targets "Why It's Required" + Notion description]

### Success Criteria

- [From Notion if available, otherwise mark as [TBD - needs designer input]]

---

## Scope

[From Notion doc content. If unavailable, mark as [TBD - needs designer input]]

### In Scope

- [From Notion or TBD]

### Out of Scope

- [From Notion or TBD]

---

## Estimate & Approach

**Total Estimate**: [TBD - needs designer + engineering input]

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | [TBD] | [TBD] | |
| UX/UI Design | [TBD] | [TBD] | |
| Game Design | [TBD] | [TBD] | |
| Art | [TBD] | [TBD] | |

### Implementation Flow

[TBD - needs engineering input]

### Pre-Conditions

- [ ] [TBD - needs designer input]

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| [TBD] | | |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [TBD] | | | |

---

## Open Questions

- [ ] [Pulled from Notion if available]
- [ ] [Generated from TBD sections above]

---

## References

- Notion Design Doc: [link]
- ClickUp Epic: [link if available]
- Related: `planning/pods/[Pod]_Plan.md`, `planning/ValidationRoadmap.md`
```

#### b. If no Notion doc exists:
Create a **stub spec** with the same template, but all content sections marked `[TBD - needs designer input]`. Populate only:
- Feature name, pod, milestone (from product_targets.md)
- Validation goals (from ValidationRoadmap.md / pod plan if traceable)
- Design owner (from capacity.md — use the Design Lead for the feature's pod)

### 5. Update Existing Specs

For features that already have spec files, compare against Notion content:
- Flag any **conflicts** (Notion says one thing, spec says another) - do NOT auto-overwrite
- Flag **new content** in Notion not yet in the spec (new scope items, resolved questions)
- Flag **stale TBDs** in the spec that Notion now has answers for
- Present conflicts to the user for resolution before making changes

### 6. Populate Designer Queue

For every gap found, add a question to `planning/designer_queue/designerQueue.md`:

#### Question Sources:
- **Missing specs**: "Feature X has no spec file. Please provide scope, mechanics, and success criteria."
- **TBD sections in existing specs**: "Governors spec has [TBD] for UX/UI sprint estimate. What's the estimate?"
- **Open questions in specs**: Already listed in the Open Questions section
- **No Notion doc**: "Feature X is in product_targets.md but has no Notion design doc. Is design work started?"
- **Conflicts**: "Notion says X but spec says Y for [feature]. Which is correct?"

#### Question format in designerQueue.md:

```markdown
### Diana Vasilescu (Empire)

| ID | Feature | Question | Priority | Source | Status |
|----|---------|----------|----------|--------|--------|
| Q-001 | Governors | How many governor slots per city at launch? | MEDIUM | Open question in spec | OPEN |
| Q-002 | Territory Map VS | No spec file exists. Please provide scope and core mechanics. | HIGH | Missing spec | OPEN |
```

#### Assigning questions:
- Look up the feature's pod in `planning/product_targets.md`, then find the Design Lead for that pod in `planning/capacity.md` (Pod Leadership Summary table)
- If no Design Lead is listed for the pod, assign to `[UNASSIGNED]` and flag it

#### Priority rules:
- **HIGH**: Missing spec for a must-have feature, or a must-have feature with no Notion doc
- **MEDIUM**: TBD sections in existing specs, open questions, conflicts
- **LOW**: Nice-to-have feature gaps, minor missing details

### 7. Update Queue Status Table

Update the summary table at the top of `designerQueue.md`:

```markdown
| Designer | Pod | Open Qs | Answered | Last Active |
|----------|-----|---------|----------|-------------|
| Diana Vasilescu | Empire | 5 | 0 | — |
| Leonard [Last Name] | Metagame | 3 | 0 | — |
```

### 8. Output Summary

Present to the user:

```
## Spec Sync Report

**Run Date**: [today]
**Notion MCP**: Connected / Not Connected

### Feature Inventory

| Feature | Pod | Milestone | Spec | Notion | Action Taken |
|---------|-----|-----------|------|--------|-------------|
| Governors | Empire | M&Ms | Exists | [status] | Updated / No changes |
| Territory Map VS | Empire | M&Ms | Created | [status] | New stub spec |
| Battle HUD Beta | Battle | M&Ms | Missing | [status] | New spec from Notion |

### Gaps Found: [X]
- [X] features without spec files (Y created, Z need designer input)
- [X] features without Notion docs
- [X] open questions added to designer queue
- [X] TBD sections flagged

### Designer Queue Updated
- Diana Vasilescu: X new questions
- Leonard: X new questions

### Conflicts (Need Resolution)
- [List any Notion vs spec conflicts]

### Recommended Next Steps
1. Designers should run `/designer-quiz` to answer open questions
2. [Any specific actions]
```

---

## Rules

### Never Auto-Overwrite
- If a spec file exists and has content, never overwrite without user confirmation
- Present conflicts and let the user decide
- Notion content supplements specs, it doesn't replace manually-authored content

### Preserve Validation Goals
- Always populate the "Why This Feature" section, even in stubs
- Trace features to SHQs via product_targets.md and ValidationRoadmap.md
- If no SHQ link is obvious, flag it (feature work without validation)

### Keep IDs Stable
- Question IDs (Q-XXX) are sequential and never reused
- When adding new questions, find the highest existing ID and increment

### Template Source
- The canonical template is `planning/features/governors.md`
- Match its structure for all new specs
- Don't add sections that aren't in the template

---

## Notes

- This skill is safe to run repeatedly — it's additive, not destructive
- Run this before `/risk-evaluation` to ensure spec coverage is current
- After designers answer questions via `/designer-quiz`, run `/queue-review` to apply answers
- The feature inventory from product_targets.md is the ground truth for "what features should exist"
