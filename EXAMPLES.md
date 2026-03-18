# Usage Examples

Practical examples of how to use the documentation brain with Claude Code.

---

## Example 1: Update Sprint Progress

**Scenario**: Mid-sprint, Empire pod has progress updates.

### User:
```
/roadmap-update
```

### Claude:
```
I'll help update the Feature Roadmap. Let me read the current state.

[reads pods/Empire_Backlog.md, dependency_map.md, roadmap.md]

Which pod would you like to update?
```

### User:
```
Empire
```

### Claude:
```
Current state for Empire - Sprint 23:

In Progress:
- EMP-101: Base building foundation (60%)
- EMP-102: Resource gathering system (30%)

What updates do you have?
```

### User:
```
EMP-101 is now 90%. EMP-102 is blocked - waiting on art assets.
Add a new task: EMP-110 for tutorial integration.
```

### Claude:
```
Changes:
- EMP-101: 60% → 90%
- EMP-102: Note blocker (art assets)
- New task: EMP-110 (tutorial integration)

Checking dependencies...

[reads dependency_map.md]

Heads up: EMP-102 is a dependency for Metagame pod's resource
economy work next sprint. If art assets delay, Metagame may be affected.

Also noting: SHQ-1.1.2 ("Do players find resource gathering intuitive?")
depends on EMP-102 completing. This may affect Milestone 1 validation.

Proceed with update?
```

### User:
```
yes
```

### Claude:
```
[updates pods/Empire_Backlog.md]
[regenerates roadmap.md Gantt chart]

## Roadmap Update Summary

**Updated**: Empire - Sprint 23

**Changes**:
- EMP-101: 60% → 90% (near completion)
- EMP-102: Blocked (art assets) - marked critical on Gantt
- Added EMP-110 to backlog as P1

**Milestone Impact**:
- Milestone 1: AT RISK - SHQ-1.1.2 depends on EMP-102

**Cross-Pod Impact**:
- Metagame may be affected (depends on Empire resource system)

**Recommended Actions**:
1. Follow up on art asset ETA
2. Notify Metagame pod of potential EMP-102 delay
3. Create EMP-110 in ClickUp
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

[reads ValidationRoadmap.md, all pods/*_Backlog.md, roadmap.md]

Which sprint are we evaluating?
```

### User:
```
Sprint 23. We got playtest results back - 8 out of 10 players
completed the base building tutorial in under 5 minutes.
SHQ-1.1.1 is answered. Also, resource gathering feedback was
mixed - players found it confusing without tooltips.
```

### Claude:
```
Great data. Let me update the validation roadmap.

## Validation Sprint Review - Sprint 23

### Confidence Snapshot

| Hypothesis | Previous | Current | Trend | Key Signal |
|-----------|----------|---------|-------|------------|
| WH-1: Core Loop | Low | Medium | + | SHQ-1.1.1 positive (80% tutorial completion) |
| WH-2: Monetization | Low | Low | = | No new data |
| WH-3: Retention | Low | Low | - | Resource gathering confusion is a concern |

### SHQ Updates

| SHQ | Previous | New Status | Finding |
|-----|----------|------------|---------|
| SHQ-1.1.1 | IN PROGRESS | ANSWERED | 80% of players completed tutorial in <5 min |
| SHQ-1.1.2 | NOT STARTED | IN PROGRESS | Mixed feedback - needs tooltips |

### Alignment Check

**Gaps**:
- SHQ-1.1.2 depends on EMP-102 (resource gathering) which is BLOCKED
- If EMP-102 stays blocked, we can't fully validate BHQ-1.1 this milestone

**Unvalidated Work**:
- Battle pod Sprint 24 has BAT-050 (arena mode) with no tied SHQ.
  Consider: should arena mode validate something?

### Decisions Needed
1. Should we add tooltips to resource gathering (new task for Empire)?
2. Should BAT-050 tie to a validation goal?

[updates ValidationRoadmap.md with sprint evaluation log]
```

---

