# Feature Roadmap

Last Updated: 2026-03-18

> This is the **Feature Roadmap** - what we're building and when.
> For product validation (Winning Hypotheses, BHQs, SHQs), see `ValidationRoadmap.md`.

---

## High-Level Roadmap

```mermaid
gantt
    title Feature Roadmap - Q2 2026
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Empire
    [Phase 1 - TBD]          :         hl_emp1, 2026-03-18, 28d
    [Phase 2 - TBD]          :         hl_emp2, after hl_emp1, 28d

    section Metagame
    [Phase 1 - TBD]          :         hl_meta1, 2026-03-18, 28d
    [Phase 2 - TBD]          :         hl_meta2, after hl_meta1, 28d

    section Battle
    [Phase 1 - TBD]          :         hl_bat1, 2026-03-18, 28d
    [Phase 2 - TBD]          :         hl_bat2, after hl_bat1, 28d

    section Social Dynamics
    [Phase 1 - TBD]          :         hl_soc1, 2026-04-15, 28d
    [Phase 2 - TBD]          :         hl_soc2, after hl_soc1, 28d

    section Dozer
    [Phase 1 - TBD]          :         hl_doz1, 2026-03-18, 28d
    [Phase 2 - TBD]          :         hl_doz2, after hl_doz1, 28d

    section Milestones
    Milestone 1               :milestone, m1, 2026-05-15, 0d
    Milestone 2               :milestone, m2, 2026-06-30, 0d
```

---

## Detailed Pod Roadmaps

### Empire

```mermaid
gantt
    title Empire - Detailed View
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Current Sprint
    [Task TBD]                :         emp1, 2026-03-18, 14d

    section Next Sprint
    [Task TBD]                :         emp2, 2026-04-01, 14d

    section Milestones
    Milestone 1               :milestone, em1, 2026-05-15, 0d
```

---

### Metagame

```mermaid
gantt
    title Metagame - Detailed View
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Current Sprint
    [Task TBD]                :         meta1, 2026-03-18, 14d

    section Next Sprint
    [Task TBD]                :         meta2, 2026-04-01, 14d

    section Milestones
    Milestone 1               :milestone, mm1, 2026-05-15, 0d
```

---

### Battle

```mermaid
gantt
    title Battle - Detailed View
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Current Sprint
    [Task TBD]                :         bat1, 2026-03-18, 14d

    section Next Sprint
    [Task TBD]                :         bat2, 2026-04-01, 14d

    section Milestones
    Milestone 1               :milestone, bm1, 2026-05-15, 0d
```

---

### Social Dynamics

```mermaid
gantt
    title Social Dynamics - Detailed View
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Current Sprint
    [Task TBD]                :         soc1, 2026-03-18, 14d

    section Next Sprint
    [Task TBD]                :         soc2, 2026-04-01, 14d

    section Milestones
    Milestone 1               :milestone, sm1, 2026-05-15, 0d
```

---

### Dozer

```mermaid
gantt
    title Dozer - Detailed View
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section Current Sprint
    [Task TBD]                :         doz1, 2026-03-18, 14d

    section Next Sprint
    [Task TBD]                :         doz2, 2026-04-01, 14d

    section Milestones
    Milestone 1               :milestone, dm1, 2026-05-15, 0d
```

---

## Legend

| Visual | Meaning |
|--------|---------|
| Gray bar | `done` - Completed work |
| Blue bar | `active` - Currently in progress |
| Red bar | `crit` - Blocked or at risk |
| Default bar | Planned / committed (not yet started) |
| Diamond | `milestone` - Key delivery date |

---

## How to Read This Roadmap

- **High-Level chart**: Major phases per pod + milestones. Executive overview.
- **Detailed Pod charts**: Individual tasks per sprint. Team-level planning.
- **Dependencies**: `after [id]` = must wait for referenced task. Cross-pod arrows from `dependency_map.md`.
- **Critical (red)**: Blocked or at risk of delaying downstream work.
- **Milestones align with `ValidationRoadmap.md`**: Milestone 1 here = Milestone 1 SHQ evaluation there.

---

## Update History

| Date | Changed By | Summary |
|------|-----------|---------|
| 2026-03-18 | Initial | Created roadmap structure with all 5 pods |
