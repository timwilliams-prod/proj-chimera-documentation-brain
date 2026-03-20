# Battle Pod Plan

Last Updated: 2026-03-20
Pod Lead: [TBD]

> **What this file tracks**: Feature priorities per milestone and validation alignment.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationRoadmap.md`.

---

## Validation Focus

The Battle pod is primarily validating **WH-1: Battle Hypothesis** - that we can win at every point in the funnel by delivering on a compelling army battling experience centered on dramatic hero moments.

### BHQs This Pod Contributes To

Battle features contribute to these BHQs (full details in `planning/ValidationRoadmap.md`).
Note: some BHQs are cross-pod — Battle contributes but doesn't solely own them.

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| BHQ-B1 | Does the battle experience result in fun-to-execute gameplay that creates stickiness for a broad audience? | ANSWERED (3/3) | No |
| BHQ-B2 | Are in-game actions intuitive, quick to visually understand, and satisfying to execute? | ANSWERED (3/3) | No |
| BHQ-B3 | Is the player motivated to collect 'keys' (heroes) to solve various 'locks' (gameplay mechanics/challenges)? | TESTING (5/6, 1 neg) | Yes (connects to Metagame) |
| BHQ-B4 | Can our battle solution scale? Can we define what makes good levels in a repeatable way and produce them at an acceptable rate? | ANSWERED (3/3) | Yes (connects to Production) |

### Active SHQ Gaps

- **BHQ-B3** troop excitement answered negative. Design iteration needed — may require cross-pod input (Empire/Metagame).
- No new Battle SHQs defined for M&Ms yet. Current features are engineering foundations that extend validated systems.

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
    Battle HUD Beta Overhaul  :active,  bat1, 2026-03-18, 42d
    Obstacles                 :         bat2, after bat1, 14d
    Actor System Overhaul     :         bat3, after bat2, 14d
    Pathfinding & AI          :         bat4, after bat3, 14d
    Battle Server Val Client  :         bat5, after bat4, 14d
    Pool Management           :         bat6, after bat5, 14d

    section Beta Prep (ends Jul 21)
    Stabilization & Bugfix    :         bat_bp, after bat6, 14d

    section M&C (ends Oct 13)
    [TBD]                     :         bat_mc, after bat_bp, 84d

    section Continuous
    Battle Content            :active,  bat_content, 2026-03-18, 490d
    Unit Content              :active,  bat_units, 2026-03-18, 490d

```

> **Note**: M&Ms has 7 sprints available but 8 sprints of work scheduled. Pool Management overflows into the Beta Prep window by ~1 sprint. See Milestone Breakdown for details.

---

## Feature Priorities

All Battle features across milestones, ordered by priority within each milestone.

| #   | Feature                                                                               | Milestone | Estimate  | Status      | Related SHQs                          | What It Proves                                                        |
| --- | ------------------------------------------------------------------------------------- | --------- | --------- | ----------- | ------------------------------------- | --------------------------------------------------------------------- |
| 1   | [Battle HUD Beta Overhaul](../features/battle_hud_overhaul.md)                        | M&Ms      | 3 sprints | NOT STARTED | SHQ23 (battle depth), SHQ24 (clarity) | HUD supports readable, satisfying combat at scale                     |
| 2   | [Obstacles](../features/obstacles.md)                                                 | M&Ms      | 1 sprint  | NOT STARTED | SHQ23 (battle depth)                  | Terrain adds strategic variety to battle encounters                   |
| 3   | [Actor System Overhaul](../features/actor_system_overhaul.md)                         | M&Ms      | 1 sprint  | NOT STARTED | SHQ27 (scalable battles)              | Actor architecture supports content scale and new unit types          |
| 4   | [Pathfinding & AI Improvements](../features/pathfinding_ai.md)                        | M&Ms      | 1 sprint  | NOT STARTED | SHQ23 (battle depth), SHQ24 (clarity) | Units behave predictably and satisfyingly around obstacles/terrain    |
| 5   | [Battle Server Validation Client](../features/battle_server_validation.md)            | M&Ms      | 1 sprint  | NOT STARTED | WH-4 (servers)                        | Server-side validation prevents cheating; stability for multiplayer   |
| 6   | [Pool Management](../features/pool_management.md)                                     | M&Ms      | 1 sprint  | NOT STARTED | SHQ27 (scalable battles)              | Memory/performance stays stable as battle content scales              |
| 7   | [Battle Content](../features/battle_content.md)                                       | Ongoing   | Ongoing   | IN PROGRESS | SHQ27 (scalable battles)              | Content pipeline validates production capacity for battles at scale   |
| 8   | [Unit Content](../features/unit_content.md)                                           | Ongoing   | Ongoing   | IN PROGRESS | SHQ28 (hero/unit production pipeline) | Unit pipeline validates art/animation production throughput           |

> Feature docs marked as links may not exist yet — create with `planning/features/governors.md` as template.

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Flex**: None — overcommitted by 1 sprint

```
Sprint 1-3:  Battle HUD Beta Overhaul
Sprint 4:   Obstacles
Sprint 5:   Actor System Overhaul
Sprint 6:   Pathfinding & AI Improvements
Sprint 7:   Battle Server Validation Client
Sprint 8*:  Pool Management (*overflows into Beta Prep window)
```

Battle Content and Unit Content run in parallel on design/art track (see `planning/capacity.md`).

> **Risk**: No flex buffer. Pool Management pushes ~1 sprint into Beta Prep. If earlier features slip, downstream features compress further. Consider whether Pool Management can be deferred or parallelized.

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2 | **Flex**: -

Battle Engineers will focus on build stability and bugfixing (plus completing Pool Management if it overflows from M&Ms). Engineering capacity may flex to other pods (see `planning/capacity.md`).
Battle Content and Unit Content continue on design/art track.

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6 | **Flex**: [TBD]

```
Sprint 1-6:  [TBD - awaiting feature definitions]
```

Battle Content and Unit Content continue.

---

### Live Ops & Social

**Ends**: Feb 2, 2027 | **Sprints**: 8 | **Flex**: [TBD]

[TBD - awaiting feature definitions]

Battle Content and Unit Content continue.

---

### Soft Launch (UA Scale)

**Ends**: May 30, 2027 | **Sprints**: ~8 | **Flex**: [TBD]

[TBD - awaiting feature definitions]

Battle Content and Unit Content: final push. Content targets must be defined before this milestone.
