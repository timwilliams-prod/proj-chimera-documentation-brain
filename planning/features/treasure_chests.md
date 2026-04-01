# Feature: Treasure Chests

- **Last Updated**: 2026-03-24
- **Status**: NOT STARTED
- **Pod**: Empire
- **Design Owner**: Diana Vasilescu
- **ClickUp**: [TBD]
- **Notion**: https://www.notion.so/1e33f0b3b6ab80d2bc9af21288f47038

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| SHQ3-6 | Do players feel compelled to explore different activity types early on and perceive meaningful connections between them? | ANSWERED |

**Parent BHQ**: BHQ-E1 - Civ-like grid has failed on mobile before. Can we make it intuitive, scalable, and will the player be motivated to explore?

**What Treasure Chests Must Prove**: Treasure chests motivate map exploration by providing visible, desirable rewards. Players form short-term conquest goals around reaching chests. The reward moment feels meaningful and reinforces the map conquest loop.

### Success Criteria

- Seeing chests on the map motivates players to explore and claim territory
- Opening a chest feels rewarding and meaningful
- Players can differentiate between chest types/rarities
- Designers can configure diverse chest experiences without engineering support

---

## Scope

Treasure Chests are interactable Territory Map objects with specific associated Game Data. Placed on tiles, claimed through regular adjacency rules. Support configurable loot tables with fixed or randomized rewards, rarity tiers with distinct VFX, and optional narrative context for world-building.

### Core Mechanics

- **Placement**: Configurable on any tile, default 1-tile footprint (larger chests supported)
- **Claiming**: Adjacent tiles required — tap to interact, claim to collect
- **Loot Tables**: Designer-configured with items, drop odds, currencies, hero shards, troops
- **Rarity VFX**: Silver (Regular), Blue (Rare), Purple (Epic), Orange (Legendary)
- **Visual Types**: Distinct 3D props per reward type (grain for Food, pixie for troops, gold chest for mixed)
- **Narrative**: Optional short lore snippets attached to chests for world-building
- **Out-of-Range Feedback**: Tapping non-adjacent chests shows "get there" messaging

### In Scope

- Treasure Chest placement and configuration tools
- Adjacency-based interaction and claiming flow
- Configurable loot tables (fixed and randomized rewards)
- Rarity tiers with distinct VFX (4 tiers)
- Multiple chest visual types tied to reward content
- Narrative text attachments
- Reward presentation UI (multiple UX flow options explored)
- Out-of-range feedback panel

### Out of Scope

- [TBD - needs designer input]

---

## Estimate & Approach

**Total Estimate**: [TBD - needs designer + engineering input]

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | Yes | [TBD] | Loot table system, interaction flow, reward UI |
| UX/UI Design | Yes | [TBD] | Collection flow, reward presentation, out-of-range feedback |
| Game Design | Yes | [TBD] | Chest types, rarity definitions, reward content, narrative |
| Art | Yes | [TBD] | Chest models per type, rarity VFX, open/closed states, animations |

### Implementation Flow

[TBD - needs engineering input]

### Pre-Conditions

- [ ] Art: Chest type models (per reward type + rarity variants)
- [ ] Art: Open/closed state visuals for map and UI
- [ ] Art: VFX per rarity tier
- [ ] Design: Definition of chest types, rarities, reward content
- [ ] Design: Narrative/lore text per chest (optional)

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| Territory Map | Part of | Chests are a tile type within territory maps |
| Map Editor | Depends on | Chests placed and configured in map editor |
| Items/Inventory | Depends on | Rewards added to player inventory |
| Loot Tables | Depends on | Shared loot table system for reward configuration |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Art scope for multiple chest variants | Medium | Medium | Start with 1-2 chest types, expand based on milestone needs |

---

## Open Questions

- [ ] Which UX flow option for v1? (4 options explored in Notion doc)
- [ ] How many chest types at launch?
- [ ] Should out-of-range chests show potential rewards or just chest type/rarity?

---

## References

- Notion Design Doc: https://www.notion.so/1e33f0b3b6ab80d2bc9af21288f47038
- Versions: Treasure Chests V1 (Notion sub-page)
- ClickUp Epic: [TBD]
- Related: `planning/features/territory_map_vs.md`, `planning/ValidationPlan.md`
