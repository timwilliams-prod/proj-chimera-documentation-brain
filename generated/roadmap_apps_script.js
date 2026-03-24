/**
 * Lotus Feature Roadmap - Google Apps Script
 *
 * To use:
 * 1. Open the Lotus Productionomicon spreadsheet
 * 2. Extensions > Apps Script
 * 3. Paste this entire script (replace any existing code)
 * 4. Click Run > populateClaudeRoadmap
 * 5. Authorize when prompted
 * 6. The ClaudeRoadmap tab will be populated with the roadmap
 */

function populateClaudeRoadmap() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("ClaudeRoadmap");
  if (!sheet) {
    sheet = ss.insertSheet("ClaudeRoadmap");
  }
  sheet.clear();

  // ─── CONFIG ───
  const INFO_COLS = 4; // Pod, Feature, Est, Status
  const NUM_SPRINTS = 30;
  const TOTAL_COLS = INFO_COLS + NUM_SPRINTS;

  // Colors
  const C = {
    TITLE_BG:    "#1a1a2e",  TITLE_FG:    "#ffffff",
    MS_MMS:      "#0f3460",  MS_BETA:     "#533483",
    MS_MC:       "#e94560",  MS_LIVE:     "#16213e",
    MS_SOFT:     "#0a3d62",
    HEADER_BG:   "#2c3e50",  HEADER_FG:   "#ecf0f1",
    POD_BG:      "#34495e",  POD_FG:      "#ffffff",
    STAFF_BG:    "#ecf0f1",  STAFF_FG:    "#555555",
    WARN_BG:     "#fff3cd",  WARN_FG:     "#856404",
    PIPELINE_BG: "#f0f0f0",  PIPELINE_FG: "#333333",
    WORK:        "#27ae60",  // green for scheduled work
    ONGOING:     "#95a5a6",  // gray for ongoing
    PROTO:       "#8e44ad",  // purple for prototype
    TBD:         "#f39c12",  // yellow for TBD
    DEFERRED:    "#e74c3c",  // red for deferred
    KEY_BG:      "#ffeaa7",
    LEGEND_BG:   "#dfe6e9",
  };

  // Sprint definitions
  const sprints = [
    {id:"S1",  dates:"3/31–4/13"},  {id:"S2",  dates:"4/14–4/27"},
    {id:"S3",  dates:"4/28–5/11"},  {id:"S4",  dates:"5/12–5/25"},
    {id:"S5",  dates:"5/26–6/8"},   {id:"S6",  dates:"6/9–6/22"},
    {id:"S7",  dates:"6/23–7/6"},   {id:"S8",  dates:"7/7–7/20"},
    {id:"S9",  dates:"7/21–8/3"},   {id:"S10", dates:"8/4–8/17"},
    {id:"S11", dates:"8/18–8/31"},  {id:"S12", dates:"9/1–9/14"},
    {id:"S13", dates:"9/15–9/28"},  {id:"S14", dates:"9/29–10/12"},
    {id:"S15", dates:"10/13–10/26"},{id:"S16", dates:"10/27–11/9"},
    {id:"S17", dates:"11/10–11/23"},{id:"S18", dates:"11/24–12/7"},
    {id:"S19", dates:"12/8–12/21"}, {id:"S20", dates:"12/22–1/4"},
    {id:"S21", dates:"1/5–1/18"},   {id:"S22", dates:"1/19–2/1"},
    {id:"S23", dates:"2/2–2/15"},   {id:"S24", dates:"2/16–3/1"},
    {id:"S25", dates:"3/2–3/15"},   {id:"S26", dates:"3/16–3/29"},
    {id:"S27", dates:"3/30–4/12"},  {id:"S28", dates:"4/13–4/26"},
    {id:"S29", dates:"4/27–5/10"},  {id:"S30", dates:"5/11–5/29"},
  ];

  // Milestone definitions: [name, startIdx, endIdx, color]
  const milestones = [
    ["Multiplayer & Meta (M&Ms)", 0, 5, C.MS_MMS],
    ["Beta Launch Prep", 6, 7, C.MS_BETA],
    ["Monetization & Conversion (M&C)", 8, 13, C.MS_MC],
    ["Live Ops & Social", 14, 21, C.MS_LIVE],
    ["Soft Launch (UA Scale)", 22, 29, C.MS_SOFT],
  ];

  let row = 1;

  // ═══════════════════════════════════════════
  // TITLE ROW
  // ═══════════════════════════════════════════
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.TITLE_BG).setFontColor(C.TITLE_FG);
  sheet.getRange(row, 1).setValue("LOTUS FEATURE ROADMAP").setFontSize(14).setFontWeight("bold");
  sheet.getRange(row, 1, 1, INFO_COLS).merge();
  row++;

  // ═══════════════════════════════════════════
  // MILESTONE HEADER ROW
  // ═══════════════════════════════════════════
  sheet.getRange(row, 1, 1, INFO_COLS).setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG);
  for (const [name, startIdx, endIdx, color] of milestones) {
    const colStart = INFO_COLS + 1 + startIdx;
    const colEnd = INFO_COLS + 1 + endIdx;
    const span = colEnd - colStart + 1;
    const range = sheet.getRange(row, colStart, 1, span);
    range.merge().setValue(name)
      .setBackground(color).setFontColor("#ffffff")
      .setFontWeight("bold").setFontSize(11)
      .setHorizontalAlignment("center").setVerticalAlignment("middle");
  }
  row++;

  // ═══════════════════════════════════════════
  // SPRINT ID ROW
  // ═══════════════════════════════════════════
  const sprintIdRow = ["", "", "", ""];
  sprints.forEach(s => sprintIdRow.push(s.id));
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([sprintIdRow]);
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG)
    .setFontSize(9).setHorizontalAlignment("center").setFontWeight("bold");
  row++;

  // ═══════════════════════════════════════════
  // SPRINT DATES ROW (also column headers)
  // ═══════════════════════════════════════════
  const dateRow = ["Pod", "Feature", "Est.", "Status"];
  sprints.forEach(s => dateRow.push(s.dates));
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([dateRow]);
  sheet.getRange(row, 1, 1, INFO_COLS).setBackground(C.HEADER_BG).setFontColor(C.HEADER_FG)
    .setFontWeight("bold").setFontSize(10);
  sheet.getRange(row, INFO_COLS + 1, 1, NUM_SPRINTS).setBackground("#f5f5f5")
    .setFontSize(8).setHorizontalAlignment("center");
  row++;

  // ═══════════════════════════════════════════
  // DEV PHASE ROW
  // ═══════════════════════════════════════════
  const phaseRow = ["", "Dev Phase", "", ""];
  const phases = {0:"Iteration & Refinement",6:"Polish",8:"Iteration & Refinement",14:"Iteration & Refinement",22:"Scale"};
  for (let i = 0; i < NUM_SPRINTS; i++) {
    if (i <= 5) phaseRow.push("Iteration");
    else if (i <= 7) phaseRow.push("Polish");
    else if (i <= 13) phaseRow.push("Iteration");
    else if (i <= 21) phaseRow.push("Iteration");
    else phaseRow.push("Scale");
  }
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([phaseRow]);
  sheet.getRange(row, 1, 1, TOTAL_COLS).setFontSize(8).setFontColor("#888888")
    .setHorizontalAlignment("center").setFontStyle("italic");
  row++;

  // Empty separator
  row++;

  // ═══════════════════════════════════════════
  // HELPER FUNCTIONS
  // ═══════════════════════════════════════════

  function addPodHeader(podName) {
    sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.POD_BG).setFontColor(C.POD_FG)
      .setFontWeight("bold").setFontSize(12);
    sheet.getRange(row, 1).setValue(podName);
    sheet.getRange(row, 1, 1, INFO_COLS).merge();
    // Color milestone columns lightly
    for (const [name, startIdx, endIdx, color] of milestones) {
      sheet.getRange(row, INFO_COLS + 1 + startIdx, 1, endIdx - startIdx + 1)
        .setBackground(C.POD_BG);
    }
    row++;
  }

  function addStaffRow(text) {
    sheet.getRange(row, 2).setValue(text).setFontSize(8).setFontColor(C.STAFF_FG)
      .setFontStyle("italic");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.STAFF_BG);
    row++;
  }

  function addWarningRow(text) {
    sheet.getRange(row, 2).setValue(text).setFontSize(9).setFontColor(C.WARN_FG)
      .setFontWeight("bold");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.WARN_BG);
    row++;
  }

  function addPipelineLabel(text) {
    sheet.getRange(row, 2).setValue(text).setFontSize(9).setFontColor(C.PIPELINE_FG)
      .setFontWeight("bold").setFontStyle("italic");
    sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.PIPELINE_BG);
    row++;
  }

  function addFeature(feature, estimate, status, sprintRanges, type) {
    // type: "work", "ongoing", "proto", "tbd", "deferred"
    const colorMap = {work: C.WORK, ongoing: C.ONGOING, proto: C.PROTO, tbd: C.TBD, deferred: C.DEFERRED};
    const labelMap = {work: "■", ongoing: "–", proto: "◆", tbd: "?", deferred: "■"};
    const fillColor = colorMap[type] || C.WORK;
    const label = labelMap[type] || "■";

    sheet.getRange(row, 2).setValue(feature);
    sheet.getRange(row, 3).setValue(estimate).setHorizontalAlignment("center").setFontSize(9);
    sheet.getRange(row, 4).setValue(status).setFontSize(9);

    // Status color
    const statusColors = {
      "IN PROGRESS": "#2196F3", "NOT STARTED": "#9e9e9e",
      "DEFERRED": "#e74c3c", "Ongoing": "#607d8b"
    };
    if (statusColors[status]) {
      sheet.getRange(row, 4).setFontColor(statusColors[status]).setFontWeight("bold");
    }

    // Sprint cells
    for (const [start, end] of sprintRanges) {
      for (let i = start; i <= end && i < NUM_SPRINTS; i++) {
        const cell = sheet.getRange(row, INFO_COLS + 1 + i);
        cell.setBackground(fillColor).setFontColor("#ffffff")
          .setValue(label).setHorizontalAlignment("center").setFontSize(9);
      }
    }
    row++;
  }

  function addEmptyRow() { row++; }

  // ═══════════════════════════════════════════
  // EMPIRE POD
  // ═══════════════════════════════════════════
  addPodHeader("EMPIRE");
  addStaffRow("Lead: Diana Vasilescu | Producer: Brann Livesay | Eng: Gabriel Arruda, Henrique De Lima, Marcos Teles (tech art) | Design: Diana, Elise Cole, Jacob Siegel | UX: Yura Rusin");

  addFeature("Governors", "3 spr", "IN PROGRESS", [[0,2]], "work");
  addFeature("Territory Map Vertical Slice", "2 spr", "NOT STARTED", [[3,4]], "work");
  addFeature("WM Building Upgrades", "1 spr", "NOT STARTED", [[5,5]], "work");
  addFeature("Flex / Beta Prep", "3 spr", "NOT STARTED", [[6,8]], "work");
  addFeature("World Map Vertical Slice", "1 spr", "NOT STARTED", [[9,9]], "work");
  addFeature("WM Zoom & LOD", "1 spr", "NOT STARTED", [[10,10]], "work");
  addFeature("Conquest Guide Full Screen", "0.5 spr", "NOT STARTED", [[11,11]], "work");
  addFeature("Barrier & Story Iterations", "0.5 spr", "NOT STARTED", [[11,11]], "work");
  addFeature("Map Content (Design/Art)", "Ongoing", "IN PROGRESS", [[0,29]], "ongoing");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // METAGAME POD
  // ═══════════════════════════════════════════
  addPodHeader("METAGAME");
  addStaffRow("Lead: Leonard Perez | Producer: Tim Williams | Eng: Dan Dupuis (lead), Guilherme Quizzini | Design: Leonard, Chris Fidalgo | UX: Kevin Ligon | UI: Miguel Duran");

  addPipelineLabel("M&Ms — Pipeline A (UI)");
  addFeature("UI Foundation", "6 spr", "IN PROGRESS", [[0,5]], "work");

  addPipelineLabel("M&Ms — Pipeline B (Systems)");
  addFeature("Building Upgrades", "1 spr", "NOT STARTED", [[0,0]], "work");
  addFeature("Empire Progression Tree", "1 spr", "NOT STARTED", [[1,1]], "work");
  addFeature("Global Combat Research Tree", "2 spr", "NOT STARTED", [[2,3]], "work");
  addFeature("Hero Gacha v1", "1 spr", "NOT STARTED", [[4,4]], "work");
  addFeature("Passive Bonus Tiles", "1 spr", "NOT STARTED", [[5,5]], "work");

  addPipelineLabel("Beta Prep");
  addFeature("Beta Prep / Polish", "2 spr", "NOT STARTED", [[6,7]], "work");

  addPipelineLabel("M&C — Pipeline A (5 features + buffer)");
  addFeature("Main Menu UX/UI", "1 spr", "NOT STARTED", [[8,8]], "work");
  addFeature("Timed Objectives", "1 spr", "NOT STARTED", [[9,9]], "work");
  addFeature("Academies", "1 spr", "NOT STARTED", [[10,10]], "work");
  addFeature("Shop", "1 spr", "NOT STARTED", [[11,11]], "work");
  addFeature("Timed PvE Live Ops Maps", "1 spr", "NOT STARTED", [[12,12]], "work");

  addPipelineLabel("M&C — Pipeline B (4 features + buffer)");
  addFeature("Dungeons v2", "1 spr", "NOT STARTED", [[8,8]], "work");
  addFeature("End Level Reward Screen", "1 spr", "NOT STARTED", [[9,9]], "work");
  addFeature("Hero Ranking Up", "1 spr", "NOT STARTED", [[10,10]], "work");
  addFeature("Hero Gacha v2", "1 spr", "NOT STARTED", [[11,11]], "work");

  addPipelineLabel("Live Ops & Social (10 features)");
  addFeature("Mobile Extractors", "1 spr", "NOT STARTED", [[14,14]], "work");
  addFeature("Mobile Command Center Access Point", "1 spr", "NOT STARTED", [[15,15]], "work");
  addFeature("Tutorial Expansion", "1 spr", "NOT STARTED", [[16,16]], "work");
  addFeature("Interstitials", "1 spr", "NOT STARTED", [[17,17]], "work");
  addFeature("Daily Quests", "1 spr", "NOT STARTED", [[18,18]], "work");
  addFeature("Achievements", "1 spr", "NOT STARTED", [[14,14]], "work");
  addFeature("Hero Empowering", "1 spr", "NOT STARTED", [[15,15]], "work");
  addFeature("Hero Ability Upgrading", "1 spr", "NOT STARTED", [[16,16]], "work");
  addFeature("Ad Monetization", "1 spr", "NOT STARTED", [[17,17]], "work");
  addFeature("Live Events", "1 spr", "NOT STARTED", [[18,18]], "work");

  addPipelineLabel("Soft Launch (5 features)");
  addFeature("Inbox & Admin Comms", "1 spr", "NOT STARTED", [[22,22]], "work");
  addFeature("Notifications", "1 spr", "NOT STARTED", [[23,23]], "work");
  addFeature("UI Stability & Performance Pass", "1 spr", "NOT STARTED", [[24,24]], "work");
  addFeature("Growthbook Integration", "1 spr", "NOT STARTED", [[25,25]], "work");
  addFeature("Initial Login Flow Optimization", "1 spr", "NOT STARTED", [[26,26]], "work");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // BATTLE POD
  // ═══════════════════════════════════════════
  addPodHeader("BATTLE");
  addStaffRow("Lead: Lincoln Li | Producer: Thorben Novais | Eng: Jota Oliveira (sole client eng) | Design: Lincoln, Nathan Hajek, Dylan Jeffery, Vishaal Gupta");
  addWarningRow("⚠️ CAPACITY: 1 client engineer (Jota). All features sequential. 9 eng-sprints for 6+2 sprint window.");

  addFeature("Battle HUD Beta Overhaul", "3 spr", "NOT STARTED", [[0,2]], "work");
  addFeature("Obstacles", "1 spr", "NOT STARTED", [[3,3]], "work");
  addFeature("Actor System Overhaul", "1 spr", "NOT STARTED", [[4,4]], "work");
  addFeature("Pathfinding & AI Improvements", "1 spr", "NOT STARTED", [[5,5]], "work");
  addFeature("Battle Server Validation", "1 spr", "NOT STARTED", [[6,6]], "work");
  addFeature("Beta Prep / Polish", "1 spr", "NOT STARTED", [[7,7]], "work");
  addFeature("Pool Management", "1 spr", "DEFERRED", [[8,8]], "deferred");
  addFeature("M&C Battle Features (TBD)", "4 spr", "NOT STARTED", [[9,12]], "tbd");
  addFeature("Battle Content (Design/Art)", "Ongoing", "IN PROGRESS", [[0,29]], "ongoing");
  addFeature("Unit Content (Design/Art)", "Ongoing", "IN PROGRESS", [[0,29]], "ongoing");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // SOCIAL DYNAMICS POD
  // ═══════════════════════════════════════════
  addPodHeader("SOCIAL DYNAMICS");
  addStaffRow("Lead: Paul Flores | Producer: Tim Williams | Eng: Randy Pasion, Garrett Eidsvig, Bruno Bacelar, Tiago Costa (new), Marcos Loures (from Empire)");
  addWarningRow("⚠️ RISK: Randy & Garrett split with Dozer ops. Tiago is new hire ramping up.");

  addPipelineLabel("Track 1: Multiplayer Maps (P1–P10)");
  addFeature("P1: Infrastructure & Foundation", "~1 spr", "IN PROGRESS", [[0,0]], "work");
  addFeature("P2: Map Foundation", "~2 spr", "NOT STARTED", [[1,2]], "work");
  addFeature("P3: Basic Game Logic (6 features)", "~2 spr", "NOT STARTED", [[3,4]], "work");
  addFeature("P4–P6: Heroes, Tiles, Initial Rollout", "~2 spr", "NOT STARTED", [[5,7]], "work");
  addFeature("P7–P10: Map Completion", "6 spr", "NOT STARTED", [[8,13]], "work");

  addPipelineLabel("Track 2: Parallel Streams");
  addFeature("Multiplayer Networking", "~6 spr", "IN PROGRESS", [[0,5]], "work");
  addFeature("AI Prototype Playtesting", "~6 spr", "IN PROGRESS", [[0,5]], "proto");

  addPipelineLabel("Post-M&C Features");
  addFeature("Ravager's Reef", "3 spr", "NOT STARTED", [[14,16]], "work");
  addFeature("Battlepass", "2 spr", "NOT STARTED", [[17,18]], "work");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // DOZER POD
  // ═══════════════════════════════════════════
  addPodHeader("DOZER");
  addStaffRow("Eng Lead: Derek Gallant | Eng: Bruno Freitas | Randy Pasion & Garrett Eidsvig (partial/shared with Social Dynamics)");

  addFeature("Infrastructure & Tooling", "~7 spr", "NOT STARTED", [[0,6]], "tbd");
  addFeature("Content Pipeline Scaling", "TBD", "NOT STARTED", [[8,13]], "tbd");
  addFeature("UA / Analytics Instrumentation", "TBD", "NOT STARTED", [[22,29]], "tbd");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // ART
  // ═══════════════════════════════════════════
  addPodHeader("ART");
  addStaffRow("Art Director: Kevin Griffith | Assoc AD: Brendan Cheatham | Producer: Brann Livesay | Battle Art: Ben Clair, Felipe Chaves, Tony Bonilla, Vinicius");

  addFeature("Character Assets (Heroes & Units)", "7 spr", "IN PROGRESS", [[0,6]], "work");
  addFeature("Environment Art (Map tiles, buildings)", "7 spr", "IN PROGRESS", [[0,6]], "work");
  addFeature("UI/UX Assets", "7 spr", "IN PROGRESS", [[0,6]], "work");
  addFeature("VFX & Animation", "6 spr", "NOT STARTED", [[0,5]], "work");
  addFeature("Beta Polish", "2 spr", "NOT STARTED", [[6,7]], "work");
  addFeature("Hero Assets Expansion", "6 spr", "NOT STARTED", [[8,13]], "work");
  addFeature("Monetization Assets", "6 spr", "NOT STARTED", [[8,13]], "work");
  addFeature("Pipeline Scaling", "6 spr", "NOT STARTED", [[8,13]], "work");
  addEmptyRow();

  // ═══════════════════════════════════════════
  // KEY DATES & VALIDATION
  // ═══════════════════════════════════════════
  addPodHeader("KEY DATES & VALIDATION");

  // Milestone end markers
  const msEndRow = ["", "Milestone Ends", "", ""];
  for (let i = 0; i < NUM_SPRINTS; i++) msEndRow.push("");
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([msEndRow]);
  const endMarkers = {5: "🏁 M&Ms", 7: "🏁 Beta", 13: "🏁 M&C", 21: "🏁 Live Ops", 29: "🏁 Soft Launch"};
  for (const [idx, label] of Object.entries(endMarkers)) {
    const cell = sheet.getRange(row, INFO_COLS + 1 + parseInt(idx));
    cell.setValue(label).setBackground(C.KEY_BG).setFontWeight("bold").setFontSize(9)
      .setHorizontalAlignment("center");
  }
  sheet.getRange(row, 2).setFontWeight("bold");
  row++;

  // SHQ validation focus
  const shqRow = ["", "Key SHQs Under Test", "", ""];
  for (let i = 0; i < NUM_SPRINTS; i++) shqRow.push("");
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([shqRow]);
  sheet.getRange(row, 2).setFontWeight("bold").setFontSize(9);
  const shqMarkers = {0: "SHQ1, SHQ2, SHQ7", 8: "SHQ10-13, SHQ16", 14: "SHQ18-22"};
  for (const [idx, label] of Object.entries(shqMarkers)) {
    sheet.getRange(row, INFO_COLS + 1 + parseInt(idx)).setValue(label)
      .setFontSize(8).setFontStyle("italic").setBackground("#e8f5e9");
  }
  row++;

  // Winning Hypotheses
  const whRow = ["", "Winning Hypotheses", "", ""];
  for (let i = 0; i < NUM_SPRINTS; i++) whRow.push("");
  sheet.getRange(row, 1, 1, TOTAL_COLS).setValues([whRow]);
  sheet.getRange(row, 2).setFontWeight("bold").setFontSize(9);
  const whMarkers = {
    0: "WH-2 (Empire)", 4: "WH-1 (Battle)",
    8: "WH-3 (Monetization)", 14: "WH-2, WH-3",
    22: "WH-4 (Production)"
  };
  for (const [idx, label] of Object.entries(whMarkers)) {
    sheet.getRange(row, INFO_COLS + 1 + parseInt(idx)).setValue(label)
      .setFontSize(8).setFontStyle("italic").setBackground("#e3f2fd");
  }
  row++;

  addEmptyRow();

  // ═══════════════════════════════════════════
  // LEGEND
  // ═══════════════════════════════════════════
  sheet.getRange(row, 1).setValue("LEGEND").setFontWeight("bold").setFontSize(10);
  sheet.getRange(row, 1, 1, TOTAL_COLS).setBackground(C.LEGEND_BG);
  row++;

  const legendItems = [
    [C.WORK, "■ Scheduled work"],
    [C.ONGOING, "– Ongoing/continuous"],
    [C.PROTO, "◆ Parallel prototype track"],
    [C.TBD, "? TBD / Not yet scoped"],
    [C.DEFERRED, "■ Deferred"],
  ];
  for (const [color, desc] of legendItems) {
    sheet.getRange(row, INFO_COLS + 1).setBackground(color).setValue("■").setFontColor("#ffffff")
      .setHorizontalAlignment("center");
    sheet.getRange(row, INFO_COLS + 2).setValue(desc).setFontSize(9);
    row++;
  }

  // ═══════════════════════════════════════════
  // FORMATTING
  // ═══════════════════════════════════════════

  // Column widths
  sheet.setColumnWidth(1, 50);   // Pod (narrow, most content is in merged header)
  sheet.setColumnWidth(2, 280);  // Feature
  sheet.setColumnWidth(3, 55);   // Estimate
  sheet.setColumnWidth(4, 100);  // Status
  for (let i = 1; i <= NUM_SPRINTS; i++) {
    sheet.setColumnWidth(INFO_COLS + i, 55);
  }

  // Freeze header rows and info columns
  sheet.setFrozenRows(4);
  sheet.setFrozenColumns(4);

  // Add borders to sprint columns for milestone separation
  const lastRow = row;
  const msBorders = [6, 8, 14, 22]; // sprint indices where milestones end (right border)
  for (const idx of msBorders) {
    sheet.getRange(1, INFO_COLS + 1 + idx, lastRow, 1)
      .setBorder(null, true, null, null, null, null, "#333333", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  }

  // Add thin borders around all sprint cells
  sheet.getRange(1, INFO_COLS + 1, lastRow, NUM_SPRINTS)
    .setBorder(true, true, true, true, true, true, "#e0e0e0", SpreadsheetApp.BorderStyle.SOLID);

  // Auto-resize row heights
  for (let r = 1; r <= lastRow; r++) {
    // Let Google Sheets handle row heights automatically
  }

  SpreadsheetApp.flush();
  Logger.log("Roadmap populated successfully! " + (row - 1) + " rows created.");
  SpreadsheetApp.getUi().alert("✅ Lotus Roadmap populated!\n\n" + (row - 1) + " rows created across 30 sprints.\nFrozen: 4 header rows, 4 info columns.");
}
