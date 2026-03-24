"""
Generate Lotus roadmap data as TSV for pasting into Google Sheets ClaudeRoadmap tab.
Data sourced from planning docs in the documentation brain.
"""
import csv
import io

# Sprint definitions (2-week cadence)
SPRINTS = [
    # M&Ms (6 sprints)
    ("S1", "3/31", "4/13"),
    ("S2", "4/14", "4/27"),
    ("S3", "4/28", "5/11"),
    ("S4", "5/12", "5/25"),
    ("S5", "5/26", "6/8"),
    ("S6", "6/9", "6/22"),
    # Beta Launch Prep (2 sprints)
    ("S7", "6/23", "7/6"),
    ("S8", "7/7", "7/20"),
    # M&C (6 sprints)
    ("S9", "7/21", "8/3"),
    ("S10", "8/4", "8/17"),
    ("S11", "8/18", "8/31"),
    ("S12", "9/1", "9/14"),
    ("S13", "9/15", "9/28"),
    ("S14", "9/29", "10/12"),
    # Live Ops & Social (8 sprints)
    ("S15", "10/13", "10/26"),
    ("S16", "10/27", "11/9"),
    ("S17", "11/10", "11/23"),
    ("S18", "11/24", "12/7"),
    ("S19", "12/8", "12/21"),
    ("S20", "12/22", "1/4"),
    ("S21", "1/5", "1/18"),
    ("S22", "1/19", "2/1"),
    # Soft Launch (8 sprints)
    ("S23", "2/2", "2/15"),
    ("S24", "2/16", "3/1"),
    ("S25", "3/2", "3/15"),
    ("S26", "3/16", "3/29"),
    ("S27", "3/30", "4/12"),
    ("S28", "4/13", "4/26"),
    ("S29", "4/27", "5/10"),
    ("S30", "5/11", "5/29"),
]

NUM_SPRINTS = len(SPRINTS)

# Milestone boundaries (sprint indices, 0-based)
MILESTONES = [
    ("M&Ms\n(Mar 31 – Jun 23)", 0, 5),        # S1-S6
    ("Beta Launch Prep\n(Jun 23 – Jul 21)", 6, 7),  # S7-S8
    ("M&C\n(Jul 21 – Oct 13)", 8, 13),          # S9-S14
    ("Live Ops & Social\n(Oct 13 – Feb 2)", 14, 21), # S15-S22
    ("Soft Launch\n(Feb 2 – May 30)", 22, 29),   # S23-S30
]

def make_row(pod, feature, estimate, status, sprint_ranges, label="■"):
    """Create a row with sprint markers."""
    row = [pod, feature, estimate, status]
    cells = [""] * NUM_SPRINTS
    for start, end in sprint_ranges:
        for i in range(start, end + 1):
            if 0 <= i < NUM_SPRINTS:
                cells[i] = label
    row.extend(cells)
    return row

def make_empty_row():
    return [""] * (4 + NUM_SPRINTS)

def make_section_header(title):
    row = [title] + [""] * (3 + NUM_SPRINTS)
    return row

rows = []

# === ROW 1: Title ===
title_row = ["LOTUS FEATURE ROADMAP", "", "", ""]
title_row.extend([""] * NUM_SPRINTS)
rows.append(title_row)

# === ROW 2: Milestone headers ===
ms_row = ["", "", "", ""]
ms_cells = [""] * NUM_SPRINTS
for name, start, end in MILESTONES:
    ms_cells[start] = name
rows.append(["", "", "", ""] + ms_cells)

# === ROW 3: Sprint labels ===
sprint_label_row = ["", "", "", ""]
for s in SPRINTS:
    sprint_label_row.append(s[0])
rows.append(sprint_label_row)

# === ROW 4: Sprint dates ===
date_row = ["Pod", "Feature", "Est.", "Status"]
for s in SPRINTS:
    date_row.append(f"{s[1]} – {s[2]}")
rows.append(date_row)

# === ROW 5: Dev Phase ===
phase_row = ["", "", "", ""]
phase_cells = [""] * NUM_SPRINTS
# M&Ms: Iteration & Refinement
for i in range(0, 6): phase_cells[i] = "Iteration & Refinement"
# Beta Prep: Polish
for i in range(6, 8): phase_cells[i] = "Polish"
# M&C: Iteration & Refinement
for i in range(8, 14): phase_cells[i] = "Iteration & Refinement"
# Live Ops: Iteration & Refinement
for i in range(14, 22): phase_cells[i] = "Iteration & Refinement"
# Soft Launch: Scale
for i in range(22, 30): phase_cells[i] = "Scale"
rows.append(["", "Dev Phase", "", ""] + phase_cells)

