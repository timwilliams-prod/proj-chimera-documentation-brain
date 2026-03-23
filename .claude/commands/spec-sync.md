# Spec Sync Skill

You are synchronizing the project's **feature spec files** (`planning/features/*.md`) with the authoritative feature registry and design documents in Notion.

> **Note**: This skill checks every feature in the registry, ensures it has a local spec, and populates specs with content from Notion. Unresolvable conflicts go to the designer queue.
> For roadmap updates, see the roadmap-update skill.
> For validation checks, see the validation-review skill.
> For authoring a single spec interactively, see the doc-author skill.

---

## Project Structure

### Authoritative Sources
- `planning/feature_registry.md` — **Feature list + Notion ID mapping**. This is what drives the sync. Each row = one feature that should have a local spec.
- `planning/product_targets.md` — Milestone goals, success criteria, validation alignment. Context for "why" a feature matters.
- **Notion Game Documentation database** (via MCP) — Design detail, scope, mechanics, status from the design team's working docs. Database ID: `1c93f0b3b6ab80588d39d13dde6d9cab`, Data source: `collection://1c93f0b3-b6ab-804e-9462-000b25d3d67d`.

### Spec Files (output)
- `planning/features/*.md` — Feature specs following the template in `planning/features/governors.md`

### Designer Queue (conflict/gap tracking)
- `planning/designer_queue/designerQueue.md` — Open questions and unresolved conflicts assigned to designers

### Context
- `planning/capacity.md` — Designer ownership: "Pod Leadership Summary" table maps design leads to pods; "Design" section lists all designers by pod.
- `planning/pods/*_Plan.md` — Pod plans (for validation alignment)
- `planning/ValidationRoadmap.md` — SHQ/BHQ references for feature validation goals

---

## Your Task

### 1. Read Current State

Read these files:
1. `planning/feature_registry.md` — The feature list driving this sync
2. All files in `planning/features/*.md` — Which specs already exist
3. `planning/product_targets.md` — Milestone context and "why it's required" for each feature
4. `planning/capacity.md` — Who owns what (Pod Leadership Summary + Design section)
5. `planning/designer_queue/designerQueue.md` — Existing open questions (to avoid duplicates)
6. `planning/ValidationRoadmap.md` — SHQ/BHQ references for validation sections

### 2. Build Feature Inventory

Parse `planning/feature_registry.md` to build the working inventory. For each row:

| Field | Source |
|-------|--------|
| Feature name | Registry |
| Pod | Registry |
| Milestone | Registry (section header) |
| Priority | Registry (Must-Have / Nice-to-Have) |
| Notion ID | Registry (may be blank) |
| Expected spec file | Registry |
| Spec exists? | Check `planning/features/` |
| Why it's required | `product_targets.md` |

Skip rows that are still `[TBD - ...]` placeholders — note them in the summary but don't try to sync them.

### 3. Fetch from Notion

For each feature that has a **Notion ID** in the registry:

1. **Fetch the page** using the Notion MCP:
   ```
   mcp__notion__notion-fetch(id: "<notion-id-from-registry>")
   ```

2. **Extract from the Notion page**:
   - Title and status
   - Doc Type, Sub Type, Fidelity (from page properties)
   - Owner (if set)
   - Full page content: scope, mechanics, open questions, any structured sections
   - Links to related pages (if referenced)

3. **If a feature has no Notion ID** in the registry:
   - Try a search as a fallback:
     ```
     mcp__notion__notion-search(query: "<feature name>", data_source_url: "collection://1c93f0b3-b6ab-804e-9462-000b25d3d67d", page_size: 3)
     ```
   - If a clear match is found, note the Notion ID in the summary so Tim can add it to the registry
   - If no match, proceed without Notion content

4. **If Notion MCP is not connected**:
   - Skip all Notion fetching
   - Note in the output that Notion was unavailable
   - Proceed with gap analysis based on local files only

### 4. Create Missing Specs

For each feature where the spec file does NOT exist in `planning/features/`:

#### a. If Notion content was fetched:

Create the spec file using content from Notion, mapped to the template structure. Use `planning/features/governors.md` as the template reference.

