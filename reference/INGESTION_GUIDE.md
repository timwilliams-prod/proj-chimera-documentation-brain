# Data Ingestion Guide

How to get data from Notion and ClickUp into your documentation brain.

## Quick Start

### Option 1: Manual with LLM Assistance (Recommended to Start)

The fastest way to get started - let Claude convert your Notion/ClickUp data into the right format.

#### From Notion (Design Docs → Feature Docs)

1. **Export Notion page as Markdown**
   - Open your design doc in Notion
   - Click `...` → Export → Markdown & CSV
   - Save export to `reference/notion-exports/`

2. **Convert with Claude**
   ```
   Convert this Notion export into our feature doc format.
   Source: [paste Notion markdown]
   Target: planning/features/[feature_name].md

   Use planning/features/governors.md as the template.
   Make sure validation goals (SHQs) are at the top.
   ```

3. **Review, add to pod plan, and commit**

#### From Notion (Validation Data → Validation Roadmap)

For Winning Hypotheses, BHQs, and SHQs:

```
I need to update planning/ValidationPlan.md with hypotheses from Notion.

Here's what we have:
- WH-1: [paste from Notion]
- BHQs: [paste]
- SHQs: [paste]
```

Claude will structure them into the ValidationPlan.md schema. Remember: BHQs and SHQs can be cross-pod — don't force them into a single pod's ownership.

#### From ClickUp (Task Status → Pod Plans)

1. **Get feature status from ClickUp**
   - Check epic/feature progress in ClickUp

2. **Update with Claude**
   ```
   /roadmap-update

   Pod: Empire
   Updates:
   - Governors: complete (3/3 sprints done)
   - Territory Map VS: in progress (Sprint 1 of 2)
   ```

3. **Claude updates `planning/pods/Empire_Plan.md` and regenerates `generated/roadmap.md`**

**Pros**: Fast, flexible, works immediately
**Cons**: Manual, requires discipline to stay in sync

---

## Option 2: Semi-Automated Scripts (Future)

### Notion → Feature Docs Script

```javascript
// scripts/notion-sync.js

import { Client } from "@notionhq/client";
import fs from "fs";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function syncFeatureDocs() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_FEATURE_DB_ID,
  });

  for (const page of response.results) {
    const title = page.properties.Name.title[0].plain_text;
    const status = page.properties.Status.select.name;
    const owner = page.properties.Owner.people[0].name;

    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    const mdContent = convertToFeatureDoc(blocks, { title, status, owner });
    const filename = `planning/features/${slugify(title)}.md`;
    fs.writeFileSync(filename, mdContent);
    console.log(`Synced ${filename}`);
  }
}
```

### ClickUp → Pod Plan Status Script

```javascript
// scripts/clickup-sync.js
// Note: This only updates feature STATUS in pod plans, not the full plan.
// Pod plan priorities, estimates, and validation alignment are human-authored.

const POD_MAP = {
  'Empire':           'planning/pods/Empire_Plan.md',
  'Metagame':         'planning/pods/Metagame_Plan.md',
  'Battle':           'planning/pods/Battle_Plan.md',
  'Social Dynamics':  'planning/pods/SocialDynamics_Plan.md',
  'Dozer':            'planning/pods/Dozer_Plan.md',
};

async function syncPodStatus() {
  const spaces = await fetchClickUpSpaces(process.env.CLICKUP_TEAM_ID);

  for (const space of spaces) {
    const podFile = POD_MAP[space.name];
    if (!podFile) continue;

    const epics = await fetchClickUpEpics(space.id);

    // Update feature status in pod plan (IN PROGRESS, COMPLETE, etc.)
    // Don't overwrite priorities, estimates, or validation alignment
    updateFeatureStatuses(podFile, epics);
    console.log(`Updated status in ${podFile}`);
  }
}
```

---

## Option 3: Fully Automated (Advanced)

```yaml
# .github/workflows/sync-docs.yml

name: Sync Documentation

on:
  schedule:
    - cron: '0 9 * * 1,4'  # Monday and Thursday at 9am
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Sync Notion
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_FEATURE_DB_ID: ${{ secrets.NOTION_FEATURE_DB_ID }}
        run: node scripts/notion-sync.js

      - name: Sync ClickUp Status
        env:
          CLICKUP_API_KEY: ${{ secrets.CLICKUP_API_KEY }}
          CLICKUP_TEAM_ID: ${{ secrets.CLICKUP_TEAM_ID }}
        run: node scripts/clickup-sync.js

      - name: Commit changes
        run: |
          git config user.name "Documentation Bot"
          git config user.email "bot@example.com"
          git add .
          git commit -m "Automated doc sync from Notion/ClickUp" || echo "No changes"
          git push
```

---

## Hybrid Approach (Recommended)

