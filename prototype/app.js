// =====================================================================
// Lotus Map Prototype — App
// =====================================================================
// Three discrete scenes (zoomed_out, main_menu, home_empire). The user
// switches between them via wheel, +/- buttons, region clicks, or back
// button. Each scene fits its image to the viewport. Markers are placed
// in pixel-space of the underlying image.
// =====================================================================

let map;
let sceneLayers = {};   // { 0: {group, bounds, scene}, 1: {...}, 2: {...} }
let currentScene = CONFIG.initialScene;

// ---------- Coord helpers ----------

// Image pixel (x, y from top-left) → Leaflet LatLng for L.CRS.Simple.
// We use bounds [(0,0), (height, width)] so lng = x, lat = (height - y).
function imgToLatLng(x, y, imgHeight) {
  return [imgHeight - y, x];
}

// Inverse — used to log clicks back to image-pixel coords.
function latLngToImg(latlng, imgHeight) {
  return {
    x: Math.round(latlng.lng),
    y: Math.round(imgHeight - latlng.lat),
  };
}

// ---------- Scene construction ----------

function buildScene(zoomKey, sceneCfg) {
  const z = parseInt(zoomKey, 10);
  const bounds = [[0, 0], [sceneCfg.height, sceneCfg.width]];
  const overlay = L.imageOverlay(sceneCfg.image, bounds, { interactive: false });

  const group = L.layerGroup([overlay]);

  // Scene 1: place region hotspots
  if (z === 1) {
    CONFIG.regions.forEach(r => group.addLayer(buildRegionMarker(r, sceneCfg.height)));
  }
  // Scene 2: place empire interior nodes
  if (z === 2) {
    CONFIG.empireNodes.forEach(n => group.addLayer(buildNodeMarker(n, sceneCfg.height)));
  }

  return { group, bounds, scene: sceneCfg };
}

function buildRegionMarker(region, sceneHeight) {
  const latlng = imgToLatLng(region.x, region.y, sceneHeight);
  const icon = L.divIcon({
    className: 'region-hotspot',
    html: `<div class="region-tag" style="color:${region.color};border-color:${region.color}">${region.label}</div>`,
    iconSize: [120, 32],
    iconAnchor: [60, 16],
  });
  const marker = L.marker(latlng, { icon, keyboard: false, riseOnHover: true });
  marker.on('click', (e) => {
    L.DomEvent.stopPropagation(e);
    console.log(`[region] clicked "${region.label}" (id=${region.id})`);
    if (Number.isInteger(region.clicksTo)) {
      setScene(region.clicksTo);
    }
  });
  return marker;
}

function buildNodeMarker(node, sceneHeight) {
  const latlng = imgToLatLng(node.x, node.y, sceneHeight);
  const icon = L.divIcon({
    className: 'node-hotspot',
    html: `<div class="node-tag node-${node.type}">${node.label}</div>`,
    iconSize: [90, 22],
    iconAnchor: [45, 11],
  });
  const marker = L.marker(latlng, { icon, keyboard: false, riseOnHover: true });
  marker.on('click', (e) => {
    L.DomEvent.stopPropagation(e);
    console.log(`[node] clicked "${node.label}" (id=${node.id}, type=${node.type})`);
  });
  return marker;
}

// ---------- Scene switching ----------

function setScene(idx) {
  if (!sceneLayers[idx]) return;
  if (idx === currentScene && map.hasLayer(sceneLayers[idx].group)) {
    return; // already there
  }
  currentScene = idx;
  const target = sceneLayers[idx];

  // Remove all other scenes, add target.
  Object.entries(sceneLayers).forEach(([z, info]) => {
    const isTarget = parseInt(z, 10) === idx;
    if (isTarget) {
      if (!map.hasLayer(info.group)) map.addLayer(info.group);
    } else {
      if (map.hasLayer(info.group)) map.removeLayer(info.group);
    }
  });

  // Fit the new scene to the viewport.
  map.setMaxBounds(null);
  map.fitBounds(target.bounds, { animate: false, padding: [10, 10] });
  map.setMaxBounds(target.bounds);

  updateHUD(idx);
  updateDebug();
}

