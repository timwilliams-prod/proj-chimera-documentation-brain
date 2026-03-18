# Data Ingestion Guide

How to get data from Notion and ClickUp into your documentation brain.

## Quick Start

### Option 1: Manual with LLM Assistance (Recommended to Start)

The fastest way to get started - let Claude convert your Notion/ClickUp data into the right format.

#### From Notion

1. **Export Notion page as Markdown**
   - Open your design doc in Notion
   - Click `...` → Export → Markdown & CSV
   - Unzip the export

2. **Convert with Claude**
   ```
   Convert this Notion export into our feature doc format.
   Source: [paste Notion markdown]
   Target: features/[feature_name].md

   Keep the Overview, Goals, Requirements, Architecture, and Risks sections.
   ```

3. **Review and commit**

#### From Notion (Validation Data)

For Winning Hypotheses, BHQs, and milestone definitions:

```
I need to update ValidationRoadmap.md with our hypotheses from Notion.

Here's what we have:
- WH-1: [paste from Notion]
- WH-2: [paste from Notion]
- WH-3: [paste from Notion]

BHQs:
[paste from Notion]
```

Claude will structure them into the ValidationRoadmap.md schema.

#### From ClickUp

1. **Get task list from ClickUp**
   - Open your pod's sprint view
   - Copy task list (or export CSV)

2. **Update with Claude**
   ```
   /roadmap-update

   Pod: Empire
   Sprint: 23

   In Progress:
   - EMP-101: Base building foundation (60% done)
   - EMP-102: Resource gathering system (30% done)

   Committed:
   - EMP-103: Storage system
   - EMP-104: Building upgrades
   ```

3. **Claude updates `pods/Empire_Backlog.md` and regenerates `roadmap.md`**

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
    const filename = `features/${slugify(title)}.md`;
    fs.writeFileSync(filename, mdContent);
    console.log(`Synced ${filename}`);
  }
}
```

### ClickUp → Per-Pod Backlog Scripts

```javascript
// scripts/clickup-sync.js

const POD_MAP = {
  'Empire':           'pods/Empire_Backlog.md',
  'Metagame':         'pods/Metagame_Backlog.md',
  'Battle':           'pods/Battle_Backlog.md',
  'Social Dynamics':  'pods/SocialDynamics_Backlog.md',
  'Dozer':            'pods/Dozer_Backlog.md',
};

