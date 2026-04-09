# Content Targets

Last Updated: 2026-04-09

> Production targets for content across pods. Separated from ranked feature backlogs because content is an ongoing production track, not discrete features.
> These targets inform capacity planning, pipeline validation, and milestone scoping.

---

## Empire — Maps

### World Map (1x)

The World Map doubles as the game's **main menu** and primary navigation surface. It will need constant updates as new content (territories, features, live ops events) is added throughout development and live service.

- **Target**: 1 complete World Map
- **Milestone**: M&Ms (initial), then ongoing updates every milestone
- **Key constraint**: Every new territory, feature surface, or event needs a World Map touchpoint — plan for continuous iteration, not a single delivery

### Territory Maps (14x)

Full territory maps that players explore and conquer. These are the core content pipeline for the Empire pod.

- **Target**: 14 Territory Maps
- **Milestone**: Target completion by end of **Monetization & Conversion (M&C)** — Oct 13, 2026
- **Rationale**: Wrapping territory maps by M&C frees the team to shift focus to live ops maps and other map types post-M&C

### Live Ops Maps (8x)

Event-driven maps tied to the live service schedule. These establish a repeatable release cadence.

- **Target**: 8 Live Ops Maps
- **Milestone**: Starting in **Live Ops & Social** — begins after M&C (Oct 2026), runs through Feb 2, 2027
- **Cadence**: Aligned with the live event schedule — the team needs to establish a sustainable release rhythm during this milestone
- **Dependency**: Requires territory map pipeline to be largely complete (hence the M&C target for territories)

### Map Content Visuals & Biomes

Visual variety across territories and map types — unique biome art, tile sets, environmental storytelling.

- **Target**: As many as we can get — no firm targets yet
- **Key constraint**: Each new biome increases visual variety and perceived handcraftedness but requires concept, 3D, and tech art time

---

## Battle — Battles

### Conquest Battles — Narrative/Onboarding (10x unique)

Hand-authored battle configurations tied to narrative moments and onboarding flow. Each is a unique setup.

- **Target**: 10 unique conquest battles
- **Milestone**: Ongoing, aligned with territory map delivery

### Conquest Battles — Systemic (9x templates, ~189 configurations)

Template-based battles where enemy strength, elements, and types can be varied. Each systemic battle supports ~21 different configurations.

- **Target**: 9 systemic battle templates × ~21 configurations each = ~189 total configurations
- **Milestone**: Ongoing, aligned with territory map delivery
- **Key advantage**: High content leverage — design effort per template, combinatorial output

### Dungeon Boss Battles (3x bosses, 25 floors each)

Boss encounters that scale in difficulty. The boss grows stronger and gains new abilities as floors increase.

- **Target**: 3 Dungeon Bosses × 25 floors = 75 total encounters
- **Milestone**: Aligned with Dungeons feature (M&C)

### Dungeon Encounter Battles (5x encounters, 20 floors each)

Complex/difficult encounters designed to be countered — players need the right team composition to solve them.

- **Target**: 5 Dungeon Encounters × 20 floors = 100 total encounters
- **Milestone**: Aligned with Dungeons feature (M&C)

### Live Ops Battles (90x, then ongoing cadence)

Battles for rotating live ops events. This starts as a fixed target and transitions into an ongoing production cadence.

- **Target**: 90 Live Ops Battles (initial pool)
- **Milestone**: Starting in **Live Ops & Social** milestone, then ongoing cadence
- **Cadence**: Must establish a sustainable production rate for ongoing live ops after initial pool

---

## Battle / Art — Units

### Heroes (53x unique)

The full hero roster across all rarities and roles.

- **Target**: 53 unique heroes
- **Milestone**: Ongoing across all milestones (6 starter heroes by M&Ms, roster expands through Soft Launch)

### Troops (5 types, 4 tiers, 6 skins each)

Five troop types: **Ranged**, **Melee**, **Siege**, **Flyer**, **Charger**. Produced via three consolidated factories:

| Factory | Troop Types | Description |
|---------|------------|-------------|
| **Melee Factory** | Melee, Charger | Anything that hits melee — melee bots, chargers |
| **Ranged Factory** | Ranged, Flyer | Anything with ranged attacks — ranged bots, ranged flyers |
| **Siege Factory** | Siege | Anything that bombards an area |

- **Target**: 5 unique troop types × 4 tiers × 6 skins = 120 total troop variants
- **Milestone**: Ongoing, pipeline validated during M&Ms (SHQ3-28)

### Bosses (6x)

Large-scale enemy units for dungeon and world encounters.

- **Target**: 6 Bosses total — 3x Dungeon Bosses + 3x Roaming Monster Bosses
- **Milestone**: Aligned with Dungeons (M&C) and territory content

---

## Battle / Art — Battlefields

### Battlefields (3D environments)

The 3D environment visuals displayed during battle. More variety = more visual freshness across encounters.

- **Target**: As many as we can get — no firm targets yet
- **Key constraint**: Each battlefield requires concept, 3D modeling, lighting, and tech art setup. Priority is variety across biomes and encounter types.

---

## Notes

- These targets inform `/risk-evaluation` and `/roadmap-update` for capacity checks
- Battle content targets depend on the Map Goals Handshake coordination pattern (see `planning/dependency_map.md`)
- Unit pipeline validation is tracked via SHQ3-28
- Map production pipeline is tracked via SHQ3-1
