# Quick Start Guide

Get oriented in 15 minutes.

---

## Step 1: Understand the Layers (3 min)

This brain separates concerns:

```
planning/product_targets.md         -> WHAT must each milestone achieve? (stable benchmark)
planning/pods/Empire_Plan.md        -> WHAT to build and WHY per pod (priorities + validation)
planning/features/governors.md      -> HOW MUCH it costs and HOW to build it (specs + approach)
planning/capacity.md                -> WHO is available WHERE (staffing across milestones)
generated/roadmap.md                -> CONSOLIDATED view of what all pods are building (generated)
```

**Supporting files**:
- `planning/ValidationRoadmap.md` - Are we building the right thing? (Hypotheses -> BHQs -> SHQs)
- `planning/dependency_map.md` - Pod and feature dependencies
- `planning/GlobalRules.md` - Cross-project constraints

**Sprint execution lives in ClickUp**, not here.

---

## Step 2: Check Product Targets (2 min)

Open `planning/product_targets.md` to see:

1. **Milestone definitions** - dates, sprint counts, dev phase
2. **Must-have features** per milestone - the non-negotiables
3. **Success criteria** - what "done" looks like for each milestone
4. **Validation alignment** - which SHQs must be answered

This is the stable benchmark everything else is measured against.

---

## Step 3: Read a Pod Plan (3 min)

Open `planning/pods/Empire_Plan.md` to see the pattern:

1. **Validation Focus** - Which hypotheses and BHQs this pod owns
2. **Feature Priorities** - Ordered list per milestone with links to feature docs
3. **Validation Alignment** - How each feature connects to SHQs
4. **Sprint Allocation** - High-level sequence of features
5. **Gantt Chart** - Visual timeline

---

## Step 4: Read a Feature Doc (3 min)

Open `planning/features/governors.md` to see the template:

1. **Why This Feature** (top of doc) - SHQ connections, what it must prove, success criteria
2. **Scope** - What's in/out
3. **Estimate & Approach** - Total sprints, discipline breakdown, sprint-level implementation flow
4. **Dependencies** - What blocks it, what it blocks
5. **Risks & Open Questions**

Key design principle: **validation goals come first** so everyone is aligned on the value before diving into implementation details.

---

## Step 5: Check Capacity (3 min)

Open `planning/capacity.md` to see:

- **By discipline** (Engineering, UX/UI, Game Design, Art) - who is allocated where
- **By milestone** - how allocations shift over time
- **Flexible notes** - planned moves, approximate ranges, known risks

This is the file to consult when asking "can we afford to do X?" or "what if we move someone?"

---

## Step 6: Try the Skills (3 min)

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
| "Are we on track for M&Ms?" | Product targets (must-haves) + roadmap (what's planned) + capacity (staffed?) |
| "What should Empire work on next?" | Pod plan (priorities + validation) |
| "How long will Governors take and what does it need?" | Feature doc (estimate + disciplines + approach) |
| "Can we pull an engineer to help Battle?" | Capacity (who's where) + pod plans (impact on priorities) |
| "Are we on track to validate BHQ-E1?" | Validation Roadmap (SHQ status) + pod plan (feature alignment) |
| "If we cut a feature, what opens up?" | Feature doc (estimate freed) + capacity (sprints recovered) + pod plan (reprioritize) |
| "What are we missing for Soft Launch?" | Product targets (must-haves) vs roadmap (planned) = gaps |

---

## Creating a New Feature Doc

Copy the pattern from `planning/features/governors.md`:

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
| Milestone goals change | `planning/product_targets.md` (rare) |
| Sprint planning | Pod plan priorities, capacity allocations |
| Feature starts/completes | Pod plan status, feature doc status |
| People move between pods | `planning/capacity.md` |
| Design changes | Feature doc scope/estimate |
| Sprint evaluation | `planning/ValidationRoadmap.md` via `/validation-review` |
| Milestone boundary | All of the above + full validation review + target assessment |

---

## Resources

- `README.md` - Full system overview
- `EXAMPLES.md` - Usage examples
- `INGESTION_GUIDE.md` - Notion/ClickUp sync strategies
- `.claude/commands/` - Available slash commands (`/roadmap-update`, `/risk-evaluation`, etc.)
