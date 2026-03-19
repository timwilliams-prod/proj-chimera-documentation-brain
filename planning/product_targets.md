# Product Targets

Last Updated: 2026-03-19

> **What this file is**: The stable, leadership-authored definition of what each milestone must achieve.
> This is the benchmark that plans are measured against.
> For what we're actually building (operational view), see `generated/roadmap.md`.
> For why we're building it (validation), see `planning/ValidationRoadmap.md`.

---

## Milestone Definitions

| # | Milestone | End Date | Sprints | Dev Phase |
|---|-----------|----------|---------|-----------|
| 1 | **Multiplayer & Meta (M&Ms)** | Jun 23, 2026 | ~7 | Iteration & Refinement |
| 2 | **Beta Launch Prep** | Jul 21, 2026 | 2 | Polish |
| 3 | **Monetization & Conversion (M&C)** | Oct 13, 2026 | 6 | Iteration & Refinement |
| 4 | **Live Ops & Social** | Feb 2, 2027 | 8 | Iteration & Refinement |
| 5 | **Soft Launch (UA Scale)** | May 30, 2027 | ~8 | Scale |

**Cadence**: 2-week sprints
**Prior Milestones (complete)**: Core Experience (Jul 2025), Core Loop (Oct 2025), Systems Validation (Mar 2026)

---

## Milestone: Multiplayer & Meta (M&Ms)

**Goal**: Introduce multiplayer foundations and metagame depth.

### Must-Have Features

| Feature | Pod | Why It's Required |
|---------|-----|-------------------|
| Governors | Empire | Long-term goal vector for Empire layer (validates SHQ7) |
| Territory Map Vertical Slice | Empire | Prove map works at scale + strategy/conquest connection (SHQ1, SHQ2) |
| [TBD - multiplayer foundation feature] | [TBD] | Multiplayer must be functional for M&Ms milestone to mean anything |
| [TBD - metagame depth feature] | Metagame | Meta layer needs to connect to Empire + Battle |

### Nice-to-Have Features

| Feature | Pod | Notes |
|---------|-----|-------|
| WM Support for Building Upgrades | Empire | Small scope, fits in buffer sprint |
| [TBD] | | |

### Success Criteria

- [ ] Players can engage with multiplayer foundations in a playtest
- [ ] Territory map proves scalable (performance + visual quality + variety)
- [ ] Empire strategy layer and tile-level conquest feel connected (SHQ2)
- [ ] At least one metagame depth system is playable
- [ ] Map content pipeline is validated at target production rate
- [ ] [TBD - add specific metrics or playtest outcomes]

### Validation Alignment

| Key SHQ | Question | Must Be Answered? |
|---------|----------|-------------------|
| SHQ2 | Can players seamlessly move between empire strategy and tile conquest? | Yes - core to Empire hypothesis |
| SHQ7 | Clear short/mid/long-term goals? | Yes - Governors should prove this |
| SHQ1 | Map at scale constraints identified? | Yes - Territory Map VS |

---

## Milestone: Beta Launch Prep

**Goal**: Production-quality first impression, vertical slices complete.

### Must-Have Features

| Feature | Pod | Why It's Required |
|---------|-----|-------------------|
| [TBD - polish/stability work per pod] | All | First impression quality bar |

### Success Criteria

- [ ] Vertical slices from M&Ms are polished to "showable" quality
- [ ] No critical bugs or performance issues
- [ ] Onboarding flow works end-to-end
- [ ] [TBD]

---

## Milestone: Monetization & Conversion (M&C)

**Goal**: Validate monetization model, conversion funnels.

### Must-Have Features

| Feature | Pod | Why It's Required |
|---------|-----|-------------------|
| World Map Vertical Slice | Empire | World map layer needed for multiplayer context |
| [TBD - monetization system] | Metagame | Core monetization hypothesis must be testable |
| [TBD - conversion funnel] | [TBD] | Need to measure conversion |

### Nice-to-Have Features

| Feature | Pod | Notes |
|---------|-----|-------|
| World Map Zoom & LOD | Empire | Performance optimization for scale |
| Conquest Guide Full Screen | Empire | |
| Barrier & Story Shard Iterations | Empire | Polish from playtest feedback |

### Success Criteria

- [ ] Monetization model is testable with real players
- [ ] Conversion funnel is instrumented and measurable
- [ ] World map provides social context for multiplayer
- [ ] Hero collection feels compelling enough to drive spend intent
- [ ] [TBD - specific conversion/monetization metrics]

### Validation Alignment

| Key SHQ | Question | Must Be Answered? |
|---------|----------|-------------------|
| SHQ10-13 | Hero collectability and attachment | Yes - core to Monetization hypothesis |
| SHQ16 | Shared multiplayer maps exciting + replayable? | Yes |
| [TBD] | | |

---

## Milestone: Live Ops & Social

**Goal**: Evergreen engagement, social features, alliance systems.

### Must-Have Features

| Feature | Pod | Why It's Required |
|---------|-----|-------------------|
| [TBD] | Social Dynamics | Alliance/social system for live ops |
| [TBD] | [TBD] | Evergreen content delivery system |
| [TBD] | [TBD] | Daily/weekly engagement loops |

### Success Criteria

- [ ] Players have reasons to return daily beyond progression
- [ ] Social context enhances (not replaces) solo experience
- [ ] Live ops content can be deployed without client update
- [ ] [TBD]

---

## Milestone: Soft Launch (UA Scale)

**Goal**: UA-driven external validation at medium scale.

### Must-Have Features

| Feature | Pod | Why It's Required |
|---------|-----|-------------------|
| [TBD - all core systems must be launch-ready] | All | |
| Map Content (final targets) | Empire | Must hit content quantity targets |
| [TBD - UA/analytics instrumentation] | Dozer | Need to measure at scale |

### Success Criteria

- [ ] D0-D7 retention meets target: [TBD]%
- [ ] D30 retention meets target: [TBD]%
- [ ] Conversion rate meets target: [TBD]%
- [ ] LTV/CAC ratio is viable at target scale
- [ ] Server stability under target concurrent load
- [ ] Map content quantity targets met
- [ ] [TBD]

---

## How This File Is Used

```
planning/product_targets.md    "What must each milestone achieve?"
        ↓ compared against
generated/roadmap.md           "What are we actually building?" (consolidated from pod plans)
        ↓ checked against
planning/capacity.md           "Do we have the people?"
        ↓ gaps surfaced by
/risk-evaluation               "Are we on track to hit targets?"
```

- **Pod leads** reference this when prioritizing features in their pod plans
- **Risk evaluation** compares planned features (`generated/roadmap.md`) against these targets to find gaps
- **Milestone reviews** assess success criteria against actual outcomes
- **This file changes rarely** - only when leadership redefines milestone goals

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-03-19 | Initial product targets from existing milestone definitions | Tim / Claude |
