# Risk Evaluation Skill

You are performing a risk evaluation across the project documentation to identify potential issues.

---

## Project Structure

- `pods/Empire_Backlog.md` - Empire pod backlog
- `pods/Metagame_Backlog.md` - Metagame pod backlog
- `pods/Battle_Backlog.md` - Battle pod backlog
- `pods/SocialDynamics_Backlog.md` - Social Dynamics pod backlog
- `pods/Dozer_Backlog.md` - Dozer pod backlog
- `roadmap.md` - Visual Feature Roadmap (Mermaid Gantt charts)
- `ValidationRoadmap.md` - Winning Hypotheses, BHQs, SHQs
- `dependency_map.md` - Pod relationships and shared resources
- `GlobalRules.md` - Cross-project constraints
- `features/*.md` - Feature documentation

---

## Your Task

### 1. Read Project State
- Read all `pods/*_Backlog.md` files
- Read `dependency_map.md` for pod relationships
- Read `GlobalRules.md` for constraints
- Read `ValidationRoadmap.md` for hypothesis/SHQ status
- Read relevant `features/*.md` for technical details

### 2. Identify Risks

Scan for these risk patterns:

#### Timeline Risks
- Blocked tasks without unblock dates
- Sprint overload (>100% capacity)
- Critical path delays (check dependency_map.md)
- Milestone date pressure

#### Technical Risks
- Shared resource conflicts (multiple pods modifying same system)
- Performance budget violations
- Network/multiplayer complexity
- Data migration/backward compatibility

#### Dependency Risks
- Circular dependencies between pods
- "Depends On" tasks not in the other pod's sprint
- Cross-cutting features affecting many pods
- Third-party service dependencies

#### Validation Risks
- SHQs with no corresponding feature work planned
- Feature work happening without tied SHQ (building without validating)
- Declining confidence trends on Winning Hypotheses
- Milestone approaching with SHQs still NOT STARTED
- BHQs stuck in TESTING for multiple sprints

#### Process Risks
- Missing test coverage plans
- Insufficient documentation
- No rollback plan for risky changes
- Missing owners on critical tasks

### 3. Assess Each Risk

For each risk found:
- **Impact**: Low / Medium / High / Critical
- **Probability**: Low / Medium / High
- **Risk Score**: Impact x Probability
- **Affected Pods**: Which teams are impacted
- **Validation Impact**: Does this risk affect SHQ/BHQ timelines?
- **Mitigation**: Is there a mitigation plan already?

### 4. Prioritize Risks

Group by risk score:
- **Critical** (High Impact x High Probability): Address immediately
- **High**: Address this sprint
- **Medium**: Monitor, address next sprint
- **Low**: Acknowledge, revisit later

### 5. Generate Report

Output the structured report (see format below).

### 6. Recommend Actions

For top 3-5 risks, suggest specific actions:
- "Add task EMP-XXX to Sprint 24 to unblock BAT-YYY"
- "Schedule architecture sync to resolve shared resource conflict"
- "SHQ-1.1.3 has no feature work planned - add to Metagame Sprint 25 or defer SHQ to M2"

---

## Output Format

```
# Risk Evaluation Report

**Generated**: [Date]
**Scope**: [All Pods | Specific Pod | Specific Feature | Validation Focus]

---

## Critical Risks (Address Immediately)

### Risk: [Name]
- **Impact**: Critical/High
- **Probability**: High/Medium
- **Affected Pods**: [List]
- **Description**: [What could go wrong]
- **Evidence**:
  - [Reference to backlog/feature doc]
  - [Specific concern]
- **Validation Impact**: [Does this affect SHQs/BHQs? Which ones?]
- **Current Mitigation**: [None | Existing plan]
- **Recommended Action**: [Specific next step]

---

## High Risks (Address This Sprint)

[Same format]

---

## Medium Risks (Monitor)

[Same format, less detail]

---

## Low Risks (Acknowledged)

[Brief list]

---

## Validation Health Check

### Hypothesis Confidence Summary
| Hypothesis | Confidence | Trend | Concern |
|-----------|-----------|-------|---------|
| WH-1 | [Level] | [Trend] | [Brief note or "On track"] |
| WH-2 | [Level] | [Trend] | [Brief note] |
| WH-3 | [Level] | [Trend] | [Brief note] |

### SHQ Coverage Gaps
- [List SHQs that have no corresponding feature work planned]
- [List feature work that has no tied SHQ (building without validating)]

### Milestone Readiness
- Milestone X: [X/Y SHQs on track] - [READY | AT RISK | NOT READY]

---

## Recommended Actions (Prioritized)

1. **[Specific action]** - Addresses: [Risk Name(s)]
   - Owner: [Pod/Person]
   - Deadline: [When]

2. [Next action...]

---

## Next Evaluation

Recommend re-running this evaluation:
- [ ] After Sprint Planning
- [ ] Mid-sprint
- [ ] Before milestone
- [ ] When [specific trigger]
```

---

## Evaluation Modes

**Quick Scan** (default): Check pod backlogs + dependencies only
**Deep Dive**: Include all feature docs, check technical specs
**Feature-Specific**: Focus on one feature across all pods
**Validation Focus**: Deep check on ValidationRoadmap alignment with feature work
**Pre-Milestone**: Comprehensive check before milestone (includes SHQ readiness)

---

## Notes

- Cross-reference risks in feature docs' "Risks & Mitigations" sections
- If you find risks not documented in feature docs, recommend adding them
- Look for "open questions" in feature docs - these often hide risks
- Check for missing owners on risky tasks
- Watch for optimistic timelines on complex features
- Consider compound risks (Risk A + Risk B = bigger problem)
- Always check validation alignment: are we building AND validating, or just building?
