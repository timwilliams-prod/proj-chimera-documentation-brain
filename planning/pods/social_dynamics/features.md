# Social Dynamics Features

Last Updated: 2026-04-21
Doc Status: DRAFT
Pod Lead: Paul Flores

> Ranked backlog of all Social Dynamics features. Rank is global priority.
> Full feature specs in `planning/features/`. Staffing in `planning/capacity.md`.
>
> **Two vocabularies — both used:**
> - **MM1 / MM2 / MM3** = M&Ms checkpoint structure (rigid: 2 sprints each, used in planning docs and roadmap).
> - **P1–P10** = phases of multiplayer functionality build-up (not 1:1 with checkpoints; used as engineering shorthand for what gets built).
>
> **Parallel tracks (M&Ms)**: (1) AI Prototype — playtesting until in-client version is ready; (2) Multiplayer Maps build-up; (3) Networking infrastructure in parallel.
> **M&Ms goal**: Internal playtest by end of M&Ms (6/22). In-client multiplayer replaces AI prototype.

---

## Goal 1 — M&Ms Internal Playtest (by 6/22)

Sprint-by-sprint commitments. Sprint codes from Multiplayer Implementation Strategy (Notion).

### MM1 — Multiplayer Map Foundation Complete (through ZZ/S27)
1. **Multiplayer Map Foundation** — IN PROGRESS
   - Data (Marcos Loures), Models (Gabriel Arruda), Visualization (Randy Pasion)
   - Covers P1 (Infrastructure & Foundation) + P2 (Map Foundation)

### MM2 — Multiplayer Phase 2 Complete (Sprints A+B / S28–S29)
2. **Sprint A (S28 Abra, ends 5/12)** — NOT STARTED
   a. Tile Ownership / Tile States / Map Visualization
   b. Embark Flow (Dock + Hero Party + Troop Selection)
   c. Multiplayer Map Instance Creation / List / Join — dev UI v1

3. **Sprint B (S29, ends 5/26)** — NOT STARTED
   a. Battles
   b. Troop Training

   *Covers most of P3 (Basic Game Logic).*

### MM3 — Heroes & Tiles (Sprints C+D / S30–S31)
4. **Sprint C (S30, ends 6/9)** — NOT STARTED
   a. Persistent Hero Health & Recovery
   b. Hero Party Map Representation
   c. Hero Energy & Pathing

   *Covers P4 (Heroes on Map).*

5. **Sprint D (S31, ends 6/23)** — NOT STARTED
   a. Tile Info & Actions (view, attack, defend, fortify, upgrade)
   b. Tile Types & Cycle Generation

   *Covers P5 (Interesting Tiles).*

### Beta Launch Prep (Sprints E+F / S32–S33) — feature list only
*Detailed milestone plan TBD closer to date.*

6. **Sprint E (S32, ends 7/7)** — NOT STARTED
   a. Map Leaderboard v1 (single-map resource leaderboard) — *covers P6*
   b. Multiplayer Map Authoring

7. **Sprint F (S33, ends 7/21)** — NOT STARTED
   - Iteration / Flex

---

## Goal 2 — M&C Multiplayer Launch Polish

*Six focus areas to be sequenced during M&C planning. Relative sizing not yet locked — Paul iterating on simplifications.*

8. **Make the Experience More Dynamic** — covers P7 (Dynamic Experience)
   - Story Shards at random locations
   - Players choose which map to embark to
   - Per-map / global modifiers
   - Departure logic (depart early, exit with spoils)

9. **Make the Experience More Clear** — covers P8 (Clarity of State); aka "Multiplayer Mode UX Pass"
   - Map Activity Log
   - Active modifiers / boosts display (may leverage Passive Bonus Tiles + Empire Summary from Metagame)
   - Multiplayer Income Summary
   - End Level Reward Screen updates
   - Metagame Leaderboard (cross-season, all players/maps)

10. **Design Depth to Keep Players Engaged** — covers P9 (More Design Depth)
    - Seasons (maps change over time)
    - Leaderboard Payouts (chase rewards for staying in map)
    - Buildings start at higher upgrade levels

11. **Infrastructure Requirements** — covers P10 (Preparing for Rollout)
    - Battle Server Authoritative (hacking prevention)
    - Matchmaking & Leaderboards (backend services from CT or built)

12. **Final UI Polish**
    - Multiplayer Map Instance Creation / List / Joining — full-quality pass on screens that need it

13. **Game Mode Onboarding**
    - Design effort for new-player intro to Multiplayer mode

---

## Goal 3 — Post-Launch Backlog

14. **Flags** — easy to add later if wanted
15. **Chat Messages** (or any cross-player comms) — easy to add later
16. **Coop Mode** — current mode is PvP-focused; explore coop variant after launch

---

## Standalone Live Ops Features

17. **Ravager's Reef** — Live Ops & Social, 3 sprints, NOT STARTED
18. **Battlepass** — Live Ops & Social, 2 sprints, NOT STARTED

---

## Risky Prototype Areas (May Impact Foundation)

- **Embark Flow** — how players select starting position and which army units they bring
- **Map RNG** — controls needed over Battles, Tile Types, Unique Map Modifiers, Map Seasons (impacts data structure + designer control)
- **Map Visuals** — multiplayer maps differ from Territory/World Maps (more tiles, different POIs, multi-player state, fortifications)
