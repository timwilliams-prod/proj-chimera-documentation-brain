# Quick Start Guide

Get your documentation brain up and running in 30 minutes.

---

## Step 1: Understand the Structure (5 min)

```
lotusDocumentationBrain/
├── GlobalRules.md              # Cross-project standards (update rarely)
├── ValidationRoadmap.md        # Winning Hypotheses → BHQs → SHQs (evaluate per sprint)
├── roadmap.md                  # Feature Roadmap Gantt charts (auto-regenerated)
├── dependency_map.md           # Pod relationships (update when integrations change)
├── pods/                       # Per-pod backlogs (update 2-3x/week)
│   ├── Empire_Backlog.md
│   ├── Metagame_Backlog.md
│   ├── Battle_Backlog.md
│   ├── SocialDynamics_Backlog.md
│   └── Dozer_Backlog.md
├── features/                   # Feature specs (update when designs change)
└── .claude/skills/             # Reusable workflows
    ├── roadmap-update.md       # Update backlogs + Gantt
    ├── risk-evaluation.md      # Find risks across docs
    └── validation-review.md    # Evaluate hypotheses + SHQs
```

**Two types of roadmaps**:
- **Feature Roadmap** (`roadmap.md`): What we're building and when (Mermaid Gantt)
- **Validation Roadmap** (`ValidationRoadmap.md`): Are we building the right thing (hypotheses → BHQs → SHQs)

---

## Step 2: Fill In Your Validation Roadmap (10 min)

This is the most valuable thing to do first - it drives everything else.

### 2.1 Define Your Winning Hypotheses

Open `ValidationRoadmap.md` and fill in the 3 Winning Hypotheses:

```markdown
### WH-1: [Your Hypothesis Name]

**Statement**: "If [condition], then [outcome], because [reasoning]."
**Status**: NOT YET VALIDATED
**Evidence Required**: [What would prove this true?]
**Evidence Against**: [What would prove this false?]
**Current Confidence**: Low
```

### 2.2 Break Down into BHQs

For each Winning Hypothesis, define 2-3 Big Hairy Questions:

```markdown
##### BHQ-1.1: [Testable Question]

**Question**: "[Specific question that addresses part of WH-1]"
**How We Test**: [Method - playtest, analytics, prototype, etc.]
**Success Criteria**: [What does "answered" look like?]
**Pods Involved**: [Which pods contribute?]
```

### 2.3 Define SHQs for Current Milestone

Add 3-5 Small Hairy Questions for your current milestone:

```markdown
| ID | Question | Parent BHQ | Status | Result | Notes |
|----|----------|-----------|--------|--------|-------|
| SHQ-1.1.1 | Do players find X intuitive? | BHQ-1.1 | NOT STARTED | | |
```

---

## Step 3: Populate One Pod Backlog (5 min)

Pick your most active pod. Open its file in `pods/` (e.g., `pods/Empire_Backlog.md`):

```markdown
# Empire Pod Backlog

Last Updated: 2026-03-18
Pod Lead: @name

---

## Current Sprint (Sprint 23: Mar 18 - Mar 31)
**Goal**: [Sprint goal]

### In Progress
- `EMP-101` - Task name
  - Owner: @username
  - ClickUp: [link]
  - Status: 60% - Brief status
  - Blockers: None

### Committed
- `EMP-102` - Another task

## Next Sprint (Sprint 24: Apr 1 - Apr 14)
**Planned Goal**: [Goal]

- `EMP-105` - Planned task
```

**Pro tip**: Start with just current sprint. Fill in backlog later.

---

## Step 4: Map Your Dependencies (5 min)

Edit `dependency_map.md` with your actual pod relationships:
- Replace the example pods with Empire, Metagame, Battle, Social Dynamics, Dozer
- Fill in "Depends On" and "Depended On By" for each
- Identify shared resources (services, systems, databases)

---

## Step 5: Try the Skills (5 min)

### Test Feature Roadmap Update

```
/roadmap-update
```