```markdown
# Feature: [Name]

- **Last Updated**: [today's date]
- **Status**: [from Notion status property, or default to NOT STARTED]
- **Pod**: [from registry]
- **Design Owner**: [from capacity.md Pod Leadership Summary — the Design Lead for this pod]
- **ClickUp**: [link if available, otherwise TBD]
- **Notion**: [URL to the Notion page: https://www.notion.so/<notion-id>]

---

## Why This Feature

### Validation Goals

| SHQ | Question | Status |
|-----|----------|--------|
| [SHQ from product_targets.md or pod plan] | [Question text from ValidationRoadmap.md] | [Status] |

**Parent BHQ**: [From pod plan or ValidationRoadmap.md]

**What [Feature] Must Prove**: [Synthesized from product_targets "Why It's Required" + Notion description]

### Success Criteria

- [From Notion if available, otherwise [TBD - needs designer input]]

---

## Scope

[From Notion page content. Map the Notion doc's description/overview into this section.]

### Core Mechanics

- [Extract from Notion content]

### In Scope

- [From Notion or TBD]

### Out of Scope

- [From Notion or TBD]

---

## Estimate & Approach

**Total Estimate**: [TBD - needs designer + engineering input]

### Disciplines Required

| Discipline | Needed | Sprints | Notes |
|-----------|--------|---------|-------|
| Engineering | [TBD] | [TBD] | |
| UX/UI Design | [TBD] | [TBD] | |
| Game Design | [TBD] | [TBD] | |
| Art | [TBD] | [TBD] | |

### Implementation Flow

[TBD - needs engineering input]

### Pre-Conditions

- [ ] [TBD - needs designer input]

---

## Dependencies

| Dependency | Direction | Details |
|-----------|-----------|---------|
| [TBD] | | |

---

## Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [TBD] | | | |

---

## Open Questions

- [ ] [Pulled from Notion page if available]
- [ ] [Generated from TBD sections above]

---

## References

- Notion Design Doc: [link to Notion page]
- ClickUp Epic: [link if available]
- Related: `planning/pods/[Pod]_Plan.md`, `planning/ValidationRoadmap.md`
```

**Content mapping guidance**: Notion docs vary in structure (GDD, Brief, Feature Version, etc.). Extract whatever is available and map it to the closest spec section. Don't force content into sections it doesn't fit — mark remaining sections as TBD. The goal is to capture what Notion has, not to fabricate missing detail.

#### b. If no Notion content available:

Create a **stub spec** with the same template, but all content sections marked `[TBD - needs designer input]`. Populate only:
- Feature name, pod, milestone (from registry)
- Validation goals (from ValidationRoadmap.md / product_targets.md if traceable)
- Design owner (from capacity.md — the Design Lead for the feature's pod)

### 5. Compare Existing Specs Against Notion

For features that already have spec files AND Notion content was fetched, compare them. Look for:

#### Conflicts (cannot auto-resolve — send to designer queue)
- Notion describes different scope/mechanics than the spec
- Notion status contradicts spec status
- Fundamental design direction differences

#### Updates (can apply with user approval)
- Notion has new content for sections that are currently TBD in the spec
- Notion has resolved questions that are still open in the spec
- New scope items in Notion not yet in the spec

#### Stale Content
- Spec has detail that Notion has since changed or removed
- Notion page is marked "Out of Date" or "Archived"

**Present all conflicts and proposed updates to the user before making any changes to existing specs.**

### 6. Populate Designer Queue

For every unresolvable gap or conflict, add a question to `planning/designer_queue/designerQueue.md`.

#### Question Sources:
- **Conflicts**: "Notion says X but spec says Y for [feature]. Which is correct?"
- **Missing Notion docs**: "Feature X is in the registry but has no Notion ID and no matching doc was found. Is design work started?"
- **TBD sections in new specs**: "Created spec for X from Notion, but [section] had no content. Please provide."
- **Open questions pulled from Notion**: Questions found in Notion doc content

#### Question format in designerQueue.md:

```markdown
### [Designer Name] ([Pod])

| ID | Feature | Question | Priority | Source | Status |
|----|---------|----------|----------|--------|--------|
| Q-001 | [Feature] | [Question text] | HIGH | spec-sync conflict | OPEN |
```

#### Assigning questions:
- Look up the feature's pod in the registry, then find the Design Lead for that pod in `planning/capacity.md` (Pod Leadership Summary table)
- If no Design Lead is listed for the pod, assign to `[UNASSIGNED]` and flag it

#### Priority rules:
- **HIGH**: Conflicts between Notion and spec, missing Notion doc for a must-have feature
- **MEDIUM**: TBD sections in specs, open questions from Notion
- **LOW**: Nice-to-have feature gaps, minor missing details

#### ID assignment:
- Find the highest existing Q-XXX ID in designerQueue.md and increment from there
- IDs are never reused

### 7. Update Registry Status

After processing, update the **Status** column in `planning/feature_registry.md` for each feature:
- `Has Spec` — if a spec file now exists with substantive content
- `Stub Only` — if a spec was created but is mostly TBDs
- `Needs Spec` — if still no spec (shouldn't happen after a run, but possible if skipped)

### 8. Update Queue Status Table

Update the summary table at the top of `designerQueue.md`:

```markdown
| Designer | Pod | Open Qs | Answered | Last Active |
|----------|-----|---------|----------|-------------|
| Diana Vasilescu | Empire | 5 | 0 | - |
| Leonard [Last Name] | Metagame | 3 | 0 | - |
```

### 9. Output Summary

Present to the user:

```
## Spec Sync Report

**Run Date**: [today]
**Notion MCP**: Connected / Not Connected

### Feature Inventory ([X] features in registry, [Y] TBD placeholders skipped)

| Feature | Pod | Milestone | Spec | Notion | Action Taken |
|---------|-----|-----------|------|--------|-------------|
| Governors | Empire | M&Ms | Exists | Fetched | Compared - no conflicts |
| Territory Map VS | Empire | M&Ms | Created | Fetched | New spec from Notion |
| Battle HUD Beta | Battle | M&Ms | Created | Not found | Stub spec created |

### Notion IDs Found (add to registry)
- "[Feature Name]" likely matches Notion page "[Page Title]" (ID: xxx-xxx)
[List any features where a search found a probable match but there's no ID in the registry yet]

### Gaps Found: [X]
- [X] specs created from Notion content
- [X] stub specs created (no Notion content)
- [X] conflicts found (sent to designer queue)
- [X] TBD sections flagged
- [X] features with no Notion doc

### Designer Queue Updated
- [Designer Name]: X new questions
- [Designer Name]: X new questions

### Conflicts (Need Resolution)
- [Feature]: Notion says X, spec says Y — assigned to [Designer] as Q-XXX

### Recommended Next Steps
1. Add any suggested Notion IDs to `planning/feature_registry.md`
2. Resolve conflicts in the designer queue
3. Designers should run `/designer-quiz` to answer open questions
4. Re-run `/spec-sync` after registry updates
```

---

## Rules

### Never Auto-Overwrite Existing Specs
- If a spec file exists and has content, never overwrite without user confirmation
- Present conflicts and let the user decide
- Notion content supplements specs, it doesn't replace manually-authored content

### Registry Is the Driver
- Only process features listed in `planning/feature_registry.md`
- If a feature exists in product_targets.md but not the registry, note it in the summary — don't auto-add it to the registry
- The registry is human-curated; `/spec-sync` reads it, not writes it (except Status column)

### Preserve Validation Goals
- Always populate the "Why This Feature" section, even in stubs
- Trace features to SHQs via product_targets.md and ValidationRoadmap.md
- If no SHQ link is obvious, flag it (feature work without validation alignment)

### Keep IDs Stable
- Question IDs (Q-XXX) are sequential and never reused
- When adding new questions, find the highest existing ID and increment

### Template Source
- The canonical template is `planning/features/governors.md`
- Match its structure for all new specs
- Don't add sections that aren't in the template

### Notion Content Mapping
- Notion docs vary in structure (GDD, Brief, Feature Version, Fidelity Chunk, etc.)
- Extract what's available and map to the closest spec section
- Don't fabricate content to fill sections — mark as TBD if Notion doesn't cover it
- Preserve Notion links in the References section

---

## Notes

- This skill is safe to run repeatedly — it's additive, not destructive
- Run this before `/risk-evaluation` to ensure spec coverage is current
- After designers answer questions via `/designer-quiz`, run `/queue-review` to apply answers
- The feature registry is the ground truth for "what features should have specs"
- `product_targets.md` provides the "why" context but the registry drives the sync
- If Notion MCP is not connected, the skill still works — it just can't fetch Notion content and will create stubs instead
