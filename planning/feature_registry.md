# Feature Registry

Last Updated: 2026-03-24

> **What this file is**: The authoritative mapping of features to their Notion source documents and local spec files.
> `/spec-sync` reads this file to know which features need specs and where to pull design content from.
> For milestone goals, success criteria, and "why it's required" context, see `planning/product_targets.md`.
> For validation hypotheses, see `planning/ValidationRoadmap.md`.

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
| [Map Editor](features/map_editor.md) | Ongoing | | Needs Spec |
| [Map Content Pipeline](features/map_content_pipeline.md) | Ongoing | | Needs Spec |

**Territory Map**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Territory Map Vertical Slice](features/territory_map_vs.md) | M&Ms | | Needs Spec |
| [Scripted Sequences](features/scripted_sequences.md) | Core Experience | | Needs Spec |
| [Objectives](features/objectives.md) | Core Experience | | Needs Spec |
| [Zeppelin](features/zeppelin.md) | Core Experience | | Needs Spec |
| [Barriers](features/barriers.md) | Core Experience | | Needs Spec |
| [Treasure Chests](features/treasure_chests.md) | Core Experience | | Needs Spec |
| [Narrative Events](features/narrative_events.md) | Core Experience | | Needs Spec |
| [Story Shards](features/story_shards.md) | Core Experience | | Needs Spec |
| [Barrier & Story Shard Iterations](features/barrier_story_shard.md) | M&C | | Needs Spec |
| [Map Content (final targets)](features/map_content_final.md) | Soft Launch | | Needs Spec |

**Foundations & Buildings**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Resource Generators](features/resource_generators.md) | Core Experience | | Needs Spec |
| [Barracks](features/barracks.md) | Core Experience | | Needs Spec |
| [WM Support for Building Upgrades](features/building_upgrades_wm.md) | M&Ms | | Needs Spec |

**World Map**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [World Map Vertical Slice](features/world_map_vs.md) | M&C | | Needs Spec |
| [World Map Zoom & LOD](features/world_map_zoom_lod.md) | M&C | | Needs Spec |
| [Conquest Guide Full Screen](features/conquest_guide_fs.md) | M&C | | Needs Spec |

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
| [Hero List](features/hero_list.md) | Core Loop | | Needs Spec |
| [Hero Info](features/hero_info.md) | Core Loop | | Needs Spec |
| [Hero Leveling](features/hero_leveling.md) | Core Loop | | Needs Spec |
| [Gear](features/gear.md) | Systems Validation | | Needs Spec |
| [Hero Ranking Up](features/hero_ranking_up.md) | M&C | | Needs Spec |
| [Hero Empowering](features/hero_empowering.md) | Live Ops & Social | | Needs Spec |
| [Hero Ability Leveling Up](features/hero_ability_leveling.md) | Live Ops & Social | | Needs Spec |
| [Hero Summoning](features/hero_summoning.md) | M&C | | Needs Spec |

**Army Progression**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Troop Unlocking & Recruiting](features/troop_recruiting.md) | Core Loop | | Needs Spec |
| [Troop Upgrade Tree](features/troop_upgrade_tree.md) | Core Loop | | Needs Spec |
| [Passive Bonus Tiles](features/passive_bonus_tiles.md) | Core Loop | | Needs Spec |
| [Academies](features/academies.md) | M&C | | Needs Spec |

**Game Modes**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Dungeons](features/dungeons.md) | Systems Validation | | Needs Spec |
| [Timed PvE Live Ops Maps](features/timed_pve_maps.md) | M&C | | Needs Spec |

**Economy & Monetization**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Shop](features/shop.md) | M&C | | Needs Spec |
| [Ad Monetization](features/ad_monetization.md) | M&C | | Needs Spec |
| [Mobile Extractors](features/mobile_extractors.md) | M&C | | Needs Spec |

**Engagement & Retention**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Timed Objectives](features/timed_objectives.md) | M&C | | Needs Spec |
| [Daily Quests](features/daily_quests.md) | M&C | | Needs Spec |
| [Achievements](features/achievements.md) | M&C | | Needs Spec |
| [Live Events](features/live_events.md) | M&C | | Needs Spec |
| [End Level Reward Screen](features/end_level_reward_screen.md) | M&C | | Needs Spec |
| [Interstitials](features/interstitials.md) | M&C | | Needs Spec |
| [Empire Summary](features/empire_summary.md) | M&C | | Needs Spec |

**Infrastructure & UX**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Tutorial Expansion](features/tutorial_expansion.md) | M&C | | Needs Spec |
| [Inbox & Admin Comms](features/inbox_admin_comms.md) | M&C | | Needs Spec |
| [Notifications](features/notifications.md) | M&C | | Needs Spec |
| [UI Stability & Performance](features/ui_stability_performance.md) | M&C | | Needs Spec |
| [Initial Login Flow Optimization](features/login_flow_optimization.md) | M&C | | Needs Spec |
| [Growthbook Integration](features/growthbook_integration.md) | M&C | | Needs Spec |

---

### Battle

Real-time battle system: combat mechanics, HUD, and content pipeline.

**Tooling & Pipelines**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Battle Designing Tools](features/battle_designing_tools.md) | Ongoing | | Needs Spec |
| [Battle Content Pipeline](features/battle_content_pipeline.md) | Ongoing | | Needs Spec |

**Combat Mechanics**

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Battle HUD Beta Overhaul](features/battle_hud.md) | M&Ms | | Needs Spec |
| [Wombo Combo](features/wombo_combo.md) | Core Experience | | Needs Spec |
| [Obstacles](features/obstacles.md) | Core Experience | | Needs Spec |
| [Pathfinding](features/pathfinding.md) | Core Experience | | Needs Spec |

---

### Units

Unit design, runtime systems, and content production.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Unit Designing Tools](features/unit_designing_tools.md) | Ongoing | | Needs Spec |
| [Actor System](features/actor_system.md) | Core Experience | | Needs Spec |
| [Unit Content Pipeline](features/unit_content_pipeline.md) | Ongoing | | Needs Spec |

---

### Social Dynamics

Multiplayer modes, competitive systems, and live engagement.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Multiplayer Map Game Mode](features/multiplayer_map.md) | M&Ms | | Needs Spec |
| [Matchmaking](features/matchmaking.md) | M&Ms | | Needs Spec |
| [Ravager's Reef](features/ravagers_reef.md) | Live Ops & Social | | Needs Spec |
| [Battlepass](features/battlepass.md) | Live Ops & Social | | Needs Spec |

---

### Dozer

Engineering infrastructure: performance, optimization, security, and DevOps.

| Feature | Milestone | Notion ID | Status |
|---------|-----------|-----------|--------|
| [Performance & Optimization](features/performance_optimization.md) | Ongoing | | Needs Spec |
| [Security](features/security.md) | Ongoing | | Needs Spec |
| [DevOps](features/devops.md) | Ongoing | | Needs Spec |

---

### Cross-Pod

Features that span multiple pods and require cross-team coordination.

| Feature | Pod(s) | Milestone | Notion ID | Status |
|---------|--------|-----------|-----------|--------|
| [Player Journey](features/player_journey.md) | All | Ongoing | | Needs Spec |

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