async function syncPodBacklogs() {
  const spaces = await fetchClickUpSpaces(process.env.CLICKUP_TEAM_ID);

  for (const space of spaces) {
    const podFile = POD_MAP[space.name];
    if (!podFile) continue;

    const sprintTasks = await fetchClickUpTasks(space.id, {
      status: ['in progress', 'committed'],
      sprint: 'current',
    });

    const inProgress = sprintTasks.filter(t => t.status === 'in progress');
    const committed = sprintTasks.filter(t => t.status === 'committed');

    let md = `# ${space.name} Pod Backlog\n\n`;
    md += `Last Updated: ${new Date().toISOString().split('T')[0]}\n`;
    md += `Pod Lead: ${space.lead || '[TBD]'}\n\n---\n\n`;
    md += `## Current Sprint\n\n`;
    md += `### In Progress\n`;

    for (const task of inProgress) {
      md += `- \`${task.custom_id}\` - ${task.name}\n`;
      md += `  - Owner: ${task.assignee}\n`;
      md += `  - ClickUp: ${task.url}\n`;
      md += `  - Status: ${task.progress}% - ${task.description}\n`;
      if (task.blockers) md += `  - Blockers: ${task.blockers}\n`;
      md += `\n`;
    }

    // ... similar for committed, backlog, etc.

    fs.writeFileSync(podFile, md);
    console.log(`Synced ${podFile}`);
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

      - name: Sync ClickUp
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
- Use `/roadmap-update` for sprint updates to pod backlogs
- Use `/validation-review` for sprint evaluations
- Copy/paste Notion docs, let Claude convert

### Phase 2: Script High-Churn Files (Week 3-4)
- Automate pod backlog syncs (change often, one file per pod)
- Keep feature docs and ValidationRoadmap manual (change less, need human judgment)

### Phase 3: Full Automation (Month 2+)
- Scheduled syncs for backlogs
- Manual override always available

---

## Mapping Guide

### Notion → Features

| Notion Field | Feature Doc Section |
|--------------|---------------------|
| Title | `# Feature: [Title]` |
| Status | `Status: [Status]` |
| Owner | `Owner: [Pod]` |
| Overview | `## Overview` |
| Goals | `### Goals` |
| Requirements | `## Requirements` |
| Architecture | `## Architecture` |
| Risks | `## Risks & Mitigations` |
| Open Questions | `## Open Questions` |

### Notion → Validation Roadmap

| Notion Field | ValidationRoadmap Section |
|--------------|--------------------------|
| Winning Hypothesis | `### WH-X: [Name]` |
| BHQ | `##### BHQ-X.X: [Question]` |
| SHQ | Milestone table row |
| Test Method | `How We Test` field |
| Success Criteria | `Success Criteria` field |

### ClickUp → Pod Backlogs

| ClickUp Field | Backlog Section |
|---------------|-----------------|
| Custom ID | Task ID (e.g., `EMP-101`) |
| Task Name | Task description |
| Assignee | Owner field |
| Status | Section (In Progress/Committed) |
| Progress | Status percentage |
| Tags | Priority (P0/P1/P2) |
| Blockers (custom) | Blockers field |
| Sprint | Current/Next/Backlog section |
| Space/Folder | Determines which `pods/*_Backlog.md` file |

---

## Data Flow Diagram

```
┌─────────┐                  ┌──────────────────────┐
│ Notion   │ ─────────────→  │  Feature Docs         │
│ (Design) │   Manual/Script │  features/*.md        │
│          │                 │                        │
│          │ ─────────────→  │  ValidationRoadmap.md  │
│          │   Manual        │  (hypotheses, BHQs)    │
└──────────┘                 └──────────────────────┘
                                       ↓
┌──────────┐                 ┌──────────────────────┐        ┌──────────┐
│ ClickUp  │ ─────────────→  │  pods/*_Backlog.md    │ ────→ │  LLMs    │
│ (Tasks)  │   Manual/Script │  dependency_map.md    │ Read  │  Humans  │
└──────────┘                 │  GlobalRules.md       │ ←──── │  Skills  │
                             └──────────────────────┘ Update └──────────┘
                                       ↓
                             ┌──────────────────────┐
                             │  roadmap.md (Gantt)   │
                             │  (auto-generated)     │
                             └──────────────────────┘
                                       ↓
                             ┌──────────────────────┐
                             │   Git Repository      │
                             │   (Version Control)   │
                             └──────────────────────┘
```

---

## Tips

### Keep Source of Truth Clear
- **Notion** = Design decisions, architecture, hypotheses
- **ClickUp** = Task details, assignees, time tracking
- **This Repo** = High-level summaries for LLM context + validation tracking

### Link, Don't Duplicate
```markdown
- Notion Design Doc: [link]
- ClickUp Epic: EMP-100 [link]
```

### What Stays Manual
Some things should always be human-driven:
- Validation Roadmap evaluations (requires judgment)
- Confidence level changes (requires evidence assessment)
- Hypothesis revisions (strategic decisions)
- Dependency map changes (architectural awareness)

### What Can Be Automated
- Pod backlog status syncs from ClickUp
- Feature doc structure from Notion
- Gantt chart regeneration (skill does this already)

---

## Next Steps

1. Start with manual ingestion for 1-2 sprints
2. Identify what's tedious to keep in sync
3. Script those specific workflows
4. Keep validation work manual (it requires human judgment)
