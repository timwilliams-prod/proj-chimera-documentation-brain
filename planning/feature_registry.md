# Feature Registry

Last Updated: 2026-03-23

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

| Feature | Pod | Milestone | Notion ID | Status |
|---------|-----|-----------|-----------|--------|
| | | **Core Experience** | | |
| | | **Core Loop** | | |
| | | **Systems Validation** | | |
| [Governors](features/governors.md) | Empire | M&Ms | | Has Spec |
| [Territory Map Vertical Slice](features/territory_map_vs.md) | Empire | M&Ms | | Needs Spec |
| [Battle HUD Beta Overhaul](features/battle_hud.md) | Battle | M&Ms | | Needs Spec |
| [WM Support for Building Upgrades](features/building_upgrades_wm.md) | Empire | M&Ms | | Needs Spec |
| [World Map Vertical Slice](features/world_map_vs.md) | Empire | M&C | | Needs Spec |
| [World Map Zoom & LOD](features/world_map_zoom_lod.md) | Empire | M&C | | Needs Spec |
| [Conquest Guide Full Screen](features/conquest_guide_fs.md) | Empire | M&C | | Needs Spec |
| [Barrier & Story Shard Iterations](features/barrier_story_shard.md) | Empire | M&C | | Needs Spec |
| [Map Content (final targets)](features/map_content_final.md) | Empire | Soft Launch | | Needs Spec |

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
- Past milestone features (Core Experience, Core Loop, Systems Validation) can be added as needed for reference
- Priority (must-have / nice-to-have) lives in `product_targets.md`, not here
