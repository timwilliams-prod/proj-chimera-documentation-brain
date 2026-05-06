# Social Dynamics Features

Last Updated: 2026-05-06
Doc Status: DRAFT
Pod Lead: Paul Flores

> Ranked backlog of all Social Dynamics features. Rank is global priority — #1 is always the most important thing.
> Full feature specs in `planning/features/`. Staffing in `planning/capacity.md`.

---

## Initial Launch Requirement

v1 multiplayer feature-complete by end of M&Ms (6/23), shippable to beta players by end of Beta Launch Prep (7/21).

> *In flight (not numbered)*: MM1 Multiplayer Map Foundation — **DONE**. Sprint A (S28, IN PROGRESS) — Tile Ownership/States/Visualization, Embark Flow, MP Map Instance Creation/List/Join dev UI v1, Battles, Troop Training. End-of-A state: players select MP room, land on map, battle to conquer neutral & other player tiles.

---

## v1 MVP — Targets Required to Release Anything at All

> The minimum set we must land across Sprints B/C/D (plus Beta Launch Prep) to ship a multiplayer beta. Treat these as hard targets. If we beat them, pull in Post-MVP items below — ideally we sprint faster and land more before M&Ms ends.

1. **MP Resource Generators** — M&Ms, Sprint B (S29), NOT STARTED
2. **Troops earning** — M&Ms, Sprint B (S29), NOT STARTED
3. **Persistent Hero Health** — M&Ms, Sprint C (S30), NOT STARTED
4. **Building Upgrades** — M&Ms, Sprint C (S30), NOT STARTED
5. **Meta basic ruleset** — M&Ms, Sprint D (S31), NOT STARTED
   Map cycle: open for fixed duration, then resets.
6. **Map Leaderboards v1** — M&Ms, Sprint D (S31), NOT STARTED
   Per-individual-map (not cross-season).
7. **Basic Matchmaking v1** — M&Ms, Sprint D (S31), NOT STARTED
8. **Onboarding implementation & polish** — Beta Launch Prep, Sprint E (S32), NOT STARTED
9. **UI polish & stability** — Beta Launch Prep, Sprint F (S33), NOT STARTED

---

## Post-MVP — Highest Priority Next Features

> The features we *want* to land for v1 — they make the experience meaningfully richer (hero identity, hero movement, items/buildings worth fighting over). Pull-in order if we beat MVP targets within M&Ms; otherwise these become the top of the M&C backlog.

10. **Hero Avatars** — Pull-in target
    Subsumes the prior "Hero Party Map Representation." Visible hero presence on the map.
11. **Hero Energy & Pathing + Attack/Defend Tile Actions** — Pull-in target
    Heroes physically move across the map and take tile-level actions.
12. **Story Shards** — Pull-in target
    Collectible items at random map locations.
13. **Basic Relics** — Pull-in target
    Item version of Passive Bonus Tiles.
14. **MP Barracks** — Pull-in target
15. **MP Foundations** — Pull-in target
16. **Passive Bonus Tiles** — Pull-in target

---

## Future

17. **Make the Experience More Dynamic** — M&C (P7)
    Players choose which map to embark to; per-map / global modifiers; departure logic (depart early, exit with spoils).

18. **Make the Experience More Clear** — M&C (P8, aka "Multiplayer Mode UX Pass")
    Map Activity Log; active modifiers / boosts display; Multiplayer Income Summary; End Level Reward Screen updates; Metagame Leaderboard (cross-season, all players/maps).

19. **Design Depth to Keep Players Engaged** — M&C (P9)
    Seasons (maps change over time); Leaderboard Payouts (chase rewards for staying in map); Buildings start at higher upgrade levels.

20. **Infrastructure Requirements** — M&C (P10)
    Battle Server Authoritative (hacking prevention); Matchmaking & Leaderboards backend hardening (from CT or built).

21. **Final UI Polish** — M&C
    Multiplayer Map Instance Creation / List / Joining — full-quality pass on screens that need it.

22. **Game Mode Onboarding** — M&C
    Extends Sprint E onboarding work into full new-player intro to Multiplayer mode.

23. **Ravager's Reef** — Live Ops & Social, 3 sprints, NOT STARTED
24. **Battlepass** — Live Ops & Social, 2 sprints, NOT STARTED

25. **Flags** — Post-launch, easy to add later
26. **Chat Messages** — Post-launch, easy to add later (or any cross-player comms)
27. **Coop Mode** — Post-launch, current mode is PvP-focused; explore coop variant after launch
