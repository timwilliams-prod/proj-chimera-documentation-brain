# Visualization Examples

A reference of Mermaid chart types useful for roadmap, planning, and validation documents. All render in VS Code with the Mermaid extension.

---

## Table of Contents

1. [Gantt Chart](#gantt-chart) -- Timelines, roadmaps, feature scheduling
2. [Quadrant Chart](#quadrant-chart) -- 2-axis comparison, confidence mapping
3. [Flowchart](#flowchart) -- Processes, decision trees, user flows
4. [Mindmap](#mindmap) -- Hierarchies, brainstorming, feature decomposition
5. [Timeline](#timeline) -- Milestones, historical events, release history
6. [Pie Chart](#pie-chart) -- Proportions, allocation breakdowns
7. [Block Diagram](#block-diagram) -- System architecture, pod relationships
8. [Kanban](#kanban) -- Status boards, feature status at a glance
9. [Sankey](#sankey) -- Resource flow, staffing allocation
10. [XY Chart](#xy-chart) -- Data plots, trend lines, metric tracking
11. [State Diagram](#state-diagram) -- Feature states, lifecycle, validation flow
12. [Sequence Diagram](#sequence-diagram) -- Interactions, API flows, handoffs between pods

---

## Gantt Chart

Best for: roadmaps, feature timelines, parallel workstreams, milestone tracking.

**Currently used in**: all pod plans, consolidated roadmap.

```mermaid
gantt
    title Example - Pod Feature Timeline
    dateFormat YYYY-MM-DD
    axisFormat %b '%y
    tickInterval 2week

    section Milestones
    Sys Validation    :crit, milestone, 2026-03-30, 0d
    M&M               :crit, milestone, 2026-06-23, 0d

    section Track A
    Feature Alpha     :active,  a1, 2026-03-19, 42d
    Feature Beta      :         a2, after a1, 28d

    section Track B
    Infrastructure    :active,  b1, 2026-03-19, 2026-06-23
```

### Gantt Tips
- `active` = blue (in progress), `done` = gray, `crit` = red (blocked/at risk)
- `after taskId` chains tasks sequentially
- `milestone` with `0d` duration creates diamond markers
- Duration can be days (`30d`) or absolute dates (`2026-06-23`)
- Keep to ~30 bars max for readability

---

## Quadrant Chart

Best for: comparing items on two dimensions, prioritization matrices, confidence vs evidence.

**Currently used in**: ValidationRoadmap.md (hypothesis confidence).

```mermaid
quadrantChart
    title Feature Priority Matrix
    x-axis "Low Effort" --> "High Effort"
    y-axis "Low Impact" --> "High Impact"
    quadrant-1 "Do First"
    quadrant-2 "Plan Carefully"
    quadrant-3 "Reconsider"
    quadrant-4 "Quick Wins"
    "Governors": [0.7, 0.85]
    "Map Leaderboard": [0.3, 0.4]
    "Battlepass": [0.5, 0.65]
    "Building Upgrades": [0.2, 0.6]
```

### Quadrant Variations
- **Priority Matrix**: Effort vs Impact
- **Risk Matrix**: Likelihood vs Severity
- **Validation Status**: Evidence vs Confidence
- **Feature Readiness**: Design Completeness vs Eng Readiness

---

## Flowchart

Best for: processes, decision trees, dependency flows, user journeys.

```mermaid
flowchart TD
    A[Feature Proposal] --> B{Has Feature Doc?}
    B -->|Yes| C[Capacity Check]
    B -->|No| D[Create Feature Doc]
    D --> C
    C --> E{Fits in Milestone?}
    E -->|Yes| F[Add to Pod Plan]
    E -->|No| G[Defer or Rescope]
    F --> H[Update Roadmap]
```

```mermaid
flowchart LR
    subgraph Empire
        E1[Map Content] --> E2[Territory VS]
    end
    subgraph Metagame
        M1[Progression Tree] --> M2[Hero Gacha]
    end
    subgraph Social
        S1[Map Foundation] --> S2[Game Logic]
    end
    E2 -.->|dependency| S1
    M2 -.->|dependency| S2
```

### Flowchart Tips
- `TD` = top-down, `LR` = left-right
- `-->` solid arrow, `-.->` dotted arrow (dependencies)
- `subgraph` groups related nodes
- `{Decision}` = diamond, `[Task]` = rectangle, `([Stadium])` = rounded, `((Circle))`

---

## Mindmap

Best for: hierarchical breakdowns, brainstorming, feature decomposition, pod structure.

```mermaid
mindmap
    root((Multiplayer))
        Maps
            Tile System
            Leaderboard
            Fog of War
        Networking
            Infrastructure
            Game Instances
            Messaging
        Social
            Alliances
            Chat
            Matchmaking
        Economy
            Troop Training
            Buildings
            Cycle Generation
```

---

## Timeline

Best for: milestone history, release dates, key events in sequence.

```mermaid
timeline
    title Project Milestones
    section 2025
        Jul : Core Experience
        Oct : Core Loop
    section 2026
        Mar : Systems Validation
        Jun : M&Ms
        Jul : Beta Prep
        Oct : M&C
    section 2027
        Feb : Live Ops & Social
        May : Soft Launch
```

---

## Pie Chart

Best for: proportional breakdowns, capacity allocation, time distribution.

```mermaid
pie title Engineering Capacity by Pod
    "Empire (3 eng)" : 3
    "Metagame (2 eng)" : 2
    "Battle (1 eng)" : 1
    "Social Dynamics (3 eng)" : 3
    "Dozer (2 eng)" : 2
```

---

## Block Diagram

Best for: system architecture, pod relationships, high-level structure.

```mermaid
block-beta
    columns 3
    A["Empire\nMaps & Content"]:1
    B["Metagame\nProgression & Economy"]:1
    C["Battle\nCombat & Units"]:1
    D["Social Dynamics\nMultiplayer & Social"]:2
    E["Dozer\nTechnical Efforts"]:1
    F["Shared Services & Infrastructure"]:3
```

---

## Kanban

Best for: feature status at a glance, sprint boards, phase tracking.

```mermaid
---
config:
  kanban:
    ticketBaseUrl: ''
---
kanban
    column1["Not Started"]
        ticket1["Territory Map VS"]
        ticket2["Hero Gacha v1"]
    column2["In Progress"]
        ticket3["Governors"]
        ticket4["UI Foundation"]
        ticket5["MP Infrastructure"]
    column3["Blocked"]
        ticket6["World Map VS"]
    column4["Done"]
        ticket7["Map Content Pipeline"]
```

---

## Sankey

Best for: resource flow, showing how capacity/effort distributes across areas.

```mermaid
sankey-beta
    Engineering,Empire,3
    Engineering,Metagame,2
    Engineering,Battle,1
    Engineering,Social Dynamics,3
    Engineering,Dozer,2
    Design,Empire,3
    Design,Metagame,2
    Design,Battle,4
    Design,Social Dynamics,1
```

---

## XY Chart

Best for: data plots, metric tracking over time, trend visualization.

```mermaid
xychart-beta
    title "Validation Confidence Over Sprints"
    x-axis ["S1", "S2", "S3", "S4", "S5", "S6", "S7"]
    y-axis "Confidence %" 0 --> 100
    line "WH-1 Battle" [30, 35, 45, 50, 55, 60, 65]
    line "WH-2 Empire" [20, 20, 25, 30, 35, 40, 45]
    bar "SHQs Answered" [0, 1, 1, 2, 3, 3, 5]
```

---

## State Diagram

Best for: feature lifecycle, validation states, status transitions.

```mermaid
stateDiagram-v2
    [*] --> NOT_STARTED
    NOT_STARTED --> IN_PROGRESS: Work begins
    IN_PROGRESS --> TESTING: Feature complete
    TESTING --> VALIDATED: Playtest passes
    TESTING --> NEEDS_ITERATION: Playtest feedback
    NEEDS_ITERATION --> IN_PROGRESS: Rework
    VALIDATED --> [*]
    IN_PROGRESS --> BLOCKED: Dependency
    BLOCKED --> IN_PROGRESS: Unblocked
```

---

## Sequence Diagram

Best for: interactions between pods, handoff processes, API flows.

```mermaid
sequenceDiagram
    participant P as Production
    participant D as Design
    participant E as Engineering
    participant Q as QA

    P->>D: Feature request + validation goals
    D->>D: Create feature doc
    D->>P: Review & estimate
    P->>E: Prioritize in sprint
    E->>E: Implementation
    E->>Q: PR + build
    Q->>E: Bug reports
    E->>Q: Fixes
    Q->>P: Sign-off
```

---

## Quick Reference

| Chart Type | Best For | Complexity |
|------------|----------|------------|
| Gantt | Timelines, scheduling, parallel tracks | Medium |
| Quadrant | 2-axis comparison, prioritization | Low |
| Flowchart | Processes, decisions, dependencies | Low-Medium |
| Mindmap | Hierarchies, decomposition | Low |
| Timeline | Sequential events, milestones | Low |
| Pie | Proportions, allocation | Low |
| Block | Architecture, structure | Low |
| Kanban | Status boards | Low |
| Sankey | Resource flow, distribution | Medium |
| XY Chart | Data over time, metrics | Medium |
| State Diagram | Lifecycle, transitions | Medium |
| Sequence | Interactions, handoffs | Medium |
