# Social Dynamics — M&Ms Milestone Plan

Last Updated: 2026-05-05
Doc Status: DRAFT
Pod Lead: Paul Flores

Ends: Jun 23, 2026 | Sprints: ~7

> **MM1 / MM2 / MM3** = the three M&Ms checkpoints (rigid: 2 sprints each).
> **P1–P10** = phases of multiplayer functionality (engineering shorthand; not 1:1 with checkpoints).
> Source of truth: Multiplayer Implementation Strategy (Notion).

## Parallel Tracks

| Track | Focus | People |
|-------|-------|--------|
| AI Prototype | Active playtest vehicle until in-client version is ready | Paul Flores |
| Multiplayer Maps | MM1 → MM3 build-up (sprint-by-sprint) | Randy Pasion, Garrett Eidsvig, Gabriel Arruda, Marcos Loures |
| Networking | Multiplayer networking infrastructure | Bruno Bacelar |

**Goal**: v1 multiplayer **feature-complete by end of M&Ms (6/23)** — shippable to beta players by end of Beta Launch Prep (7/21). In-client multiplayer replaces AI prototype during M&Ms; switchover quality is a sub-goal of "ship-quality v1."

## Sprint Allocation

| Checkpoint | Sprint | Sprint Code | End Date | Focus |
|------------|--------|-------------|----------|-------|
| MM1 | S26–S27 | YY → ZZ | 4/27 | Multiplayer Map Foundation (P1 + P2) — Data (Loures), Models (Gabriel), Visualization (Randy) |
| MM2 | S28 | A | 5/12 | Tile Ownership/States/Visualization, Embark Flow, MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training |
| MM2 | S29 | B | 5/26 | **Build & Earn**: MP Foundations, MP Resource Generators, MP Barracks, Troops earning |
| MM3 | S30 | C | 6/9 | **Hero Identity & Strategic Depth**: Persistent Hero Health, Hero Avatars, Building Upgrades, Passive Bonus Tiles, Basic Relics |
| MM3 | S31 | D | 6/23 | **Mobility, Meta Loop, Match Plumbing**: Hero Energy/Pathing + Attack/Defend Tile Actions, Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1, Story Shards |
| Beta Prep | S32 | E | 7/7 | **Onboarding**: Onboarding implementation & polish |
| Beta Prep | S33 | F | 7/21 | **Polish & Stability**: UI polish & stability — beta-launch ready |

## Checkpoint Goals

**MM1 — M&M Checkpoint 1 (ends 4/27)** — IN PROGRESS
- Multiplayer Map Foundation in place: Data (Loures), Models (Gabriel), Visualization (Randy)
- Networking infrastructure stable enough to support MM2 work (Bruno Bacelar)
- AI Prototype remains the active playtest vehicle

**MM2 — M&M Checkpoint 2 (4/28 – 5/25)**
- **Sprint A (S28)** — IN PROGRESS: Tile Ownership/States/Visualization, Embark Flow (Dock + Hero Party + Troop Selection), MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training
  - *End-of-A state*: Players select MP room, land on map, battle to conquer neutral & other player tiles
- **Sprint B (S29)** — "Build & Earn": MP Foundations, MP Resource Generators, MP Barracks, Troops earning
  - *End-of-B state*: Economic loop closes — conquer → build → earn → reinforce → conquer more
- MM2 covers most of P3 (Basic Game Logic) plus the building economy

**MM3 — M&M Checkpoint 3 (5/26 – 6/22)** — *v1 multiplayer feature-complete by end*
- **Sprint C (S30)** — "Hero Identity & Strategic Depth": Persistent Hero Health, Hero Avatars, Building Upgrades, Passive Bonus Tiles, Basic Relics
  - *End-of-C state*: Heroes have identity (visible avatar + persistent health); building economy deepens via upgrades; strategic high-value items/tiles worth fighting over
- **Sprint D (S31)** — "Mobility, Meta Loop, Match Plumbing": Hero Energy & Pathing + Attack/Defend Tile Actions, Meta basic ruleset, Map Leaderboards v1, Basic Matchmaking v1, Story Shards
  - *End-of-D state = v1 multiplayer feature-complete*: Full beat-loop — matched in → build → move heroes → fight & explore → climb leaderboard → cycle ends → next map
- **Switchover** happens during MM3 as the in-client build approaches ship-quality; AI prototype retired
- Networking stable enough for multi-player playtests across the studio

> **Heaviness flag (Sprint D)**: 5 items including Hero Energy/Pathing (originally a full sprint on its own). Matchmaking and Leaderboards likely need backend work running in parallel through Sprints B/C to actually land. Paul to discuss with engineering.

## Risky Prototype Areas (May Impact Foundation)

> These three areas could shift foundation choices if iteration changes the data shape or designer controls. Watch closely through MM1–MM2.

- **Embark Flow** — how players select starting position + which army units they bring
- **Map RNG** — controls over Battles, Tile Types, Unique Map Modifiers, Map Seasons (impacts data structure + designer control)
- **Map Visuals** — multiplayer maps differ from Territory/World Maps (more tiles, different POIs, multi-player state, fortifications)

## Capacity & Constraints

- 2 client engineers (Randy, Garrett) — both have Dozer split risk
- Gabriel Arruda and Marcos Loures transitioning from Empire — clean handoff needed
- Randy out 4/1–4/6 (PTO) during S26
- Additional resources expected for M&C polish work (Goal 2 areas)
- See `planning/capacity.md` for full staffing

## Beta Launch Prep

Two sprints to take v1 from feature-complete to shippable:
- **Sprint E (S32, ends 7/7)** — Onboarding implementation & polish (new-player intro to MP mode)
- **Sprint F (S33, ends 7/21)** — UI polish & stability (final screens pass, ship-readiness)
- *End-of-F state*: v1 multiplayer shippable to beta players

## M&C Preview

M&C polish work (6 focus areas — see `features.md` Goal 2) — milestone plans drafted closer to date. Includes deepening dynamic experience (Story Shards now in Goal 1; full P7 work is depth/randomization on top), clarity of state, design depth, infrastructure hardening, final UI polish, and game mode onboarding extensions.
