# Usage Examples

Practical examples of how to use the documentation brain with Claude Code.

---

## Example 1: Update Pod Plan & Roadmap

**Scenario**: Empire has finished Governors Sprint 1 and needs to update the plan.

### User:
```
/roadmap-update
```

### Claude:
```
I'll help update the Feature Roadmap. Let me read the current state.

[reads planning/pods/Empire_Plan.md, planning/product_targets.md,
 generated/roadmap.md, planning/capacity.md]

Which pod would you like to update?
```

### User:
```
Empire - Governors Sprint 1 is complete. Backend & data setup done.
Moving into Sprint 2 (UI implementation). UX designs are delivered.
```

### Claude:
```
Changes:
- Governors: still IN PROGRESS, Sprint 1 complete, Sprint 2 starting
- Pre-condition met: UX/UI designs delivered

Checking against product_targets.md...
- M&Ms must-have: Governors ✓ (on track)
- M&Ms must-have: Territory Map VS ✓ (not started, but scheduled Sprint 4-5)

Checking capacity.md...
- 1 engineer on Empire, 4 sprints remaining - sufficient for remaining features

No validation impact - SHQ7 still depends on Governors completing all 3 sprints.

Proceed with update?
```

### User:
```
yes
```

### Claude:
```
[updates planning/pods/Empire_Plan.md]
[updates planning/features/governors.md - marks Sprint 1 pre-conditions complete]
[regenerates generated/roadmap.md consolidated tables + Gantt]

## Roadmap Update Summary

**Updated**: Empire

**Changes**:
- Governors Sprint 1 complete, Sprint 2 starting
- UX/UI pre-condition for Sprint 2: met

**Target Impact** (vs planning/product_targets.md):
- M&Ms: All must-haves on track

**Recommended Actions**:
1. Confirm internal playtest is scheduled for Sprint 2 (needed for Sprint 3 iteration)
2. Update ClickUp to match
```

---

## Example 2: Sprint Validation Review

**Scenario**: End of sprint, evaluating validation progress.

### User:
```
/validation-review
```

### Claude:
```
I'll run a sprint evaluation. Let me read the current state.

[reads planning/ValidationRoadmap.md, all planning/pods/*_Plan.md,
 generated/roadmap.md, planning/product_targets.md]

Which sprint are we evaluating?
```

### User:
```
Sprint 3. Governors is complete. Internal playtest showed players
understood what governors do and felt invested in their choices.
SHQ7 can be marked ANSWERED positive.
```

### Claude:
```
Great data. Let me update the validation roadmap.

## Validation Sprint Review - Sprint 3

### Confidence Snapshot

| Hypothesis | Previous | Current | Trend | Key Signal |
|-----------|----------|---------|-------|------------|
| WH-2: Empire | Low-Medium | Medium | + | SHQ7 answered positively (governor investment) |
| WH-1: Battle | Medium | Medium | = | No new data |
| WH-3: Monetization | Low | Low | = | No new data |
| WH-4: Production | Low | Low | = | No new data |

### SHQ Updates

| SHQ | Previous | New Status | Finding |
|-----|----------|------------|---------|
| SHQ7 | ANSWERED ✅ | ANSWERED ✅ | Players articulate governor purpose, feel invested |

Note: SHQ7 was previously marked ANSWERED in Systems Validation.
This sprint's playtest with Governors feature provides additional
confirming evidence for this SHQ.

### Alignment Check

**Gaps**:
- SHQ2 (empire strategy <-> tile conquest) still IN PROGRESS
  - Territory Map VS (Sprint 4-5) should address this
- SHQ3 answered ❌ (map -> hero progression) - no remediation plan yet
  - This is cross-pod: may need Battle/Metagame input

**Product Target Check**:
- M&Ms success criterion "Empire strategy and tile conquest feel connected"
  depends on Territory Map VS (starting next sprint)

### Decisions Needed
1. SHQ3 failed - what's the design iteration plan? Which pods contribute?
2. Should BHQ-E4 (instant gratification) get an SHQ before M&Ms ends?

[updates planning/ValidationRoadmap.md with sprint evaluation log]
```

---

## Example 3: Risk Evaluation Before Milestone

**Scenario**: M&Ms milestone is 4 sprints away, want a risk check.

### User:
```
/risk-evaluation
```

