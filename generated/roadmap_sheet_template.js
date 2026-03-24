/**
 * Lotus Feature Roadmap - Google Apps Script
 * TEMPLATE FILE - Do not edit directly.
 * Run /roadmap-sheet to regenerate roadmap_apps_script.js with latest data.
 *
 * To use the generated script:
 * 1. Open the Lotus Productionomicon spreadsheet
 * 2. Extensions > Apps Script
 * 3. Paste the contents of generated/roadmap_apps_script.js
 * 4. Click Run > populateClaudeRoadmap
 * 5. Authorize when prompted
 */

// Data injected by /roadmap-sheet skill
const DATA = /*__INJECT_DATA__*/{}/*__END_DATA__*/;

function populateClaudeRoadmap() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("ClaudeRoadmap");
  if (!sheet) {
    sheet = ss.insertSheet("ClaudeRoadmap");
  }
  sheet.clear();

  const INFO_COLS = 4;
  const NUM_SPRINTS = DATA.sprints.length;
  const TOTAL_COLS = INFO_COLS + NUM_SPRINTS;

  // ─── COLORS ───
  const C = {
    TITLE_BG:    "#1a1a2e",  TITLE_FG:    "#ffffff",
    HEADER_BG:   "#2c3e50",  HEADER_FG:   "#ecf0f1",
    POD_BG:      "#34495e",  POD_FG:      "#ffffff",
    STAFF_BG:    "#ecf0f1",  STAFF_FG:    "#555555",
    WARN_BG:     "#fff3cd",  WARN_FG:     "#856404",
    PIPELINE_BG: "#f0f0f0",  PIPELINE_FG: "#333333",
    KEY_BG:      "#ffeaa7",
    LEGEND_BG:   "#dfe6e9",
    // Work type colors
    work:        "#27ae60",
    ongoing:     "#95a5a6",
    proto:       "#8e44ad",
    tbd:         "#f39c12",
    deferred:    "#e74c3c",
  };

  // Status text colors
  const STATUS_COLORS = {
    "IN PROGRESS": "#2196F3",
    "NOT STARTED": "#9e9e9e",
    "DEFERRED":    "#e74c3c",
    "Ongoing":     "#607d8b",
  };

  // Work type labels
  const LABELS = { work: "\u25A0", ongoing: "\u2013", proto: "\u25C6", tbd: "?", deferred: "\u25A0" };

  let row = 1;

  // ════════════════════════════════════════
  // TITLE
  // ════════════════════════════════════════
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.TITLE_BG).setFontColor(C.TITLE_FG);
  sheet.getRange(row, 1).setValue("LOTUS FEATURE ROADMAP").setFontSize(14).setFontWeight("bold");
  sheet.getRange(row, 1, 1, INFO_COLS).merge();
  row++;

  // ════════════════════════════════════════
  // MILESTONE HEADER
  // ════════════════════════════════════════
  sheet.getRange(row, 1, 1, INFO_COLS).setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG);
  for (const ms of DATA.milestones) {
    const colStart = INFO_COLS + 1 + ms.startSprint;
    const span = ms.endSprint - ms.startSprint + 1;
    sheet.getRange(row, colStart, 1, span).merge().setValue(ms.name)
      .setBackground(ms.color).setFontColor("#ffffff")
      .setFontWeight("bold").setFontSize(11)
      .setHorizontalAlignment("center").setVerticalAlignment("middle");
  }
  row++;

  // ════════════════════════════════════════
  // SPRINT IDS
  // ════════════════════════════════════════
  const sprintIds = ["", "", "", ""].concat(DATA.sprints.map(s => s.id));
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([sprintIds])
    .setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG)
    .setFontSize(9).setHorizontalAlignment("center").setFontWeight("bold");
  row++;

  // ════════════════════════════════════════
  // SPRINT DATES + COLUMN HEADERS
  // ════════════════════════════════════════
  const dateRow = ["Pod", "Feature", "Est.", "Status"].concat(DATA.sprints.map(s => s.dates));
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([dateRow]);
  sheet.getRange(row, 1, 1, INFO_COLS).setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG)
    .setFontWeight("bold").setFontSize(10);
  sheet.getRange(row, INFO_COLS + 1, 1, NUM_SPRINTS).setBackground("#f5f5f5")
    .setFontSize(8).setHorizontalAlignment("center");
  row++;

  // ════════════════════════════════════════
  // DEV PHASE ROW
  // ════════════════════════════════════════
  const phaseRow = ["", "Dev Phase", "", ""];
  for (let i = 0; i < NUM_SPRINTS; i++) {
    let phase = "";
    for (const ms of DATA.milestones) {
      if (i >= ms.startSprint && i <= ms.endSprint) { phase = ms.devPhase; break; }
    }
    phaseRow.push(phase);
  }
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([phaseRow])
    .setFontSize(8).setFontColor("#888888")
    .setHorizontalAlignment("center").setFontStyle("italic");
  row++;

  // ════════════════════════════════════════
  // VALIDATION ROW
  // ════════════════════════════════════════
  if (DATA.validationByMilestone) {
    const valRow = ["", "Validation", "", ""];
    for (let i = 0; i < NUM_SPRINTS; i++) valRow.push("");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([valRow]);
    sheet.getRange(row, 2).setFontWeight("bold").setFontSize(9);
    for (const v of DATA.validationByMilestone) {
      sheet.getRange(row, INFO_COLS + 1 + v.sprintIdx).setValue(v.text)
        .setFontSize(8).setFontStyle("italic");
    }
    row++;
  }

  row++; // separator

  // ════════════════════════════════════════
  // POD SECTIONS
  // ════════════════════════════════════════
  for (const pod of DATA.pods) {
    // Pod header
    sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.POD_BG).setFontColor(C.POD_FG)
      .setFontWeight("bold").setFontSize(12);
    sheet.getRange(row, 1).setValue(pod.name);
    sheet.getRange(row, 1, 1, INFO_COLS).merge();
    row++;

    // Staff line
    if (pod.staffLine) {
      sheet.getRange(row, 2).setValue(pod.staffLine).setFontSize(8)
        .setFontColor(C.STAFF_FG).setFontStyle("italic");
      sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.STAFF_BG);
      row++;
    }

    // Rows (features, warnings, pipeline labels)
    for (const item of pod.rows) {
      if (item.type === "warning") {
        sheet.getRange(row, 2).setValue(item.text).setFontSize(9)
          .setFontColor(C.WARN_FG).setFontWeight("bold");
        sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.WARN_BG);
        row++;
      } else if (item.type === "pipeline") {
        sheet.getRange(row, 2).setValue(item.text).setFontSize(9)
          .setFontColor(C.PIPELINE_FG).setFontWeight("bold").setFontStyle("italic");
        sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.PIPELINE_BG);
        row++;
      } else if (item.type === "feature") {
        sheet.getRange(row, 2).setValue(item.name);
        sheet.getRange(row, 3).setValue(item.estimate).setHorizontalAlignment("center").setFontSize(9);
        sheet.getRange(row, 4).setValue(item.status).setFontSize(9);
        if (STATUS_COLORS[item.status]) {
          sheet.getRange(row, 4).setFontColor(STATUS_COLORS[item.status]).setFontWeight("bold");
        }
        const fillColor = C[item.workType] || C.work;
        const label = LABELS[item.workType] || LABELS.work;
        for (const [start, end] of item.sprintRanges) {
          for (let i = start; i <= end && i < NUM_SPRINTS; i++) {
            sheet.getRange(row, INFO_COLS + 1 + i)
              .setBackground(fillColor).setFontColor("#ffffff")
              .setValue(label).setHorizontalAlignment("center").setFontSize(9);
          }
        }
        row++;
      }
    }
    row++; // separator after pod
  }

  // ════════════════════════════════════════
  // KEY DATES & VALIDATION FOOTER
  // ════════════════════════════════════════
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.POD_BG).setFontColor(C.POD_FG)
    .setFontWeight("bold").setFontSize(12);
  sheet.getRange(row, 1).setValue("KEY DATES & VALIDATION");
  sheet.getRange(row, 1, 1, INFO_COLS).merge();
  row++;

  // Milestone end markers
  if (DATA.milestoneEndMarkers) {
    const meRow = ["", "Milestone Ends", "", ""];
    for (let i = 0; i < NUM_SPRINTS; i++) meRow.push("");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([meRow]);
    sheet.getRange(row, 2).setFontWeight("bold");
    for (const m of DATA.milestoneEndMarkers) {
      sheet.getRange(row, INFO_COLS + 1 + m.sprintIdx).setValue(m.label)
        .setBackground(C.KEY_BG).setFontWeight("bold").setFontSize(9)
        .setHorizontalAlignment("center");
    }
    row++;
  }

  // SHQ markers
  if (DATA.shqMarkers) {
    const shqRow = ["", "Key SHQs Under Test", "", ""];
    for (let i = 0; i < NUM_SPRINTS; i++) shqRow.push("");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([shqRow]);
    sheet.getRange(row, 2).setFontWeight("bold").setFontSize(9);
    for (const s of DATA.shqMarkers) {
      sheet.getRange(row, INFO_COLS + 1 + s.sprintIdx).setValue(s.label)
        .setFontSize(8).setFontStyle("italic").setBackground("#e8f5e9");
    }
    row++;
  }

  // Winning Hypotheses markers
  if (DATA.whMarkers) {
    const whRow = ["", "Winning Hypotheses", "", ""];
    for (let i = 0; i < NUM_SPRINTS; i++) whRow.push("");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([whRow]);
    sheet.getRange(row, 2).setFontWeight("bold").setFontSize(9);
    for (const w of DATA.whMarkers) {
      sheet.getRange(row, INFO_COLS + 1 + w.sprintIdx).setValue(w.label)
        .setFontSize(8).setFontStyle("italic").setBackground("#e3f2fd");
    }
    row++;
  }

  row++; // separator

  // ════════════════════════════════════════
  // LEGEND
  // ════════════════════════════════════════
  sheet.getRange(row, 1).setValue("LEGEND").setFontWeight("bold").setFontSize(10);
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.LEGEND_BG);
  row++;

  const legendItems = [
    [C.work,     "\u25A0 Scheduled work"],
    [C.ongoing,  "\u2013 Ongoing/continuous"],
    [C.proto,    "\u25C6 Parallel prototype track"],
    [C.tbd,      "? TBD / Not yet scoped"],
    [C.deferred, "\u25A0 Deferred"],
  ];
  for (const [color, desc] of legendItems) {
    sheet.getRange(row, INFO_COLS + 1).setBackground(color).setValue("\u25A0")
      .setFontColor("#ffffff").setHorizontalAlignment("center");
    sheet.getRange(row, INFO_COLS + 2).setValue(desc).setFontSize(9);
    row++;
  }

  // ════════════════════════════════════════
  // FORMATTING
  // ════════════════════════════════════════
  sheet.setColumnWidth(1, 50);
  sheet.setColumnWidth(2, 280);
  sheet.setColumnWidth(3, 55);
  sheet.setColumnWidth(4, 100);
  for (let i = 1; i <= NUM_SPRINTS; i++) {
    sheet.setColumnWidth(INFO_COLS + i, 55);
  }

  sheet.setFrozenRows(4);
  sheet.setFrozenColumns(4);

  // Milestone boundary borders
  const lastRow = row;
  for (const ms of DATA.milestones) {
    sheet.getRange(1, INFO_COLS + 1 + ms.endSprint, lastRow, 1)
      .setBorder(null, true, null, null, null, null, "#333333", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  }

  // Grid borders
  sheet.getRange(1, INFO_COLS + 1, lastRow, NUM_SPRINTS)
    .setBorder(true, true, true, true, true, true, "#e0e0e0", SpreadsheetApp.BorderStyle.SOLID);

  SpreadsheetApp.flush();
  SpreadsheetApp.getUi().alert(
    "\u2705 Lotus Roadmap populated!\n\n" + (row - 1) +
    " rows across " + NUM_SPRINTS + " sprints.\nFrozen: 4 header rows, 4 info columns."
  );
}