**Start Manual** → **Script Pain Points** → **Automate Stable Parts**

### Phase 1: Manual (Week 1-2)
- Use `/roadmap-update` for pod plan updates
- Use `/validation-review` for sprint evaluations
- Copy/paste Notion docs, let Claude convert to feature doc template
- Save raw exports to `reference/`

### Phase 2: Script High-Churn Syncs (Week 3-4)
- Automate feature status syncs from ClickUp (just status, not priorities)
- Keep feature docs, validation roadmap, and capacity manual (need human judgment)

### Phase 3: Full Automation (Month 2+)
- Scheduled status syncs
- Manual override always available
- Notion → feature doc pipeline for new features

---

## Mapping Guide

### Notion → Feature Docs (`planning/features/*.md`)

| Notion Field | Feature Doc Section |
|--------------|---------------------|
| Title | `# Feature: [Title]` |
| Status | `Status: [Status]` |
| Owner | `Design Owner: [Name]` |
| Related SHQs | `## Why This Feature > Validation Goals` (top of doc) |
| Overview | `## Scope` |
| Requirements | `## Scope > In Scope / Out of Scope` |
| Estimate | `## Estimate & Approach > Total Estimate` |
| Disciplines needed | `## Estimate & Approach > Disciplines Required` |
| Implementation plan | `## Estimate & Approach > Implementation Flow` |
| Risks | `## Risks` |
| Open Questions | `## Open Questions` |

### Notion → Validation Roadmap (`planning/ValidationPlan.md`)

| Notion Field | ValidationPlan Section |
|--------------|--------------------------|
| Winning Hypothesis | `### WH-X: [Name]` |
| BHQ | `##### BHQ-X.X: [Question]` |
| SHQ | Milestone table row |
| Test Method | `How We Test` field |
| Success Criteria | `Success Criteria` field |

Note: BHQs/SHQs are cross-pod. Don't assign them to a single pod — they belong in the ValidationPlan, and pod plans reference them by ID.

### ClickUp → Pod Plans (`planning/pods/*_Plan.md`)

| ClickUp Field | Pod Plan Update |
|---------------|-----------------|
| Epic/Feature Status | Feature status in priority table (IN PROGRESS, COMPLETE, etc.) |
| Sprint Progress | Pod plan is feature-level, not task-level — only update when feature status changes |

Note: Pod plans track features/boulders, not individual tasks. ClickUp handles task-level tracking.

---

## Data Flow Diagram

```
┌─────────┐                  ┌───────────────────────────────┐
│ Notion   │ ─────────────→  │  planning/features/*.md       │
│ (Design) │   Manual/Script │  (feature specs)              │
│          │                 │                                │
│          │ ─────────────→  │  planning/ValidationPlan.md │
│          │   Manual        │  (hypotheses, BHQs, SHQs)     │
└──────────┘                 └───────────────────────────────┘
                                        ↓
┌──────────┐                 ┌───────────────────────────────┐
│ ClickUp  │ ─────────────→  │  planning/pods/*_Plan.md      │
│ (Tasks)  │   Manual/Script │  (feature status updates)     │
│          │   (status only) │                                │
└──────────┘                 │  planning/capacity.md          │
                             │  planning/dependency_map.md    │
                             └───────────────────────────────┘
                                        ↓ /roadmap-update
                             ┌───────────────────────────────┐
                             │  generated/roadmap.md          │
                             │  (consolidated view + Gantt)   │
                             └───────────────────────────────┘

Raw exports saved to: reference/
```

---

## Tips

### Keep Source of Truth Clear
- **Notion** = Design decisions, architecture, hypotheses
- **ClickUp** = Task details, assignees, time tracking
- **This Repo** = Strategic planning summaries for LLM context + validation tracking

### Link, Don't Duplicate
```markdown
- Notion Design Doc: [link]
- ClickUp Epic: [link]
```

### What Stays Manual
Some things should always be human-driven:
- Feature priorities in pod plans (strategic judgment)
- Validation Roadmap evaluations (requires evidence assessment)
- Capacity allocations (requires people knowledge)
- Product targets (leadership decisions)

### What Can Be Automated
- Feature status syncs from ClickUp (IN PROGRESS, COMPLETE)
- Feature doc structure from Notion exports
- Consolidated roadmap generation (`/roadmap-update` does this already)

### Save Raw Data
Keep Notion/ClickUp exports in `reference/` for audit trail:
```
reference/
├── notion-exports/
│   └── alliance-system-design.md
├── clickup-exports/
│   └── empire-sprint-3.csv
└── Lotus Productionomicon - Validation Roadmap.csv
```

---

## Next Steps

1. Start with manual ingestion for 1-2 sprints
2. Identify what's tedious to keep in sync
3. Script those specific workflows
4. Keep validation work and priority decisions manual (they require human judgment)
