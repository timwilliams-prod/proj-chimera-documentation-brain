// =====================================================================
// Lotus Map Prototype — Tunable Config
// =====================================================================
// Edit values here to iterate on the prototype. All coordinates are in
// pixel-space of the underlying scene image (origin = top-left, y goes
// down). Use the click-to-log feature in the prototype to grab coords.
// =====================================================================

const CONFIG = {

  // Which scene to load first (0 = world, 1 = main menu, 2 = home empire)
  initialScene: 1,

  // Each scene swaps in a different base image. The prototype displays
  // exactly one scene at a time and fits its image to the viewport.
  scenes: {
    0: {
      name: 'World View',
      image: '../reference/map_options/zoomed_out.jpg',
      width: 913,
      height: 432,
    },
    1: {
      name: 'Main Menu',
      image: '../reference/map_options/main_menu.jpg',
      width: 1057,
      height: 535,
    },
    2: {
      name: 'Home Empire',
      image: '../reference/map_options/home_empire.jpg',
      width: 1008,
      height: 472,
    },
  },

  // Region click hotspots — only rendered on scene 1 (Main Menu).
  // Coords are pixel positions in main_menu.jpg. Use click-to-log to refine.
  // `clicksTo` (optional): scene index to switch to when clicked.
  regions: [
    { id: 'empire',     label: 'EMPIRE',        x: 415, y: 270, color: '#5fdc5f', clicksTo: 2 },
    { id: 'reef',       label: 'RAVAGERS REEF', x: 510, y: 175, color: '#c25fdc' },
    { id: 'expedition', label: 'EXPEDITION',    x: 715, y: 245, color: '#5fb8dc' },
    { id: 'pvp1',       label: 'PVP',           x: 560, y: 360, color: '#dc8b5f' },
    { id: 'pvp2',       label: 'PVP',           x: 605, y: 430, color: '#dc8b5f' },
  ],

  // Empire interior nodes — only rendered on scene 2 (Home Empire).
  // Coords are pixel positions in home_empire.jpg. Use click-to-log to refine.
  empireNodes: [
    { id: 'empire-core', label: 'EMPIRE',     x: 280, y: 230, type: 'capital'  },
    { id: 'mines-top',   label: 'MINES',      x: 425, y: 60,  type: 'resource' },
    { id: 'mines-bot',   label: 'MINES',      x: 480, y: 440, type: 'resource' },
    { id: 'mines-right', label: 'MINES',      x: 645, y: 280, type: 'resource' },
    { id: 'pve-1',       label: 'PVE',        x: 220, y: 295, type: 'mission'  },
    { id: 'pve-2',       label: 'PVE',        x: 580, y: 305, type: 'mission'  },
    { id: 'pve-3',       label: 'PVE',        x: 850, y: 75,  type: 'mission'  },
    { id: 'pve-4',       label: 'PVE',        x: 870, y: 380, type: 'mission'  },
    { id: 'pvp-reef',    label: 'PVP-REEF',   x: 380, y: 175, type: 'pvp'      },
    { id: 'pvp-exp',     label: 'PVP-EXPED',  x: 470, y: 240, type: 'pvp'      },
  ],

  // Show hotspots as outlined boxes (vs. transparent). Useful while placing.
  showHotspotOutlines: true,
};
