# Feature: Passive Bonus Tiles

- **Last Updated**: 2026-03-24
- **Status**: NOT STARTED
- **Pod**: Metagame
- **Design Owner**: Leonard Perez
- **ClickUp**: [TBD]
- **Notion**: https://www.notion.so/2333f0b3b6ab80d1b07bc9767cb903b0

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| SHQ6 | Do players feel compelled to explore different activity types early on and perceive meaningful connections between them? | ANSWERED |

**Parent BHQ**: BHQ-E1 (exploration motivation), BHQ-E3 (long-term progression — hero stats via map)

**What Passive Bonus Tiles Must Prove**: Map conquest directly strengthens heroes through permanent stat bonuses. This links hero progression to map exploration, reinforcing both loops. Players are excited to discover and claim buff tiles as a distinct reward type.

### Success Criteria

- Players recognize buff tiles as distinct from regular exploration tiles
- Players feel excited about receiving permanent hero stat bonuses from map conquest
- The hero-to-map progression link is understood and valued
- Buff tiles serve as meaningful short-term goals on the map

---

## Scope

Passive bonus tiles provide permanent percentage stat increases to heroes through map conquest. Bonuses apply to all heroes of the same element (Fire, Nature, Water). Tiles exist on the map as dedicated buff tiles or appear as rewards from Story Shard decisions.

### Core Mechanics

- **Buffs**: Permanent passive increases to hero stats (Attack or Health), applied by element type
  - +X% to Attack for Fire/Nature/Water Heroes
  - +X% to Health for Fire/Nature/Water Heroes
  - More buff types planned for future
- **Buff Acquisition — Dedicated Tile**: Pre-placed "dilapidated" prop on map; inspectable to see potential buff; conquered through adjacency (no battle, manual confirmation); asset swaps to conquered prop
- **Buff Acquisition — Story Shard Result**: Story Shard decision can transform tile into a buff tile; reward screen shows new tile; asset swap animation
- **Buff Communication**: HUD icon appears after first buff; flashes when buffs updated; empire buff screen aggregates all active buffs
- **Battle Integration**: All active buff percentages injected into battle calculations

### In Scope

- Buff tile map props (unconquered/conquered states, elemental variants)
- Adjacency-based claiming (no battle required)
- Story Shard integration (decision → tile swap to buff tile)
- Empire buff aggregation screen (simple list of all active buffs)
- HUD icon for buff status
- Designer tools: define buff size/type per tile, swap tiles from story shards, exclude from granary food

### Out of Scope

- Multiple buff sources beyond tiles (future — other systems could contribute to empire-wide buffs)
- Detailed buff source tracking in UI (future)
- Prop variants per buff type (future — currently same prop with elemental color variations)

---

## Estimate & Approach

**Total Estimate**: [TBD - needs designer + engineering input]

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | Yes | [TBD] | Buff system, tile interaction, Story Shard integration, HUD |
| UX/UI Design | Yes | [TBD] | Buff screen, HUD icon, tile inspection popup |
| Game Design | Yes | [TBD] | Buff values, element assignments, placement per territory |
| Art | Yes | [TBD] | Tile props (unconquered/conquered), elemental glow VFX |

### Implementation Flow

[TBD - needs engineering input]

### Pre-Conditions

- [ ] Story Shard system supports tile-swap rewards (not just resource rewards)
- [ ] Art: Buff tile props with elemental variants
- [ ] Design: Buff values per territory for CL milestone

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| Territory Map | Part of | Buff tiles are a tile type within territory maps |
| Story Shards | Bidirectional | Story Shard decisions can create buff tiles |
| Hero System | Depends on | Buffs apply to heroes by element type |
| Battle System | Feeds into | Buff percentages injected into battle calculations |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Buff values too small to notice in CL | Medium | Medium | Design consideration: use +10% per tile in CL to make meaningful in single session |
| Story Shard tile-swap requires extra engineering | Medium | Low | Confirm scope with engineering early |

---

## Open Questions

- [ ] How many buff tiles per territory? (Design consideration: 1 guaranteed per territory past first = 4 total + story shard sources)
- [ ] Should buff values scale with territory difficulty or be fixed?
- [ ] Can buff tiles be lost or are they permanent?

---

## References

- Notion Design Doc: https://www.notion.so/2333f0b3b6ab80d1b07bc9767cb903b0
- ClickUp Epic: [TBD]
- Related: `planning/features/story_shards.md`, `planning/features/territory_map_vs.md`, `planning/ValidationRoadmap.md`
