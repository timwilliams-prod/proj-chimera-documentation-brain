# Feature Registry

Last Updated: 2026-03-23

> **What this file is**: The authoritative mapping of features to their Notion source documents and local spec files.
> `/spec-sync` reads this file to know which features need specs and where to pull design content from.
> For milestone goals and priorities, see `planning/product_targets.md`.
> For validation hypotheses, see `planning/ValidationRoadmap.md`.

---

## How to Use This File

- Add a row for each feature that should have a local spec in `planning/features/`
- **Notion ID**: The page UUID from the Notion URL (after the last dash, or the full UUID with dashes)
- **Spec File**: The expected filename in `planning/features/` (snake_case, `.md`)
- `/spec-sync` uses this table to fetch Notion content and create/update local specs

---

## Registry

### M&Ms (Multiplayer & Meta) — ends Jun 23, 2026

| Feature | Pod | Priority | Notion ID | Spec File | Status |
|---------|-----|----------|-----------|-----------|--------|
| Governors | Empire | Must-Have | | governors.md | Has Spec |
| Territory Map Vertical Slice | Empire | Must-Have | | territory_map_vs.md | Needs Spec |
| Battle HUD Beta Overhaul | Battle | Must-Have | | battle_hud.md | Needs Spec |
| [TBD - multiplayer foundation] | [TBD] | Must-Have | | | Needs Spec |
| [TBD - metagame depth] | Metagame | Must-Have | | | Needs Spec |
| WM Support for Building Upgrades | Empire | Nice-to-Have | | building_upgrades_wm.md | Needs Spec |

### Beta Launch Prep — ends Jul 21, 2026

| Feature | Pod | Priority | Notion ID | Spec File | Status |
|---------|-----|----------|-----------|-----------|--------|
| [TBD - polish/stability work] | All | Must-Have | | | Needs Spec |

### Monetization & Conversion (M&C) — ends Oct 13, 2026

| Feature | Pod | Priority | Notion ID | Spec File | Status |
|---------|-----|----------|-----------|-----------|--------|
| World Map Vertical Slice | Empire | Must-Have | | world_map_vs.md | Needs Spec |
| [TBD - monetization system] | Metagame | Must-Have | | | Needs Spec |
| [TBD - conversion funnel] | [TBD] | Must-Have | | | Needs Spec |
| World Map Zoom & LOD | Empire | Nice-to-Have | | world_map_zoom_lod.md | Needs Spec |
| Conquest Guide Full Screen | Empire | Nice-to-Have | | conquest_guide_fs.md | Needs Spec |
| Barrier & Story Shard Iterations | Empire | Nice-to-Have | | barrier_story_shard.md | Needs Spec |

### Live Ops & Social — ends Feb 2, 2027

| Feature | Pod | Priority | Notion ID | Spec File | Status |
|---------|-----|----------|-----------|-----------|--------|
| [TBD - alliance/social system] | Social Dynamics | Must-Have | | | Needs Spec |
| [TBD - evergreen content delivery] | [TBD] | Must-Have | | | Needs Spec |
| [TBD - daily/weekly engagement loops] | [TBD] | Must-Have | | | Needs Spec |

### Soft Launch (UA Scale) — ends May 30, 2027

| Feature | Pod | Priority | Notion ID | Spec File | Status |
|---------|-----|----------|-----------|-----------|--------|
| Map Content (final targets) | Empire | Must-Have | | map_content_final.md | Needs Spec |
| [TBD - UA/analytics instrumentation] | Dozer | Must-Have | | | Needs Spec |

---

## Status Values

- **Has Spec** — Local spec exists and is maintained
- **Needs Spec** — No local spec yet; `/spec-sync` will create one from Notion (or a stub if no Notion ID)
- **Stub Only** — Spec exists but is mostly TBDs
- **Archived** — Feature removed from scope; spec kept for reference

---

## Notes

- Features in `product_targets.md` should eventually all appear here with concrete names (replacing TBDs)
- Not every Notion doc needs a registry entry — only features that warrant a local spec
- If a feature has no Notion doc, leave Notion ID blank — `/spec-sync` will create a stub from product_targets.md context
- When adding Notion IDs: open the page in Notion, copy the URL, extract the UUID after the last dash