## Example 3: Risk Evaluation Before Sprint Planning

**Scenario**: Planning next sprint, want to check for risks.

### User:
```
/risk-evaluation
```

### Claude:
```
Running risk evaluation across all documentation...

[reads all pods/*_Backlog.md, dependency_map.md, GlobalRules.md,
 ValidationRoadmap.md, features/*.md]

# Risk Evaluation Report

Generated: 2026-03-18
Scope: All Pods

---

## Critical Risks

### Risk: Empire Blocker Cascading to Metagame + Validation
- **Impact**: Critical
- **Probability**: High
- **Affected Pods**: Empire, Metagame
- **Description**: EMP-102 (resource gathering) is blocked by art assets.
  Metagame's resource economy work depends on this. Additionally,
  SHQ-1.1.2 can't be validated without it.
- **Validation Impact**: BHQ-1.1 stalls, WH-1 confidence can't improve
- **Recommended Action**: Escalate art asset dependency immediately.
  Consider placeholder art to unblock.

---

## High Risks

### Risk: Battle Pod Building Without Validation
- **Impact**: High
- **Probability**: Medium
- **Affected Pods**: Battle
- **Description**: BAT-050 (arena mode) is planned for Sprint 24
  with no tied SHQ. We'd be building without validating.
- **Recommended Action**: Define what arena mode should prove
  and add an SHQ before committing sprint work.

---

## Validation Health Check

| Hypothesis | Confidence | Trend | Concern |
|-----------|-----------|-------|---------|
| WH-1 | Medium | + | On track if EMP-102 unblocks |
| WH-2 | Low | = | No testing started |
| WH-3 | Low | - | Resource confusion signal |

### Milestone 1 Readiness
- 1/5 SHQs answered, 1 in progress, 3 not started
- Status: AT RISK

---

## Recommended Actions

1. **Unblock EMP-102** - TODAY
   - Owner: Empire pod lead
   - Use placeholder art if needed

2. **Add SHQ for BAT-050** - Before Sprint Planning
   - Owner: Battle pod lead + product

3. **Start WH-2 validation** - Sprint 24
   - No SHQs are testing monetization yet
```

---

## Example 4: Cross-Pod Impact Analysis

**Scenario**: Metagame pod wants to change the resource economy model.

### User:
```
We're thinking of overhauling the resource economy in Sprint 25. What's the impact?
```

### Claude:
```
Let me check dependencies and validation impact.

[reads dependency_map.md, all pods/*_Backlog.md, ValidationRoadmap.md]

**Dependency Impact**:

From dependency_map.md, resource economy touches:
1. **Empire** - Resource gathering feeds into economy
2. **Battle** - Battle rewards use economy system
3. **Social Dynamics** - Trading/gifting uses economy

**Sprint Conflicts**:
- Empire Sprint 25: EMP-120 (resource storage) - would need rework
- Battle Sprint 25: BAT-060 (battle rewards) - depends on economy API

**Validation Impact**:
- SHQ-1.1.2 (resource gathering) - would need re-testing
- BHQ-2.1 (monetization model) - economy changes directly affect this

**Recommendations**:
1. Coordinate with Empire and Battle before Sprint 25 planning
2. Define the new economy API contract first
3. Consider: does this overhaul warrant new SHQs?
4. Suggest an architecture sync with all affected pods
```

---

## Example 5: Notion to Feature Doc Conversion

**Scenario**: New feature designed in Notion, need to add to brain.

### User:
```
Convert this Notion doc to our feature format:

[pastes Notion markdown export for "Alliance System"]
```

### Claude:
```
I'll convert this to features/alliance_system.md.

[maps Notion structure to feature doc schema]

Key mappings:
- Notion "Overview" → Feature Doc "Overview"
- Notion "User Stories" → "Requirements > Functional Requirements"
- Notion "Technical Design" → "Architecture"
- Added: "Dependencies", "Testing Strategy", "Risks"

Gaps I found:
1. No performance requirements
2. No dependency on Social Dynamics pod mentioned (but alliances = social)
3. No risks documented

Should I:
1. Create features/alliance_system.md?
2. Add Social Dynamics dependency to dependency_map.md?
3. Check if any SHQs should tie to alliance system validation?
```