// ---------- HUD visibility ----------

function updateHUD(sceneIdx) {
  document.querySelectorAll('.hud').forEach(el => {
    const list = (el.dataset.visibleAt || '').split(',').map(s => s.trim());
    const visible = list.includes(String(sceneIdx));
    el.classList.toggle('hidden', !visible);
  });
  // Highlight active scene in legend.
  document.querySelectorAll('.legend-item').forEach(item => {
    item.classList.toggle('active', String(sceneIdx) === item.dataset.scene);
  });
  // Disable zoom buttons at edges.
  document.getElementById('btn-zoom-in').disabled = sceneIdx >= 2;
  document.getElementById('btn-zoom-out').disabled = sceneIdx <= 0;
}

function updateDebug() {
  const cfg = CONFIG.scenes[currentScene];
  document.getElementById('debug-scene').textContent = cfg
    ? `${currentScene} — ${cfg.name}`
    : String(currentScene);
}

// ---------- Wheel handler ----------

function attachWheelHandler() {
  const mapEl = document.getElementById('map');
  let lastWheelAt = 0;
  mapEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastWheelAt < 250) return; // throttle so one scroll = one step
    lastWheelAt = now;
    if (e.deltaY < 0 && currentScene < 2) setScene(currentScene + 1);
    else if (e.deltaY > 0 && currentScene > 0) setScene(currentScene - 1);
  }, { passive: false });
}

// ---------- Init ----------

function init() {
  map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -10,
    maxZoom: 10,
    zoomControl: false,
    scrollWheelZoom: false,    // we handle wheel manually for scene switching
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: false,
    zoomSnap: 0.1,
    zoomAnimation: false,
  });

  // Build all scenes.
  Object.entries(CONFIG.scenes).forEach(([k, sceneCfg]) => {
    sceneLayers[parseInt(k, 10)] = buildScene(k, sceneCfg);
  });

  // Initial scene.
  setScene(CONFIG.initialScene);

  // Wheel scene-switching.
  attachWheelHandler();

  // Cursor coord readout (in image-pixel space of current scene).
  map.on('mousemove', (e) => {
    const cfg = CONFIG.scenes[currentScene];
    if (!cfg) return;
    const p = latLngToImg(e.latlng, cfg.height);
    // Clamp display when off the image (negative or beyond bounds)
    document.getElementById('debug-cursor').textContent =
      `${p.x}, ${p.y}` + (p.x < 0 || p.y < 0 || p.x > cfg.width || p.y > cfg.height ? ' (off)' : '');
  });

  // Click → log image-pixel coords (so user can place new markers easily).
  map.on('click', (e) => {
    const cfg = CONFIG.scenes[currentScene];
    if (!cfg) return;
    const p = latLngToImg(e.latlng, cfg.height);
    console.log(`[click] scene=${currentScene} (${cfg.name}) → x: ${p.x}, y: ${p.y}`);
  });

  // Buttons
  document.getElementById('btn-back').addEventListener('click', () => setScene(1));
  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    if (currentScene < 2) setScene(currentScene + 1);
  });
  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    if (currentScene > 0) setScene(currentScene - 1);
  });

  // Hotspot outline toggle
  const toggle = document.getElementById('toggle-hotspots');
  toggle.checked = CONFIG.showHotspotOutlines;
  document.body.classList.toggle('show-hotspots', toggle.checked);
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('show-hotspots', toggle.checked);
  });

  // Resize handling — refit current scene when window resizes.
  window.addEventListener('resize', () => {
    const target = sceneLayers[currentScene];
    if (!target) return;
    map.invalidateSize();
    map.fitBounds(target.bounds, { animate: false, padding: [10, 10] });
  });
}

document.addEventListener('DOMContentLoaded', init);