Follow the prompts to update one pod. This will:
1. Read the pod's backlog
2. Ask what changed
3. Update the backlog file
4. Regenerate the Gantt chart in `roadmap.md`

### Test Validation Review

```
/validation-review
```

Follow the prompts for a sprint evaluation. This will:
1. Review SHQ progress
2. Update confidence levels
3. Check feature-validation alignment

### Test Risk Evaluation

```
/risk-evaluation
```

Scans everything and finds risks including validation gaps.

---

## Step 6: Git Workflow (5 min)

```bash
cd lotusDocumentationBrain
git init
git add .
git commit -m "Initial documentation brain setup"

git remote add origin <your-repo-url>
git push -u origin main
```

---

## Daily/Weekly Workflow

### Update Sprint Progress (2-3x/week)
```
/roadmap-update
```
Answer prompts -> Review diff -> Commit

### Evaluate Validation (every sprint)
```
/validation-review
```
Update SHQ status -> Review confidence trends -> Commit

### Check Risks (weekly or before planning)
```
/risk-evaluation
```
Read report -> Address critical risks

### Work on Features (any time)
```
Help me implement [task]
```
Claude reads feature docs, pod backlogs, and dependencies for full context.

---

## What to Update When

| Event | File to Update | How |
|-------|---------------|-----|
| Sprint Planning | `pods/*_Backlog.md` | `/roadmap-update` |
| Mid-Sprint Standup | `pods/*_Backlog.md` | `/roadmap-update` |
| Blocker Found | `pods/*_Backlog.md` | `/roadmap-update` |
| Sprint Evaluation | `ValidationRoadmap.md` | `/validation-review` |
| Milestone Boundary | `ValidationRoadmap.md` | `/validation-review` (milestone mode) |
| New Playtest Data | `ValidationRoadmap.md` | `/validation-review` (SHQ update) |
| Design Change | `features/*.md` | Manual edit or ask Claude |
| New Integration | `dependency_map.md` | Manual edit |
| Policy Change | `GlobalRules.md` | Manual edit |

---

## Update Cadence

| File | Frequency | Time |
|------|-----------|------|
| `pods/*_Backlog.md` | 2-3x/week | 5 min each |
| `ValidationRoadmap.md` | Every sprint | 15-20 min |
| `roadmap.md` | Auto-generated | 0 min (skill does it) |
| `features/*.md` | When design changes | 15-30 min |
| `dependency_map.md` | Monthly or when integrations change | 10 min |
| `GlobalRules.md` | Quarterly or when policy changes | 10 min |

---

## Common Questions

### "Isn't this duplicating Notion/ClickUp?"

No. This is a **curated summary** for LLM consumption.
- **Notion**: Full design docs, diagrams, discussions
- **ClickUp**: Task details, time tracking, assignees
- **This repo**: High-level "brain" for fast LLM context

### "How do I keep it in sync?"

Start manual. Skills like `/roadmap-update` handle formatting. When it becomes tedious, automate (see `INGESTION_GUIDE.md`).

### "Why two roadmaps?"

They answer different questions:
- **Feature Roadmap**: "What are we building and when?" (Gantt chart)
- **Validation Roadmap**: "Is this the right thing to build?" (hypothesis tracking)

Keeping them separate prevents conflating "we shipped the feature" with "the feature validated our hypothesis."

### "Can I change the format?"

Absolutely. These are **templates**. If an LLM can read it and extract meaning, it works.

---

## Next Steps

1. Fill in your 3 Winning Hypotheses in `ValidationRoadmap.md`
2. Populate one pod backlog
3. Map dependencies for your actual pods
4. Create 1-2 feature docs
5. Try all 3 skills
6. Commit to git
7. Use for 1-2 sprints, iterate based on what's useful

---

## Resources

- `README.md` - Full system overview
- `EXAMPLES.md` - Detailed usage examples
- `INGESTION_GUIDE.md` - Notion/ClickUp sync strategies
- `.claude/skills/` - Available skills (customize as needed)