# === ROW 6: Validation Focus ===
val_row = ["", "Validation", "", ""]
val_cells = [""] * NUM_SPRINTS
val_cells[0] = "SHQ validation, internal playtesting, super user testing"
val_cells[6] = "Beta quality bar, stability"
val_cells[8] = "D0-D7 retention, D0-D1 conversion, LTV baseline"
val_cells[14] = "D0-D14 retention, D0-D14 LTV"
val_cells[22] = "D0-D30 retention, D0-D30 LTV, UA metrics"
rows.append(val_row + val_cells)

rows.append(make_empty_row())

# ============================================================
# EMPIRE POD
# ============================================================
rows.append(make_section_header("EMPIRE"))
rows.append(["", "Pod Lead: Diana Vasilescu | Producer: Brann Livesay | Eng: Gabriel, Henrique, Marcos T. | Design: Diana, Elise, Jacob", "", ""] + [""] * NUM_SPRINTS)

# Empire features
rows.append(make_row("", "Governors", "3 spr", "IN PROGRESS", [(0, 2)]))
rows.append(make_row("", "Territory Map Vertical Slice", "2 spr", "NOT STARTED", [(3, 4)]))
rows.append(make_row("", "WM Building Upgrades", "1 spr", "NOT STARTED", [(5, 5)]))
rows.append(make_row("", "Flex / Beta Prep", "3 spr", "NOT STARTED", [(6, 8)]))
rows.append(make_row("", "World Map Vertical Slice", "1 spr", "NOT STARTED", [(9, 9)]))
rows.append(make_row("", "WM Zoom & LOD", "1 spr", "NOT STARTED", [(10, 10)]))
rows.append(make_row("", "Conquest Guide Full Screen", "0.5 spr", "NOT STARTED", [(11, 11)]))
rows.append(make_row("", "Barrier & Story Iterations", "0.5 spr", "NOT STARTED", [(11, 11)]))
rows.append(make_row("", "Map Content (Design/Art)", "Ongoing", "IN PROGRESS", [(0, 29)], label="–"))

rows.append(make_empty_row())

# ============================================================
# METAGAME POD
# ============================================================
rows.append(make_section_header("METAGAME"))
rows.append(["", "Pod Lead: Leonard Perez | Producer: Tim Williams | Eng: Dan Dupuis, Guilherme Q. | Design: Leonard, Chris F. | UX: Kevin L., Yura R. | UI: Miguel D.", "", ""] + [""] * NUM_SPRINTS)

