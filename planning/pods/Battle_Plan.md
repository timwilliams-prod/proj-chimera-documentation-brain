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
    Actor System Overhaul (M&M 1)     :active,  bat1, 2026-03-31, 28d
    Battle HUD Design/UX Review (M&M 1)  :active,  bat2, 2026-03-31, 28d
    Battle HUD Implementation (M&M 2)  :active,  bat3, 2026-04-28, 28d
    Pathfinding & AI (M&M 2 - ongoing)  :active,  bat5, 2026-04-28, 56d
    Obstacles Exploration (M&M 2)     :active,  bat4, 2026-04-28, 14d

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

| #   | Feature                         | Milestone | Checkpoint | Estimate  | Status      | Related SHQs | What It Proves                                   |
| --- | ------------------------------- | --------- | ---------- | --------- | ----------- | ------------ | ------------------------------------------------ |
| 1   | Actor System Overhaul           | M&Ms      | M&M 1 (ends 4/27) | 2 sprints | IN PROGRESS | [TBD]        | Performance and maintainability for scale        |
| 2   | Battle HUD Beta Overhaul - Design/UX Review | M&Ms | M&M 1 (ends 4/27) | Design phase | DESIGN PHASE | SHQ4-1 | Combat interface design validated |
| 3   | Battle HUD Beta Overhaul - Implementation | M&Ms | M&M 2 (4/28-5/25) | 2 sprints | NOT STARTED | SHQ-01, SHQ-02 | Combat interface meets beta quality bar |
| 4   | Obstacles                       | M&Ms      | M&M 2 (4/28-5/25) | Exploration | EXPLORATION | [TBD]        | Environmental tactics add depth                  |
| 5   | Pathfinding & AI Improvements   | M&Ms      | M&M 2 (4/28-5/25) | Ongoing (as needed) | IN PROGRESS | [TBD]        | AI behavior feels intelligent and responsive     |
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
- **Obstacles prototypes** (Dylan) — design validation, prep for future eng
- **New Hero Concept: Toshoia** (Vinod, week 2 kickoff) — concept lead
- Continue design prep for upcoming features (Pathfinding & AI)
- Continue content pipelines

**Key Assignments**:

| Person | Focus | Notes |
|--------|-------|-------|
| Jota Oliveira | Actor System Overhaul implementation, Hero implementation tech | Solo client engineer. Critical path. Splitting time between Actor System and Hero tech. |
| Lincoln Li | Battle HUD design direction + finalization (CHI-35036) | Design/UX phase for Battle HUD this sprint |
| Kevin Ligon | Battle HUD UX support | Cross-pod support from Metagame |
| Nathan Hajek | Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Obstacles prototypes (design validation), Battle Content pipeline | Design validation prep for eng |
| Vishaal Gupta | Battle Content + unit balance | |
| Alessandro Oliveira, Danny Oliveira | VFXs | Continuing from S26 |
| Vinod Rams | Hero Toshoia 2D Concept Kick-Off (4/20), Unit concepts | Concept work continues into S28 |
| Vinicius | Unit Content art | Preparing for Hero concept work in S28 |
| Julio Scarabelli | QA support | |
| Ben Clair, Felipe Chaves, Tony Bonilla | Unit Content art | Ongoing |

**Risks & Awareness**:
- **Actor System focus**: Jota prioritizing Actor System Overhaul implementation this sprint
- **Battle HUD design phase**: Lincoln/Kevin doing design/UX work; engineering deferred to S28-S29 (2 sprints)
- Still solo engineer (Jota) — no capacity flexibility
- S28 will have Battle HUD (primary), Pathfinding turn-on (eng as needed), and Obstacles exploration (Dylan)
- If Actor System runs long in S27, S28 Battle HUD start is at risk

### Sprint 28: Abra (4/28 - 5/12) — PLANNED

**Goals**:
- **Battle HUD Beta Overhaul** implementation starts (Jota) — Sprint 1 of 2, engineering begins
- **Pathfinding & AI** turned on (Jota) — enable feature, engineering adjustments as needed
- **Obstacles** exploration (Dylan) — exploration and prototyping
- Continue content pipelines

**Key Assignments**:

| Person | Focus | Notes |
|--------|-------|-------|
| Jota Oliveira | Battle HUD Implementation (Sprint 1 of 2), Pathfinding & AI turn-on + adjustments as needed | Solo client engineer. Critical path. Pathfinding enabled this sprint with eng support as needed. |
| Dylan Jeffery | Obstacles exploration, Battle Content pipeline | Exploration and prototyping phase |
| Lincoln Li | Battle HUD support as needed | Design/UX completed in S27 |
| Nathan Hajek | Unit Design & Prototype (M&M) | |
| Vishaal Gupta | Battle Content + unit balance | |
| Alessandro Oliveira, Danny Oliveira | VFXs | |
| Julio Scarabelli | QA support | |
| **Hero Concept Art**: | | |
| Vinod Rams | Hero Toshoia or Hero Mecha Saboteur 2D Concept | Both concepts finish in S28. Assignment TBD with Vinicius. |
| Vinicius | Hero Toshoia or Hero Mecha Saboteur 2D Concept | Both concepts finish in S28. Assignment TBD with Vinod. |
| **Unit Content - Merrin**: | | |
| Felipe Chaves | Finish Merrin 3D | |
| Ben Clair | Start Merrin Rig & Skinning | |
| Tony Bonilla | Finish Trench Knight animations, Start Merrin Animations | Priority: Trench Knight completion |

**Risks & Awareness**:
- Battle HUD implementation starts — estimated 2 sprints total to complete (S28-S29)
- Pathfinding turned on in S28 — engineering adjustments as needed alongside Battle HUD work
- Obstacles exploration in S28 — will determine if engineering work needed in S30+
- Solo engineer (Jota) continues as bottleneck
- Jota splitting time between Battle HUD (primary) and Pathfinding adjustments (as needed)

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Capacity**: 1x ENG (Jota)

**M&M Checkpoints**:
- Checkpoint 1 (M&M 1): ends 4/27
- Checkpoint 2 (M&M 2): 4/28 - 5/25
- Checkpoint 3 (M&M 3): 5/26 - 6/22

**CAPACITY NOTE**: Battle HUD (2 sprints) is primary focus S28-S29. Pathfinding turned on S28 with ongoing eng adjustments as needed. Obstacles exploration in S28 informs future eng work.

```
M&M Checkpoint 1 (ends 4/27):
  Sprint 1 (S26):  Actor System Overhaul ENG plan, bug fixes, PTC feedback — COMPLETED
  Sprint 2 (S27):  Actor System Overhaul implementation — IN PROGRESS
                   Battle HUD Design/UX Review (Lincoln, Kevin) — DESIGN PHASE

M&M Checkpoint 2 (4/28 - 5/25):
  Sprint 3 (S28):  Battle HUD Implementation (Sprint 1 of 2)
                   Pathfinding & AI turned on (eng adjustments as needed)
                   Obstacles exploration (Dylan)
  Sprint 4 (S29):  Battle HUD Implementation (Sprint 2 of 2)
                   Pathfinding & AI adjustments continue as needed

M&M Checkpoint 3 (5/26 - 6/22):
  Sprint 5 (S30):  Obstacles eng (if needed based on S28 exploration)
  Sprint 6 (S31):  TBD - additional features or polish
  Sprint 7 (S32):  Buffer / Polish
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
