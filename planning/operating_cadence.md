# Operating Cadence

Last Updated: 2026-04-01

---

## Purpose

This document defines the **maintenance rhythms** required to keep the Lotus planning system producing accurate outputs. It is written for producers, pod leads, and anyone who touches the planning brain.

**The core idea**: The brain produces 4 communication artifacts (below). Each depends on source data being kept current. If the maintenance cadences lapse, the generated artifacts become unreliable — and decisions made from them will be wrong.

---

## The 4 Communication Artifacts

These are the outputs the system produces for different audiences:

| # | Artifact | Question It Answers | Source | Audience |
|---|----------|-------------------|--------|----------|
| 1 | **Milestone Targets** | "What does success look like for this milestone?" | `planning/product_targets.md` (human-authored) | Everyone — alignment at start, evaluation at end |
| 2 | **Validation Roadmap** | "Are we proving the right things?" | `generated/validation_roadmap.md` (generated from ValidationPlan + ClickUp) | Leadership, pod leads |
| 3 | **Feature Roadmap** | "What are we building & when?" | `generated/roadmap.md` (generated from pod plans) | Production, pod leads, capacity planning |
| 4 | **Milestone Checkpoint** | "What are we targeting this month?" | Generated (TBD — aggregates sprint evals against milestone targets) | Pod leads, producers, team |

### How They Relate

```
Milestone Targets (stable, per-milestone)
  ├── Validation Roadmap (generated each sprint)
  │     └── reads: ValidationPlan.md + ClickUp SHQ Tracker
  ├── Feature Roadmap (generated when plans change)
  │     └── reads: Pod Plans + capacity.md
  └── Milestone Checkpoint (generated monthly)
        └── reads: Validation Roadmap + Feature Roadmap + Milestone Targets
```

---

## What Breaks If You Don't Maintain It

| If this gets stale... | These artifacts break... | Concrete consequence |
|----------------------|------------------------|---------------------|
| SHQ statuses not evaluated | Validation Roadmap, Milestone Checkpoints | Can't tell leadership whether we're proving the right things |
| SHQs not linked to ClickUp Epics | Validation Roadmap | Sprint evaluation can't pull actual progress — SHQ status is guesswork |
| Pod plans not updated | Feature Roadmap, Sprint Plans | Roadmap shows stale feature order; sprint plans don't reflect current priorities |
| Capacity not updated | Risk Evaluation, Sprint Plans | Overcommitting or undercommitting people; staffing gaps invisible |

---

## Sprint Cadence (Every 2 Weeks)

Each sprint, the following should happen. Order matters — earlier steps feed later ones.

### 1. Validation Evaluation

| | |
|---|---|
| **What** | Review each active SHQ's ClickUp Epic status. Capture qualitative findings (playtest results, design decisions, surprises). Update confidence levels. |
| **Who** | Producer (Tim) with input from pod leads |
| **Skill** | `/validation-review` |
| **Reads** | `planning/ValidationPlan.md`, ClickUp SHQ Tracker (list `901324723345`) |
| **Produces** | `generated/validation_roadmap.md` — updated SHQ statuses, confidence snapshot, sprint eval log entry |
| **Freshness** | Must run every sprint. Stale after **3 weeks**. |

**How it works**:
1. Skill pulls SHQ Epic statuses from ClickUp
2. Diffs against last known statuses
3. Prompts you for qualitative input on changes ("SHQ4-7 moved to In Progress — what's the finding?")
4. Updates confidence levels and generates sprint eval entry

### 2. Sprint Planning

| | |
|---|---|
| **What** | Plan next sprint's work based on pod plans, capacity, ClickUp state, and PTO calendar |
| **Who** | Producers + pod leads |
| **Skill** | `/sprint-plan` (Preview mode mid-sprint, Kickoff mode at sprint start) |
| **Reads** | Pod plans, capacity, sprint_rules, roadmap, Google Calendar, ClickUp |
| **Produces** | `generated/sprint_plans/`, pod plan Sprint Plans sections, ClickUp tasks (Kickoff) |
| **Dependencies** | Validation evaluation should be current (skill will warn if stale) |

### 3. Sprint Risk Triage (as needed)

| | |
|---|---|
| **What** | Surface at-risk tasks, get decisions (push/defer/cut/escalate) |
| **Who** | Producers |
| **Skill** | `/sprint-risks` |
| **Produces** | Copy/paste summary for standups or Slack |

---

## Monthly Cadence (Every 2 Sprints)

### 1. Milestone Checkpoint

| | |
|---|---|
| **What** | Aggregate 2 sprints of validation progress + feature delivery against milestone targets. "Are we on track for this milestone?" |
| **Who** | Tim |
| **Skill** | TBD (future skill — combines validation eval + feature roadmap + milestone targets) |
| **Reads** | `generated/validation_roadmap.md` (last 2 sprint evals), `generated/roadmap.md`, `planning/product_targets.md` |
| **Produces** | Milestone Checkpoint report |
| **Dependencies** | Requires sprint evaluations for both sprints in the window |

