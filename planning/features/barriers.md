# Feature: Barriers

- **Last Updated**: 2026-03-24
- **Status**: NOT STARTED
- **Pod**: Empire
- **Design Owner**: Diana Vasilescu
- **ClickUp**: [TBD]
- **Notion**: https://www.notion.so/2313f0b3b6ab80178344c4cda3777cbd

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| SHQ3-6 | Do players feel compelled to explore different activity types early on and perceive meaningful connections between them? | ANSWERED |

**Parent BHQ**: BHQ-E1 - Civ-like grid has failed on mobile before. Can we make it intuitive, scalable, and will the player be motivated to explore?

**What Barriers Must Prove**: Barriers provide a quest-like progression system on the map. Players form goals around unlocking barriers, and designers can control player flow, difficulty pacing, and narrative branching through conditional tile access.

### Success Criteria

- Players understand why a barrier is locked and what they need to do to open it
- Barriers create short-term goals that drive map exploration
- Designers can effectively pace difficulty and narrative through barrier placement
- Visually clear distinction between locked and open barrier states

---

## Scope

Barriers are objects on the territory map with conditions that must be met before they are cleared. They serve as navigation blockers that create quest-like objectives and give designers control over player flow.

Examples: "Clear with the Red Key!" or "Blow it up with Dynamite!"

### Core Mechanics

- **Conditional Unlocking**: Tiles unlock based on designer-specified conditions (items, currencies, narrative triggers)
- **Lock/Unlock UI**: Popup showing player why tile is locked and how to unlock; UX/visuals for unlock moment
- **Visual States**: Locked barrier (thematic 3D wall/gate, contextual to map, reads "unpassable") and conquered state (open)
- **Territory Claim**: When a barrier is opened, all tiles part of that barrier become player territory
- **Adjacency Rules**: Standard map adjacency — player must reach barrier tile to interact

### In Scope

- Eng: Unlocking tiles based on designer-specified conditions
- Eng: UI for telling player why tile is locked + triggering unlock UX/visuals
- Art: Prototype visuals for barriers (thematic wall/gate props)
- Design: Updating maps with barrier placements
- Icon states: Barrier (locked) and Ready to Open (unlockable)
- 1-3 adjacent tile footprint per barrier

### Out of Scope

- "Go To" deep links to help players find required items (future iteration)
- Narrative forking via conditional tiles (future — uses same underlying system)
- Currency-based unlock conditions (future extension)

---

## Estimate & Approach

**Total Estimate**: ~1 week engineering (per Dan Dupuis estimate)

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | Yes | <1 sprint | Unlock conditions + UI for lock/unlock state |
| UX/UI Design | Yes | [TBD] | Lock popup, unlock animation/VFX |
| Game Design | Yes | [TBD] | Map placement, condition definitions |
| Art | Yes | [TBD] | Prototype barrier visuals (wall/gate props) |

### Implementation Flow

```
1. Eng: Unlock tiles based on designer-specified conditions
   (Map editor already has properties planned for this)
2. Eng: UI for lock state popup + unlock trigger UX/visuals
3. Art: Prototype visuals for CL2 Player Journey barriers
4. Design: Update CL2 map with barrier placements
```

### Pre-Conditions

- [x] Map editor supports barrier tile properties (planned from start)
- [ ] Game Design: Define conditions for each barrier in CL2 map
- [ ] Art: Barrier prop visuals (wall/gate, contextual to map theme)

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| Map Editor | Depends on | Barrier properties defined in map editor |
| Territory Map | Part of | Barriers are a tile type within territory maps |
| Items/Inventory | Depends on | Keys and items that unlock barriers must be awardable game items |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Unlock conditions need flexible data model | Medium | Low | Map editor already planned for this; keep conditions simple initially |

---

## Open Questions

- [ ] How many barrier types are needed for CL2? (visual variants)
- [ ] Should barriers show what reward/area lies beyond them?
- [ ] Integration with narrative forking — same system or separate?

---

## References

- Notion Design Doc: https://www.notion.so/2313f0b3b6ab80178344c4cda3777cbd
- Approvers: Nate Borges, Dan Dupuis, Leonard Perez
- ClickUp Epic: [TBD]
- Related: `planning/features/story_shards.md`, `planning/features/territory_map_vs.md`, `planning/ValidationPlan.md`
