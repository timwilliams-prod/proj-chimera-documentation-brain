# Battle Pod Plan

Last Updated: 2026-03-25
Pod Lead: Lincoln Li

> **What this file tracks**: Feature priorities per milestone and validation alignment.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationPlan.md`.

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
    Battle HUD Beta Overhaul  :active,  bat1, 2026-03-31, 56d
    Obstacles                 :active,  bat2, 2026-03-31, 14d
    Actor System Overhaul     :active,  bat3, 2026-03-31, 28d
    Pathfinding & AI          :active,  bat4, 2026-03-31, 28d

    section Beta Prep (ends Jul 21)
    Pool Management           :         bat_bp, after bat4, 14d

    section M&C (ends Oct 13)
    Battle Server Validation  :         bat5, after bat_bp, 28d
    [TBD]                     :         bat_mc, after bat5, 70d

    section Continuous
    Battle Content            :active,  bat_content, 2026-03-18, 490d
    Unit Content              :active,  bat_units, 2026-03-18, 490d

```

---

## Validation Focus

The Battle pod is primarily validating combat engagement, unit variety, and tactical depth.

### BHQs This Pod Contributes To

Battle features contribute to these BHQs (full details in `planning/ValidationPlan.md`).

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| [TBD] | Does combat feel engaging and skill-expressive? | TESTING | No |
| [TBD] | Does unit variety create meaningful tactical choices? | NOT YET TESTED | Yes (connects to Metagame) |
| [TBD] | Can we balance accessibility with depth? | NOT YET TESTED | No |

---

## Feature Priorities

All Battle features across milestones, ordered by priority within each milestone.

| #   | Feature                         | Milestone | Estimate  | Status      | Related SHQs | What It Proves                                   |
| --- | ------------------------------- | --------- | --------- | ----------- | ------------ | ------------------------------------------------ |
| 1   | Battle HUD Beta Overhaul        | M&Ms      | 4 sprints | NOT STARTED | [TBD]        | Combat interface meets beta quality bar          |
| 2   | Obstacles                       | M&Ms      | 1 sprint  | NOT STARTED | [TBD]        | Environmental tactics add depth                  |
| 3   | Actor System Overhaul           | M&Ms      | 2 sprints | NOT STARTED | [TBD]        | Performance and maintainability for scale        |
| 4   | Pathfinding & AI Improvements   | M&Ms      | 2 sprints | NOT STARTED | [TBD]        | AI behavior feels intelligent and responsive     |
| 5   | Battle Server Validation Client | M&C            | 2 sprints | NOT STARTED | [TBD]        | Server-authoritative combat foundation           |
| 6   | Pool Management                 | Beta Prep      | 1 sprint  | NOT STARTED | [TBD]        | Memory optimization for long sessions            |
| 7   | Battle Content                  | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Content pipeline validates production capacity   |
| 8   | Unit Content                    | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Unit variety pipeline validates art/balance pace |

> Feature docs may not exist yet — create as needed.

---

## Sprint Plans

> Skill-maintained by `/sprint-plan`. Updated with user approval.
> Shows current + next sprint. Full details in `generated/sprint_plans/`.

### Sprint 26: Yodel Yaks (3/31 - 4/14) — COMPLETED

**Actual Work Completed**:
- **Actor System Overhaul**: ENG plan completed by Jota
- **Bug fixes**: Addressed priority bugs
- **PTC Feedback tasks**: Implemented feedback from playtest
- Continue **Battle Content** and **Unit Content** pipelines

**Key Assignments**:

| Person | Focus | Notes |
|--------|-------|-------|
| Jota Oliveira | Actor System Overhaul ENG plan, bug fixes, PTC Feedback tasks | Solo client engineer, out 3/31 (starts 4/1). 8 avail days. Critical path. |
| Alessandro Oliveira | New VFXs | Starting this sprint |
| Danny Oliveira | VFXs implementation and polish | Starting this sprint |
| Vinod Rams | New unit concepts (Boss, Shared Assets for Heroes) | Starting this sprint |
| Lincoln Li | Battle HUD design direction | Also coordinating design prep for future features |
| Nathan Hajek | Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Battle Content pipeline | Ongoing |
| Vishaal Gupta | Battle Content + unit balance | Out 4/2 (1 day) |
| Julio Scarabelli | S25 bug verification + HUD QA prep | |
| Ben Clair, Felipe Chaves, Tony Bonilla, Vinicius | Unit Content art | Ongoing |

