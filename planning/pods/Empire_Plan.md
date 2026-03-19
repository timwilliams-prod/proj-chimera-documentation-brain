# Empire Pod Plan

Last Updated: 2026-03-19
Pod Lead: Diana Vasilescu

> **What this file tracks**: Feature priorities per milestone and validation alignment.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationRoadmap.md`.

---

## Validation Focus

The Empire pod is primarily validating **WH-2: Empire Hypothesis** - that we can retain better than traditional mobile 4X by anchoring early progression in intuitive, visual exploration on the map layer.

### BHQs This Pod Contributes To

Empire features contribute to these BHQs (full details in `planning/ValidationRoadmap.md`).
Note: some BHQs are cross-pod — Empire contributes but doesn't solely own them.

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| BHQ-E1 | Can we make the civ-like grid intuitive, scalable, and will players be motivated to explore? | NOT YET TESTED | No |
| BHQ-E2 | Can we create sharp return motivations that feel organic and not punishing? | TESTING | Potentially (metagame hooks) |
| BHQ-E3 | Can Empire progression remain compelling long-term ("one more turn" on mobile)? | NOT YET TESTED | Yes (connects to Metagame) |
| BHQ-E4 | Can we increase instant gratification when the player takes actions? | NOT YET TESTED | Yes (Battle + Empire) |

### Active SHQ Gaps

- **SHQ2** (empire strategy <-> tile conquest seamlessness) - IN PROGRESS
- **SHQ3** (map -> hero progression) - ANSWERED negative. May need cross-pod input (Battle/Metagame).
- **BHQ-E4** has no SHQs defined yet. Needs attention — likely requires Battle pod input too.

---

## Roadmap View

```mermaid
gantt
    title Empire Features by Milestone
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
    Governors                 :active,  emp1, 2026-03-18, 42d
    Territory Map VS          :         emp2, after emp1, 28d
    WM Building Upgrades      :         emp3, after emp2, 14d
    Flex / Risk Buffer        :         emp_flex1, after emp3, 14d

    section Beta Prep (ends Jul 21)
    No eng features           :         emp_bp, after emp_flex1, 28d

    section M&C (ends Oct 13)
    World Map VS              :         emp4, after emp_bp, 14d
    WM Zoom Filtering & LOD   :         emp5, after emp4, 14d
    Conquest Guide Full Screen :        emp6, after emp5, 7d
    Barrier & Story Iterations :        emp7, after emp6, 7d

    section Continuous
    Map Content               :active,  emp_content, 2026-03-18, 490d

```

---

## Feature Priorities

All Empire features across milestones, ordered by priority within each milestone.

| # | Feature | Milestone | Estimate | Status | Related SHQs | What It Proves |
|---|---------|-----------|----------|--------|-------------|----------------|
| 1 | [Governors](../features/governors.md) | M&Ms | 3 sprints | IN PROGRESS | SHQ7 (short/mid/long-term goals) | Long-term goal vector within Empire; meaningful project investment |
| 2 | [Territory Map VS](../features/territory_map_vs.md) | M&Ms | 2 sprints | NOT STARTED | SHQ1 (map at scale), SHQ2 (strategy <-> conquest) | Two map layers feel connected; seamless strategic flow |
| 3 | [WM Building Upgrades](../features/wm_building_upgrades.md) | M&Ms | 1 sprint | NOT STARTED | - | World map supports empire investment visibility |
| 4 | [Map Content](../features/map_content.md) | Ongoing | Ongoing | IN PROGRESS | SHQ1 (high visual bar, variety) | Content pipeline validates production capacity at scale |
| 5 | [World Map VS](../features/world_map_vs.md) | M&C | ~1 sprint | NOT STARTED | [TBD] | [TBD - map features to SHQs] |
| 6 | [WM Zoom Filtering & LOD](../features/wm_zoom_lod.md) | M&C | ~1 sprint | NOT STARTED | [TBD] | [TBD] |
| 7 | [Conquest Guide Full Screen](../features/conquest_guide.md) | M&C | ~0.5 sprint | NOT STARTED | [TBD] | [TBD] |
| 8 | [Barrier & Story Shard Iterations](../features/barrier_story_iterations.md) | M&C | ~0.5 sprint | NOT STARTED | [TBD] | [TBD] |

> Feature docs marked as links may not exist yet — create with `planning/features/governors.md` as template.

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7 | **Flex**: 1 sprint buffer for risk/iteration

```
Sprint 1-3:  Governors (IN PROGRESS)
Sprint 4-5:  Territory Map VS
Sprint 6:    WM Building Upgrades
Sprint 7:    Flex / risk buffer / iteration
```

Map Content runs in parallel on design/art track (see `planning/capacity.md`).

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2 | **Flex**: -

Empire Engineers will focus on build stability and bugfixing. Engineering capacity may flex to other pods (see `planning/capacity.md`).
Map Content continues on design/art track.

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6 | **Flex**: [TBD]

```
Sprint 1:    World Map VS
Sprint 2:    WM Zoom Filtering & LOD
Sprint 3:    Conquest Guide + Barrier & Story Iterations
Sprint 4-6:  [TBD - awaiting feature definitions]
```

Map Content continues. M&C validation alignment TBD.

---

### Live Ops & Social

**Ends**: Feb 2, 2027 | **Sprints**: 8 | **Flex**: [TBD]

[TBD - awaiting feature definitions]

Map Content continues.

---

### Soft Launch (UA Scale)

**Ends**: May 30, 2027 | **Sprints**: ~8 | **Flex**: [TBD]

[TBD - awaiting feature definitions]

Map Content: final push. Content targets must be defined before this milestone.
