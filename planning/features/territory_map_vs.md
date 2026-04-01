# Feature: Territory Map Vertical Slice

- **Last Updated**: 2026-03-24
- **Status**: NOT STARTED
- **Pod**: Empire
- **Design Owner**: Diana Vasilescu
- **ClickUp**: [TBD]
- **Notion**: [TBD]

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| SHQ3-1 | Have we identified the constraints for producing the map at scale: high visual bar, high performance, and high variety? | ANSWERED |
| SHQ3-2 | Can we enable players to seamlessly move between high-level empire strategy and low level tile-to-tile conquest? | IN PROGRESS |

**Parent BHQ**: BHQ-E1 - Civ-like grid has failed on mobile before. Can we make it intuitive, scalable, and will the player be motivated to explore?

**What Territory Map VS Must Prove**: The territory map works at scale with performance, visual quality, and variety. The strategy layer connects meaningfully to tile-level conquest so neither feels disconnected or secondary.

### Success Criteria

- [ ] Territory map proves scalable (performance + visual quality + variety)
- [ ] Empire strategy layer and tile-level conquest feel connected (SHQ3-2)
- [ ] Map content pipeline is validated at target production rate
- [ ] [TBD - specific performance targets and playtest outcomes]

---

## Scope

End-to-end vertical slice of the territory map at target quality. Demonstrates scale testing, content variety, visual hierarchy, and navigation across a representative number of territories.

### Core Mechanics

- [TBD - needs designer input]

### In Scope

- [TBD - needs designer input]

### Out of Scope

- [TBD - needs designer input]

---

## Estimate & Approach

**Total Estimate**: [TBD - needs designer + engineering input]

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | [TBD] | [TBD] | |
| UX/UI Design | [TBD] | [TBD] | |
| Game Design | [TBD] | [TBD] | |
| Art | [TBD] | [TBD] | |

### Implementation Flow

[TBD - needs engineering input]

### Pre-Conditions

- [ ] [TBD - needs designer input]

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| Map Editor | Depends on | Territory maps are built in the map editor |
| Map Content Pipeline | Depends on | Content must flow through the pipeline |
| Barriers | Related | Barriers are tile types within territory maps |
| Treasure Chests | Related | Chests are tile types within territory maps |
| Story Shards | Related | Story shards are tile types within territory maps |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [TBD] | | | |

---

## Open Questions

- [ ] What constitutes "at scale" for the vertical slice? (number of territories, tile count)
- [ ] What are the performance targets? (FPS, memory, load times on min-spec device)
- [ ] Which tile types must be present in the VS? (all Core Experience types or a subset?)
- [ ] How does this VS connect to the World Map layer?

---

## References

- Notion: Related page "Territory Map Visual Hierarchy Pass" (ID: 2983f0b3-b6ab-80e8-bfce-c81403e5869f)
- ClickUp Epic: [TBD]
- Related: `planning/pods/Empire_Plan.md`, `planning/ValidationPlan.md`
