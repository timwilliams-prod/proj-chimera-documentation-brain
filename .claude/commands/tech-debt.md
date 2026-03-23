# Tech Debt Skill

You are managing **technical debt visibility** — helping engineering leads track debt items, analyze their impact on planned features, and make informed decisions about when to pay down debt.

> **Note**: This skill has two modes: **Report** (analyze debt vs features) and **Editor** (add/update/retire debt items).
> The debt ledger lives at `planning/TechnicalDebt.md` and is maintained by Engineering Leads.
> For feature-level risk analysis, see `/risk-evaluation`. For feature specs, see `/doc-author`.

---

## Project Structure

### Authoritative Source (read + write in Editor mode)
- `planning/TechnicalDebt.md` - The tech debt ledger (this skill creates it if it doesn't exist)

### Context Sources (read only)
- `planning/features/*.md` - Feature specs (to analyze debt-feature interactions)
- `planning/dependency_map.md` - Dependencies (to trace debt impact across pods/systems)
- `planning/product_targets.md` - Milestone targets (to assess debt impact on must-haves)
- `planning/pods/*_Plan.md` - Pod plans (to check if debt paydown is scheduled)
- `planning/capacity.md` - Engineering staffing (to assess paydown feasibility)

---

## Modes

Ask the user: **"What would you like to do?"**

- **Report**: "Show me the current debt landscape and how it affects planned work"
- **Editor**: "I need to add, update, or retire debt items"

If unclear, default to Report.

---

## Mode: Report

### 1. Read Current State

Read these files:
1. `planning/TechnicalDebt.md` — All debt items
2. All `planning/features/*.md` — Planned feature work
3. `planning/dependency_map.md` — System dependencies
4. `planning/product_targets.md` — Must-have features by milestone
5. `planning/pods/*_Plan.md` — Pod plans and priorities

If `planning/TechnicalDebt.md` doesn't exist, tell the user: "No tech debt ledger found. Run this skill in Editor mode first to create it and add debt items."

### 2. Analyze Debt-Feature Interactions

For each debt item, determine which planned features it affects:

#### a. Explicit Links
Check the `Affected Features` field in each debt item. Cross-reference against existing feature specs.

#### b. Inferred Links
Read the debt item's `Affected Systems` field and the feature specs' scope/dependency sections. Flag connections where:
- A feature's scope mentions a system that has known debt
- A feature depends on a system with known debt (via dependency_map.md or the feature's dependency table)
- A debt item's affected system is upstream of a feature (trace via dependency_map.md)

Mark inferred links as `[inferred]` to distinguish from explicit ones.

### 3. Assess Impact

For each debt-feature interaction:
- **Complication Level**: How much harder does this debt make the feature? (Minor friction / Significant rework / Potential blocker)
- **Milestone Risk**: Does this affect a must-have feature in product_targets.md?
- **Cascade Potential**: Via dependency_map.md, could this debt item affect features in multiple pods?

### 4. Identify Paydown Opportunities

Look for debt items where paydown would unblock or simplify multiple features:
- Count how many features each debt item affects
- Estimate the "multiplier effect" — is paying down this debt cheaper than working around it N times?
- Check if any pod plan already schedules paydown work

### 5. Generate Report

Output the report to the console (not to a file — the user can save if they want).

```
# Tech Debt Report

**Generated**: [today's date]
**Debt Items Tracked**: [X]
**Features Analyzed**: [Y]

---

## Debt Impact Summary

### High-Impact Debt (affects must-have features or multiple pods)

| ID | Debt Item | Severity | Features Affected | Pods | Paydown Cost | Multiplier |
|----|-----------|----------|-------------------|------|-------------|------------|
| TD-001 | [Title] | [Critical/High] | [X features] | [Pod list] | [X sprints] | [Worth it / Marginal / Not yet] |

### Medium-Impact Debt

| ID | Debt Item | Severity | Features Affected | Paydown Cost |
|----|-----------|----------|-------------------|-------------|
| TD-003 | [Title] | [Medium] | [X features] | [X sprints] |

### Low-Impact Debt (no current feature interactions)

- TD-005: [Title] — No planned features currently affected

---

## Feature Risk View

Features most affected by tech debt, sorted by risk:

| Feature | Pod | Milestone | Debt Items | Worst Impact | Notes |
|---------|-----|-----------|-----------|-------------|-------|
| [Feature] | [Pod] | [Milestone] | TD-001, TD-003 | Potential blocker | [Brief note] |
| [Feature] | [Pod] | [Milestone] | TD-002 [inferred] | Minor friction | [Brief note] |

---

## Paydown Recommendations

### Priority Paydowns (high multiplier — unblocks multiple features)

1. **TD-001: [Title]** — Affects [X] features across [Y] pods. Estimated paydown: [Z] sprints.
   - Features unblocked: [list]
   - Recommended timing: [Before milestone X / This sprint / Can wait]

### Scheduled Paydowns
- [Any debt paydown already in pod plans]

### Debt Growing (new items since last report)
- [Recently added items, if trackable by date]

---

## Dependency Chain Risks

[Debt items that sit on critical dependency paths:]

- TD-001 affects [System A] -> [System A] is upstream of [Feature X, Feature Y, Feature Z]
  - If this debt causes delays in System A work, it cascades to [X] features

---

## Recommended Actions

1. **[Action]** — Addresses: TD-XXX
   - Owner: [Engineering Lead / Pod]
   - Urgency: [Before next sprint / Before milestone / Backlog]

2. **[Action]** — Addresses: TD-XXX
   - [Details]
```

---

## Mode: Editor

### 1. Read Current State

Read `planning/TechnicalDebt.md`. If it doesn't exist, create it with the template (see TechnicalDebt.md Structure below).

### 2. Ask What to Do

- **Add**: "I want to log a new debt item"
- **Update**: "I need to update an existing item"
- **Retire**: "A debt item has been resolved"
- **Bulk review**: "Let's go through the whole list"

### 3a. Add a Debt Item

Interview the user for each field:

1. **Title**: What's the debt? (Short, descriptive name)
2. **Description**: What's the problem? Why is it debt? (2-3 sentences)
3. **Affected Systems**: Which systems/subsystems does this touch? (e.g., "combat-backend", "UI-framework", "matchmaking")
4. **Affected Pods**: Which pods work in these systems?
5. **Severity**: How bad is it?
   - **Critical**: Actively causing bugs or blocking work
   - **High**: Significant friction for planned features, will cause rework
   - **Medium**: Known suboptimal approach, causes slowdowns
   - **Low**: Code smell, not actively causing problems
6. **Affected Features**: Which planned features will this complicate? (Check `planning/features/*.md` — suggest candidates based on affected systems)
7. **Estimated Paydown**: How many eng-sprints to fix? (Rough is fine)
8. **Logged By**: Who's reporting this?

Assign the next sequential ID (TD-XXX) and add to `planning/TechnicalDebt.md`.

### 3b. Update a Debt Item

Show the current list of debt items (ID, title, severity). Ask which to update. Show current values and ask what's changed.

Common updates:
- Severity escalation/de-escalation
- New affected features discovered
- Updated paydown estimate
- Added notes from recent experience

### 3c. Retire a Debt Item

Ask which item to retire. Confirm with the user. Change status to `RESOLVED` and add resolution date and notes. Do NOT delete the item — keep it for history.

### 3d. Bulk Review

Walk through each active debt item:
- Show current details
- Ask: "Still accurate? Any changes?"
- Update as needed
- Quick and efficient — skip items that are unchanged

### 4. Save Changes

Write the updated `planning/TechnicalDebt.md`. Show a summary of what changed.

```
## Editor Session Complete

### Changes Made
- Added: TD-XXX ([Title])
- Updated: TD-YYY (severity High -> Critical, added 2 affected features)
- Retired: TD-ZZZ ([Title]) — resolved [date]

### Current Debt Summary
- Active items: [X]
- Critical: [X] | High: [X] | Medium: [X] | Low: [X]
```

---

## TechnicalDebt.md Structure

If the file doesn't exist, create it with this structure:

```markdown
# Technical Debt Ledger

**Last Updated**: [today's date]
**Owner**: Engineering Leads
**Total Active Items**: 0

---

## How to Use This File

- Engineering Leads maintain this file via the `/tech-debt` skill (Editor mode)
- Run `/tech-debt` in Report mode to see how debt interacts with planned features
- Items are never deleted — retired items stay for history
- IDs are sequential and never reused

---

## Active Debt Items

<!--
### TD-001: [Title]

- **Severity**: [Critical / High / Medium / Low]
- **Status**: ACTIVE
- **Logged**: [date]
- **Logged By**: [name]
- **Description**: [What's the problem? Why is it debt?]
- **Affected Systems**: [system1, system2]
- **Affected Pods**: [pod1, pod2]
- **Affected Features**: [feature1, feature2] (or "None currently planned")
- **Estimated Paydown**: [X eng-sprints]
- **Notes**: [Additional context, history, workarounds in use]
-->

[No items yet. Run `/tech-debt` in Editor mode to add items.]

---

## Resolved Debt Items

[None yet.]

<!--
### TD-XXX: [Title]

- **Severity**: [original severity]
- **Status**: RESOLVED
- **Logged**: [date]
- **Resolved**: [date]
- **Resolution**: [How it was fixed, or why it's no longer relevant]
-->
```

---

## Rules

### Engineering Lead Ownership
- This file is maintained by Engineering Leads. The skill helps them, not replaces them.
- Always confirm before writing changes to `planning/TechnicalDebt.md`.

### IDs Are Permanent
- TD-XXX IDs are sequential, never reused, never renumbered
- Retired items keep their IDs

### Inferred Links Are Labeled
- When Report mode infers a debt-feature connection (not explicitly listed), mark it as `[inferred]`
- This lets the team validate or dismiss the inference

### Don't Overstate Impact
- Not all debt is urgent. Low-severity items with no feature interactions should be acknowledged but not alarmist.
- "Potential blocker" means real risk, not theoretical possibility

### Reference, Don't Duplicate
- Don't copy feature scope into debt items — reference by feature name
- Don't copy dependency chains — reference dependency_map.md
- Debt items should be self-contained descriptions of the debt itself, with pointers to what it affects

### Safe to Run Repeatedly
- Report mode is read-only — no file changes
- Editor mode always confirms before writing

---

## Notes

- Run Report mode before sprint planning to inform prioritization
- Run Editor mode when engineers discover or resolve debt
- The `/risk-evaluation` skill can reference TechnicalDebt.md in future iterations for a more complete risk picture
- If dependency_map.md is sparse, inferred links will be weaker — populate dependencies for better analysis
- Consider running Report mode before `/roadmap-options` to inform scenario planning