**Outcomes**:
- Actor System Overhaul engineering approach defined and documented
- Bug backlog reduced
- PTC feedback incorporated into builds
- Battle HUD Beta Overhaul deferred to S27 (design prep continued in parallel)

### Sprint 27: Zany Zebras (4/14 - 4/28) — CURRENT

**Goals**:
- **Actor System Overhaul** implementation (Jota, based on S26 ENG plan) — Sprint 1 of ~2
- **Hero implementation tech** (Jota) — new tech work
- **Battle HUD Beta Overhaul** design/UX work (Lincoln, Kevin) — design phase before eng implementation
- Continue design prep for upcoming features (Obstacles, Pathfinding & AI)
- Continue content pipelines

**Key Assignments**:

| Person | Focus | Notes |
|--------|-------|-------|
| Jota Oliveira | Actor System Overhaul implementation, Hero implementation tech | Solo client engineer. Critical path. Splitting time between Actor System and Hero tech. |
| Lincoln Li | Battle HUD design direction + finalization (CHI-35036) | Design/UX phase for Battle HUD this sprint |
| Kevin Ligon | Battle HUD UX support | Cross-pod support from Metagame |
| Nathan Hajek | Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Battle Content pipeline | Ongoing |
| Vishaal Gupta | Battle Content + unit balance | |
| Alessandro Oliveira, Danny Oliveira | VFXs | Continuing from S26 |
| Vinod Rams | Unit concepts | Continuing from S26 |
| Julio Scarabelli | QA support | |
| Ben Clair, Felipe Chaves, Tony Bonilla, Vinicius | Unit Content art | Ongoing |

**Risks & Awareness**:
- **Actor System focus**: Jota prioritizing Actor System Overhaul implementation this sprint
- **Battle HUD design phase**: Lincoln/Kevin doing design/UX work; engineering deferred to later sprint
- Still solo engineer (Jota) — no capacity flexibility
- 4 features totaling ~9 eng-sprints now compressed into 6 remaining sprints
- If Actor System or later Battle HUD eng runs long, downstream features (Obstacles, Pathfinding) at risk

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Capacity**: 1x ENG (Jota)

**CAPACITY NOTE**: 4 features totaling ~9 eng-sprints scheduled for 7-sprint milestone. Tight execution required.

```
Sprint 1 (S26):  Actor System Overhaul ENG plan, bug fixes, PTC feedback — COMPLETED
Sprint 2 (S27):  Actor System Overhaul implementation (eng), Battle HUD design/UX (Lincoln/Kevin)
Sprint 3 (S28):  Actor System Overhaul continues, Battle HUD eng start
Sprint 4 (S29):  Battle HUD eng continues, Pathfinding & AI start
Sprint 5 (S30):  Battle HUD eng continues, Pathfinding & AI continues
Sprint 6 (S31):  Battle HUD completes, Obstacles start
Sprint 7 (S32):  Obstacles completes, Pathfinding & AI continues / Buffer
```

Battle Content and Unit Content run in parallel on design/art track (see `planning/capacity.md`).

**Critical Path Risk**: Single engineer (Jota) means all features are sequential. Any delay cascades.

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2 | **Flex**: -

```
Sprint 1:  Pool Management
Sprint 2:  Build stability and bugfixing
```

Battle Engineer will work on Pool Management and build stability. Engineering capacity may flex to other pods (see `planning/capacity.md`).
Battle Content and Unit Content continue on design/art track.

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6 | **Flex**: [TBD]

```
Sprint 1-2:  Battle Server Validation Client
Sprint 3-6:  [TBD - awaiting feature definitions]
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
