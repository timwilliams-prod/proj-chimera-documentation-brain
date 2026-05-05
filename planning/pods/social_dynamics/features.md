# Social Dynamics Features

Last Updated: 2026-05-05
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
> **M&Ms goal**: v1 multiplayer **feature-complete by end of M&Ms (6/23)** — shippable to beta players by end of Beta Launch Prep (7/21). In-client multiplayer replaces AI prototype during this milestone.

---

## Goal 1 — v1 Multiplayer Ready for Beta Launch

Feature-complete by end of M&Ms (6/23), shippable by end of Beta Launch Prep (7/21).

### Priority Ranking (v1 Items + Sprint Assignment)

| Rank | Feature | Sprint |
|------|---------|--------|
| 1 | MP Resource Generators | B |
| 2 | MP Barracks | B |
| 3 | MP Foundations | B |
| 4 | Passive Bonus Tiles | C |
| 5 | Building Upgrades | C |
| 6 | Troops earning | B |
| 7 | Persistent Hero Health | C |
| 8 | Hero Avatars | C |
| 9 | Hero Energy & Pathing + Attack/Defend Tile Actions | D |
| 10 | Meta basic ruleset (map cycle/reset) | D |
| 11 | Map Leaderboards v1 (individual maps) | D |
| 12 | Basic Matchmaking v1 | D |
| + | Basic Relics (item version of Passive Bonus Tiles) | C |
| + | Story Shards (collectible items, pulled forward from P7) | D |
| 13 | Onboarding implementation & polish | E |
| 14 | UI polish & stability | F |

> Hero Avatars subsumes the prior "Hero Party Map Representation." Tile Types & Cycle Generation has been exploded into individual tile types (Foundations, Resource Generators, Barracks, Passive Bonus Tiles); the cycle/reset element is captured in Meta basic ruleset.

### Sprint-by-Sprint Commitments

#### MM1 — Multiplayer Map Foundation Complete (through ZZ/S27) — IN PROGRESS
1. **Multiplayer Map Foundation** — IN PROGRESS
   - Data (Marcos Loures), Models (Gabriel Arruda), Visualization (Randy Pasion)
   - Covers P1 (Infrastructure & Foundation) + P2 (Map Foundation)

#### MM2 — Sprint A (S28 Abra, ends 5/12) — IN PROGRESS
2. **Sprint A** — IN PROGRESS
   a. Tile Ownership / Tile States / Map Visualization
   b. Embark Flow (Dock + Hero Party + Troop Selection)
   c. Multiplayer Map Instance Creation / List / Join — dev UI v1
   d. Battles
   e. Troop Training

   *End-of-A state*: Players select an MP room, land on the map, and battle to conquer neutral & other player tiles. Covers most of P3 (Basic Game Logic).

#### MM2 — Sprint B (S29, ends 5/26) — "Build & Earn" — NOT STARTED
3. **Sprint B**
   a. **MP Foundations** *(priority #3)* — buildable foundation slot on owned tiles (prereq for buildings)
   b. **MP Resource Generators** *(priority #1)* — passive resource income building
   c. **MP Barracks** *(priority #2)* — passive troop generation building
   d. **Troops earning** *(priority #6)* — passive troop generation tied to Barracks

   *End-of-B state*: Economic loop closes. Players claim tiles → place Foundations → build Resource Generators and Barracks. Conquer → build → earn → reinforce → conquer more.

#### MM3 — Sprint C (S30, ends 6/9) — "Hero Identity & Strategic Depth" — NOT STARTED
4. **Sprint C**
   a. **Persistent Hero Health** *(priority #7)* — heroes carry health between engagements (real cost to fight)
   b. **Hero Avatars** *(priority #8)* — heroes visible on map (subsumes Hero Party Map Representation)
   c. **Building Upgrades** *(priority #5)* — buildings upgradeable for stronger output
   d. **Passive Bonus Tiles** *(priority #4)* — strategic tile types granting passive bonuses while controlled
   e. **Basic Relics** *(new)* — item version of Passive Bonus Tiles (passive bonus, but an item not a tile)

   *End-of-C state*: Heroes have identity (visible avatar + persistent health). Building economy deepens via upgrades. Passive Bonus Tiles + Basic Relics introduce strategic high-value targets worth fighting over.

#### MM3 — Sprint D (S31, ends 6/23 = end of M&Ms) — "Mobility, Meta Loop, Match Plumbing" — NOT STARTED
5. **Sprint D** — *v1 multiplayer feature-complete by end of this sprint*
   a. **Hero Energy & Pathing + Attack/Defend Tile Actions** *(priority #9)* — heroes spend energy to traverse paths and execute tile actions
   b. **Meta basic ruleset** *(priority #10)* — map cycle: open for fixed duration, then resets
   c. **Map Leaderboards v1** *(priority #11)* — per-individual-map leaderboards (not cross-season)
   d. **Basic Matchmaking v1** *(priority #12)* — players matched into map instances
   e. **Story Shards** *(pulled forward from P7)* — collectible items at random map locations

   *End-of-D state = v1 multiplayer feature-complete*: Full beat-loop closes. Matched in → build → move heroes → fight & explore → climb leaderboard → cycle ends → matched into next map.

   > **Heaviness flag**: Sprint D carries 5 items including Hero Energy/Pathing (originally a full sprint on its own). Matchmaking and Leaderboards likely need backend work running in parallel through B/C to actually land. Paul to discuss with engineering.

#### Beta Launch Prep — Sprint E (S32, ends 7/7) — Onboarding — NOT STARTED
6. **Sprint E**
   a. **Onboarding implementation & polish** *(priority #13)* — new-player intro to MP mode

#### Beta Launch Prep — Sprint F (S33, ends 7/21) — Polish & Stability — NOT STARTED
7. **Sprint F** — *Beta-launch ready by end of this sprint*
   a. **UI polish & stability** *(priority #14)* — final pass on screens, ship-readiness

   *End-of-F state*: v1 multiplayer is shippable to beta players.

---

## Goal 2 — M&C Multiplayer Launch Polish

*Six focus areas to be sequenced during M&C planning. Relative sizing not yet locked — Paul iterating on simplifications.*

8. **Make the Experience More Dynamic** — covers P7 (Dynamic Experience)
   - ~~Story Shards at random locations~~ *(pulled forward to Goal 1, Sprint D — full P7 work here is depth/randomization on top)*
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