# Pipeline labels
rows.append(["", "— M&Ms: Pipeline A (UI Foundation) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "UI Foundation", "6 spr", "IN PROGRESS", [(0, 5)]))

rows.append(["", "— M&Ms: Pipeline B (Systems) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Building Upgrades", "1 spr", "NOT STARTED", [(0, 0)]))
rows.append(make_row("", "Empire Progression Tree", "1 spr", "NOT STARTED", [(1, 1)]))
rows.append(make_row("", "Global Combat Research Tree", "2 spr", "NOT STARTED", [(2, 3)]))
rows.append(make_row("", "Hero Gacha v1", "1 spr", "NOT STARTED", [(4, 4)]))
rows.append(make_row("", "Passive Bonus Tiles", "1 spr", "NOT STARTED", [(5, 5)]))

rows.append(["", "— Beta Prep —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Beta Prep / Polish", "2 spr", "NOT STARTED", [(6, 7)]))

rows.append(["", "— M&C: Pipeline A (5 features) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Main Menu UX/UI", "1 spr", "NOT STARTED", [(8, 8)]))
rows.append(make_row("", "Dungeons v2", "1 spr", "NOT STARTED", [(9, 9)]))
rows.append(make_row("", "Timed Objectives", "1 spr", "NOT STARTED", [(10, 10)]))
rows.append(make_row("", "End Level Reward Screen", "1 spr", "NOT STARTED", [(11, 11)]))
rows.append(make_row("", "Academies", "1 spr", "NOT STARTED", [(12, 12)]))

rows.append(["", "— M&C: Pipeline B (4 features) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Hero Ranking Up", "1 spr", "NOT STARTED", [(8, 8)]))
rows.append(make_row("", "Shop", "1 spr", "NOT STARTED", [(9, 9)]))
rows.append(make_row("", "Hero Gacha v2", "1 spr", "NOT STARTED", [(10, 10)]))
rows.append(make_row("", "Timed PvE Live Ops Maps", "1 spr", "NOT STARTED", [(11, 11)]))

rows.append(["", "— Live Ops (10 features) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Live Ops Features (10 items TBD)", "5 spr", "NOT STARTED", [(14, 18)]))

rows.append(["", "— Soft Launch (5 features) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Soft Launch Features (5 items TBD)", "3 spr", "NOT STARTED", [(22, 24)]))

rows.append(make_empty_row())

# ============================================================
# BATTLE POD
# ============================================================
rows.append(make_section_header("BATTLE"))
rows.append(["", "Pod Lead: Lincoln Li | Producer: Thorben Novais | Eng: Jota Oliveira (1x) | Design: Lincoln, Nathan, Dylan, Vishaal", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "⚠️ CAPACITY: 1 client eng (Jota). All features sequential. 9 eng-sprints for 6+2 sprint window.", "", ""] + [""] * NUM_SPRINTS)

rows.append(make_row("", "Battle HUD Beta Overhaul", "3 spr", "NOT STARTED", [(0, 2)]))
rows.append(make_row("", "Obstacles", "1 spr", "NOT STARTED", [(3, 3)]))
rows.append(make_row("", "Actor System Overhaul", "1 spr", "NOT STARTED", [(4, 4)]))
rows.append(make_row("", "Pathfinding & AI Improvements", "1 spr", "NOT STARTED", [(5, 5)]))
rows.append(make_row("", "Battle Server Validation", "1 spr", "NOT STARTED", [(6, 6)]))
rows.append(make_row("", "Beta Prep / Polish", "1 spr", "NOT STARTED", [(7, 7)]))
rows.append(make_row("", "Pool Management (deferred from M&Ms)", "1 spr", "DEFERRED", [(8, 8)]))
rows.append(make_row("", "M&C Battle Features (TBD)", "4 spr", "NOT STARTED", [(9, 12)]))
rows.append(make_row("", "Battle Content (Design/Art)", "Ongoing", "IN PROGRESS", [(0, 29)], label="–"))
rows.append(make_row("", "Unit Content (Design/Art)", "Ongoing", "IN PROGRESS", [(0, 29)], label="–"))

rows.append(make_empty_row())

# ============================================================
# SOCIAL DYNAMICS POD
# ============================================================
rows.append(make_section_header("SOCIAL DYNAMICS"))
rows.append(["", "Pod Lead: Paul Flores | Producer: Tim Williams | Eng: Randy, Garrett, Bruno B., Tiago (new), Marcos L. (from Empire)", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "⚠️ RISK: Randy & Garrett split with Dozer ops. Tiago is new hire.", "", ""] + [""] * NUM_SPRINTS)

rows.append(["", "— Track 1: Multiplayer Maps (P1-P10) —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "P1: Infrastructure & Foundation", "~1 spr", "IN PROGRESS", [(0, 0)]))
rows.append(make_row("", "P2: Map Foundation", "~2 spr", "NOT STARTED", [(1, 2)]))
rows.append(make_row("", "P3: Basic Game Logic (6 features)", "~2 spr", "NOT STARTED", [(3, 4)]))
rows.append(make_row("", "P4-P6: Heroes, Tiles, Initial Rollout", "~2 spr", "NOT STARTED", [(5, 7)]))
rows.append(make_row("", "P7-P10: Map Completion", "6 spr", "NOT STARTED", [(8, 13)]))

rows.append(["", "— Track 2: Parallel Streams —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Multiplayer Networking", "~6 spr", "IN PROGRESS", [(0, 5)]))
rows.append(make_row("", "AI Prototype Playtesting", "~6 spr", "IN PROGRESS", [(0, 5)], label="◆"))

rows.append(["", "— Post-M&C Features —", "", ""] + [""] * NUM_SPRINTS)
rows.append(make_row("", "Ravager's Reef", "3 spr", "NOT STARTED", [(14, 16)]))
rows.append(make_row("", "Battlepass", "2 spr", "NOT STARTED", [(17, 18)]))

rows.append(make_empty_row())

# ============================================================
# DOZER POD
# ============================================================
rows.append(make_section_header("DOZER"))
rows.append(["", "Eng Lead: Derek Gallant | Eng: Bruno Freitas | Randy & Garrett (partial)", "", ""] + [""] * NUM_SPRINTS)

rows.append(make_row("", "Infrastructure & Tooling (TBD)", "~7 spr", "NOT STARTED", [(0, 6)]))
rows.append(make_row("", "Content Pipeline Scaling", "TBD", "NOT STARTED", [(8, 13)], label="?"))
rows.append(make_row("", "UA / Analytics Instrumentation", "TBD", "NOT STARTED", [(22, 29)], label="?"))

rows.append(make_empty_row())

# ============================================================
# ART
# ============================================================
rows.append(make_section_header("ART"))
rows.append(["", "Art Director: Kevin Griffith | Assoc AD: Brendan Cheatham | Producer: Brann Livesay", "", ""] + [""] * NUM_SPRINTS)

rows.append(make_row("", "Character Assets (Heroes & Units)", "7 spr", "IN PROGRESS", [(0, 6)]))
rows.append(make_row("", "Environment Art (Map tiles, buildings)", "7 spr", "IN PROGRESS", [(0, 6)]))
rows.append(make_row("", "UI/UX Assets", "7 spr", "IN PROGRESS", [(0, 6)]))
rows.append(make_row("", "VFX & Animation", "6 spr", "NOT STARTED", [(0, 5)]))
rows.append(make_row("", "Beta Polish", "2 spr", "NOT STARTED", [(6, 7)]))
rows.append(make_row("", "Hero Assets Expansion", "6 spr", "NOT STARTED", [(8, 13)]))
rows.append(make_row("", "Monetization Assets", "6 spr", "NOT STARTED", [(8, 13)]))
rows.append(make_row("", "Pipeline Scaling", "6 spr", "NOT STARTED", [(8, 13)]))

rows.append(make_empty_row())

# ============================================================
# MILESTONE SUMMARY / KEY DATES
# ============================================================
rows.append(make_section_header("KEY DATES & VALIDATION"))
rows.append(make_empty_row())

ms_markers = [""] * NUM_SPRINTS
ms_markers[5] = "🏁 M&Ms END"
ms_markers[7] = "🏁 Beta Prep END"
ms_markers[13] = "🏁 M&C END"
ms_markers[21] = "🏁 Live Ops END"
ms_markers[29] = "🏁 Soft Launch END"
rows.append(["", "Milestone End Dates", "", ""] + ms_markers)

shq_markers = [""] * NUM_SPRINTS
shq_markers[0] = "SHQ2, SHQ7, SHQ1"
shq_markers[8] = "SHQ10-13, SHQ16"
shq_markers[14] = "SHQ18-22"
rows.append(["", "Key SHQs Under Test", "", ""] + shq_markers)

wh_markers = [""] * NUM_SPRINTS
wh_markers[0] = "WH-2 (Empire)"
wh_markers[4] = "WH-1 (Battle)"
wh_markers[8] = "WH-3 (Monetization)"
wh_markers[14] = "WH-2, WH-3"
wh_markers[22] = "WH-4 (Production)"
rows.append(["", "Winning Hypotheses Focus", "", ""] + wh_markers)

rows.append(make_empty_row())
rows.append(make_section_header("LEGEND"))
rows.append(["", "■ = Scheduled work", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "– = Ongoing/continuous", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "◆ = Parallel prototype track", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "? = TBD / Not yet scoped", "", ""] + [""] * NUM_SPRINTS)
rows.append(["", "⚠️ = Capacity or schedule risk", "", ""] + [""] * NUM_SPRINTS)

# Write TSV
output = io.StringIO()
writer = csv.writer(output, delimiter='\t')
for row in rows:
    writer.writerow(row)

tsv_content = output.getvalue()

# Save to file
with open(r"C:\Users\TimWilliams\ClaudeWorkspace\lotusDocumentationBrain\generated\roadmap_for_sheets.tsv", "w", encoding="utf-8") as f:
    f.write(tsv_content)

print(f"Generated {len(rows)} rows x {4 + NUM_SPRINTS} columns")
print(f"Saved to generated/roadmap_for_sheets.tsv")
print(f"\nSprints: {NUM_SPRINTS} (S1-S30)")
print(f"Milestones: {len(MILESTONES)}")
for name, start, end in MILESTONES:
    clean_name = name.replace('\n', ' ')
    print(f"  {clean_name}: S{start+1}-S{end+1}")