### Claude:
```
Running risk evaluation...

[reads planning/product_targets.md, generated/roadmap.md,
 planning/capacity.md, all planning/pods/*_Plan.md,
 planning/ValidationRoadmap.md, planning/features/*.md]

# Risk Evaluation Report

Generated: 2026-04-14
Scope: Pre-Milestone (M&Ms)

---

## Target Health Check

### Milestone Readiness (product_targets.md vs roadmap.md)

| Must-Have | Pod | Status | Assessment |
|-----------|-----|--------|------------|
| Governors | Empire | COMPLETE | ✓ |
| Territory Map VS | Empire | IN PROGRESS | On track |
| Multiplayer foundation | [TBD] | NO POD ASSIGNED | MISSING |
| Metagame depth feature | Metagame | [TBD] | MISSING |

**M&Ms: 2/4 must-haves covered. 2 MISSING.**

### Capacity Check

| Pod | Available (eng-sprints) | Committed | Assessment |
|-----|------------------------|-----------|------------|
| Empire | 4 remaining | 3 (TMap VS + WM Upgrades) | OK |
| Metagame | [TBD] | [TBD] | UNKNOWN |
| Battle | [TBD] | [TBD] | UNKNOWN |

---

## Critical Risks

### Risk: M&Ms Missing Must-Have Features
- **Impact**: Critical
- **Probability**: High
- **Description**: product_targets.md requires a multiplayer foundation
  feature and a metagame depth feature for M&Ms. Neither is in any
  pod plan. The milestone cannot achieve its goal without these.
- **Recommended Action**: Immediately define which features satisfy
  these targets and assign to pods. Update pod plans and capacity.

---

## High Risks

### Risk: SHQ3 Failure Without Remediation
- **Impact**: High
- **Probability**: Medium
- **Description**: SHQ3 (map -> hero progression) answered ❌.
  This is cross-pod (Empire/Battle/Metagame) but no design
  iteration plan exists. BHQ-E1 cannot fully validate without this.
- **Recommended Action**: Schedule cross-pod design session.
  Define remediation approach before M&Ms ends.

### Risk: 4 Pod Plans Still Empty
- **Impact**: High
- **Probability**: High
- **Description**: Metagame, Battle, Social Dynamics, and Dozer
  pod plans have no features defined. Cannot assess capacity,
  dependencies, or target coverage for these pods.
- **Recommended Action**: Populate pod plans for at least M&Ms milestone.

---

## Recommended Actions (Prioritized)

1. **Define missing M&Ms must-have features** - TODAY
   - Owner: Product leadership
2. **Populate remaining pod plans** - This sprint
   - Owner: Pod leads (Metagame, Battle, Social Dynamics, Dozer)
3. **Plan SHQ3 remediation** - Before Territory Map VS starts
   - Owner: Cross-pod (Empire + Battle + Metagame)
```

---

## Example 4: Capacity & Priority Question

**Scenario**: Considering pulling Empire's engineer to help Battle.

### User:
```
Can we move Empire's engineer to Battle for 2 sprints?
What's the impact?
```

### Claude:
```
Let me check capacity and downstream impact.

[reads planning/capacity.md, planning/pods/Empire_Plan.md,
 planning/pods/Battle_Plan.md, planning/features/*.md,
 planning/product_targets.md]

**Current allocation** (planning/capacity.md):
- Empire has 1 engineer, committed for ~6 sprints in M&Ms
- Remaining: Territory Map VS (2 spr) + WM Building Upgrades (1 spr)
  + 1 flex sprint

**If we move 2 sprints to Battle:**

Impact on Empire:
- Territory Map VS gets delayed by 2 sprints → pushes past M&Ms deadline
- Territory Map VS is a product_targets.md MUST-HAVE for M&Ms
- SHQ1 and SHQ2 cannot be validated without it
- WM Building Upgrades would also slip to M&C

Impact on M&Ms milestone:
- Success criterion "territory map proves scalable" → MISSED
- Success criterion "empire strategy and tile conquest feel connected" → MISSED

**Alternatives:**
1. Move just 1 sprint (flex sprint) → Empire keeps all features but loses buffer
2. Move the engineer AFTER Territory Map VS (Sprint 6-7) → Battle gets
   help later but Empire stays on track
3. Add a second engineer to Empire so Territory Map VS can still happen
   → check if anyone is available in planning/capacity.md

**Recommendation**: Option 2 is safest — move engineer to Battle for
Sprints 6-7 after Empire's critical features complete. This preserves
M&Ms must-haves while giving Battle 2 sprints of support.
```

