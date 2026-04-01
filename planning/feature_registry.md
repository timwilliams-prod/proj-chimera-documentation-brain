# Feature Registry

Last Updated: 2026-03-24 (spec-sync run)

> **What this file is**: The authoritative mapping of features to their Notion source documents and local spec files.
> `/spec-sync` reads this file to know which features need specs and where to pull design content from.
> For milestone goals, success criteria, and "why it's required" context, see `planning/product_targets.md`.
> For validation hypotheses, see `planning/ValidationPlan.md`.

---

## How to Use This File

- Add a row for each feature that should have a local spec in `planning/features/`
- **Milestone**: When this feature is planned for introduction (not necessarily when all work completes)
- **Notion ID**: The page UUID from the Notion URL (after the last dash, or the full UUID with dashes)
- **Feature** column links to the local spec file in `planning/features/`
- `/spec-sync` uses this table to fetch Notion content and create/update local specs

---

## Registry

### Empire

Map experiences built on a hex grid. Territory Maps are the tile-level gameplay; the World Map connects territories and game modes.

**Tooling & Pipelines**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Map Editor](features/map_editor.md) | Ongoing | | Stub Only |
| [Map Content Pipeline](features/map_content_pipeline.md) | Ongoing | | Stub Only |

**Territory Map**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Territory Map Vertical Slice](features/territory_map_vs.md) | M&Ms | | Stub Only |
| [Scripted Sequences](features/scripted_sequences.md) | Core Experience | | Stub Only |
| [Objectives](features/objectives.md) | Core Experience | | Stub Only |
| [Zeppelin](features/zeppelin.md) | Core Experience | | Stub Only |
| [Barriers](features/barriers.md) | Core Experience | 2313f0b3-b6ab-8017-8344-c4cda3777cbd | Has Spec |
| [Treasure Chests](features/treasure_chests.md) | Core Experience | 1e33f0b3-b6ab-80d2-bc9a-f21288f47038 | Has Spec |
| [Narrative Events](features/narrative_events.md) | Core Experience | | Stub Only |
| [Story Shards](features/story_shards.md) | Core Experience | | Stub Only |
| [Barrier & Story Shard Iterations](features/barrier_story_shard.md) | M&C | | Stub Only |
| [Map Content (final targets)](features/map_content_final.md) | Soft Launch | | Stub Only |

**Foundations & Buildings**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Resource Generators](features/resource_generators.md) | Core Experience | | Stub Only |
| [Barracks](features/barracks.md) | Core Experience | | Stub Only |
| [WM Support for Building Upgrades](features/building_upgrades_wm.md) | M&Ms | | Stub Only |

**World Map**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [World Map Vertical Slice](features/world_map_vs.md) | M&C | | Stub Only |
| [World Map Zoom & LOD](features/world_map_zoom_lod.md) | M&C | | Stub Only |
| [Conquest Guide Full Screen](features/conquest_guide_fs.md) | M&C | | Stub Only |

**Empire Progression**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Governors](features/governors.md) | M&Ms | | Has Spec |

---

### Metagame

Progression systems, hero/army depth, and engagement loops.

**Hero Progression**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Hero List](features/hero_list.md) | Core Loop | | Stub Only |
| [Hero Info](features/hero_info.md) | Core Loop | | Stub Only |
| [Hero Leveling](features/hero_leveling.md) | Core Loop | | Stub Only |
| [Gear](features/gear.md) | Systems Validation | | Stub Only |
| [Hero Ranking Up](features/hero_ranking_up.md) | M&C | | Stub Only |
| [Hero Empowering](features/hero_empowering.md) | Live Ops & Social | | Stub Only |
| [Hero Ability Leveling Up](features/hero_ability_leveling.md) | Live Ops & Social | | Stub Only |
| [Hero Summoning](features/hero_summoning.md) | M&C | | Stub Only |

**Army Progression**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Troop Unlocking & Recruiting](features/troop_recruiting.md) | Core Loop | | Stub Only |
| [Troop Upgrade Tree](features/troop_upgrade_tree.md) | Core Loop | | Stub Only |
| [Passive Bonus Tiles](features/passive_bonus_tiles.md) | Core Loop | 2333f0b3-b6ab-80d1-b07b-c9767cb903b0 | Has Spec |
| [Academies](features/academies.md) | M&C | | Stub Only |

**Game Modes**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Dungeons](features/dungeons.md) | Systems Validation | | Stub Only |
| [Timed PvE Live Ops Maps](features/timed_pve_maps.md) | M&C | | Stub Only |

