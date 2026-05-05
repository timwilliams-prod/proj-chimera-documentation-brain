# Social Dynamics — M&Ms Milestone Plan

Last Updated: 2026-05-05
Doc Status: DRAFT
Pod Lead: Paul Flores

Ends: Jun 23, 2026 | Sprints: ~7

> **MM1 / MM2 / MM3** = the three M&Ms checkpoints (rigid: 2 sprints each).
> Source of truth: Multiplayer Implementation Strategy (Notion).

**Goal**: Sprinting to get the multiplayer game mode functional for release. v1 multiplayer **feature-complete by end of M&Ms (6/23)** — shippable to beta players by end of Beta Launch Prep (7/21).

## Sprint Allocation

| Checkpoint | Sprint | Sprint Code | End Date | Focus |
|------------|--------|-------------|----------|-------|
| MM1 | S26–S27 | YY → ZZ | 4/27 | Multiplayer Map Foundation — **DONE** |
| MM2 | S28 | A | 5/12 | Tile Ownership/States/Visualization, Embark Flow, MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training |
| MM2 | S29 | B | 5/26 | **Build & Earn**: MP Foundations, MP Resource Generators, MP Barracks, Troops earning |
| MM3 | S30 | C | 6/9 | **Hero Identity & Strategic Depth** + **Matchmaking/Leaderboard Service Implementation (backend)**: Persistent Hero Health, Hero Avatars, Building Upgrades, Passive Bonus Tiles, Basic Relics |
| MM3 | S31 | D | 6/23 | **Mobility, Meta Loop** + **Matchmaking/Leaderboard Client Integration**: Hero Energy/Pathing + Attack/Defend Tile Actions, Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1, Story Shards |
| Beta Prep | S32 | E | 7/7 | **Onboarding**: Onboarding implementation & polish |
| Beta Prep | S33 | F | 7/21 | **Polish & Stability**: UI polish & stability — beta-launch ready |

## Checkpoint Goals

**MM1 — M&M Checkpoint 1 (ends 4/27)** — **DONE**
- Multiplayer Map Foundation complete: Data (Loures), Models (Gabriel), Visualization (Randy)
- Networking infrastructure stable enough to support MM2 work (Bruno Bacelar)

**MM2 — M&M Checkpoint 2: Multiplayer SQS Complete (4/28 – 5/25)**
- **Sprint A (S28)** — IN PROGRESS: Tile Ownership/States/Visualization, Embark Flow (Dock + Hero Party + Troop Selection), MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training
  - *End-of-A state*: Players select MP room, land on map, battle to conquer neutral & other player tiles
- **Sprint B (S29)** — "Build & Earn": MP Foundations, MP Resource Generators, MP Barracks, Troops earning
  - *End-of-B state*: Economic loop closes — conquer → build → earn → reinforce → conquer more
- **Checkpoint goal**: Multiplayer SQS Complete

**MM3 — M&M Checkpoint 3: Matchmaking & Leaderboard Service Up and Running (5/26 – 6/22)** — *v1 multiplayer feature-complete by end*
- **Sprint C (S30)** — "Hero Identity & Strategic Depth" + Matchmaking/Leaderboard service **implementation** (backend): Persistent Hero Health, Hero Avatars, Building Upgrades, Passive Bonus Tiles, Basic Relics
  - *End-of-C state*: Heroes have identity (visible avatar + persistent health); building economy deepens via upgrades; strategic high-value items/tiles worth fighting over; backend matchmaking & leaderboard services implemented
- **Sprint D (S31)** — "Mobility, Meta Loop" + Matchmaking/Leaderboard service **client integration**: Hero Energy & Pathing + Attack/Defend Tile Actions, Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1, Story Shards
  - *End-of-D state = v1 multiplayer feature-complete*: Full beat-loop — matched in → build → move heroes → fight & explore → climb leaderboard → cycle ends → next map
- **Checkpoint goal**: Matchmaking & leaderboard service up and running (C = implementation, D = client integration)

> **Heaviness flag (Sprint D)**: 5 items including Hero Energy/Pathing (originally a full sprint on its own) plus client-side matchmaking integration. Paul to discuss with engineering.

## Risky Areas

> Some of these could shift foundation choices if iteration changes the data shape or designer controls (watch closely through MM2). Others reflect polish/quality time we may not have within the milestone.

- **Embark Flow** — how players select starting position + which army units they bring
- **Map RNG** — controls over Battles, Tile Types, Unique Map Modifiers, Map Seasons (impacts data structure + designer control)
- **Map Visuals** — multiplayer maps differ from Territory/World Maps (more tiles, different POIs, multi-player state, fortifications)
- **UX/UI Visual Quality & Map/Gameplay Visuals** — unlikely to get a comfortable number of iteration cycles to land this in a great spot given the time and resources available. Expect rough edges through M&Ms; some polish in Beta Launch Prep (Sprint F), but full visual quality pass likely a Future / M&C item.

## Capacity & Constraints

- 2 client engineers (Randy, Garrett) — both have Dozer split risk
- See `planning/capacity.md` for full staffing

## Beta Launch Prep

Two sprints to take v1 from feature-complete to shippable:
- **Sprint E (S32, ends 7/7)** — Onboarding implementation & polish (new-player intro to MP mode)
- **Sprint F (S33, ends 7/21)** — UI polish & stability (final screens pass, ship-readiness)
- *End-of-F state*: v1 multiplayer shippable to beta players

## M&C Preview

M&C polish work — see `features.md` Future section. Includes deepening dynamic experience, clarity of state, design depth, infrastructure hardening, final UI polish, and game mode onboarding extensions.
