# Feature: Governors

- **Last Updated**: 2026-03-19
- **Status**: IN PROGRESS
- **Pod**: Empire
- **Design Owner**: Diana Vasilescu
- **ClickUp**: [Epic link]

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| SHQ7 | Is there a clear sense of short-, mid-, and long-term goals that interconnect across verticals, with projects that feel meaningful for the different player profiles? | Planning |

**Parent BHQ**: BHQ-E3 - Can our Empire progression systems remain compelling in the long term?

**What Governors Must Prove**: Governors provide a long-term goal vector within the Empire layer. Players should feel that investing in a governor is a meaningful project that connects to battle outcomes and territory strategy - not just a stat stick behind a menu.

### Success Criteria

- Players can articulate what their governor does and why they want to level it
- Governor choices create visible, differentiated strategic outcomes on the map
- Players express a sense of investment and ownership ("my governor, my strategy")

---

## Scope

Governors are **heroes assigned to manage cities/territories** to increase their output. When a player conquers territories and establishes a city (starting with their Capital City), they unlock governor slots. Assigning a hero as a governor ties hero collection and progression directly into empire growth — creating the core Hero ↔ Empire feedback loop.

### Core Mechanics

- **Governor Assignment**: Conquered territories grant governor slots for the associated city. Players assign heroes from their roster to fill these slots.
- **City Rank**: Determined by the level + rarity of assigned governors. Higher city rank unlocks higher structure upgrade caps (troops, resource production, etc.).
- **Replacement Rule**: A governor can only be replaced by a hero of **equal or higher level + rarity**, preventing downgrade churn.
- **Production Bonus**: Governors improve resource production output for their territory.
- **Unique Governor Effects**: Each governor has a unique territory-wide effect. Examples:
  - Resource-focused: boost food production for all tiles in the territory
  - Military-focused: increase strength of troops trained from barracks in that territory
  - Effects apply across the territory the governor is assigned to, making governor choice a strategic decision tied to what that territory is used for.

### Player Incentive Loop

Governors create a clear reason to collect and level heroes beyond battle:
1. Higher-rarity, higher-level heroes → higher city rank
2. Higher city rank → unlocks infrastructure upgrade caps (troops, resource generators, passives)
3. Better infrastructure → stronger empire → better battle performance

### In Scope

- Governor slot unlocks tied to territory conquest
- Hero-to-governor assignment and replacement flow
- City rank calculation from governor level + rarity
- Structure upgrade cap gating by city rank
- Resource production bonuses from assigned governors
- Unique governor effects system (per-governor territory-wide bonuses)
- Effect-to-tile/structure hookups (e.g., production modifiers, troop stat modifiers)
- Governor management UI (assign, replace, view effects)
- Unique art assets per governor effect type

### Out of Scope

- Live Ops territory governor mechanics (Live Ops territories use extractors, not permanent governors)
- Guild/alliance governor sharing

---

## Estimate & Approach

**Total Estimate**: 3 sprints (6 weeks)

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | Yes | 3 | Backend, effect system hookups, UI, iteration |
| UX/UI Design | [TBD] | [TBD] | Screens, flows, effect visualization - needed before Sprint 2 |
| Game Design | Yes | [TBD] | Define effect roster, balancing per effect type, territory-effect strategy |
| Art | Yes | [TBD] | Unique art asset per governor effect type (icons, VFX/indicators on tiles) |

### Implementation Flow

