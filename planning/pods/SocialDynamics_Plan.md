# Social Dynamics Pod Plan

Last Updated: 2026-03-19
Pod Lead: [TBD]

> **What this file tracks**: Feature priorities per milestone and validation alignment.
> **What lives elsewhere**: Feature details in `planning/features/*.md`. Staffing in `planning/capacity.md`. Sprint execution in ClickUp.
> For the full validation hierarchy, see `planning/ValidationRoadmap.md`.

---

## Strategy: Two Parallel Tracks

Social Dynamics runs two parallel tracks during M&Ms:

1. **Multiplayer AI Prototype** -- Playtesting and iterating on the AI-driven prototype throughout M&Ms. This is our active playtest vehicle until the real client is ready.
2. **Map Foundation Build-Up** -- Engineering builds the real multiplayer map phase by phase (see Feature Phases below).

**Switchover Goal**: Get the in-client version functional enough to replace the AI prototype for playtesting during M&Ms.
**Player Release Goal**: Ship multiplayer to players during / at the end of M&C.

**Staffing**: 2 client engineers (Randy, Garrett) across M&Ms and M&C.

---

## Roadmap View

```mermaid
gantt
    title Social Dynamics - Multiplayer Build-Up
    dateFormat YYYY-MM-DD
    axisFormat %b '%y
    tickInterval 2week

    section Track 1: AI Prototype
    Playtesting & Iteration       :active,  ai1, 2026-03-19, 2026-06-23

    section Track 2: Map Build-Up
    P1 - Infrastructure & Foundation :active,  sd1, 2026-03-19, 2026-03-30
    P2 - Map Foundation              :         sd2, after sd1, 30d
    P2 - Basic Game Logic            :         sd3, after sd2, 42d
    P3 - Heroes on Map               :         sd4, after sd3, 28d
    P4 - Interesting Tiles            :         sd5, after sd4, 28d
    P5 - Initial Rollout              :         sd6, after sd5, 14d

    section Post-Rollout
    P6 - Dynamic Experience           :         sd7, after sd6, 28d
    P7 - Clarity of State             :         sd8, after sd7, 28d
    P8 - More Design Depth            :         sd9, after sd8, 28d
    P9 - Preparing for Rollout        :         sd10, after sd9, 28d

    section Standalone Features
    Ravager's Reef                    :         sd_rr, after sd6, 42d
    Battlepass                        :         sd_bp, after sd_rr, 28d

    section Milestones
    M&M - Jun 23              :crit, milestone, 2026-06-23, 0d
    Beta Prep - Jul 21        :crit, milestone, 2026-07-21, 0d
    M&C - Oct 13              :crit, milestone, 2026-10-13, 0d
    Live Ops & Social - Feb 2 :crit, milestone, 2027-02-02, 0d
    Soft Launch - May 30      :crit, milestone, 2027-05-30, 0d
```

> Gantt durations for Phases 2-9 are estimates. Actual timelines TBD as breakdowns are finalized.

---

## Feature Phases

### Phase 1 (CURRENT) -- Multiplayer Infrastructure & Foundation
**ETA**: 3/30/2026

| Engineer | Work |
|----------|------|
| Randy | Messaging Infrastructure, Game Instance Container Pattern, Testing & Validation |
| Garrett | Real multiplayer infrastructure (pending breakdown) |

### Phase 2 -- Map Foundation (~1 month)

- Engineering Work Breakdown
- Map Foundation Support

### Phase 2 -- Basic Game Logic (TBD)

| # | Feature |
|---|---------|
| 1 | Multiplayer Map Instance Creation / List / Join v1 |
| 2 | Multiplayer Map Authoring |
| 3 | Embark Flow (Dock Selection + 1-3 hero party & troop selection) |
| 4 | Tile Ownership & Tile States & Map Visualization |
| 9 (part 1) | Troop Training |
| 13 | Battles |

### Phase 3 -- Heroes on Map (TBD)

| # | Feature |
|---|---------|
| 5 | Hero Party Map Representation |
| 6 | Persistent Hero Health & Recovery |
| 7 | Hero Energy System (& pathing) |
| 9 (part 2) | Army Screen |

### Phase 4 -- Interesting Tiles (TBD)

| # | Feature |
|---|---------|
| 10 | Tile Info and Actions (view info, attack, defend, Fortify, Upgrade) |
| 11 | Tile Types (Foundations, Barracks, Shrines) |
| 8 | Cycle Generation System |

### Phase 5 -- "Initial Rollout" / Completed Game Loop (TBD)

| # | Feature |
|---|---------|
| 12 | Map Leaderboard |

---

### Phase 6 -- Dynamic Experience (TBD)

| # | Feature |
|---|---------|
| 14 | Fog of War -- Multiplayer Logic, supporting Hero Avatar sight range |
| 15 | Story Shards appear at random locations |
| 18 | When I enter multiplayer, I have 3 options to select from |
| 19 | Each Map in Multiplayer has a different modifier |
| 24 | Departure logic |

### Phase 7 -- Clarity of State (TBD)

| # | Feature |
|---|---------|
| 17 | I can see all of my active modifiers / passive boost tiles |
| 20 | I can see a "log" of things that have happened on the map by all players |
| 22 | I see a multiplayer Income Summary |
| 23 | End Level Reward Screen Updates |
| 25 | Metagame Leaderboard (comparing ALL players across the whole season) |

### Phase 8 -- More Design Depth (TBD)

| # | Feature |
|---|---------|
| 16 | Buildings can start at a higher upgrade level |
| 21 | "Seasonal" support where the map changes over time |
| 26 | Leaderboard Payouts |

### Phase 9 -- Preparing for Rollout (TBD)

| # | Feature |
|---|---------|
| 27 | Battle Server Authoritative |
| 28 | Multiplayer Onboarding |
| 1 | Multiplayer Map Instance System v2 |

---

## Standalone Features (Post-Initial Rollout)

| Feature | Estimate | Milestone | Status |
|---------|----------|-----------|--------|
| Ravager's Reef | 3 sprints | TBD (post-M&C) | NOT STARTED |
| Battlepass | 2 sprints | TBD (post-M&C) | NOT STARTED |

---

## Milestone Breakdown

### M&Ms (Multiplayer & Meta)

**Ends**: Jun 23, 2026 | **Sprints**: ~7

Two parallel tracks:
- **AI Prototype**: Continuous playtesting and iteration throughout milestone
- **Map Build-Up**: Phase 1 through as far as possible (target: enough for playtest switchover)

```
Phase 1:  Infrastructure & Foundation (through 3/30)
Phase 2:  Map Foundation (~1 month)
Phase 2:  Basic Game Logic
Phase 3+: As time allows -- goal is playtest switchover from AI prototype
```

---

### Beta Launch Prep

**Ends**: Jul 21, 2026 | **Sprints**: 2

[TBD - likely stabilization and continued map build-up]

---

### M&C (Monetization & Conversion)

**Ends**: Oct 13, 2026 | **Sprints**: 6

Continue phased build-up toward player release. Target: multiplayer ships to players during / at end of M&C.

---

### Live Ops & Social

**Ends**: Feb 2, 2027 | **Sprints**: 8

Post-release phases (6-9) + Ravager's Reef (3 sprints) + Battlepass (2 sprints).

---

### Soft Launch (UA Scale)

**Ends**: May 30, 2027 | **Sprints**: ~8

[TBD]
