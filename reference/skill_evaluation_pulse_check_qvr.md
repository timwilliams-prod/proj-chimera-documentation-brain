# Skill Evaluation: Pulse Check & QVR Report Commands

Date: 2026-03-24

---

## Original Query

> I just added 2 new commands to the .claude folder. Can you please evaluate against our current structure -> do you have all the information necessary to address each of these skills? Or do we need to enable certain access?
>
> (These are the generate QVR report and generate pulse check report commands)

---

## Assessment: What Can We Populate vs. What's Missing?

### `/generatePulseCheckReport`

| Section | Brain Coverage | Gap? |
|---------|--------------|------|
| **Executive Summary** (progress since last check-in) | Partial -- validation roadmap, pod plans, roadmap.md give milestone progress | No previous report history to diff against |
| **Team Size** (FT / Embedded / Contractors / Burn Rate) | **Partial** -- `capacity.md` has headcount by person | No FTE vs contractor vs embedded distinction; **no burn rate / budget data** |
| **Team Health** (morale, health surveys) | **None** | Not tracked in the brain |
| **Team Changes & Open Roles** | **Minimal** -- capacity change log has moves/hires | No open roles pipeline or departures tracking |
| **Quarter's Expected Outcomes** (On Track / At Risk / etc.) | **Good** -- `product_targets.md` success criteria + pod plans + `/risk-evaluation` | Works if we map milestone must-haves as "quarterly goals" |
| **Blockers & Risks** | **Good** -- capacity staffing risks, dependency_map, risk-evaluation | |
| **Iteration Cycle Time** | **None** | Lives in a Notion database (`ICT Monthly Report`); not synced to brain |
| **Notable Changes** | **Partial** -- change logs in files | No centralized "decisions made" register |
| **Needs & Asks** | **None** | Not tracked |
| **Active Action Items** | **None** | No action item tracking |

### `/generate_qvr_report`

| Section | Brain Coverage | Gap? |
|---------|--------------|------|
| **CRAPS Decision** (Continue/Reset/Advance/Pivot/Sunset) | **None** | CRAPS framework not documented; no budget/staffing-change ramifications data |
| **Takeaways** | Output, not input -- but benefits from progress data | Same as Pulse Check executive summary |
| **ICT Monthly Report** | **None** | Same Notion database gap |
| **Game Confidence** | **Partial** -- validation roadmap (SHQ statuses) gives structured confidence data | |
| **Expectations for Next Milestone** | **Good** -- `product_targets.md` has success criteria per milestone | |
| **Meeting Recording / Transcription** | N/A -- external links | |

---

## Key Gaps (Priority Order)

1. **Templates lack skill logic.** Unlike other skills (e.g., `/risk-evaluation`, `/roadmap-update`), these don't have operational instructions -- no "read these files, synthesize, output in this format." They need skill logic wrapping the template so Claude knows which brain files to pull from and how to compose the report.

2. **Financial data** -- Burn rate, budget, cost info doesn't exist in the brain. Either needs manual input per report, or a new data source.

3. **ICT (Iteration Cycle Time)** -- Both reports reference this. It lives in a Notion database. We have Notion MCP connected, but need the ICT database ID to query it.

4. **Team health / morale** -- Not tracked. Would need to be manual input.

5. **Action items & open roles** -- No tracking mechanism. Could add a lightweight file (e.g., `planning/action_items.md`) or pull from Notion/ClickUp.

6. **Previous report history** -- No way to diff "since last Pulse Check." Could store past reports in `generated/reports/` for reference.

---

## Recommendations

To make these functional:

1. **Write proper skill logic** for both commands -- pulling from brain files we already have (product_targets, capacity, validation roadmap, pod plans, risk-evaluation output) and marking sections that need manual input with `[MANUAL INPUT NEEDED]` callouts.

2. **Add ICT database access** -- Need the Notion database ID for the ICT Monthly Report to wire into both skills via the Notion MCP.

3. Optionally, create a lightweight `planning/action_items.md` to track cross-meeting action items.
