# Validation Review Skill

You are helping evaluate and update the **Validation Roadmap** - the hypothesis-driven product validation process.

> **Note**: This skill handles Winning Hypotheses, BHQs, and SHQs.
> For Feature Roadmap updates (backlogs, Gantt charts), see the roadmap-update skill.

---

## Project Structure

- `ValidationRoadmap.md` - The validation hierarchy and sprint evaluation log
- `pods/*_Backlog.md` - Pod backlogs (to check feature work alignment)
- `roadmap.md` - Feature Roadmap (to cross-reference timelines)
- `features/*.md` - Feature docs (for detailed context on what's being built)

---

## Your Task

### 1. Read Current State
- Read `ValidationRoadmap.md` for current hypothesis status, BHQs, SHQs
- Read all `pods/*_Backlog.md` to understand what's being built
- Read `roadmap.md` to check timeline alignment
- Read relevant `features/*.md` if diving deep on specific validations

### 2. Determine Evaluation Type

Ask the user:
- **Sprint Evaluation**: Regular per-sprint confidence check (default)
- **Milestone Review**: Full assessment at milestone boundary
- **SHQ Update**: Update specific SHQ results
- **Hypothesis Check**: Deep dive on one Winning Hypothesis
- **Alignment Check**: Verify feature work maps to validation goals

### 3. Sprint Evaluation (Default Flow)

Ask the user:
- Which sprint are we evaluating?
- Any new data or findings? (playtest results, analytics, user feedback)
- Any SHQ status changes?
- Has confidence in any hypothesis shifted? Why?

Then:

#### a. Update SHQ Statuses
For each active SHQ in the current milestone:
- What's the current status? (NOT STARTED / IN PROGRESS / ANSWERED / FAILED)
- If ANSWERED: What was the result?
- If FAILED: Why? Can we retry with a different method?

#### b. Roll Up to BHQs
For each BHQ with updated SHQs:
- Do the SHQ results change the BHQ status?
- Is the BHQ moving toward ANSWERED or INVALIDATED?

#### c. Roll Up to Winning Hypotheses
For each WH with updated BHQs:
- Update confidence level (Low / Medium / High)
- Update confidence trend (-- / - / = / + / ++)
- Flag if a hypothesis is trending toward INVALIDATED

#### d. Check Feature-Validation Alignment
- Are there SHQs with no corresponding sprint work? (gap)
- Are there features being built with no tied SHQ? (waste risk)
- Are upcoming SHQ deadlines realistic given the feature roadmap?

#### e. Log the Sprint Evaluation
Add a new entry to the Sprint Evaluation Log in `ValidationRoadmap.md`.

### 4. Milestone Review (At Milestone Boundaries)

Deeper assessment:
- How many SHQs were answered vs target?
- What did we learn?
- Do any BHQs need revision based on what we learned?
- Do any Winning Hypotheses need revision?
- Define SHQs for next milestone (3-5 per milestone)
- Update the Mermaid mindmap if hierarchy changed

### 5. Output

#### For Sprint Evaluation:

```
## Validation Sprint Review - Sprint [XX]

### Confidence Snapshot

| Hypothesis | Previous | Current | Trend | Key Signal |
|-----------|----------|---------|-------|------------|
| WH-1: [Name] | Medium | Medium | = | [Brief reason] |
| WH-2: [Name] | Low | Medium | + | SHQ-2.1.1 results positive |
| WH-3: [Name] | Low | Low | - | Playtest showed concern |

### SHQ Updates This Sprint

| SHQ | Previous Status | New Status | Finding |
|-----|----------------|------------|---------|
| SHQ-2.1.1 | IN PROGRESS | ANSWERED | Users engaged 3x longer |
| SHQ-3.1.1 | NOT STARTED | IN PROGRESS | Playtest scheduled |

### Alignment Check

**Gaps** (SHQs without feature work):
- SHQ-1.2.3 needs [feature] but it's not in any pod's sprint

**Unvalidated Work** (features without SHQs):
- Empire Sprint 25 has [feature] with no tied validation goal

### Decisions / Actions

- [Any pivots, scope changes, priority shifts]
- [Recommended next steps]

### Concerns

- [Risks to validation timeline]
- [Hypotheses that may need revision]
```

#### For Milestone Review:

```
## Milestone [X] Review

### SHQ Scorecard
- Answered: X/Y
- In Progress: X
- Failed: X
- Not Started: X

### What We Learned
- [Key findings organized by Winning Hypothesis]

### Hypothesis Revisions
- [Any changes to WH/BHQ statements based on evidence]

### Next Milestone SHQs
| ID | Question | Parent BHQ | Method | Pod Work Required |
|----|----------|-----------|--------|-------------------|
| SHQ-X.X.X | [Question] | BHQ-X.X | [How we test] | [Feature needed] |

### Recommendations
- [Priorities for next milestone]
- [Any pivot decisions needed]
```

---

## Rules

### Validation-Feature Alignment
Every SHQ should trace to feature work:
```
SHQ → Feature/Task → Pod Backlog → Feature Roadmap
```

If an SHQ has no feature path, flag it as a gap.
If feature work has no SHQ, flag it as unvalidated effort.

### Confidence Changes Require Evidence
- Don't change confidence based on feelings - cite specific SHQ results
- A single SHQ rarely justifies a big confidence jump
- Declining trends are more important than absolute levels

### When to Escalate
- Any hypothesis trending `--` for 2+ sprints
- A milestone approaching with >50% SHQs NOT STARTED
- An INVALIDATED SHQ that contradicts a core hypothesis
- Feature work proceeding without validation data

### Preserving History
- Never delete Sprint Evaluation Log entries
- Keep last 4 sprint evaluations in the main file
- Archive older evaluations to `archive/validation/`
- Milestone reviews are always preserved

### SHQ Quality Checks
Good SHQs are:
- **Specific**: "Do players complete tutorial in <5 minutes?" not "Is tutorial good?"
- **Measurable**: Has a clear success/failure criteria
- **Testable this milestone**: Can actually be answered with planned work
- **Traceable**: Maps to a BHQ and ultimately a Winning Hypothesis

Flag vague or untestable SHQs for revision.