---

## Example 6: Milestone Validation Review

**Scenario**: Reaching Milestone 1, time for full assessment.

### User:
```
/validation-review

We're at the Milestone 1 boundary. Let's do a full review.
```

### Claude:
```
Running milestone review...

[reads ValidationRoadmap.md, all feature work completed]

## Milestone 1 Review

### SHQ Scorecard
- Answered: 3/5
- In Progress: 1
- Failed: 0
- Not Started: 1

### What We Learned

**WH-1 (Core Loop)**:
- SHQ-1.1.1: ANSWERED - 80% tutorial completion (positive)
- SHQ-1.1.2: ANSWERED - Resource gathering needs tooltips (mixed)
- SHQ-1.1.3: IN PROGRESS - Combat engagement data pending

**WH-2 (Monetization)**:
- SHQ-2.1.1: ANSWERED - Players willing to pay for cosmetics (positive)

**WH-3 (Retention)**:
- SHQ-3.1.1: NOT STARTED - Blocked by social features delay

### Confidence Update

| Hypothesis | Pre-Milestone | Post-Milestone | Change |
|-----------|---------------|----------------|--------|
| WH-1 | Medium | Medium-High | + (2/3 positive signals) |
| WH-2 | Low | Medium | + (cosmetics signal strong) |
| WH-3 | Low | Low | = (no data yet - concern) |

### Recommended Milestone 2 SHQs

| ID | Question | Parent BHQ | Pod Work Required |
|----|----------|-----------|-------------------|
| SHQ-1.1.4 | Do players return after first session? | BHQ-1.1 | Analytics (Dozer) |
| SHQ-2.1.2 | Will players spend on gameplay advantages? | BHQ-2.1 | Metagame store |
| SHQ-3.1.1 | Do alliance features increase DAU? | BHQ-3.1 | Social Dynamics |
| SHQ-3.1.2 | Does social pressure drive retention? | BHQ-3.1 | Social Dynamics |

### Key Decision
WH-3 has zero data after Milestone 1. Recommend prioritizing
Social Dynamics work in Milestone 2 or consider revising WH-3.
```

---

## Tips for Effective Usage

### 1. Read Before Writing
Always let Claude read current docs before making changes:
```
"Before we update, read the Empire backlog and dependency map"
```

### 2. Check Validation Alignment
For new features, always ask:
```
"Does this feature tie to any SHQs? Should it?"
```

### 3. Let Skills Guide You
Skills ask the right questions:
```
/roadmap-update       # Updates backlogs + Gantt
/validation-review    # Evaluates hypotheses
/risk-evaluation      # Scans for all risk types
```

### 4. Review Diffs
Always review what Claude changes before committing:
```
"Show me the diff before I commit"
```

### 5. Iterate on Skills
Skills are just markdown files - customize them:
```
"Update /risk-evaluation to weight validation risks higher"
```

---

## Anti-Patterns to Avoid

**Don't: Build without validating**
```
"Add BAT-050 to Sprint 24"
```
Does it tie to an SHQ? If not, why are we building it?

**Do: Connect features to validation**
```
"/roadmap-update - add BAT-050 to Sprint 24, ties to SHQ-2.1.1"
```

---

**Don't: Update one roadmap and forget the other**

Feature Roadmap and Validation Roadmap are connected. If you shift feature timelines, check if SHQ timelines are affected.

**Do: Use `/risk-evaluation` to catch alignment gaps**

---

**Don't: Skip dependency checks**
```
"Move EMP-102 to backlog"
```
Might break Metagame's plan AND an SHQ.

**Do: Ask for impact**
```
"What happens if we defer EMP-102?"
```
Claude checks dependencies, pod backlogs, AND validation roadmap.
