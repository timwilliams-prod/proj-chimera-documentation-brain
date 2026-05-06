# Social Dynamics — M&Ms Milestone Plan

Last Updated: 2026-05-06
Doc Status: DRAFT
Pod Lead: Paul Flores

Ends: Jun 23, 2026 | Sprints: ~7

> **MM1 / MM2 / MM3** = the three M&Ms checkpoints (rigid: 2 sprints each).
> Source of truth: Multiplayer Implementation Strategy (Notion).

**Goal**: Sprinting to get the multiplayer game mode functional for release. **v1 MVP feature-complete by end of M&Ms (6/23)** — shippable to beta players by end of Beta Launch Prep (7/21).

**Framing change (2026-05-06)**: Sprints B/C/D are now scoped to a **leaner v1 MVP** so we can guarantee something shippable. The targets below are the floor — the minimum we need to release anything at all. If we beat them, pull from the **Post-MVP** list in `features.md` in priority order (Hero Avatars → Hero Energy/Pathing → Story Shards → Basic Relics → MP Barracks → MP Foundations → Passive Bonus Tiles). Anything not pulled in lands at the top of the M&C backlog.

## Sprint Allocation

| Checkpoint | Sprint | Sprint Code | End Date | Focus |
|------------|--------|-------------|----------|-------|
| MM1 | S26–S27 | YY → ZZ | 4/27 | Multiplayer Map Foundation — **DONE** |
| MM2 | S28 | A | 5/12 | Tile Ownership/States/Visualization, Embark Flow, MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training |
| MM2 | S29 | B | 5/26 | **MVP target — Resources & Troops**: MP Resource Generators, Troops earning |
| MM3 | S30 | C | 6/9 | **MVP target — Hero Health & Building Depth** + **Matchmaking/Leaderboard Service Implementation (backend)**: Persistent Hero Health, Building Upgrades |
| MM3 | S31 | D | 6/23 | **MVP target — Meta Loop & Matchmaking** + **Matchmaking/Leaderboard Client Integration**: Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1 |
| Beta Prep | S32 | E | 7/7 | **Onboarding**: Onboarding implementation & polish |
| Beta Prep | S33 | F | 7/21 | **Polish & Stability**: UI polish & stability — beta-launch ready |

## Checkpoint Goals

**MM1 — M&M Checkpoint 1 (ends 4/27)** — **DONE**
- Multiplayer Map Foundation complete: Data (Loures), Models (Gabriel), Visualization (Randy)
- Networking infrastructure stable enough to support MM2 work (Bruno Bacelar)

**MM2 — M&M Checkpoint 2: Multiplayer SQS Complete (4/28 – 5/25)**
- **Sprint A (S28)** — IN PROGRESS: Tile Ownership/States/Visualization, Embark Flow (Dock + Hero Party + Troop Selection), MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training
  - *End-of-A state*: Players select MP room, land on map, battle to conquer neutral & other player tiles
- **Sprint B (S29)** — "Resources & Troops" (MVP target): MP Resource Generators, Troops earning
  - *End-of-B state*: Conquered tiles produce resources over time; players grow their army through ongoing training. Basic earn-and-reinforce loop is alive.
  - *Pull-in candidates if ahead*: MP Foundations, MP Barracks (originally planned here)
- **Checkpoint goal**: Multiplayer SQS Complete (MVP scope)

**MM3 — M&M Checkpoint 3: Matchmaking & Leaderboard Service Up and Running (5/26 – 6/22)** — *v1 MVP feature-complete by end*
- **Sprint C (S30)** — "Hero Health & Building Depth" (MVP target) + Matchmaking/Leaderboard service **implementation** (backend): Persistent Hero Health, Building Upgrades
  - *End-of-C state*: Heroes track health between battles (real consequence to losses); building economy deepens via upgrades; backend matchmaking & leaderboard services implemented.
  - *Pull-in candidates if ahead*: Hero Avatars, Passive Bonus Tiles, Basic Relics (originally planned here)
- **Sprint D (S31)** — "Meta Loop & Matchmaking" (MVP target) + Matchmaking/Leaderboard service **client integration**: Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1
  - *End-of-D state = v1 MVP feature-complete*: Players matched in → conquer tiles → earn resources → grow army → climb leaderboard → cycle ends → next map. **Note**: heroes engage via battle invocation only (no map-level hero movement at MVP — Hero Energy/Pathing is post-MVP).
  - *Pull-in candidates if ahead*: Hero Energy & Pathing + Attack/Defend Tile Actions, Story Shards (originally planned here)
- **Checkpoint goal**: Matchmaking & leaderboard service up and running (C = implementation, D = client integration)

## Risky Areas

> Some of these could shift foundation choices if iteration changes the data shape or designer controls (watch closely through MM2). Others reflect polish/quality time we may not have within the milestone.

- **Embark Flow** — how players select starting position + which army units they bring
- **Map RNG** — controls over Battles, Tile Types, Unique Map Modifiers, Map Seasons (impacts data structure + designer control)
- **MVP feel without hero movement** — End-of-D MVP has no map-level hero pathing or visible hero avatars. Players will see armies engaging tiles but not heroes traversing the map. Validate with design that this is shippable as a "v1 MVP" preview (vs. waiting until Hero Avatars + Energy/Pathing land).
- **MP Resource Generators dependency** — Originally planned alongside MP Foundations; verify with engineering whether generators can ship as tile-attached without the Foundations building system, or whether Foundations must come along.
- **UX/UI Visual Quality & Map/Gameplay Visuals** — unlikely to get a comfortable number of iteration cycles to land this in a great spot given the time and resources available. Expect rough edges through M&Ms; some polish in Beta Launch Prep (Sprint F), but full visual quality pass likely a Future / M&C item.

## Capacity & Constraints

- 2 client engineers (Randy, Garrett) — both have Dozer split risk
- Lighter MVP scope frees capacity for pull-in items if engineering moves faster than the floor plan
- See `planning/capacity.md` for full staffing

## Beta Launch Prep

Two sprints to take v1 MVP from feature-complete to shippable:
- **Sprint E (S32, ends 7/7)** — Onboarding implementation & polish (new-player intro to MP mode)
- **Sprint F (S33, ends 7/21)** — UI polish & stability (final screens pass, ship-readiness)
- *End-of-F state*: v1 MVP multiplayer shippable to beta players (whatever Post-MVP pulled in is included)

## M&C Preview

M&C polish work — see `features.md` Future section. Any **Post-MVP** items not pulled in during M&Ms (Hero Avatars, Hero Energy/Pathing, Story Shards, Basic Relics, MP Barracks, MP Foundations, Passive Bonus Tiles) become the **top of the M&C backlog** ahead of the existing Future items (Make the Experience More Dynamic, Clear, Design Depth, Infrastructure, Final UI Polish, Game Mode Onboarding).