```
Sprint 1: Governors Backend & Data Setup (Engineering)
  - Governor data model, persistence, assignment logic
  - Effect system: data-driven unique effects per governor (modifier types, target scoping to territory)
  - Hookups: effects apply to tile resource output, barracks troop stats, etc.
  - [Needs: Game Design finalized on effect roster & modifier values]

Sprint 2: Governors UI Implementation (Engineering + UX/UI + Art handoff)
  - Governor selection, management, and info screens
  - Effect visualization on territory (which tiles are affected, what bonus is active)
  - Unique art assets per effect type integrated into UI and map
  - [Needs: UX/UI designs + art assets for effect types delivered before sprint starts]

Sprint 3: Governors Experience Iterations (Engineering + Design review)
  - Playtest feedback integration
  - Balance tuning on governor effects (are resource boosts too strong? troop buffs too weak?)
  - Polish pass on feel, clarity, and strategic readability of effects
  - [Needs: Internal playtest during Sprint 2]
```

### Pre-Conditions

- [x] Game Design: Core governor mechanics defined (heroes as governors, city rank formula, replacement rule) — see vision doc
- [ ] Game Design: City rank formula finalized (how level + rarity map to rank numbers, upgrade cap thresholds)
- [ ] Game Design: Full effect roster defined — each governor's unique effect, modifier type, and target (e.g., food +X% all tiles, troop strength +Y% from barracks)
- [ ] Game Design: Effect balance values per governor tier/rarity
- [ ] UX/UI: Wireframes/mockups for governor assignment, city management, and effect visualization on territory
- [ ] Art: Unique art asset per governor effect type (icons, tile overlays/indicators) (needed by Sprint 2)
- [ ] Art: Governor portrait assets / hero-in-city visual treatment (needed by Sprint 2)

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| Hero System | Governors depend on | Governors ARE heroes — requires hero roster, level, and rarity data |
| Territory / City System | Governors depend on | Governor slots are granted by conquered territories; city rank feeds back into structure caps |
| Resource Production | Bidirectional | Governors boost production; production structures are capped by city rank |

### What Depends on Governors

- **City Rank / Structure Caps**: Structure upgrade limits are gated by city rank, which is driven by governor quality
- **Empire Progression Tree**: Empire level interacts with city rank caps (empire level caps city rank, city rank caps structures)
- Territory Map VS may build on governor system (confirm)

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Hero system not ready for governor integration | High | Medium | Governor assignment depends on hero roster, level, rarity APIs — coordinate with hero system timeline |
| Replacement rule UX confusion | Medium | Medium | Players may not understand why they can't swap in a lower-tier hero; needs clear UI messaging |
| City rank balance — too grindy or too generous | Medium | Medium | Playtest city rank thresholds in Sprint 3; ensure mid-game doesn't feel walled |
| UX/UI designs not ready for Sprint 2 | High | [TBD] | Flag early, align with UX capacity in `planning/capacity.md` |

---

## Open Questions

- [x] ~~How does governor progression work?~~ → Governors ARE heroes; progression = hero level + rarity. City rank = f(governor level, rarity). No separate governor XP system.
- [x] ~~How do governor abilities affect battle outcomes vs. empire outcomes?~~ → Per vision doc: governors affect empire (city rank, production), not battle directly. Battle effectiveness comes from hero stats/abilities separately.
- [ ] How many governor slots per city at launch? (1 per conquered territory implied, but needs confirmation)
- [ ] Do governors have visual presence on the map/territory view, or only in city management screens?
- [ ] What is the full roster of unique governor effect types? (resource production, troop strength — what else? Defense, build speed, XP gain?)
- [ ] Do effect values scale with governor level/rarity, or are they fixed per effect type?
- [ ] Can multiple governors in the same city stack or conflict effects on overlapping tiles?
- [ ] What is the UX for the replacement rule? How do we communicate "must replace with equal or higher"?
- [ ] How does city rank interact with empire level caps? (Vision doc suggests empire level also caps city rank)

---

## References

- Notion Design Doc: [link]
- ClickUp Epic: [link]
- `reference/Empire_Multiplayer_Monetization_Vision.pdf` — Pages 8-9 ("Cities & Governors" section), page 4 (overview), page 12 (world map management)
- Related: `planning/pods/Empire_Plan.md` (priority context), `planning/ValidationRoadmap.md` (SHQ7)
