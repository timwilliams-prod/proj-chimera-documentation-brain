# Roadmap Sheet Skill

You are regenerating the **Google Sheets roadmap** for the Lotus project. This produces a self-contained Google Apps Script that populates the "ClaudeRoadmap" tab in the Lotus Productionomicon spreadsheet.

> **Architecture**: Template + Data separation.
> - `generated/roadmap_sheet_template.js` — The rendering/formatting code (stable, rarely changes)
> - `generated/roadmap_sheet_data.json` — The feature/sprint data (changes when plans change)
> - `generated/roadmap_apps_script.js` — The combined output (paste into Apps Script)

---

## Your Task

### 1. Read Current State

Read ALL of these files to build the latest roadmap data:

**Planning sources (authoritative):**
- `planning/product_targets.md` — Milestone definitions, dates, must-have features
- `planning/pods/empire/features.md` — Empire feature priorities
- `planning/pods/metagame/features.md` — Metagame feature priorities
- `planning/pods/battle/features.md` — Battle feature priorities
- `planning/pods/social_dynamics/features.md` — Social Dynamics feature priorities
- `planning/pods/dozer/features.md` — Dozer feature priorities
- `planning/capacity.md` — Team staffing (for staffLine per pod)

> **5 active pods**: Empire, Metagame, Battle, Social Dynamics, Dozer. Art Pod was closed 2026-04-13 — `planning/pods/art/` only holds a closure marker. Do not read it as a pod feature source and do not emit an Art pod entry. Artist deliverables are now embedded in their working pods per `planning/capacity.md` (Empire artists, Battle artists, cross-pod art direction, etc.) and should appear in the relevant pod's `staffLine` rather than as a standalone Art row.
- `planning/ValidationPlan.md` — SHQ/BHQ statuses

**Current data (for diffing):**
- `generated/roadmap_sheet_data.json` — Current data file
- `generated/roadmap.md` — Consolidated roadmap (Gantt + pod summaries)

**Template (for assembly):**
- `generated/roadmap_sheet_template.js` — The rendering template

### 2. Extract Data

Build the JSON data structure matching the schema in `roadmap_sheet_data.json`. Key rules:

#### Sprints
- 2-week cadence starting Mar 31, 2026
- Calculate sprint boundaries from milestone dates in `product_targets.md`
- If milestone dates change, recalculate all sprint IDs and date ranges

#### Milestones
- Pull names, dates, and colors from the existing data file (or product_targets.md if dates changed)
- `devPhase` comes from product_targets.md

#### Pods
Each pod entry needs:
- `name`: Pod name (uppercase)
- `staffLine`: Built from `planning/capacity.md` Pod Leadership Summary + Engineering section
- `rows`: Array of items, each one of:
  - `{"type": "feature", "name": "...", "estimate": "...", "status": "...", "workType": "work|ongoing|proto|tbd|deferred", "sprintRanges": [[start, end], ...]}`
  - `{"type": "pipeline", "text": "..."}`
  - `{"type": "warning", "text": "..."}`

#### Sprint Ranges
- Map feature estimates to sprint indices (0-based)
- Sequential features within a pod: next feature starts after previous ends
- Parallel pipelines: features start at the same sprint index
- Ongoing features: `[[0, lastSprint]]`
- Use the Gantt chart in `generated/roadmap.md` as the primary source for scheduling (it has dependency chains)

#### Statuses
- Pull current status from pod `features.md` files
- Valid values: `"IN PROGRESS"`, `"NOT STARTED"`, `"DEFERRED"`, `"Ongoing"`

#### Work Types
- `"work"` — Standard scheduled feature (green)
- `"ongoing"` — Continuous work like content pipelines (gray)
- `"proto"` — Prototype/experimental track (purple)
- `"tbd"` — Not yet scoped or defined (yellow)
- `"deferred"` — Pushed to later milestone (red)

#### Validation Markers
- `validationByMilestone`: Key validation focus per milestone start
- `shqMarkers`: Which SHQs are being tested in each milestone
- `whMarkers`: Which Winning Hypotheses are the focus
- Pull from pod `validation.md` files (where they exist) and `planning/ValidationPlan.md`

#### Capacity Warnings
- If a pod has more eng-sprints of work than available sprints, add a `"warning"` row
- Check: (total feature sprints) vs (available sprints * number of engineers)
- Flag single-engineer bottlenecks, split-attention risks

### 3. Write Data File

Write the updated JSON to `generated/roadmap_sheet_data.json`.

### 4. Assemble Apps Script

Combine template + data into a single file:
1. Read `generated/roadmap_sheet_template.js`
2. Replace the `__ROADMAP_DATA__` placeholder with the JSON from step 3
3. Write to `generated/roadmap_apps_script.js`

### 5. Summary

Report:
- What changed vs previous data (new features, status changes, timeline shifts)
- Any capacity warnings or risks detected
- Remind user to paste into Apps Script:
  1. Open [Lotus Productionomicon](https://docs.google.com/spreadsheets/d/156hViBsjoRMKy-j9kW5oZbeKFTWWEKo4wARHXVpY70E/edit)
  2. Extensions > Apps Script
  3. Paste contents of `generated/roadmap_apps_script.js`
  4. Run `populateClaudeRoadmap`

---

## Modifying the Visuals

If the user wants to change the visual format (colors, layout, column widths, etc.):
- Edit `generated/roadmap_sheet_template.js` directly
- The template reads everything from the `DATA` object, so visual changes don't affect data extraction
- After editing the template, re-run the assembly step (combine template + existing data)

## Notes

- The template uses Unicode characters for markers: ■ (\u25A0), – (\u2013), ◆ (\u25C6)
- Sprint indices are 0-based (S1 = index 0, S30 = index 29)
- The `_meta` field in the JSON tracks generation date and source files
- Pod leadership comes from `planning/capacity.md`, not hardcoded
- When plans are ambiguous, use `generated/roadmap.md` Gantt as tiebreaker for scheduling