### 2. Roadmap Sync

| | |
|---|---|
| **What** | Pod leads update their pod plans with any priority changes. Regenerate the Feature Roadmap. |
| **Who** | Tim + pod leads |
| **Skill** | `/roadmap-update` |
| **Reads** | Pod plans, capacity, product_targets, feature_registry, dependency_map, ValidationPlan, TechnicalDebt |
| **Produces** | Updated pod plans, `generated/roadmap.md`, feature_registry updates |
| **Freshness** | Pod plans stale after **5 weeks**. |

### 3. Risk Evaluation

| | |
|---|---|
| **What** | Compare targets vs plans vs resources. Surface gaps, overcommits, and validation risks. |
| **Who** | Tim |
| **Skill** | `/risk-evaluation` |
| **Reads** | product_targets, roadmap, capacity, pod plans, ValidationPlan, feature_registry, TechnicalDebt |
| **Produces** | `generated/reports/` |

---

## Milestone Boundary (At Milestone End)

### 1. Full Validation Review

| | |
|---|---|
| **What** | Assess all BHQs against their SHQ results. Update WH confidence. Evaluate whether milestone proved what it needed to. |
| **Who** | Tim + leadership |
| **Skill** | `/validation-review` (milestone mode) |
| **Produces** | Comprehensive validation report with BHQ-level assessments |

### 2. Milestone Targets Review

| | |
|---|---|
| **What** | Evaluate success criteria in `product_targets.md`. Did we hit the targets? Adjust direction for next milestone if needed. |
| **Who** | Leadership |
| **Produces** | Updated `product_targets.md` (if goals change) |

### 3. Pulse Check Report

| | |
|---|---|
| **What** | Executive summary of milestone progress for stakeholders |
| **Who** | Tim |
| **Skill** | `/generatePulseCheckReport` |

---

## Staleness Detection

Skills check the freshness of their dependencies before running. If a dependency is stale, the skill **warns but does not block** — you may have good reasons to proceed.

### Freshness Rules

| File | Expected Update Frequency | Stale After | Checked By |
|------|--------------------------|-------------|------------|
| `ValidationPlan.md` (Last Evaluated) | Every sprint (2 weeks) | 3 weeks | `/sprint-plan`, `/validation-review` |
| `pods/*_Plan.md` | Monthly or when plans change | 5 weeks | `/roadmap-update`, `/risk-evaluation` |
| `capacity.md` | When staffing changes | N/A (event-driven) | `/sprint-plan`, `/risk-evaluation` |
| `product_targets.md` | Per milestone | N/A (event-driven) | `/risk-evaluation` |
| `generated/roadmap.md` | After any pod plan change | 5 weeks | `/risk-evaluation`, `/sprint-plan` |
| `generated/validation_roadmap.md` | Every sprint | 3 weeks | `/sprint-plan`, milestone checkpoint |

### How It Works

Each planning file has a `Last Updated: YYYY-MM-DD` header. Skills read this date and compare against today:

- **Within expected frequency**: proceed normally
- **Stale**: warn user, suggest which cadence action to run first
- **Never block**: the user may have good reasons to proceed anyway

Example warning:
```
⚠️ ValidationPlan.md was last evaluated on 2026-03-15 (3+ weeks ago).
  SHQ statuses may be outdated. Consider running /validation-review first.
```

### Verifying Cadence Compliance

To check whether the team is following cadence, look at:

1. **Git history** on planning files — `git log --oneline planning/ValidationPlan.md` shows when evaluations happened
2. **Last Updated dates** on each file — quick scan tells you what's current vs stale
3. **Staleness warnings** from skills — if skills keep warning about the same file, that cadence is broken

---

## Quick Reference Card

For producers and pod leads — the minimum you need to know:

### Every Sprint (2 weeks)
- [ ] Run `/validation-review` — evaluate SHQ progress from ClickUp, capture findings
- [ ] Run `/sprint-plan` — plan next sprint (Preview mid-sprint, Kickoff at start)
- [ ] Run `/sprint-risks` if any tasks look at risk

### Every Month (2 sprints)
- [ ] Pod leads: update your pod plan if priorities changed
- [ ] Run `/roadmap-update` — regenerate the Feature Roadmap
- [ ] Run `/risk-evaluation` — check targets vs plans vs resources
- [ ] Generate Milestone Checkpoint (TBD skill)

### At Milestone End
- [ ] Run `/validation-review` in milestone mode — full BHQ assessment
- [ ] Review milestone success criteria in `product_targets.md`
- [ ] Run `/generatePulseCheckReport` for leadership

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-04-01 | Initial operating cadence document | Tim / Claude |
