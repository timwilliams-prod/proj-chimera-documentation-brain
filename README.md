# Lotus Documentation Brain

A structured documentation system for managing game development across multiple pods, designed to work seamlessly with LLMs and version control.

## Purpose

This repo is the "brain" for project knowledge - a curated set of markdown files that:
- Provide LLMs (Claude, etc.) with exact context they need
- Serve as single source of truth for high-level planning
- Track dependencies, risks, and staffing across pods
- Enable git-tracked, reviewable changes to roadmaps and priorities
- Separate **what we're building** (Feature Roadmap) from **why we're building it** (Validation Roadmap)

Data flows **from** Notion (design docs) and ClickUp (tasks) **into** these MD files, which are then used by LLMs and humans for fast, context-aware work.

## Structure

```
lotusDocumentationBrain/
├── README.md
├── QUICK_START.md
├── EXAMPLES.md
├── INGESTION_GUIDE.md
├── planning/
│   ├── product_targets.md          # Milestone targets, must-haves, success criteria (stable)
│   ├── ValidationRoadmap.md        # Winning Hypotheses -> BHQs -> SHQs
│   ├── GlobalRules.md              # Cross-project constraints & standards
│   ├── capacity.md                 # Team staffing by discipline & milestone
│   ├── dependency_map.md           # How pods and features overlap
│   ├── pods/                       # Per-pod priorities & validation alignment
│   │   ├── Empire_Plan.md
│   │   ├── Metagame_Plan.md
│   │   ├── Battle_Plan.md
│   │   ├── SocialDynamics_Plan.md
│   │   └── Dozer_Plan.md
│   └── features/                   # Feature specs (cost, approach, goals)
│       ├── governors.md
│       └── [feature_name].md
├── generated/
│   ├── roadmap.md                  # Consolidated Gantt + pod summaries (generated from pod plans)
│   └── roadmap_options.md          # Draft roadmap scenarios for comparison (disposable, regenerated)
├── reference/
│   └── (source data, CSVs, exports)
└── .claude/
    └── skills/                     # Custom Claude Code skills
        ├── roadmap-update.md
        ├── roadmap-options.md
        ├── risk-evaluation.md
        └── validation-review.md
```

## The Three-Layer Model

This brain separates concerns into three layers that answer different questions:

| Question | File | Example |
|----------|------|---------|
| What must each milestone achieve? | `planning/product_targets.md` | "M&Ms must deliver multiplayer foundations + territory map scalability proof" |
| What are the priorities and validation goals per pod? | `planning/pods/*_Plan.md` | "Empire's #1 priority in M&Ms is Governors, which validates SHQ7" |
| What does a feature cost and how do we build it? | `planning/features/*.md` | "Governors = 3 sprints: backend, UI, iteration. Needs UX handoff by Sprint 2" |
| What's the full picture of what we're building? | `generated/roadmap.md` | Consolidated feature list + Gantt across all pods (generated from pod plans) |
| Where are our people? | `planning/capacity.md` | "Backend engineer on Empire for ~6 sprints, then moves to Dozer" |

This separation means you can ask an LLM:
- **"Are we on track for M&Ms?"** - it reads `planning/product_targets.md` vs `generated/roadmap.md` vs `planning/capacity.md`
- **"Can we move an engineer from Battle to Empire?"** - it reads `planning/capacity.md`
- **"If we cut Territory Map VS, what opens up?"** - it reads the pod plan + feature doc + capacity
- **"What's blocking Empire this milestone?"** - it reads the pod plan + feature docs for pre-conditions

## Core Files

### planning/product_targets.md
- **Purpose**: Leadership-authored definition of what each milestone must achieve
- **Contains**: Milestone definitions/dates, must-have features per milestone, success criteria
- **Update When**: Milestone goals change (rarely). This is the stable benchmark.
- **Used By**: Risk evaluation (compares plans against targets), pod leads (for prioritization context)

### planning/pods/*_Plan.md (one per pod)
- **Purpose**: Feature priorities per milestone and validation alignment
- **Contains**: Ordered priority lists, SHQ connections, sprint allocation, Gantt chart
- **Does NOT contain**: Detailed feature specs or staffing (those live in `planning/features/` and `planning/capacity.md`)
- **Update When**: Priorities shift, features complete, milestone planning

### planning/features/*.md (one per feature)
- **Purpose**: Everything about a single feature - why, what, how, and cost
- **Contains**: Validation goals (SHQs) at top, scope, estimate, discipline breakdown, sprint-level implementation flow, dependencies, risks
- **Update When**: Design changes, estimate revisions, implementation learnings

### planning/capacity.md
- **Purpose**: Single view of all team staffing across disciplines and milestones
- **Contains**: People/roles organized by discipline, allocations per milestone, flexible notes for planned moves
- **Update When**: People move between pods, new hires, milestone capacity planning

