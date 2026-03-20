# Battle Pod Plan

Last Updated: 2026-03-20
Pod Lead: Lincoln Li

> **What this file tracks**: Feature priorities per milestone and validation alignment.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationRoadmap.md`.

---

## Validation Focus

The Battle pod is primarily validating combat engagement, unit variety, and tactical depth.

### BHQs This Pod Contributes To

Battle features contribute to these BHQs (full details in `planning/ValidationRoadmap.md`).

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| [TBD] | Does combat feel engaging and skill-expressive? | TESTING | No |
| [TBD] | Does unit variety create meaningful tactical choices? | NOT YET TESTED | Yes (connects to Metagame) |
| [TBD] | Can we balance accessibility with depth? | NOT YET TESTED | No |

---

## Roadmap View

```mermaid
gantt
    title Battle Features by Milestone
    dateFormat YYYY-MM-DD
    axisFormat %b '%y
    tickInterval 2week

    section Milestones
    Sys Validation - Mar 30   :crit, milestone, 2026-03-30, 0d
    M&M - Jun 23              :crit, milestone, 2026-06-23, 0d
    Beta Prep - Jul 21        :crit, milestone, 2026-07-21, 0d
    M&C - Oct 13              :crit, milestone, 2026-10-13, 0d
    Live Ops & Social - Feb 2 :crit, milestone, 2027-02-02, 0d
    Soft Launch - May 30      :crit, milestone, 2027-05-30, 0d

    section M&Ms (ends Jun 23)
    Battle HUD Beta Overhaul  :active,  bat1, 2026-03-31, 42d
    Obstacles                 :         bat2, after bat1, 14d
    Actor System Overhaul     :         bat3, after bat2, 14d
    Pathfinding & AI          :         bat4, after bat3, 14d
    Battle Server Validation  :         bat5, after bat4, 14d
    Pool Management           :         bat6, after bat5, 14d

    section Beta Prep (ends Jul 21)
    No eng features           :         bat_bp, after bat6, 28d

    section M&C (ends Oct 13)
    [TBD]                     :         bat_mc, after bat_bp, 84d

    section Continuous
    Battle Content            :active,  bat_content, 2026-03-18, 490d
    Unit Content              :active,  bat_units, 2026-03-18, 490d

```

---

## Feature Priorities

All Battle features across milestones, ordered by priority within each milestone.

| #   | Feature                        | Milestone | Estimate  | Status      | Related SHQs | What It Proves                                     |
| --- | ------------------------------ | --------- | --------- | ----------- | ------------ | -------------------------------------------------- |
| 1   | Battle HUD Beta Overhaul       | M&Ms      | 3 sprints | NOT STARTED | [TBD]        | Combat interface meets beta quality bar            |
| 2   | Obstacles                      | M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | Environmental tactics add depth                    |
| 3   | Actor System Overhaul          | M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | Performance and maintainability for scale          |
| 4   | Pathfinding & AI Improvements  | M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | AI behavior feels intelligent and responsive       |
| 5   | Battle Server Validation Client| M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | Server-authoritative combat foundation             |
| 6   | Pool Management                | M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | Memory optimization for long sessions              |
| 7   | Battle Content                 | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Content pipeline validates production capacity     |
| 8   | Unit Content                   | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Unit variety pipeline validates art/balance pace   |

> Feature docs may not exist yet — create as needed.

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Capacity**: 1x ENG (Jota)

**⚠️ CAPACITY WARNING**: 6 features totaling 9 sprints scheduled for 7-sprint milestone. Requires compression or deferral.

```
Sprint 1-3:  Battle HUD Beta Overhaul
Sprint 4:    Obstacles
Sprint 5:    Actor System Overhaul
Sprint 6:    Pathfinding & AI Improvements
Sprint 7:    Battle Server Validation Client (defer Pool Management to M&C)
```

Battle Content and Unit Content run in parallel on design/art track (see `planning/capacity.md`).

**Critical Path Risk**: Single engineer (Jota) means all features are sequential. Any delay cascades.

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2 | **Flex**: -

Battle Engineer will focus on build stability and bugfixing. Engineering capacity may flex to other pods (see `planning/capacity.md`).
Battle Content and Unit Content continue on design/art track.

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6 | **Flex**: [TBD]

```
Sprint 1:    Pool Management (deferred from M&Ms)
Sprint 2-6:  [TBD - awaiting feature definitions]
```

Battle Content and Unit Content continue. M&C validation alignment TBD.

---

## Milestone: Live Ops & Social

**Ends**: Feb 2, 2027 (8 sprints available)

### Features

[TBD - awaiting feature definitions]

Battle Content and Unit Content continue.

---

## Milestone: Soft Launch (UA Scale)

**Ends**: May 30, 2027 (~8 sprints available)

### Features

[TBD - awaiting feature definitions]

Battle Content and Unit Content: final push. Content targets must be defined before this milestone.
