# Quick Start Guide

Get oriented in 15 minutes.

---

## Step 1: Understand the Three Layers (3 min)

This brain separates three concerns:

```
pods/Empire_Plan.md        -> WHAT to build and WHY (priorities + validation)
features/governors.md      -> HOW MUCH it costs and HOW to build it (specs + approach)
capacity.md                -> WHO is available WHERE (staffing across milestones)
```

**Supporting files**:
- `ValidationRoadmap.md` - Are we building the right thing? (Hypotheses -> BHQs -> SHQs)
- `roadmap.md` - Visual Gantt chart of features across milestones
- `dependency_map.md` - Pod and feature dependencies
- `GlobalRules.md` - Cross-project constraints

**Sprint execution lives in ClickUp**, not here.

---

## Step 2: Read a Pod Plan (3 min)

Open `pods/Empire_Plan.md` to see the pattern:

1. **Validation Focus** - Which hypotheses and BHQs this pod owns
2. **Feature Priorities** - Ordered list per milestone with links to feature docs
3. **Validation Alignment** - How each feature connects to SHQs
4. **Sprint Allocation** - High-level sequence of features
5. **Gantt Chart** - Visual timeline

---

## Step 3: Read a Feature Doc (3 min)

Open `features/governors.md` to see the template:

1. **Why This Feature** (top of doc) - SHQ connections, what it must prove, success criteria
2. **Scope** - What's in/out
3. **Estimate & Approach** - Total sprints, discipline breakdown, sprint-level implementation flow
4. **Dependencies** - What blocks it, what it blocks
5. **Risks & Open Questions**

Key design principle: **validation goals come first** so everyone is aligned on the value before diving into implementation details.

---

## Step 4: Check Capacity (3 min)

Open `capacity.md` to see:

- **By discipline** (Engineering, UX/UI, Game Design, Art) - who is allocated where
- **By milestone** - how allocations shift over time
- **Flexible notes** - planned moves, approximate ranges, known risks

This is the file to consult when asking "can we afford to do X?" or "what if we move someone?"

---

## Step 5: Try the Skills (3 min)

### Update a Pod Plan
```
/roadmap-update
```
Updates priorities, sprint allocation, and regenerates the Gantt chart.

### Evaluate Validation
```
/validation-review
```
Reviews SHQ progress, updates confidence levels, checks feature-validation alignment.

### Check Risks
```
/risk-evaluation
```
Scans all docs for risks including validation gaps, capacity conflicts, and dependency issues.

---

## Asking the LLM Good Questions

With this structure, you can ask targeted questions:

| Question Type | What the LLM Reads |
|--------------|---------------------|
| "What should Empire work on next?" | Pod plan (priorities + validation) |
| "How long will Governors take and what does it need?" | Feature doc (estimate + disciplines + approach) |
| "Can we pull an engineer to help Battle?" | Capacity (who's where) + pod plans (impact on priorities) |
| "Are we on track to validate BHQ-E1?" | Validation Roadmap (SHQ status) + pod plan (feature alignment) |
| "If we cut a feature, what opens up?" | Feature doc (estimate freed) + capacity (sprints recovered) + pod plan (reprioritize) |

---

## Creating a New Feature Doc

Copy the pattern from `features/governors.md`:

1. Start with **Why** - SHQ connections and success criteria
2. Define **Scope** - in/out
3. Estimate with **Discipline Breakdown** - which disciplines, how many sprints each
4. Write the **Implementation Flow** - sprint-by-sprint approach
5. List **Pre-Conditions** - what must be ready before each phase
6. Add to the pod plan's priority list

---

## Update Cadence

| Event | What to Update |
|-------|---------------|
| Sprint planning | Pod plan priorities, capacity allocations |
| Feature starts/completes | Pod plan status, feature doc status |
| People move between pods | `capacity.md` |
| Design changes | Feature doc scope/estimate |
| Sprint evaluation | `ValidationRoadmap.md` via `/validation-review` |
| Milestone boundary | All of the above + full validation review |

---

## Resources

- `README.md` - Full system overview
- `EXAMPLES.md` - Usage examples
- `INGESTION_GUIDE.md` - Notion/ClickUp sync strategies
- `.claude/skills/` - Available skills
