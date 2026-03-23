# Feature Review Prep Skill

You are generating a **design review briefing** for a single feature, giving design and production team members everything they need for a productive review session.

> **Note**: This skill produces a disposable briefing in `generated/design_briefs/`. It does NOT modify any authoritative files.
> For updating specs after a review, use `/doc-author`. For broader risk analysis, use `/risk-evaluation`.

---

## Project Structure

### Sources (read only)
- `planning/features/*.md` - Feature specs (the primary source for the target feature + related features)
- `planning/product_targets.md` - Is this feature in milestone targets? What's expected?
- `planning/ValidationRoadmap.md` - SHQ/BHQ alignment
- `planning/pods/*_Plan.md` - Pod priorities and validation focus
- `planning/dependency_map.md` - Dependencies and cross-pod impacts
- `planning/capacity.md` - Design ownership, pod assignments
- `planning/designer_queue/designerQueue.md` - Open questions for this feature
- `planning/GlobalRules.md` - Constraints that apply

### Output
- `generated/design_briefs/[feature_name]_brief.md` - The generated briefing document

---

## Your Task

### 1. Identify the Feature

Ask the user: **"Which feature are you preparing a review for?"**

If unclear, list available features from `planning/features/`:
- Show feature name, pod, and status for each

Once confirmed, read the target feature's spec file.

### 2. Read Full Context

Read these files to build the briefing:

1. **Target feature spec** (`planning/features/[feature].md`) — The core document
2. `planning/product_targets.md` — Milestone context and expectations
3. `planning/ValidationRoadmap.md` — Validation alignment details
4. `planning/pods/[relevant_pod]_Plan.md` — Pod-level priority context
5. `planning/dependency_map.md` — Dependency relationships
6. `planning/designer_queue/designerQueue.md` — Open questions assigned to this feature
7. **All other feature specs** (`planning/features/*.md`) — For scope overlap analysis
8. `planning/GlobalRules.md` — Applicable constraints

### 3. Analyze for the Briefing

#### a. Spec Completeness
Scan the target feature spec for:
- Sections that are still `[TBD]`
- Open questions (unchecked items in Open Questions section)
- Missing validation goals (no SHQ link)
- Missing estimates or disciplines
- Empty or thin scope sections

Rate overall spec readiness: **Ready for Review** / **Has Gaps** / **Too Early for Review**

#### b. Validation Alignment
- Which SHQs/BHQs does this feature map to?
- Is the validation link clear and well-articulated?
- Are the success criteria testable?
- Does the pod plan's validation focus align with what this feature claims to prove?

#### c. Scope Overlap Analysis
Compare the target feature's scope against all other feature specs:
- Are there mechanics or systems described in multiple features?
- Are there boundaries that could cause confusion? (e.g., "Feature A handles X up to point Y, Feature B picks up from Y")
- Are there contradictions? (e.g., Feature A says it owns system Z, but Feature B also claims it)

Only flag meaningful overlaps — not every shared system is a problem.

#### d. Dependency Gap Analysis
Check dependencies listed in the feature spec AND in `planning/dependency_map.md`:
- Are all listed dependencies accounted for? Do the depended-on features/systems exist and have specs?
- Are there likely dependencies NOT listed? (Infer from scope description — if feature mentions "hero roster data," it probably depends on the Hero System)
- For each dependency: is the upstream work started, planned, or unknown?
- Flag any dependency that could block this feature's timeline

#### e. Open Questions Consolidation
Merge open questions from two sources:
- The feature spec's "Open Questions" section
- Any `OPEN` questions in `designerQueue.md` assigned to this feature

Deduplicate and prioritize: which questions should the review session try to resolve?

#### f. Key Discussion Points
Based on all of the above, identify 3-5 topics that would make the review session most productive. These should be:
- Questions that need design decisions (not just FYI items)
- Conflicts or ambiguities that need resolution
- Scope boundaries that need agreement
- Validation concerns that need discussion

### 4. Generate the Briefing

Write the briefing to `generated/design_briefs/[feature_name]_brief.md`.

If the file already exists, overwrite it (these are disposable).

---

## Briefing Format