### planning/ValidationRoadmap.md
- **Purpose**: Product validation tracking - are we building the right thing?
- **Structure**: 4x Winning Hypotheses -> Big Hairy Questions (BHQs) -> Small Hairy Questions (SHQs)
- **Update When**: Sprint evaluations, milestone reviews, new data/findings

### generated/roadmap.md (Consolidated Feature Roadmap)
- **Purpose**: Consolidated Gantt + per-pod summaries with validation focus (generated from pod plans)
- **Contains**: High-level Gantt chart, per-pod sections (validation focus, features), legend
- **Update When**: Auto-regenerated by `/roadmap-update` skill. Do not manually edit.

### generated/roadmap_options.md (Roadmap Scenarios)
- **Purpose**: Draft roadmap alternatives for planning discussions (disposable)
- **Contains**: N options with summaries, Gantt charts, trade-off analysis, side-by-side comparison
- **Update When**: Auto-regenerated by `/roadmap-options` skill. Overwritten each run.

### planning/GlobalRules.md
- **Purpose**: Shared constraints (technical, process, business)
- **Update When**: Architecture decisions, policy changes

### planning/dependency_map.md
- **Purpose**: Map of pod dependencies and shared resources
- **Update When**: New integrations, shared resource conflicts

## Skills

Skills are reusable prompts that guide Claude through specific workflows.

### `/roadmap-update`
Updates pod plans and regenerates the consolidated Feature Roadmap.

**What It Does**:
1. Reads the relevant pod plan(s) and `planning/product_targets.md`
2. Asks for specific changes
3. Validates against dependencies, capacity, and milestone targets
4. Updates pod plan file(s) and feature docs if needed
5. Regenerates consolidated feature tables + Gantt in `generated/roadmap.md`
6. Flags target gaps and validation impact

### `/risk-evaluation`
Compares targets vs plans vs resources to surface risks.

**Core comparison**: `planning/product_targets.md` (what we need) vs `generated/roadmap.md` (what we're building) vs `planning/capacity.md` (what we have). Also checks validation alignment, dependencies, and feature doc readiness.

### `/roadmap-options`
Generates multiple roadmap scenarios for comparison — exploring "what if" alternatives before committing.

**What It Does**:
1. Reads all pod plans, capacity, targets, and dependencies
2. Asks what trade-offs to explore (or proposes variations)
3. Generates N options, each with summary, Gantt, and trade-off analysis
4. Provides side-by-side comparison table
5. Outputs to `generated/roadmap_options.md` (disposable, overwritten each run)
6. Once a direction is chosen, apply it via `/roadmap-update`

### `/validation-review`
Evaluates and updates the Validation Roadmap - reviews SHQ progress, rolls up to BHQ/WH confidence, checks feature-validation alignment against `planning/product_targets.md` success criteria.

## Data Ingestion

### From Notion
Notion is source of truth for **design documentation**:
- Game design docs -> `planning/features/*.md`
- High-level goals -> `planning/GlobalRules.md`
- Validation hypotheses -> `planning/ValidationRoadmap.md`

### From ClickUp
ClickUp is source of truth for **tasks and progress**:
- Sprint execution -> ClickUp (not tracked here)
- Feature status -> `planning/pods/*_Plan.md` (high-level status only)

**Strategy**: Start manual (skills handle formatting). Automate later. See `INGESTION_GUIDE.md`.

**Important**: These MD files are **curated snapshots**, not live mirrors. ClickUp links preserved for drill-down.

## Best Practices

### Keep It High-Level
- Pod plans are priority lists, not sprint backlogs
- Feature docs have implementation approach, not task breakdowns
- ClickUp/Notion have the details; MD files have the "need to know"

### Update Cadence

| File | Frequency | Time |
|------|-----------|------|
| `planning/product_targets.md` | Milestone planning / when goals change (rare) | 15 min |
| `planning/pods/*_Plan.md` | Sprint planning + when priorities shift | 5-10 min |
| `planning/features/*.md` | When design changes or estimates revise | 15 min |
| `planning/capacity.md` | Milestone planning + when people move | 10 min |
| `planning/ValidationRoadmap.md` | Every sprint evaluation | 15-20 min |
| `generated/roadmap.md` | Auto-generated by `/roadmap-update` | 0 min |

### Git Workflow
- Commit changes with meaningful messages
- PR for major roadmap shifts or validation pivots

## Getting Started

1. **Review `planning/ValidationRoadmap.md`** - understand the hypotheses driving everything
2. **Read a pod plan** (e.g., `planning/pods/Empire_Plan.md`) - see priorities and validation alignment
3. **Read a feature doc** (e.g., `planning/features/governors.md`) - see cost, approach, and goals
4. **Check `planning/capacity.md`** - see where people are allocated
5. **Try the skills** - `/roadmap-update`, `/validation-review`, `/risk-evaluation`

See `QUICK_START.md` for a step-by-step walkthrough.
