# Risk Evaluation Skill

You are performing a risk evaluation across the project documentation to identify potential issues.

---

## Project Structure

### Benchmark (what we need to achieve)
- `product_targets.md` - Milestone definitions, must-have features, success criteria
- `ValidationRoadmap.md` - Winning Hypotheses, BHQs, SHQs

### Plans (what we're actually doing)
- `pods/*_Plan.md` - Per-pod feature priorities by milestone
- `roadmap.md` - Consolidated feature list + Gantt (generated from pod plans)
- `features/*.md` - Feature specs with estimates, discipline needs, implementation approach

### Resources (what we have to work with)
- `capacity.md` - Team staffing by discipline and milestone
- `dependency_map.md` - Pod relationships and shared resources
- `GlobalRules.md` - Cross-project constraints

---

## Your Task

### 1. Read Project State

Read these files in order:
1. `product_targets.md` - What must each milestone achieve?
2. `roadmap.md` - What are we actually building? (consolidated view)
3. `capacity.md` - Do we have the people?
4. All `pods/*_Plan.md` - Detailed priorities per pod
5. `ValidationRoadmap.md` - Are we validating the right things?
6. `dependency_map.md` - What depends on what?
7. Relevant `features/*.md` - For detailed estimates and pre-conditions

### 2. Identify Risks

Scan for these risk patterns:

#### Target Gaps (product_targets.md vs roadmap.md)
- Must-have features that aren't in any pod plan
- Must-have features that are planned but at risk (blocked, understaffed, late in milestone)
- Success criteria that no feature work addresses
- Milestone targets with no clear path to achievement

#### Capacity Risks (capacity.md vs feature estimates)
- Pod is overallocated (more feature-sprints than people-sprints)
- Key disciplines missing (feature needs UX/UI but nobody allocated)
- Single points of failure (one person, no backup)
- People planned to move between pods at risky times
- Feature pre-conditions that depend on unavailable disciplines

#### Timeline Risks
- Features with unresolved pre-conditions (design not ready, UX not delivered)
- Critical path delays (sequential features where early ones slip)
- Milestone date pressure (too many features for available sprints)
- Buffer sprints already consumed

#### Dependency Risks
- Cross-pod dependencies where the upstream feature isn't prioritized
- Features that depend on other features not yet started
- Shared resource conflicts

#### Validation Risks
- SHQs with no corresponding feature work planned
- Feature work happening without tied SHQ (building without validating)
- Declining confidence trends on Winning Hypotheses
- Milestone approaching with SHQs still NOT STARTED
- Product targets that don't trace to validation goals

#### Process Risks
- Features with no feature doc (estimate and approach unknown)
- Features with heavy [TBD] sections (scope not defined)
- Missing design owners on features
- Open questions in feature docs that could change scope

### 3. Assess Each Risk

For each risk found:
- **Impact**: Low / Medium / High / Critical
- **Probability**: Low / Medium / High
- **Affected Pods**: Which teams are impacted
- **Target Impact**: Does this risk affect a must-have in product_targets.md?
- **Validation Impact**: Does this risk affect SHQ/BHQ timelines?
- **Mitigation**: Is there a mitigation plan already?

### 4. Prioritize Risks

Group by severity:
- **Critical** (High Impact x High Probability): Address immediately
- **High**: Address this sprint
- **Medium**: Monitor, address next sprint
- **Low**: Acknowledge, revisit later

### 5. Generate Report

Output the structured report (see format below).

### 6. Recommend Actions

For top 3-5 risks, suggest specific actions:
- "Governors needs UX/UI designs by Sprint 2 - confirm allocation in capacity.md"
- "M&Ms is missing a multiplayer foundation feature (product_targets.md must-have) - which pod owns this?"
- "SHQ-10 has no feature work planned in M&Ms - add to Metagame plan or defer SHQ"
- "Empire has 1 engineer doing 6 sprints of work in 7 sprints with no backup - consider adding flex"

---

## Output Format

```
# Risk Evaluation Report

**Generated**: [Date]
**Scope**: [All Pods | Specific Pod | Pre-Milestone | Validation Focus]

---

## Target Health Check

### Milestone Readiness (product_targets.md vs roadmap.md)

| Milestone | Must-Haves Covered | Gaps | Assessment |
|-----------|-------------------|------|------------|
| M&Ms | 2/4 | [Missing features] | AT RISK |
| M&C | [X/Y] | | |

### Capacity Check (capacity.md vs feature estimates)

| Pod | Available (eng-sprints) | Committed | Delta | Assessment |
|-----|------------------------|-----------|-------|------------|
| Empire (M&Ms) | 6 | 6 | 0 | TIGHT |
| [Pod] | | | | |

---

## Critical Risks (Address Immediately)

### Risk: [Name]
- **Impact**: Critical/High
- **Probability**: High/Medium
- **Affected Pods**: [List]
- **Description**: [What could go wrong]
- **Target Impact**: [Does this affect a must-have feature or success criterion?]
- **Validation Impact**: [Does this affect SHQs/BHQs? Which ones?]
- **Current Mitigation**: [None | Existing plan]
- **Recommended Action**: [Specific next step]

---

## High Risks (Address This Sprint)
[Same format]

## Medium Risks (Monitor)
[Same format, less detail]

## Low Risks (Acknowledged)
[Brief list]

---

## Validation Health Check

### Hypothesis Confidence Summary
| Hypothesis | Confidence | Trend | Concern |
|-----------|-----------|-------|---------|
| WH-1 | [Level] | [Trend] | [Brief note or "On track"] |

### SHQ Coverage Gaps
- [SHQs with no feature work]
- [Feature work with no SHQ]

---

## Recommended Actions (Prioritized)

1. **[Action]** - Addresses: [Risk Name(s)]
   - Owner: [Pod/Person]
   - Deadline: [When]

---

## Next Evaluation

Recommend re-running:
- [ ] After Sprint Planning
- [ ] Mid-sprint
- [ ] Before milestone
- [ ] When [specific trigger]
```

---

## Evaluation Modes

**Quick Scan** (default): Product targets + roadmap + capacity
**Deep Dive**: Include all feature docs, check pre-conditions and open questions
**Pre-Milestone**: Comprehensive check including success criteria readiness
**Validation Focus**: Deep check on ValidationRoadmap alignment with feature work
**Capacity Focus**: Deep check on staffing vs commitments across all pods

---

## Notes

- The core comparison is: targets (what we need) vs plans (what we're doing) vs resources (what we have)
- Features with heavy [TBD] sections are hidden risks - flag them
- Check feature doc pre-conditions: if UX designs aren't ready and the feature starts next sprint, that's a risk
- Consider compound risks (one engineer + sequential features + no buffer = cascade risk)
- Always check validation alignment: are we building AND validating, or just building?