```markdown
# Design Review Brief: [Feature Name]

**Generated**: [today's date]
**Feature Spec**: `planning/features/[filename].md`
**Pod**: [Pod]
**Design Owner**: [Name]
**Milestone**: [From product_targets.md, or "Not in milestone targets"]

---

## Spec Readiness: [Ready for Review / Has Gaps / Too Early for Review]

### What's Solid
- [Sections that are complete and well-defined]

### What's Missing or TBD
- [List TBD sections, missing estimates, thin areas]
- [Each with a note on whether it matters for this review]

---

## Validation Alignment

**Mapped SHQs/BHQs**:
| SHQ | Question | Status | Link Strength |
|-----|----------|--------|---------------|
| [ID] | [Brief text] | [Status] | [Strong / Weak / Unclear] |

**What This Feature Must Prove**: [From spec]

**Assessment**: [Is the validation story clear? Any gaps?]

---

## Scope Overlap with Other Features

| Related Feature | Overlap Area | Concern Level | Details |
|----------------|-------------|---------------|---------|
| [Feature B] | [Shared system/mechanic] | [Low/Medium/High] | [What specifically overlaps and why it matters] |

[If no meaningful overlaps: "No significant scope overlaps identified."]

---

## Dependency Status

### Dependencies This Feature Needs
| Dependency | Spec Exists? | Status | Risk |
|-----------|-------------|--------|------|
| [System/Feature] | [Yes/No] | [Not started / In progress / Unknown] | [On track / At risk / Blocking] |

### Likely Dependencies Not Listed
- [Inferred dependencies from scope that aren't in the spec's dependency table]

### What Depends on This Feature
- [Downstream features/systems that are waiting on this]

---

## Open Questions for This Review

### Priority Questions (Try to Resolve in This Session)
1. **[Question]** — [Why it matters / what it's blocking]
2. **[Question]** — [Context]

### Other Open Questions
- [Lower priority items that can wait]

### From Designer Queue
- [Q-XXX]: [Question from designerQueue.md if relevant]

---

## Key Discussion Points

1. **[Topic]**: [Why this needs discussion and what decision is needed]
2. **[Topic]**: [Context]
3. **[Topic]**: [Context]

---

## Quick Reference

### In Scope
[Bullet list from spec — quick reminder for reviewers]

### Out of Scope
[Bullet list from spec]

### Success Criteria
[From spec — what does "working" look like?]
```

### 5. Present Summary

After writing the briefing, show the user:

```
## Briefing Generated

**File**: generated/design_briefs/[feature_name]_brief.md
**Readiness**: [Ready for Review / Has Gaps / Too Early for Review]

### Highlights
- [X] open questions identified ([Y] high priority)
- [X] scope overlaps flagged
- [X] dependencies checked ([Y] at risk)
- Key discussion points: [brief list]

### Before the Review
- [Any recommended actions, e.g., "Resolve the TBD estimate before the review" or "Confirm dependency X status with Pod Y"]
```

---

## Rules

### Read-Only
- This skill NEVER modifies files in `planning/`. It only writes to `generated/design_briefs/`.
- Briefings are disposable — overwriting is fine.

### Design Focus
- Focus on design concerns: scope, mechanics, validation, dependencies, open questions
- Do NOT analyze capacity, staffing, or engineering timeline risks — that's `/risk-evaluation`'s domain
- Do NOT suggest changes to the spec — that's `/doc-author`'s job

### Honest Assessment
- If a spec is too thin for a productive review, say so clearly
- Don't pad the briefing with filler — if there are no scope overlaps, say "none found"
- Flag genuine concerns, not hypothetical ones

### Scope Overlap Sensitivity
- Only flag overlaps that could cause real confusion or rework
- Two features touching the same system (e.g., both use heroes) is normal — flag it only if they describe conflicting behavior or unclear ownership of shared mechanics

---

## Notes

- Run this 1-2 days before a design review to give people time to read the briefing
- After the review, use `/doc-author` to apply any decisions back to the spec
- The briefing is intentionally in `generated/` — it's a snapshot, not a maintained document
- If the spec doesn't exist yet, tell the user to run `/doc-author` first
