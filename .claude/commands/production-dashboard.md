# Production Dashboard Skill

You are regenerating the **Lotus Production Dashboard** — a static HTML dashboard for producers.

Your job: read brain files + ClickUp data, then generate `generated/dashboard/dashboard_data.js`.

---

## Spec

See `planning/features/production_dashboard.md` for the full spec (panels, data structure, architecture).

---

## Pod Model (read first)

There are **5 active pods**: Empire, Metagame, Battle, Social Dynamics, Dozer.

**Art Pod was closed 2026-04-13.** Do not include "Art" in the pods array, do not create an Art panel, do not list artists under a separate Art swim lane. Artists are now embedded in their working pods per `planning/capacity.md` Pod Leadership Summary:
- **Empire artists**: Guilherme Lascasas (2D Env), Thiago Saraiva (Senior 3D), Marcos Teles (Tech Art)
- **Battle artists**: Vinod Rams, Ben Clair, Felipe Chaves, Tony Bonilla, Vini Muniz, Danny Oliveira (VFX), Alessandro Oliveira (VFX)
- **Cross-pod art direction**: Kevin Griffith (Art Director), Brendan Cheatham (Assoc. AD)
- **Cross-pod / TBD**: Lawrence Steele (Audio), Pedro Sarraf (Lead Tech Art — Battle CP3+)

`planning/capacity.md` is the authoritative source for current artist pod assignments — re-read it on every run; do not cache an old map.

## Your Task

### 1. Read Source Files

Read these files to gather data for each panel:

| File | Panel(s) |
|------|----------|
| `planning/product_targets.md` | Panel 1 (Milestone Goals) |
| `planning/ValidationPlan.md` | Panel 1 (status of SHQs tied to must-haves), Panel 4 (Validation) |
| `planning/pods/{pod}/features.md` (5 active pods: Empire, Metagame, Battle, Social Dynamics, Dozer) | Panel 1 (must-have feature status), Panel 5 (Roadmap boulders) |
| `planning/contentTargets.md` | Panel 5 (Content pipeline boulders — phased by milestone) |
| `generated/roadmap.md` | Panel 5 (Roadmap timeline data) |
| `planning/operating_cadence.md` | Panel 3 (staleness thresholds) |
| `planning/capacity.md` | Context (team info) |

For each `planning/*.md` file, parse the `Last Updated: YYYY-MM-DD` line from the header for Panel 3.

### 2. Determine Current Milestone

From `product_targets.md`, determine which milestone is active based on today's date:

| Milestone | End Date |
|-----------|----------|
| M&Ms | Jun 23, 2026 |
| Beta Launch Prep | Jul 21, 2026 |
| M&C | Oct 13, 2026 |
| Live Ops & Social | Feb 2, 2027 |
| Soft Launch | May 30, 2027 |

Use the first milestone whose end date is in the future.

### 3. Pull ClickUp Sprint Data (Panel 2)

Attempt to get current sprint ticket data from ClickUp:

1. Use `clickup_get_workspace_hierarchy` or search the Sprints folder (ID: `90124992719`) to find the current sprint list
2. Use `clickup_filter_tasks` on that list to get all tasks
3. Group tasks by the **"Lotus Pod"** custom field
4. Count by status: open, in progress, complete, blocked

**If ClickUp is unreachable**: Set `sprint.data_source` to a message explaining ClickUp was unavailable and leave totals at 0. The dashboard will show a graceful "no data" message.

### 4. Determine Must-Have Feature Status (Panel 1)

For each must-have feature in the current milestone (from `product_targets.md`):
- Check the relevant pod plan for its status (NOT STARTED / IN PROGRESS / COMPLETE)
- Use the pod plan as the authoritative source, not ClickUp

Map statuses to: `not_started`, `in_progress`, `complete`.

### 5. Parse Artifact Health (Panel 3)

For each artifact file, extract the `Last Updated` date. Use these staleness thresholds:

| File Pattern | Stale After | Suggested Action |
|-------------|-------------|------------------|
| `ValidationPlan.md` (use `Last Evaluated` date if present, else `Last Updated`) | 21 days | `/validation-review` |
| `pods/{pod}/features.md` | 35 days | `/roadmap-update` |
| `capacity.md` | null (event-driven) | `Review if staffing changed` |
| `product_targets.md` | null (event-driven) | `Review at milestone boundary` |
| `generated/roadmap.md` | 35 days | `/roadmap-update` |

### 6. Build Validation Data (Panel 4)

From `ValidationPlan.md`:
- Extract all 3 Winning Hypotheses with confidence, trend, status
- For each WH, extract its BHQs with status and SHQ counts (answered vs total)
- For SHQs in the **current milestone only**, include: id, question (shortened), status
- Calculate `current_milestone_progress`: count of answered, in_progress, not_started, total SHQs for the active milestone

### 7. Build Roadmap Boulders (Panel 5)

From `generated/roadmap.md`, pod plans, and `planning/contentTargets.md`, create feature-level entries:
- Show **individual features** where they appear as separate items in pod plans (e.g., "Tutorial Migration", "World Map Experience", "Territory Map VS" — NOT one merged "Empire M&Ms Features" bar)
- Sequential features in the same pod should appear as separate adjacent bars in the same swim lane — the template handles stacking automatically
- Only group into a single bar when there are many small items that would be unreadable individually (e.g., "Metagame M&C Features" for 9 small features)
- Each entry needs: `name`, `pod`, `start` (YYYY-MM-DD), `end` (YYYY-MM-DD), `status` (active/future), `details` (short description)
- Use consistent feature names from the brain (feature_registry, pod plans)
- Target ~20-30 entries for good readability

#### Content Pipeline Boulders

Content production has specific quantity targets and milestone deadlines defined in `planning/contentTargets.md`. **Break content into milestone-phased bars** rather than single "ongoing" bars, so producers can see when each content phase must wrap up and the next phase begins.

For each content category in `contentTargets.md`:
- Create a separate boulder for each milestone-bounded phase
- Include the quantity target in the boulder name (e.g., "Territory Maps (14x)")
- Use the milestone deadline from `contentTargets.md` as the end date
- If a content type transitions from a fixed target to an ongoing cadence (e.g., Live Ops Battles → ongoing after initial pool), note "→ ongoing cadence" in the details
- Content with "as many as we can get" targets and no milestone deadline (e.g., Battlefields, Biomes) can be shown as a single bar spanning the project, or omitted if the chart is too crowded

Example content boulders for Empire maps:
```javascript
{ name: "Territory Maps (14x)", pod: "Empire", start: "2026-03-18", end: "2026-10-13", status: "active", details: "14 territory maps — target completion by M&C" },
{ name: "Live Ops Maps (8x)", pod: "Empire", start: "2026-10-14", end: "2027-02-02", status: "future", details: "8 live ops maps — aligned with live event schedule" },
```

Example content boulders for Battle:
```javascript
{ name: "Conquest Battles (10+189)", pod: "Battle", start: "2026-03-18", end: "2026-10-13", status: "active", details: "10 unique + 9 systemic (×21 configs) — with territory maps" },
{ name: "Dungeon Battles (175)", pod: "Battle", start: "2026-07-22", end: "2026-10-13", status: "future", details: "3 bosses ×25 floors + 5 encounters ×20 floors — aligned with Dungeons M&C" },
{ name: "Live Ops Battles (90x)", pod: "Battle", start: "2026-10-14", end: "2027-02-02", status: "future", details: "Initial pool of 90 → ongoing cadence" },
{ name: "Unit Production (53 heroes, 216 troop variants)", pod: "Battle", start: "2026-03-18", end: "2027-05-30", status: "active", details: "53 heroes, 9 troops ×4 tiers ×6 skins, 6 bosses" },
```

The key principle: **if `contentTargets.md` specifies a milestone deadline for a content category, that deadline should be visible as the end of a bar in the roadmap**, so a producer can see at a glance whether a content track needs to wrap up before a milestone.