---

## Example 5: Creating a New Feature Doc

**Scenario**: Territory Map VS is about to start, needs a feature doc.

### User:
```
Create a feature doc for Territory Map Vertical Slice based on
what we know from the Empire plan.
```

### Claude:
```
Let me read the existing context.

[reads planning/pods/Empire_Plan.md for scope/validation info,
 planning/ValidationRoadmap.md for SHQ details,
 planning/features/governors.md for template]

I'll create planning/features/territory_map_vs.md following the
governors.md template. Here's what I can populate from existing docs:

- Validation: SHQ1 (map at scale), SHQ2 (strategy <-> conquest)
- Estimate: 2 sprints
- Dependencies: May build on Governor system
- Pod: Empire

Gaps I need from you:
1. Scope: What specifically does the VS prove? (performance? visuals? variety?)
2. Design owner?
3. Does it need UX/UI work or is it purely engineering?
4. Art assets needed?

[creates planning/features/territory_map_vs.md with known info,
 [TBD] sections for gaps]
[updates planning/pods/Empire_Plan.md feature doc link]
```

---

## Example 6: Milestone Validation Review

**Scenario**: M&Ms milestone boundary, full assessment.

### User:
```
/validation-review

We're at the M&Ms milestone boundary. Full review.
```

### Claude:
```
Running milestone review...

[reads planning/ValidationRoadmap.md, all planning/pods/*_Plan.md,
 generated/roadmap.md, planning/product_targets.md]

## M&Ms Milestone Review

### SHQ Scorecard (Empire-related)
- SHQ1 (map at scale): ANSWERED ✅
- SHQ2 (strategy <-> conquest): ANSWERED ✅
- SHQ3 (map -> hero progression): ANSWERED ❌ (pre-existing)
- SHQ7 (short/mid/long-term goals): ANSWERED ✅

### Success Criteria Check (vs planning/product_targets.md)
- [x] Territory map proves scalable
- [x] Empire strategy and tile conquest feel connected
- [ ] Players can engage with multiplayer foundations → [depends on other pods]
- [ ] At least one metagame depth system is playable → [depends on Metagame pod]

### Confidence Update

| Hypothesis | Pre-Milestone | Post-Milestone | Change |
|-----------|---------------|----------------|--------|
| WH-2: Empire | Low-Medium | Medium | + (3/4 SHQs positive) |

### Key Learnings
- Governor system validated as a goal vector (SHQ7 ✅)
- Territory map scales well technically (SHQ1 ✅)
- Strategy/conquest connection works (SHQ2 ✅)
- Map -> hero progression FAILED (SHQ3 ❌) — needs design rethink

### Recommendations for Beta Launch Prep
1. SHQ3 remediation plan must be defined — cross-pod design work
2. Define SHQs for upcoming milestones
3. Populate remaining pod plans before M&C begins
```

---

## Tips for Effective Usage

### 1. Read Before Writing
Always let Claude read current docs before making changes:
```
"Before we update, read the Empire plan and capacity file"
```

### 2. Check Validation Alignment
For new features, always ask:
```
"Does this feature tie to any SHQs? Should it?"
```

### 3. Ask Capacity Questions
The brain can now answer resource questions:
```
"Can we afford to add a feature to Empire this milestone?"
"What if we move someone from Social Dynamics to Metagame?"
```

### 4. Let Skills Guide You
Skills ask the right questions:
```
/roadmap-update       # Updates pod plans + consolidated roadmap
/validation-review    # Evaluates hypotheses
/risk-evaluation      # Targets vs plans vs resources
```

### 5. Review Diffs
Always review what Claude changes before committing:
```
"Show me the diff before I commit"
```

---

## Anti-Patterns to Avoid

**Don't: Build without validating**
Does the feature tie to an SHQ? If not, why are we building it?

**Don't: Plan features without a feature doc**
If it doesn't have a `planning/features/*.md` file, the estimate and approach are guesses.

**Don't: Ignore product targets**
`planning/product_targets.md` defines what must ship. If your pod plan doesn't cover a must-have, `/risk-evaluation` will catch it.

**Don't: Scatter capacity info**
All staffing lives in `planning/capacity.md`. Don't put headcount in pod plans.

**Do: Use `/risk-evaluation` regularly**
It compares targets vs plans vs resources — catches gaps you won't see by reading one file.
