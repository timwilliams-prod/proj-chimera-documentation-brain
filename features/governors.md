# Feature: Governors

Last Updated: 2026-03-19
Status: IN PROGRESS
Pod: Empire
Design Owner: [Diana Vasilescu]
ClickUp: [Epic link]

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

[TBD - high-level summary of what Governors delivers. What is a Governor? How does the player interact with them? What systems do they touch?]

### In Scope

- [TBD]

### Out of Scope

- [TBD]

---

## Estimate & Approach

**Total Estimate**: 3 sprints (6 weeks)

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | Yes | 3 | Backend, UI, iteration |
| UX/UI Design | [TBD] | [TBD] | Screens, flows - needed before Sprint 2 |
| Game Design | [TBD] | [TBD] | Balancing, governor ability design |
| Art | [TBD] | [TBD] | Governor portraits, UI assets |

### Implementation Flow

```
Sprint 1: Governors Backend & Data Setup (Engineering)
  - Governor data model, persistence, assignment logic
  - Core governor abilities/effects wired to game systems
  - [Needs: Game Design finalized on governor types & abilities]

Sprint 2: Governors UI Implementation (Engineering + UX/UI handoff)
  - Governor selection, management, and info screens
  - Integration with territory/map layer (visual presence)
  - [Needs: UX/UI designs delivered before sprint starts]

Sprint 3: Governors Experience Iterations (Engineering + Design review)
  - Playtest feedback integration
  - Balance tuning on governor effects
  - Polish pass on feel and clarity
  - [Needs: Internal playtest during Sprint 2]
```

### Pre-Conditions

- [ ] Game Design: Governor types, abilities, and progression curve defined
- [ ] UX/UI: Wireframes/mockups for governor screens (needed by Sprint 2)
- [ ] Art: Governor portrait assets (needed by Sprint 2)

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| None (standalone) | - | Governors can be built independently |

### What Depends on Governors

- Territory Map VS may build on governor system (confirm)

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Scope assumptions not yet defined | Medium | Medium | Fill in scope section from design doc before Sprint 2 |
| UX/UI designs not ready for Sprint 2 | High | [TBD] | Flag early, align with UX capacity in `capacity.md` |
| [TBD] | | | |

---

## Open Questions

- [ ] What governor types exist? How many at launch?
- [ ] How does governor progression work? (XP, levels, unlock tree?)
- [ ] Do governors have visual presence on the map or only in menus?
- [ ] How do governor abilities affect battle outcomes vs. empire outcomes?

---

## References

- Notion Design Doc: [link]
- ClickUp Epic: [link]
- Related: `pods/Empire_Plan.md` (priority context), `ValidationRoadmap.md` (SHQ7)