Also build:
- `milestones`: array of `{ name, date }` for milestone markers
- `sprints`: array of `{ name, start, end }` for sprint columns (cover current sprint through end of last visible milestone)
- `timeline_start` and `timeline_end`: date bounds for the chart

### 8. Generate dashboard_data.js

Write the file to `generated/dashboard/dashboard_data.js` using this exact structure:

```javascript
// generated/dashboard/dashboard_data.js
// Auto-generated by /production-dashboard — do not edit manually
// Generated: YYYY-MM-DDTHH:MM:SSZ

const DASHBOARD_DATA = {
  generated_at: "YYYY-MM-DDTHH:MM:SSZ",

  milestone: {
    name: "...",
    end_date: "YYYY-MM-DD",
    sprint_count: N,
    phase: "...",
    player_journey: "...",
    must_haves: [
      { feature: "...", pod: "...", status: "not_started|in_progress|complete" }
    ],
    success_criteria: [
      { text: "...", met: true|false }
    ]
  },

  sprint: {
    name: "...",
    start_date: "YYYY-MM-DD",
    end_date: "YYYY-MM-DD",
    totals: { total: N, open: N, in_progress: N, complete: N, blocked: N },
    by_pod: [
      { pod: "...", total: N, open: N, in_progress: N, complete: N, blocked: N }
    ],
    data_source: "clickup|snapshot|message if unavailable"
  },

  artifacts: [
    {
      file: "...",
      label: "...",
      last_updated: "YYYY-MM-DD",
      stale_after_days: N|null,
      suggested_action: "..."
    }
  ],

  validation: {
    current_milestone: "...",
    current_milestone_progress: { answered: N, in_progress: N, not_started: N, total: N },
    winning_hypotheses: [
      {
        id: "WH-N", name: "...", statement: "...",
        confidence: "Low|Low-Medium|Medium|High", trend: "+|=|-",
        status: "...",
        bhqs: [
          {
            id: "BHQ-XX", question: "...",
            status: "...", shqs_answered: N, shqs_total: N,
            current_shqs: [
              { id: "SHQX-Y", question: "...", status: "not_started|in_progress|pending|answered" }
            ]
          }
        ]
      }
    ]
  },

  roadmap: {
    timeline_start: "YYYY-MM-DD",
    timeline_end: "YYYY-MM-DD",
    today: "YYYY-MM-DD",
    milestones: [ { name: "...", date: "YYYY-MM-DD" } ],
    sprints: [ { name: "...", start: "YYYY-MM-DD", end: "YYYY-MM-DD" } ],
    pods: ["Empire", "Metagame", "Battle", "Social Dynamics", "Dozer"],
    boulders: [
      { name: "...", pod: "...", start: "YYYY-MM-DD", end: "YYYY-MM-DD", status: "active|future", details: "..." }
    ]
  }
};
```

### 9. Report

After generating the file, report:
- What milestone is active
- Sprint data source (ClickUp live / snapshot / unavailable)
- Number of stale artifacts found
- Any warnings (missing files, missing ClickUp epics, etc.)
- Remind the user to open `generated/dashboard/index.html` in a browser

---

## Graceful Degradation

| If unavailable... | Behavior |
|-------------------|----------|
| ClickUp MCP unreachable | Sprint panel shows placeholder message; other panels unaffected |
| A planning file is missing | Log warning; omit that file's data; don't crash |
| ValidationPlan has no statuses | Show structure but all statuses as "not_started" |
| roadmap.md doesn't exist | Build boulders from pod plans directly |

---

## Notes

- The HTML template at `generated/dashboard/index.html` is **stable** — you only regenerate `dashboard_data.js`
- If the HTML template doesn't exist, warn the user but still generate the data file
- Dates must be in `YYYY-MM-DD` format for the JS to parse correctly
- Keep boulder names consistent with feature names used in pod plans and feature_registry
- SHQ question text should be shortened to ~5-8 words for dashboard display
- The `today` field in roadmap should be set to today's actual date
