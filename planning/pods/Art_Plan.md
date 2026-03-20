# Art Pod Plan

Last Updated: 2026-03-20
Pod Lead: [TBD]

> **What this file tracks**: Art production priorities per milestone and pipeline capacity.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationRoadmap.md`.

---

## Validation Focus

The Art pod supports all other pods by delivering high-quality visual assets that validate the aesthetic bar, scalability of art pipelines, and cross-pod content production capacity.

### BHQs This Pod Contributes To

Art production contributes to these BHQs across all pods (full details in `planning/ValidationRoadmap.md`).

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| [TBD] | Does our art pipeline support rapid iteration without sacrificing quality? | NOT YET TESTED | Yes (all pods) |
| [TBD] | Can we maintain visual consistency across Empire, Battle, and Metagame systems? | TESTING | Yes (all pods) |
| [TBD] | Is our art scalable for long-term content production? | NOT YET TESTED | Yes (all pods) |

---

## Roadmap View

```mermaid
gantt
    title Art Features by Milestone
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
    Character Assets          :active,  art1, 2026-03-18, 98d
    Environment Art           :active,  art2, 2026-03-18, 98d
    UI/UX Assets              :active,  art3, 2026-03-18, 98d
    VFX & Animation           :         art4, 2026-03-31, 84d

    section Beta Prep (ends Jul 21)
    Polish & Beta Quality     :         art_bp, 2026-06-24, 28d

    section M&C (ends Oct 13)
    Hero Assets Expansion     :         art5, 2026-07-22, 84d
    Monetization Art Assets   :         art6, 2026-07-22, 84d
    Content Pipeline Scaling  :         art7, 2026-07-22, 84d

    section Continuous
    Art Style Guide Updates   :active,  art_style, 2026-03-18, 490d
    Art Tool Development      :active,  art_tools, 2026-03-18, 490d

```

---

## Feature Priorities

All Art features across milestones, ordered by priority within each milestone.

| #   | Feature                        | Milestone | Estimate  | Status      | Related SHQs | What It Proves                                     |
| --- | ------------------------------ | --------- | --------- | ----------- | ------------ | -------------------------------------------------- |
| 1   | Character Assets               | M&Ms      | Ongoing   | IN PROGRESS | [TBD]        | Hero and unit art meets quality bar                |
| 2   | Environment Art                | M&Ms      | Ongoing   | IN PROGRESS | [TBD]        | Map tiles and world assets support exploration     |
| 3   | UI/UX Assets                   | M&Ms      | Ongoing   | IN PROGRESS | [TBD]        | Interface art supports beta quality bar            |
| 4   | VFX & Animation                | M&Ms      | Ongoing   | NOT STARTED | [TBD]        | Effects and motion enhance combat engagement       |
| 5   | Polish & Beta Quality          | Beta Prep | 2 sprints | NOT STARTED | [TBD]        | Art quality meets beta launch standards            |
| 6   | Hero Assets Expansion          | M&C       | Ongoing   | NOT STARTED | [TBD]        | Expanded hero roster supports monetization         |
| 7   | Monetization Art Assets        | M&C       | Ongoing   | NOT STARTED | [TBD]        | Shop and gacha visuals drive conversion            |
| 8   | Content Pipeline Scaling       | M&C       | Ongoing   | NOT STARTED | [TBD]        | Pipeline supports increased production velocity    |
| 9   | Art Style Guide Updates        | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Consistent visual language across all systems      |
| 10  | Art Tool Development           | Ongoing   | Ongoing   | IN PROGRESS | [TBD]        | Tooling efficiency validates production hypothesis |

> Feature docs may not exist yet — create as needed.

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Capacity**: [TBD - see capacity.md]

**Art Production Tracks**:

```
Character Assets:    Hero models, unit variations, character portraits
Environment Art:     Map tiles, buildings, terrain features, world map assets
UI/UX Assets:        Interface elements, icons, buttons, menus
VFX & Animation:     Combat effects, skill animations, transition effects
```

Art assets support all pod features running in parallel (see `planning/capacity.md` for discipline breakdown).

**Critical Path Risk**: Art dependencies block feature completion. Early asset delivery critical for iterative testing.

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2 | **Flex**: -

Art team focuses on polish, visual consistency, and addressing beta feedback. Final quality pass on all assets planned for beta launch.

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6 | **Flex**: [TBD]

```
Hero Assets Expansion:       New hero models, skins, variations
Monetization Art Assets:     Shop UI, gacha animations, premium visuals
Content Pipeline Scaling:    Process optimization, template expansion
```

Art production scales to support monetization features. Pipeline efficiency gains critical for M&C velocity.

---

## Milestone: Live Ops & Social

**Ends**: Feb 2, 2027 (8 sprints available)

### Features

[TBD - awaiting feature definitions]

Art production continues with focus on live ops content cadence and social feature visual systems.

---

## Milestone: Soft Launch (UA Scale)

**Ends**: May 30, 2027 (~8 sprints available)

### Features

[TBD - awaiting feature definitions]

Art pipeline: final optimization for soft launch content velocity. Long-term content roadmap targets must be defined before this milestone.
