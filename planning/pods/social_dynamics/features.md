# Social Dynamics Features

Last Updated: 2026-04-08
Doc Status: DRAFT
Pod Lead: [TBD]

> Ranked backlog of all Social Dynamics features. Rank is global priority.
> Full feature specs in `planning/features/`. Staffing in `planning/capacity.md`.
>
> **Parallel tracks (M&Ms)**: (1) AI Prototype — playtesting until real client is ready,
> (2) Multiplayer Maps Build-Up — phases 1-10 below, (3) Networking — infrastructure in parallel.
> Switchover goal: in-client version replaces AI prototype during M&Ms.
> All phases (1-10) target completion by end of M&C (Oct 13, 2026).

---

## Multiplayer Map Build-Up (Phases 1-10)

Phases are sequential. Each phase builds on the previous. Staffing: 2 client engineers (Randy, Garrett) across M&Ms and M&C. Additional resources expected for later phases.

1. **P1: Infrastructure & Foundation** — ETA 3/30, COMPLETE
   Messaging infrastructure, game instance container pattern, testing.

2. **P2: Map Foundation** — ~1 month, IN PROGRESS
   Engineering work breakdown, map foundation support.

3. **P3: Basic Game Logic** — TBD
   a. Multiplayer Map Instance Creation / List / Join v1
   b. Multiplayer Map Authoring
   c. Embark Flow (dock selection + hero party & troop selection)
   d. Tile Ownership & Tile States & Map Visualization
   e. Troop Training (part 1)
   f. Battles

4. **P4: Heroes on Map** — TBD
   a. Hero Party Map Representation
   b. Persistent Hero Health & Recovery
   c. Hero Energy System & pathing
   d. Army Screen

5. **P5: Interesting Tiles** — TBD
   a. Tile Info and Actions (view, attack, defend, fortify, upgrade)
   b. Tile Types (Foundations, Barracks, Shrines)
   c. Cycle Generation System

6. **P6: Initial Rollout** — TBD
   a. Map Leaderboard

7. **P7: Dynamic Experience** — TBD
   a. Fog of War (hero avatar sight range)
   b. Story Shards at random locations
   c. 3 multiplayer options on entry
   d. Per-map modifiers
   e. Departure logic

8. **P8: Clarity of State** — TBD
   a. Active modifiers / passive boost display
   b. Map activity log (all players)
   c. Multiplayer income summary
   d. End level reward screen updates
   e. Metagame leaderboard (cross-season)

9. **P9: More Design Depth** — TBD
   a. Buildings start at higher upgrade levels
   b. Seasonal map changes
   c. Leaderboard payouts

10. **P10: Preparing for Rollout** — TBD
    a. Battle Server Authoritative
    b. Multiplayer Onboarding
    c. Map Instance System v2

## Standalone Features

11. **Ravager's Reef** — Post-P10, 3 sprints, NOT STARTED

12. **Battlepass** — Post-P10, 2 sprints, NOT STARTED