**Economy & Monetization**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Shop](features/shop.md) | M&C | | Stub Only |
| [Ad Monetization](features/ad_monetization.md) | M&C | | Stub Only |
| [Mobile Extractors](features/mobile_extractors.md) | M&C | | Stub Only |

**Engagement & Retention**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Timed Objectives](features/timed_objectives.md) | M&C | | Stub Only |
| [Daily Quests](features/daily_quests.md) | M&C | | Stub Only |
| [Achievements](features/achievements.md) | M&C | | Stub Only |
| [Live Events](features/live_events.md) | M&C | | Stub Only |
| [End Level Reward Screen](features/end_level_reward_screen.md) | M&C | | Stub Only |
| [Interstitials](features/interstitials.md) | M&C | | Stub Only |
| [Empire Summary](features/empire_summary.md) | M&C | | Stub Only |

**Infrastructure & UX**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Tutorial Expansion](features/tutorial_expansion.md) | M&C | | Stub Only |
| [Inbox & Admin Comms](features/inbox_admin_comms.md) | M&C | | Stub Only |
| [Notifications](features/notifications.md) | M&C | | Stub Only |
| [UI Stability & Performance](features/ui_stability_performance.md) | M&C | | Stub Only |
| [Initial Login Flow Optimization](features/login_flow_optimization.md) | M&C | | Stub Only |
| [Growthbook Integration](features/growthbook_integration.md) | M&C | | Stub Only |

---

### Battle

Real-time battle system: combat mechanics, HUD, and content pipeline.

**Tooling & Pipelines**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Battle Designing Tools](features/battle_designing_tools.md) | Ongoing | | Stub Only |
| [Battle Content Pipeline](features/battle_content_pipeline.md) | Ongoing | | Stub Only |

**Combat Mechanics**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Battle HUD Beta Overhaul](features/battle_hud.md) | M&Ms | | Stub Only |
| [Wombo Combo](features/wombo_combo.md) | Core Experience | | Stub Only |
| [Obstacles](features/obstacles.md) | Core Experience | | Stub Only |
| [Pathfinding](features/pathfinding.md) | Core Experience | | Stub Only |

---

### Units

Unit design, runtime systems, and content production.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Unit Designing Tools](features/unit_designing_tools.md) | Ongoing | | Stub Only |
| [Actor System](features/actor_system.md) | Core Experience | | Stub Only |
| [Unit Content Pipeline](features/unit_content_pipeline.md) | Ongoing | | Stub Only |

---

### Social Dynamics

Multiplayer modes, competitive systems, and live engagement.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Multiplayer Map Game Mode](features/multiplayer_map.md) | M&Ms | | Stub Only |
| [Matchmaking](features/matchmaking.md) | M&Ms | | Stub Only |
| [Ravager's Reef](features/ravagers_reef.md) | Live Ops & Social | | Stub Only |
| [Battlepass](features/battlepass.md) | Live Ops & Social | | Stub Only |

---

### Dozer

Engineering infrastructure: performance, optimization, security, and DevOps.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Performance & Optimization](features/performance_optimization.md) | Ongoing | | Stub Only |
| [Security](features/security.md) | Ongoing | | Stub Only |
| [DevOps](features/devops.md) | Ongoing | | Stub Only |

---

### Cross-Pod

Features that span multiple pods and require cross-team coordination.

| Feature | Pod(s) | Milestone | Notion ID | Status |
|---------|--------|-----------|-----------|--------|
| [Player Journey](features/player_journey.md) | All | Ongoing | | Stub Only |

---

## Status Values

- **Has Spec** — Local spec exists and is maintained
- **Needs Spec** — No local spec yet; `/spec-sync` will create one from Notion (or a stub if no Notion ID)
- **Stub Only** — Spec exists but is mostly TBDs
- **Archived** — Feature removed from scope; spec kept for reference

---

## Notes

- Not every Notion doc needs a registry entry — only features that warrant a local spec
- If a feature has no Notion doc, leave Notion ID blank — `/spec-sync` will create a stub
- When adding Notion IDs: open the page in Notion, copy the URL, extract the UUID after the last dash
- Past milestone features (Core Experience, Core Loop, Systems Validation) included for completeness
- Tooling and pipeline features marked "Ongoing" evolve across milestones rather than shipping in one
- Priority (must-have / nice-to-have) lives in `product_targets.md`, not here
