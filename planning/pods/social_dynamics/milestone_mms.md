# Social Dynamics — M&Ms Milestone Plan

Last Updated: 2026-04-21
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

**Switchover Goal**: In-client multiplayer functional enough to replace AI prototype for playtesting by end of M&Ms (6/22).

## Sprint Allocation

| Checkpoint | Sprint | Sprint Code | End Date | Focus |
|------------|--------|-------------|----------|-------|
| MM1 | S26–S27 | YY → ZZ | 4/27 | Multiplayer Map Foundation (P1 + P2) — Data (Loures), Models (Gabriel), Visualization (Randy) |
| MM2 | S28 | A | 5/12 | Tile Ownership/States/Visualization, Embark Flow, MP Map Instance Creation/List/Join dev UI v1 |
| MM2 | S29 | B | 5/26 | Battles, Troop Training |
| MM3 | S30 | C | 6/9 | Persistent Hero Health & Recovery, Hero Party Map Representation, Hero Energy & Pathing |
| MM3 | S31 | D | 6/23 | Tile Info & Actions, Tile Types & Cycle Generation |

## Checkpoint Goals

**MM1 — M&M Checkpoint 1 (ends 4/27)**
- Multiplayer Map Foundation in place: Data (Loures), Models (Gabriel), Visualization (Randy)
- Networking infrastructure stable enough to support MM2 work (Bruno Bacelar)
- AI Prototype remains the active playtest vehicle

**MM2 — M&M Checkpoint 2 (4/28 – 5/25)**
- **Sprint A (S28)**: Tile Ownership + Tile States + Map Visualization, Embark Flow (Dock + Hero Party + Troop Selection), MP Map Instance Creation/List/Join dev UI v1
- **Sprint B (S29)**: Battles, Troop Training
- In-client multiplayer demonstrably playable in dev UI
- MM2 covers most of P3 (Basic Game Logic)

**MM3 — M&M Checkpoint 3 (5/26 – 6/22)**
- **Sprint C (S30)**: Persistent Hero Health & Recovery, Hero Party Map Representation, Hero Energy & Pathing (P4)
- **Sprint D (S31)**: Tile Info & Actions, Tile Types & Cycle Generation (P5)
- **Switchover Goal**: in-client multiplayer ready to replace AI prototype as primary playtest vehicle
- Networking stable enough for multi-player playtests across the studio

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

## Beta Launch Prep & M&C Preview

Beta Launch Prep (S32–S33, ends 7/21) and M&C polish work (6 focus areas — see `features.md` Goal 2) — milestone plans will be drafted closer to date. Goal 1 (M&Ms internal playtest) is the focus.
