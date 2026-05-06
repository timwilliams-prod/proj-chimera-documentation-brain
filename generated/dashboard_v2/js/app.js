// generated/dashboard_v2/js/app.js
// Lotus Portal v2 — single-page app shell + page renderers.
// Pure vanilla JS. No build step. Loaded by index.html via plain <script>.
//
// SAVE/CANCEL flow (prototype):
//   - Edit-able pages render fields with .editable class
//   - "Edit" button puts body in edit-mode (CSS shows Save/Cancel, hides Edit)
//   - Save serializes the page state and writes to localStorage under a stable key
//     (e.g. "lotusv2.priorities.empire"). On reload we prefer localStorage.
//   - In a future session, Save also POSTs to a Pages Function (/api/save-md)
//     that commits the change to the GitHub repo. See WALKTHROUGH.md.

(function () {
  "use strict";

  const POD_CLASS = {
    "Empire": "empire",
    "Metagame": "metagame",
    "Battle": "battle",
    "Social Dynamics": "social",
    "Dozer": "dozer",
    "Cross-pod": "cross",
    "Cross-pod / TBD": "cross",
    "Unassigned/Cross-pod": "cross"
  };
  const podClass = (p) => POD_CLASS[p] || "cross";

  const STORAGE_PREFIX = "lotusv2.";
  const lsGet = (key) => {
    try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key)); }
    catch (e) { return null; }
  };
  const lsSet = (key, val) => {
    try { localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val)); return true; }
    catch (e) { return false; }
  };
  const lsRemove = (key) => {
    try { localStorage.removeItem(STORAGE_PREFIX + key); } catch (e) {}
  };

  // ────────────────────────────────────────────────────────────────────────────
  // Sidebar definition — single source of truth for navigation
  // ────────────────────────────────────────────────────────────────────────────
  const NAV = [
    {
      title: "Dashboard",
      links: [
        { id: "home",          label: "Home",           route: "#/dashboard" },
        { id: "action-center", label: "Action Center",  route: "#/action-center" },
        { id: "reports",       label: "Reports",        route: "#/reports" }
      ]
    },
    {
      title: "Plans",
      links: [
        { id: "roadmap",     label: "Roadmap",            route: "#/plans/roadmap" },
        { id: "validation",  label: "Validation Roadmap", route: "#/plans/validation" },
        { id: "sprints",     label: "Sprint Plans",       route: "#/plans/sprints" },
        { id: "capacity",    label: "Capacity",           route: "#/plans/capacity" }
      ]
    },
    {
      title: "Priorities",
      links: [
        { id: "p-empire",   label: "Empire",          route: "#/priorities/empire",          dot: "empire" },
        { id: "p-metagame", label: "Metagame",        route: "#/priorities/metagame",        dot: "metagame" },
        { id: "p-battle",   label: "Battle",          route: "#/priorities/battle",          dot: "battle" },
        { id: "p-social",   label: "Social Dynamics", route: "#/priorities/social-dynamics", dot: "social" },
        { id: "p-dozer",    label: "Dozer",           route: "#/priorities/dozer",           dot: "dozer" }
      ]
    },
    {
      title: "Brain / Agent Health",
      links: [
        { id: "brain-health", label: "Brain Health",  route: "#/health/brain" },
        { id: "agent-health", label: "Agent Health",  route: "#/health/agent",  badge: "soon" },
        { id: "agent-logs",   label: "Agent Logs",    route: "#/health/logs",   badge: "soon" }
      ]
    },
    {
      title: "Help",
      links: [
        { id: "help-links",    label: "Useful Links",    route: "#/help/links" },
        { id: "help-skills",   label: "Skills List",     route: "#/help/skills" },
        { id: "help-ai",       label: "General AI Help", route: "#/help/ai" },
        { id: "help-glossary", label: "Glossary",        route: "#/help/glossary" }
      ]
    }
  ];

  // ────────────────────────────────────────────────────────────────────────────
  // Sidebar render
  // ────────────────────────────────────────────────────────────────────────────
  function renderSidebar() {
    const nav = document.getElementById("sidebar-nav");
    nav.innerHTML = NAV.map(section => `
      <div class="sidebar-section">
        <div class="sidebar-section-title">${section.title}</div>
        ${section.links.map(link => `
          <a class="sidebar-link" data-route="${link.route}" href="${link.route}">
            <span style="display:flex;align-items:center;gap:8px;">
              ${link.dot ? `<span class="pod-dot" style="background:var(--pod-${link.dot});"></span>` : ""}
              <span>${link.label}</span>
            </span>
            ${link.badge ? `<span class="badge ${link.badge}">${link.badge.toUpperCase()}</span>` : ""}
          </a>
        `).join("")}
      </div>
    `).join("");
  }

  function highlightActiveLink(route) {
    document.querySelectorAll(".sidebar-link").forEach(a => {
      a.classList.toggle("active", a.dataset.route === route);
    });
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Router
  // ────────────────────────────────────────────────────────────────────────────
  const ROUTES = {
    "#/":                          () => renderHome(),
    "#/dashboard":                 () => renderHome(),
    "#/action-center":             () => renderActionCenter(),
    "#/reports":                   () => renderReports(),
    "#/plans/roadmap":             () => renderRoadmap(),
    "#/plans/validation":          () => renderEmbedded("Validation Roadmap", "../dashboard/validation.html"),
    "#/plans/sprints":             () => renderSprintPlan(),
    "#/plans/capacity":            () => renderCapacity(),
    "#/priorities/empire":         () => renderPriorities("empire"),
    "#/priorities/metagame":       () => renderPriorities("metagame"),
    "#/priorities/battle":         () => renderPriorities("battle"),
    "#/priorities/social-dynamics":() => renderPriorities("social-dynamics"),
    "#/priorities/dozer":          () => renderPriorities("dozer"),
    "#/health/brain":              () => renderBrainHealth(),
    "#/health/agent":              () => renderComingSoon("Agent Health", "Will surface running agents, recent failures, model usage, and rate-limit/cost signals."),
    "#/health/logs":               () => renderComingSoon("Agent Logs", "Will stream a searchable history of agent runs once we wire up Cloudflare KV/D1 storage."),
    "#/help/links":                () => renderHelpLinks(),
    "#/help/skills":               () => renderHelpSkills(),
    "#/help/ai":                   () => renderHelpAi(),
    "#/help/glossary":             () => renderGlossary()
  };

  function route() {
    const hash = window.location.hash || "#/dashboard";
    document.body.classList.remove("edit-mode");
    closeBoulderPopover();
    const handler = ROUTES[hash];
    if (handler) {
      handler();
    } else {
      render404(hash);
    }
    highlightActiveLink(hash);
    window.scrollTo({ top: 0, behavior: "instant" });
    document.querySelector(".content").scrollTop = 0;
  }

  function go(route) {
    if (window.location.hash === route) {
      // re-render
      ROUTES[route] && ROUTES[route]();
    } else {
      window.location.hash = route;
    }
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Page header helper + edit controls
  // ────────────────────────────────────────────────────────────────────────────
  function pageHeader({ title, subtitle, actions }) {
    return `
      <div class="page-header">
        <div>
          <div class="page-title">${title}</div>
          ${subtitle ? `<div class="page-subtitle">${subtitle}</div>` : ""}
        </div>
        ${actions ? `<div class="page-actions">${actions}</div>` : ""}
      </div>
    `;
  }

  function editControls(storageKey) {
    return `
      <button class="btn view-only" data-action="edit">Edit</button>
      <button class="btn btn-primary edit-only" data-action="save" data-storage-key="${storageKey}">Save</button>
      <button class="btn btn-ghost edit-only" data-action="cancel">Cancel</button>
    `;
  }

  function attachEditHandlers(onSave) {
    const content = document.getElementById("content");
    content.addEventListener("click", function handler(e) {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === "edit") {
        document.body.classList.add("edit-mode");
        document.querySelectorAll(".editable").forEach(el => {
          el.setAttribute("contenteditable", "true");
        });
        document.querySelectorAll("select.editable-select, input.editable-input").forEach(el => {
          el.disabled = false;
        });
      } else if (action === "cancel") {
        document.body.classList.remove("edit-mode");
        route();
      } else if (action === "save") {
        const ok = onSave && onSave(btn.dataset.storageKey);
        if (ok !== false) {
          document.body.classList.remove("edit-mode");
          showToast("Saved locally. Wire to GitHub commit per WALKTHROUGH.md.");
          route();
        }
      }
    });
  }

  function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove("show"), 2400);
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Live sprint data (Pages Function /api/clickup-sprint)
  // ────────────────────────────────────────────────────────────────────────────
  // Fixes the snapshot's "Tasks in Multiple Lists" undercount. Render flow:
  //   1. renderHome() paints immediately using the snapshot (fast first paint)
  //   2. If no live data is cached, kick off a background fetch
  //   3. When the fetch lands, re-render home so the widget updates in place
  // Cached for 60s to match the function's edge cache and avoid refetch on
  // every nav back to home in a single session.

  let _liveSprintCache = null; // { listId, totals, by_pod, data_source, _fetchedAt }
  let _liveSprintFetching = false;

  function inferCurrentSprintListId(snapshotSprintName) {
    if (typeof SPRINT_MANIFEST === "undefined") return null;
    // Prefer matching the snapshot's sprint name — keeps the live widget
    // aligned with whatever the snapshot considers "current", even if
    // SPRINT_CURRENT has drifted ahead to a Preview sprint.
    //
    // Match tolerantly: snapshot says "Abra 28" while manifest says "Abra".
    // Try exact, then either-direction substring, then sprint-number embedded
    // in the snapshot string.
    if (snapshotSprintName) {
      const snap = String(snapshotSprintName);
      const exact = SPRINT_MANIFEST.find(s => s.name === snap);
      if (exact && exact.listId) return exact.listId;
      const partial = SPRINT_MANIFEST.find(s =>
        s.name && (snap.includes(s.name) || s.name.includes(snap))
      );
      if (partial && partial.listId) return partial.listId;
      const numMatch = snap.match(/\d+/);
      if (numMatch) {
        const byNum = SPRINT_MANIFEST.find(s => s.number === Number(numMatch[0]));
        if (byNum && byNum.listId) return byNum.listId;
      }
    }
    if (typeof SPRINT_CURRENT !== "undefined") {
      const cur = SPRINT_MANIFEST.find(s => s.number === SPRINT_CURRENT);
      if (cur && cur.listId) return cur.listId;
    }
    const last = SPRINT_MANIFEST.find(s => s.listId);
    return last ? last.listId : null;
  }

  function fetchLiveSprint(listId) {
    if (_liveSprintFetching) return;
    if (_liveSprintCache && _liveSprintCache.listId === listId &&
        (Date.now() - _liveSprintCache._fetchedAt) < 60000) return;
    _liveSprintFetching = true;
    fetch(`/api/clickup-sprint?listId=${encodeURIComponent(listId)}`)
      .then(r => r.ok ? r.json() : null)
      .then(j => {
        if (!j) return;
        _liveSprintCache = { ...j, listId, _fetchedAt: Date.now() };
        // Re-render only if we're still on home (don't fight the user's nav)
        const h = location.hash || "#/dashboard";
        if (h === "#/" || h === "#/dashboard") renderHome();
      })
      .catch(() => { /* keep snapshot, fail silently */ })
      .finally(() => { _liveSprintFetching = false; });
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Pages
  // ────────────────────────────────────────────────────────────────────────────

  function renderHome() {
    const d = DASHBOARD_DATA || {};
    const m = d.milestone || {};
    let s = d.sprint || {};

    // Merge live sprint data if we have it cached; otherwise kick off a fetch
    // in the background. The fetch will trigger a re-render when it lands.
    const listId = inferCurrentSprintListId(s.name);
    const cacheFresh = _liveSprintCache && _liveSprintCache.listId === listId &&
                       (Date.now() - _liveSprintCache._fetchedAt) < 60000;
    if (cacheFresh) {
      s = {
        ...s,
        totals: _liveSprintCache.totals,
        by_pod: _liveSprintCache.by_pod,
        data_source: _liveSprintCache.data_source
      };
    } else if (listId) {
      fetchLiveSprint(listId);
    }
    // 3-state widget label: live cache | loading | snapshot fallback.
    // Loading takes ~1 min because the fix scans 5 ClickUp lists to capture
    // TIML tasks — surface that to the user so the wait isn't mysterious.
    const sprintLabel = cacheFresh
      ? (s.data_source || "Live")
      : (listId ? "Updating live data from ClickUp… (~1 min)" : `Snapshot from ${d.generated_at || "—"}`);

    const today = new Date();
    const endDate = m.end_date ? new Date(m.end_date) : null;
    const daysLeftMs = endDate ? (endDate - today) : null;
    const daysLeftMilestone = daysLeftMs !== null ? Math.ceil(daysLeftMs / (1000 * 60 * 60 * 24)) : null;
    const sprintEnd = s.end_date ? new Date(s.end_date) : null;
    const daysLeftSprint = sprintEnd ? Math.ceil((sprintEnd - today) / (1000 * 60 * 60 * 24)) : null;

    const mustHaves = m.must_haves || [];
    const mustHaveCounts = mustHaves.reduce((acc, mh) => { acc[mh.status] = (acc[mh.status] || 0) + 1; return acc; }, {});

    const podRows = (s.by_pod || []).map(p => `
      <tr>
        <td><span class="pod-tag ${podClass(p.pod)}">${p.pod}</span></td>
        <td style="text-align:right;">${p.total}</td>
        <td style="text-align:right;">${p.open}</td>
        <td style="text-align:right;">${p.in_progress}</td>
        <td style="text-align:right;">${p.complete}</td>
        <td style="text-align:right;color:${p.blocked > 0 ? 'var(--status-red)' : 'inherit'};">${p.blocked}</td>
      </tr>
    `).join("");

    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Home",
        subtitle: `Snapshot of where Lotus is right now. Last refreshed ${d.generated_at || "—"}.`,
        actions: ""
      })}

      <div class="grid-2">
        <div class="panel">
          <div class="panel-title">
            Current Milestone
            <span class="panel-subtitle">${m.phase || ""}</span>
          </div>
          <div style="font-size:20px;color:var(--text-bright);font-weight:600;">${m.name || "—"}</div>
          <div class="meta-row">
            <span><strong>Ends:</strong> ${m.end_date || "—"}</span>
            <span><strong>Sprints:</strong> ${m.sprint_count || "—"}</span>
            ${daysLeftMilestone !== null ? `<span><strong>${daysLeftMilestone}</strong> days left</span>` : ""}
          </div>
          <div class="must-haves-summary">
            Must-haves: <strong>${mustHaves.length}</strong> total
            ${mustHaveCounts.complete ? ` · <span style="color:var(--status-green);">${mustHaveCounts.complete} done</span>` : ""}
            ${mustHaveCounts.in_progress ? ` · <span style="color:var(--status-blue);">${mustHaveCounts.in_progress} in progress</span>` : ""}
            ${mustHaveCounts.not_started ? ` · <span style="color:var(--text-dim);">${mustHaveCounts.not_started} not started</span>` : ""}
            ${mustHaveCounts.blocked ? ` · <span style="color:var(--status-red);">${mustHaveCounts.blocked} blocked</span>` : ""}
          </div>
          <div class="must-haves-list">
            ${mustHaves.map(mh => `
              <div class="mh-row" title="${mh.feature} — ${mh.status.replace(/_/g," ")}">
                <span class="status-dot status-${mh.status}"></span>
                <span class="mh-name">${mh.feature}</span>
                <span class="pod-tag pod-tag-sm ${podClass(mh.pod)}">${mh.pod}</span>
              </div>`).join("")}
          </div>
          <div style="margin-top:10px;">
            <a href="#/plans/roadmap">View full roadmap →</a>
          </div>
        </div>

        <div class="panel">
          <div class="panel-title">
            Current Sprint
            <span class="panel-subtitle">${s.start_date || ""} → ${s.end_date || ""}</span>
          </div>
          <div style="font-size:20px;color:var(--text-bright);font-weight:600;">${s.name || "—"}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px;font-style:${cacheFresh ? "normal" : "italic"};">
            ${sprintLabel}
          </div>
          <div class="meta-row">
            ${daysLeftSprint !== null ? `<span><strong>${daysLeftSprint}</strong> days left</span>` : ""}
            <span><strong>Total:</strong> ${(s.totals || {}).total || 0}</span>
            <span><strong>Open:</strong> ${(s.totals || {}).open || 0}</span>
            <span><strong>In Progress:</strong> ${(s.totals || {}).in_progress || 0}</span>
            <span><strong>Complete:</strong> ${(s.totals || {}).complete || 0}</span>
            <span style="color:${(s.totals || {}).blocked > 0 ? 'var(--status-red)' : 'inherit'};"><strong>Blocked:</strong> ${(s.totals || {}).blocked || 0}</span>
          </div>
          ${podRows ? `
            <table style="margin-top:12px;">
              <thead><tr><th>Pod</th><th style="text-align:right;">Total</th><th style="text-align:right;">Open</th><th style="text-align:right;">In Prog</th><th style="text-align:right;">Done</th><th style="text-align:right;">Blocked</th></tr></thead>
              <tbody>${podRows}</tbody>
            </table>` : ""}
          <div style="margin-top:14px;">
            <a href="#/plans/sprints">Open Sprint Plans →</a>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">
          Needs Your Attention
          <span class="panel-subtitle">Stale docs, blocked work, designer queue items, action center</span>
        </div>
        ${renderNeedsAttention()}
        <div style="margin-top:10px;">
          <a href="#/action-center">Open Action Center →</a>
        </div>
      </div>

    `;
  }

  function renderNeedsAttention() {
    const d = DASHBOARD_DATA || {};
    const arts = d.artifacts || [];
    const today = new Date();
    const stale = arts.filter(a => {
      if (!a.stale_after_days || !a.last_updated) return false;
      const days = Math.floor((today - new Date(a.last_updated)) / (1000 * 60 * 60 * 24));
      return days > a.stale_after_days;
    });
    const sprint = d.sprint || {};
    const blocked = (sprint.totals || {}).blocked || 0;

    const items = [];
    stale.forEach(a => {
      const days = Math.floor((today - new Date(a.last_updated)) / (1000 * 60 * 60 * 24));
      items.push({
        kind: "stale",
        label: `${a.label} is stale (${days} days old)`,
        action: a.suggested_action,
        link: "#/health/brain"
      });
    });
    if (blocked > 0) {
      items.push({
        kind: "blocked",
        label: `${blocked} blocked task${blocked > 1 ? "s" : ""} in current sprint`,
        action: "Triage with /sprint-risks",
        link: "#/plans/sprints"
      });
    }
    items.push({
      kind: "designer",
      label: "Designer Queue items (placeholder — wire from designer_queue/designerQueue.md)",
      action: "Open queue",
      link: "#/action-center"
    });

    if (!items.length) {
      return `<div class="small">All quiet. Nothing flagged right now.</div>`;
    }
    return `
      <table>
        <thead><tr><th>Item</th><th>Suggested action</th><th></th></tr></thead>
        <tbody>
          ${items.map(it => `
            <tr>
              <td>${it.label}</td>
              <td><code>${it.action}</code></td>
              <td><a href="${it.link}">Go →</a></td>
            </tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  function renderActionCenter() {
    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Action Center",
        subtitle: "Everything that needs a human (or agent) decision. Designer queue, stale docs, blockers, gaps."
      })}
      <div class="info-banner">
        Action Center is a placeholder. Next pass: wire to <code>planning/designer_queue/designerQueue.md</code>,
        the staleness checks from <code>BRAIN_HEALTH_DATA</code>, blocked ClickUp tasks, and orphaned features.
      </div>
      <div class="panel">
        <div class="panel-title">Open items (placeholder)</div>
        ${renderNeedsAttention()}
      </div>
    `;
  }

  function renderReports() {
    const r = REPORTS_DATA || { groups: [] };
    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Reports",
        subtitle: `Generated reports archive. Source: <code>${r.source_dir || "generated/reports/"}</code>.`
      })}
      ${r.groups.map(g => `
        <div class="panel">
          <div class="panel-title">
            ${g.name}
            <span class="panel-subtitle">${g.cadence} · ${g.desc}</span>
          </div>
          ${g.reports.length === 0
            ? `<div class="small">No reports yet.</div>`
            : `
              <table>
                <thead><tr><th>Date</th><th>Title</th><th></th></tr></thead>
                <tbody>
                  ${g.reports.map(rep => `
                    <tr>
                      <td>${rep.date}</td>
                      <td>${rep.title}</td>
                      <td>
                        <a href="${rep.path}" target="_blank">.md</a>
                        ${rep.html ? ` · <a href="${rep.html}" target="_blank">html</a>` : ""}
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>`}
        </div>
      `).join("")}
    `;
  }

  function renderEmbedded(title, src, note) {
    const embedSrc = src + (src.includes("?") ? "&" : "?") + "embed=1";
    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: title,
        subtitle: `Source: <code>${src}</code>`,
        actions: `<a class="btn btn-ghost" href="${src}" target="_blank">Open standalone ↗</a>`
      })}
      ${note ? `<div class="info-banner">${note}</div>` : ""}
      <div class="embed-host" data-embed-src="${src}">
        <div class="embed-loading">Loading…</div>
        <iframe src="${embedSrc}" title="${title}" onload="this.previousElementSibling && this.previousElementSibling.remove();"></iframe>
      </div>
    `;
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Roadmap (native — replaces the iframe to dashboard/roadmap.html)
  // ────────────────────────────────────────────────────────────────────────────
  const POD_COLORS_HEX = {
    "Empire": "#4A9EFF",
    "Metagame": "#FF8C42",
    "Battle": "#FF4444",
    "Social Dynamics": "#44BB77",
    "Dozer": "#AA77FF",
    "Art": "#FFD700"
  };
  const MS_COLORS = {
    "Sys Validation": "#6b7280",
    "Sys Val": "#6b7280",
    "M&Ms": "#4A9EFF",
    "Beta Prep": "#eab308",
    "M&C": "#22c55e",
    "Live Ops & Social": "#AA77FF",
    "Live Ops": "#AA77FF",
    "Soft Launch": "#FF8C42"
  };

  function renderRoadmap() {
    const d = DASHBOARD_DATA || {};
    const r = d.roadmap;
    if (!r || !Array.isArray(r.boulders)) {
      document.getElementById("content").innerHTML = `
        ${pageHeader({ title: "Roadmap", subtitle: "Source: <code>generated/dashboard/dashboard_data.js</code>" })}
        <div class="panel"><div class="small">No roadmap data found in DASHBOARD_DATA.roadmap. Run /production-dashboard.</div></div>
      `;
      return;
    }

    const todayStr = new Date().toISOString().slice(0, 10);
    const lastMs = r.milestones[r.milestones.length - 1];
    const tlStart = r.timeline_start;
    const tlEnd = lastMs.date;

    const months = generateMonths(tlStart, tlEnd);
    const chartStart = months[0].start;
    const chartEnd = months[months.length - 1].end;
    const totalDays = daysBetween(chartStart, chartEnd);
    const pct = (dateStr) => {
      const days = daysBetween(chartStart, dateStr);
      return Math.max(0, Math.min(100, (days / totalDays) * 100));
    };

    const monthCols = months.map(m => {
      const isCurrent = todayStr >= m.start && todayStr <= m.end;
      return `<div class="roadmap-month-col ${isCurrent ? "current" : ""}">${m.label}</div>`;
    }).join("");

    const gridlines = months.map(m => {
      const left = pct(m.start);
      return `<div class="month-gridline" style="left: ${left}%;"></div>`;
    }).join("");

    const msPeriods = buildMilestonePeriods(r.milestones, chartStart, chartEnd);
    const currentMsName = (d.milestone && d.milestone.name) || "";
    const msBands = msPeriods.map(ms => {
      const left = pct(ms.start);
      const right = pct(ms.end);
      const width = right - left;
      const color = MS_COLORS[ms.name] || "#888";
      const isActive = currentMsName.includes(ms.name);
      return `<div class="milestone-band ${isActive ? "active-ms" : ""}"
                   style="left: ${left}%; width: ${width}%; background: ${color};">
                ${ms.name}
              </div>`;
    }).join("");

    const msMarkers = r.milestones.map(ms => {
      const left = pct(ms.date);
      if (left <= 0 || left >= 100) return "";
      return `<div class="milestone-marker" style="left: ${left}%;"></div>`;
    }).join("");

    const todayLeft = pct(todayStr);
    const todayMarker = (todayLeft > 0 && todayLeft < 100)
      ? `<div class="today-marker" style="left: ${todayLeft}%;"></div>`
      : "";

    const podRows = r.pods.map(pod => {
      const podColor = POD_COLORS_HEX[pod] || "#888";
      const podBoulders = r.boulders
        .map((b, idx) => ({ b, idx }))
        .filter(({ b }) => b.pod === pod);

      // Stack overlapping boulders into lanes
      const lanes = [];
      podBoulders.forEach(({ b, idx }) => {
        let placed = false;
        for (let i = 0; i < lanes.length; i++) {
          const last = lanes[i][lanes[i].length - 1].b;
          if (b.start >= last.end) {
            lanes[i].push({ b, idx });
            placed = true;
            break;
          }
        }
        if (!placed) lanes.push([{ b, idx }]);
      });

      const rowHeight = Math.max(1, lanes.length) * 30 + 12;

      const boulderHtml = lanes.map((lane, laneIdx) => {
        return lane.map(({ b, idx }) => {
          const left = pct(b.start);
          const right = pct(b.end);
          const width = right - left;
          const top = 6 + laneIdx * 30;
          return `
            <div class="boulder-bar ${b.status === "future" ? "future" : ""}"
                 style="left: ${left}%; width: ${width}%; top: ${top}px; background: ${podColor};"
                 data-boulder-idx="${idx}"
                 title="${escapeAttr(b.name)}">
              ${escapeHtml(b.name)}
            </div>
          `;
        }).join("");
      }).join("");

      return `
        <div class="roadmap-row" style="min-height: ${rowHeight}px;">
          <div class="roadmap-pod-label">
            <div class="roadmap-pod-dot" style="background: ${podColor};"></div>
            ${pod}
          </div>
          <div class="roadmap-track">
            <div class="month-gridlines">${gridlines}</div>
            ${msMarkers}
            ${todayMarker}
            ${boulderHtml}
          </div>
        </div>
      `;
    }).join("");

    const podLegend = r.pods.map(pod => {
      const color = POD_COLORS_HEX[pod] || "#888";
      return `<span class="legend-item"><span class="legend-swatch" style="background:${color}"></span>${pod}</span>`;
    }).join("");
    const msLegend = msPeriods.map(ms => {
      const color = MS_COLORS[ms.name] || "#888";
      return `<span class="legend-item"><span class="legend-swatch" style="background:${color}"></span>${ms.name}</span>`;
    }).join("");

    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Roadmap",
        subtitle: `${formatDate(tlStart)} through ${formatDate(tlEnd)} · ${r.boulders.length} features across ${r.pods.length} pods · click a bar for details`,
        actions: `<a class="btn btn-ghost" href="../dashboard/roadmap.html" target="_blank">Open standalone ↗</a>`
      })}

      <div class="panel">
        <div class="panel-title">Feature Roadmap <span class="panel-subtitle">— M&Ms to Soft Launch</span></div>

        <div class="roadmap-legend">
          <span class="legend-label">MILESTONES:</span>
          ${msLegend}
        </div>
        <div class="roadmap-legend">
          <span class="legend-label">PODS:</span>
          ${podLegend}
          <span class="legend-item" style="margin-left: 12px;">
            <span class="legend-swatch" style="opacity:0.55; background: #888; border: 1px dashed #aaa;"></span>
            Future (unstarted)
          </span>
        </div>

        <div class="roadmap-container" id="roadmap-container">
          <div class="roadmap-grid">
            <div class="roadmap-header">
              <div class="roadmap-label-col">Pod</div>
              <div class="roadmap-timeline-area">
                <div class="roadmap-months">${monthCols}</div>
              </div>
            </div>
            <div class="milestone-band-row">
              <div class="roadmap-label-col" style="font-size: 11px; display: flex; align-items: center;">Milestone</div>
              <div class="milestone-band-track">${msBands}</div>
            </div>
            <div class="roadmap-body">
              ${podRows}
            </div>
          </div>
        </div>
      </div>
    `;

    // Wire up click-to-pin popover (single delegated listener on the container)
    const container = document.getElementById("roadmap-container");
    container.addEventListener("click", (e) => {
      const bar = e.target.closest(".boulder-bar");
      if (!bar) return;
      e.stopPropagation();
      const idx = +bar.dataset.boulderIdx;
      const boulder = r.boulders[idx];
      if (!boulder) return;
      if (activeBoulderIdx === idx) {
        closeBoulderPopover();
        return;
      }
      openBoulderPopover(bar, boulder, idx);
    });
  }

  // -- Roadmap render helpers --
  function daysBetween(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  }
  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function generateMonths(startDate, endDate) {
    const months = [];
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");
    let current = new Date(start.getFullYear(), start.getMonth(), 1);
    while (current <= end) {
      const y = current.getFullYear();
      const m = current.getMonth();
      const mStart = `${y}-${String(m + 1).padStart(2, "0")}-01`;
      const lastDay = new Date(y, m + 1, 0);
      const mEnd = `${lastDay.getFullYear()}-${String(lastDay.getMonth() + 1).padStart(2, "0")}-${String(lastDay.getDate()).padStart(2, "0")}`;
      const label = current.toLocaleDateString("en-US", { month: "short" }) + " '" + String(y).slice(2);
      months.push({ label, start: mStart, end: mEnd });
      current.setMonth(current.getMonth() + 1);
    }
    return months;
  }
  function buildMilestonePeriods(milestones, tlStart, tlEnd) {
    const periods = [];
    for (let i = 0; i < milestones.length; i++) {
      const msStart = i === 0 ? tlStart : milestones[i - 1].date;
      const msEnd = milestones[i].date;
      periods.push({ name: milestones[i].name, start: msStart, end: msEnd });
    }
    return periods;
  }
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // ────────────────────────────────────────────────────────────────────────────
  // Boulder popover (click to pin, outside-click / Escape to close)
  // ────────────────────────────────────────────────────────────────────────────
  const CLICKUP_TEAM_ID = "36181078";
  let activePopover = null;
  let activeBoulderIdx = null;
  let activeAnchor = null;
  let activeFetchToken = 0;

  // Map boulder status vocabulary ("active", "future") onto the .pill-* classes
  // declared in index.html ("in_progress", "not_started", etc.).
  const BOULDER_STATUS_PILL = {
    active: { cls: "in_progress", label: "Active" },
    future: { cls: "not_started", label: "Future" },
    parked: { cls: "parked",      label: "Parked" },
    blocked:{ cls: "blocked",     label: "Blocked" },
    done:   { cls: "complete",    label: "Done" }
  };

  function openBoulderPopover(barEl, boulder, idx) {
    closeBoulderPopover();

    const podColor = POD_COLORS_HEX[boulder.pod] || "#888";
    const pill = BOULDER_STATUS_PILL[boulder.status] || { cls: "pending", label: boulder.status || "Unknown" };
    const pop = document.createElement("div");
    pop.className = "boulder-popover";
    pop.setAttribute("role", "dialog");
    pop.innerHTML = `
      <button class="pop-close" data-action="pop-close" aria-label="Close">×</button>
      <div class="pop-title">${escapeHtml(boulder.name)}</div>
      <div class="pop-meta">
        <span>${escapeHtml(formatDate(boulder.start))} → ${escapeHtml(formatDate(boulder.end))}</span>
        <span class="pod-tag pod-tag-sm ${podClass(boulder.pod)}" style="background:${podColor};">${escapeHtml(boulder.pod)}</span>
        <span class="pill pill-${pill.cls}">${escapeHtml(pill.label)}</span>
      </div>
      <div class="pop-summary">${escapeHtml(boulder.details || "No summary available.")}</div>
      <div class="pop-actions" data-clickup-slot>
        <span class="pop-link-loading">Looking up ClickUp ticket…</span>
      </div>
      <div class="pop-arrow"></div>
    `;
    document.body.appendChild(pop);

    activePopover = pop;
    activeBoulderIdx = idx;
    activeAnchor = barEl;
    barEl.classList.add("is-active");

    positionPopover(pop, barEl);

    // Close interactions
    pop.addEventListener("click", (e) => {
      const a = e.target.closest("[data-action='pop-close']");
      if (a) closeBoulderPopover();
    });
    setTimeout(() => {
      document.addEventListener("click", outsideClickHandler, true);
      document.addEventListener("keydown", escKeyHandler, true);
      window.addEventListener("resize", repositionActivePopover);
      window.addEventListener("scroll", repositionActivePopover, true);
    }, 0);

    // Async ClickUp lookup
    activeFetchToken += 1;
    const myToken = activeFetchToken;
    fetchClickUpLink(boulder.name).then(result => {
      if (myToken !== activeFetchToken || !activePopover) return;
      const slot = activePopover.querySelector("[data-clickup-slot]");
      if (!slot) return;
      slot.innerHTML = renderClickUpSlot(result, boulder.name);
      // Reposition in case the content height changed (caption can wrap)
      repositionActivePopover();
    });
  }

  function closeBoulderPopover() {
    if (!activePopover) return;
    activePopover.remove();
    if (activeAnchor) activeAnchor.classList.remove("is-active");
    activePopover = null;
    activeBoulderIdx = null;
    activeAnchor = null;
    document.removeEventListener("click", outsideClickHandler, true);
    document.removeEventListener("keydown", escKeyHandler, true);
    window.removeEventListener("resize", repositionActivePopover);
    window.removeEventListener("scroll", repositionActivePopover, true);
  }

  function outsideClickHandler(e) {
    if (!activePopover) return;
    if (activePopover.contains(e.target)) return;
    if (activeAnchor && activeAnchor.contains(e.target)) return;
    closeBoulderPopover();
  }
  function escKeyHandler(e) {
    if (e.key === "Escape") closeBoulderPopover();
  }
  function repositionActivePopover() {
    if (activePopover && activeAnchor) positionPopover(activePopover, activeAnchor);
  }

  function positionPopover(pop, anchor) {
    const rect = anchor.getBoundingClientRect();
    const popW = pop.offsetWidth || 340;
    const popH = pop.offsetHeight || 180;
    const margin = 8;
    const arrow = pop.querySelector(".pop-arrow");

    // Default: place above the bar; flip below if not enough room.
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const placeBelow = spaceAbove < popH + margin && spaceBelow > spaceAbove;

    let top = placeBelow ? rect.bottom + margin : rect.top - popH - margin;
    // Clamp vertically inside viewport
    top = Math.max(margin, Math.min(top, window.innerHeight - popH - margin));

    // Horizontal: try to center over the bar, clamp to viewport
    const barCenter = rect.left + rect.width / 2;
    let left = barCenter - popW / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - popW - margin));

    pop.style.top = `${Math.round(top)}px`;
    pop.style.left = `${Math.round(left)}px`;
    pop.classList.toggle("flip-down", placeBelow);

    // Arrow horizontal position (relative to popover)
    if (arrow) {
      const arrowLeft = Math.max(12, Math.min(popW - 24, barCenter - left - 6));
      arrow.style.left = `${Math.round(arrowLeft)}px`;
    }
  }

  async function fetchClickUpLink(name) {
    try {
      const url = `/api/clickup-search?name=${encodeURIComponent(name)}&limit=3`;
      const r = await fetch(url, { headers: { "accept": "application/json" } });
      if (!r.ok) return { ok: false, status: r.status };
      const data = await r.json();
      return { ok: true, data };
    } catch (e) {
      return { ok: false, error: String(e) };
    }
  }

  function renderClickUpSlot(result, name) {
    const searchUrl = `https://app.clickup.com/${CLICKUP_TEAM_ID}/search?q=${encodeURIComponent(name)}`;
    if (result && result.ok && result.data && Array.isArray(result.data.matches) && result.data.matches.length > 0) {
      const top = result.data.matches[0];
      const more = result.data.matches.length - 1;
      const caption = [top.list_name, top.status].filter(Boolean).map(escapeHtml).join(" · ");
      return `
        <a class="btn btn-primary" href="${escapeAttr(top.url)}" target="_blank" rel="noopener">Open in ClickUp ↗</a>
        ${caption ? `<span class="pop-link-caption">${caption}</span>` : ""}
        ${more > 0 ? `<a class="pop-link-caption" href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener">+${more} more match${more === 1 ? "" : "es"} ↗</a>` : ""}
      `;
    }
    // Distinguish "function ran fine, no name matches" from "function call
    // failed" so the user knows whether to fix a boulder name or check the
    // function's deploy state.
    const okButEmpty = result && result.ok && result.data &&
      Array.isArray(result.data.matches) && result.data.matches.length === 0;
    const errorLabel = okButEmpty ? "no ClickUp matches" : "live lookup unavailable";
    return `
      <a class="btn btn-ghost" href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener">Search "${escapeHtml(name)}" in ClickUp ↗</a>
      <span class="pop-link-error">${errorLabel}</span>
    `;
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Sprint Plan (hybrid native — replaces the iframe to dashboard/sprint.html)
  //   Native: header + Build Target + Producer-Grouped Goals + Validation/Focus
  //   Iframe: per-pod, cross-pod, capacity, ticket coverage, checkpoint coverage,
  //           risks (sprint.html with ?embed=1&hideHeader=1&hideOverview=1)
  // ────────────────────────────────────────────────────────────────────────────
  const POD_TO_PRODUCER_FALLBACK = {
    "Empire": "Brann Livesay",
    "Metagame": "Tim Williams",
    "Social Dynamics": "Tim Williams",
    "Battle": "Thorben Novais",
    "Dozer": "Thorben Novais"
  };
  // Fixed column order: Brann (Empire), Tim (Metagame + SD), Thorben (Battle + Dozer)
  const PRODUCER_COL_ORDER = ["Brann Livesay", "Tim Williams", "Thorben Novais"];

  let activeSprintNumber = null;
  const sprintDataCache = {}; // sprint number → SPRINT_DATA snapshot

  function renderSprintPlan() {
    if (typeof SPRINT_MANIFEST === "undefined" || !Array.isArray(SPRINT_MANIFEST) || SPRINT_MANIFEST.length === 0) {
      document.getElementById("content").innerHTML = `
        ${pageHeader({ title: "Sprint Plan", subtitle: "No sprint manifest loaded" })}
        <div class="panel"><div class="small">SPRINT_MANIFEST not found. Run /sprint-plan or check that <code>../dashboard/sprint_manifest.js</code> is loading.</div></div>
      `;
      return;
    }

    if (activeSprintNumber == null) {
      activeSprintNumber = (typeof SPRINT_CURRENT !== "undefined") ? SPRINT_CURRENT : SPRINT_MANIFEST[SPRINT_MANIFEST.length - 1].number;
    }

    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "Sprint Plan", subtitle: "Loading…" })}
      <div class="panel"><div class="small">Loading sprint data…</div></div>
    `;

    loadSprintData(activeSprintNumber).then(data => {
      if (!data) {
        document.getElementById("content").innerHTML = `
          ${pageHeader({ title: "Sprint Plan", subtitle: `Sprint ${activeSprintNumber}` })}
          <div class="panel"><div class="small">Failed to load <code>SPRINT_DATA</code> for sprint ${activeSprintNumber}.</div></div>
        `;
        return;
      }
      renderSprintPlanContent(data);
    });
  }

  // Dynamically load a sprint's data file (sprint_NN.js sets a global SPRINT_DATA).
  // We snapshot the global on each load and cache by sprint number so switching is fast.
  function loadSprintData(sprintNumber) {
    if (sprintDataCache[sprintNumber]) {
      return Promise.resolve(sprintDataCache[sprintNumber]);
    }
    const entry = SPRINT_MANIFEST.find(s => s.number === sprintNumber);
    if (!entry) return Promise.resolve(null);
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = `../dashboard/${entry.file}?v=${Date.now()}`;
      script.onload = () => {
        if (typeof SPRINT_DATA !== "undefined") {
          sprintDataCache[sprintNumber] = SPRINT_DATA;
          resolve(SPRINT_DATA);
        } else {
          resolve(null);
        }
        script.remove();
      };
      script.onerror = () => { resolve(null); script.remove(); };
      document.head.appendChild(script);
    });
  }

  function switchSprint(num) {
    activeSprintNumber = num;
    renderSprintPlan();
  }

  function renderSprintPlanContent(d) {
    const m = d.meta || {};
    const s = d.summary || {};
    const podToProducer = buildPodToProducerMap(d);

    const dropdownOptions = SPRINT_MANIFEST.slice().sort((a, b) => b.number - a.number).map(sp => {
      const sel = sp.number === activeSprintNumber ? " selected" : "";
      const cur = (typeof SPRINT_CURRENT !== "undefined" && sp.number === SPRINT_CURRENT) ? " (current)" : "";
      return `<option value="${sp.number}"${sel}>S${sp.number}: ${escapeHtml(sp.name)}${cur}</option>`;
    }).join("");

    const msPct = (m.milestone_sprint && m.milestone_sprint_total)
      ? Math.round((m.milestone_sprint / m.milestone_sprint_total) * 100)
      : 0;
    const holidaysHtml = (m.holidays && m.holidays.length)
      ? `<ul class="sprint-holidays">${m.holidays.map(h => `<li>${escapeHtml(h)}</li>`).join("")}</ul>`
      : "";

    const headerCard = `
      <div class="sprint-header-card">
        <div class="sprint-header-left">
          <h1 class="sprint-h1">Sprint ${m.sprint_number}: ${escapeHtml(m.sprint_name || "")}</h1>
          <div class="sprint-dates">${escapeHtml(formatDate(m.start_date))} → ${escapeHtml(formatDate(m.end_date))} · ${m.working_days || "?"} working days</div>
          ${holidaysHtml}
        </div>
        <div class="sprint-header-right">
          <div class="sprint-milestone-name">${escapeHtml(m.milestone || "")}</div>
          <div class="sprint-milestone-bar"><div class="sprint-milestone-bar-fill" style="width:${msPct}%"></div></div>
          <div class="sprint-milestone-meta">Sprint ${m.milestone_sprint || "?"} of ${m.milestone_sprint_total || "?"}</div>
          <div class="sprint-controls">
            <span class="pill pill-${m.mode === "Preview" ? "pending" : "complete"}">${escapeHtml(m.mode || "")}</span>
            <select id="sprint-switcher" aria-label="Switch sprint">${dropdownOptions}</select>
          </div>
        </div>
      </div>
    `;

    const buildTargetHtml = renderBuildTarget(s.build_target);
    const goalsHtml = renderProducerGroupedGoals(s.checkpoint, podToProducer);
    const overviewTwoCol = renderValidationAndFocus(s);

    const embedSrc = `../dashboard/sprint.html?embed=1&hideHeader=1&hideOverview=1&sprint=${activeSprintNumber}`;

    document.getElementById("content").innerHTML = `
      ${headerCard}
      ${buildTargetHtml}
      ${goalsHtml}
      ${overviewTwoCol}
      <div class="info-banner">Per-pod, cross-pod, capacity, ClickUp coverage, checkpoint coverage, and risks panels still embedded from <code>sprint.html</code> below — porting incrementally. Open standalone for the full original layout: <a href="../dashboard/sprint.html" target="_blank" rel="noopener">sprint.html ↗</a></div>
      <div class="embed-host" data-embed-src="../dashboard/sprint.html">
        <div class="embed-loading">Loading remaining panels…</div>
        <iframe src="${embedSrc}" title="Sprint Plan (rest)" onload="this.previousElementSibling && this.previousElementSibling.remove();"></iframe>
      </div>
    `;

    const sw = document.getElementById("sprint-switcher");
    if (sw) sw.addEventListener("change", e => switchSprint(+e.target.value));
  }

  function buildPodToProducerMap(d) {
    const map = Object.assign({}, POD_TO_PRODUCER_FALLBACK);
    if (Array.isArray(d.pods)) {
      for (const p of d.pods) {
        if (p && p.name && p.producer) map[p.name] = p.producer;
      }
    }
    return map;
  }

  function renderBuildTarget(bt) {
    if (!bt || !bt.headline) {
      return `<div class="info-banner">No build target authored for this sprint yet — run <code>/sprint-plan</code> to populate <code>summary.build_target</code>.</div>`;
    }
    return `
      <div class="build-target-card">
        <div class="build-target-eyebrow">Build Target — End of Sprint</div>
        <div class="build-target-headline">${escapeHtml(bt.headline)}</div>
        <div class="build-target-stats">
          ${renderBtChip(bt.territories, "Territories")}
          ${renderBtChip(bt.new_features, "New Features")}
        </div>
      </div>
    `;
  }

  function renderBtChip(field, label) {
    if (!field) return "";
    const count = (field.count != null) ? field.count : "—";
    return `
      <div class="bt-chip">
        <div class="bt-chip-row">
          <span class="bt-chip-count">${escapeHtml(String(count))}</span>
          <span class="bt-chip-label">${escapeHtml(label)}</span>
        </div>
        ${field.note ? `<div class="bt-chip-note">${escapeHtml(field.note)}</div>` : ""}
      </div>
    `;
  }

  function renderProducerGroupedGoals(checkpoint, podToProducer) {
    if (!checkpoint || !Array.isArray(checkpoint.goals) || checkpoint.goals.length === 0) {
      return "";
    }
    const buckets = bucketGoalsByProducer(checkpoint.goals, podToProducer);
    const seenProducers = Object.keys(buckets);
    const orderedProducers = PRODUCER_COL_ORDER.filter(p => buckets[p])
      .concat(seenProducers.filter(p => !PRODUCER_COL_ORDER.includes(p)).sort());

    const POD_ORDER = ["Empire", "Metagame", "Social Dynamics", "Battle", "Dozer"];
    const podSort = (a, b) => {
      const ai = POD_ORDER.indexOf(a), bi = POD_ORDER.indexOf(b);
      if (ai === -1 && bi === -1) return a.localeCompare(b);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    };

    const cols = orderedProducers.map(producer => {
      const bucket = buckets[producer];
      const pods = Object.keys(bucket.pods).sort(podSort);
      const podBlocks = pods.map(pod => {
        const items = bucket.pods[pod].map(g => `<li>${escapeHtml(g)}</li>`).join("");
        return `
          <div class="goal-pod-block">
            <div class="goal-pod-block-header">
              <span class="pod-tag pod-tag-sm ${podClass(pod)}">${escapeHtml(pod)}</span>
            </div>
            <ul class="goal-pod-list">${items}</ul>
          </div>
        `;
      }).join("");
      const podsLabel = pods.join(" + ");
      return `
        <div class="goal-producer-col">
          <div class="goal-producer-name"><strong>${escapeHtml(producer)}</strong> · ${escapeHtml(podsLabel)}</div>
          ${podBlocks}
        </div>
      `;
    }).join("");

    return `
      <div class="panel">
        <div class="panel-title">${escapeHtml(checkpoint.name || "Checkpoint Goals")}</div>
        <div class="goals-3col">${cols}</div>
      </div>
    `;
  }

  function bucketGoalsByProducer(goals, podToProducer) {
    const bucket = {};
    for (const g of goals) {
      const text = typeof g === "string" ? g : g.text;
      const m = text.match(/^([^:]+):\s*(.+)$/);
      const pod = m ? m[1].trim() : "Cross-pod";
      const goalText = m ? m[2].trim() : text;
      const producer = podToProducer[pod] || "Cross-pod / TBD";
      if (!bucket[producer]) bucket[producer] = { producer, pods: {} };
      if (!bucket[producer].pods[pod]) bucket[producer].pods[pod] = [];
      bucket[producer].pods[pod].push(goalText);
    }
    return bucket;
  }

  function renderValidationAndFocus(s) {
    const validation = (s.validation_in_flight || []).map(v => {
      if (typeof v === "string") {
        return `<div class="sprint-overview-item"><span class="shq-badge">${escapeHtml(v)}</span><span></span><span></span></div>`;
      }
      const pods = (v.pods || []).map(p => `<span class="pod-tag pod-tag-sm ${podClass(p)}">${escapeHtml(p)}</span>`).join(" ");
      return `
        <div class="sprint-overview-item">
          <span class="shq-badge">${escapeHtml(v.id || "")}</span>
          <span>${escapeHtml(v.label || "")}</span>
          <span>${pods}</span>
        </div>`;
    }).join("");
    const focus = (s.active_focus || []).map(f => {
      const text = typeof f === "string" ? f : (f.text || "");
      const shqs = (typeof f === "object" && f.shqs ? f.shqs : []).map(x => `<span class="shq-badge">${escapeHtml(x)}</span>`).join(" ");
      const pods = (typeof f === "object" && f.pods ? f.pods : []).map(p => `<span class="pod-tag pod-tag-sm ${podClass(p)}">${escapeHtml(p)}</span>`).join(" ");
      return `
        <div class="sprint-overview-item">
          <span></span>
          <span>${escapeHtml(text)}</span>
          <span>${shqs} ${pods}</span>
        </div>`;
    }).join("");
    if (!validation && !focus) return "";
    return `
      <div class="panel">
        <div class="sprint-overview-twocol">
          <div class="sprint-overview-col">
            <h3>Validation In Flight</h3>
            ${validation || `<div class="small">No active SHQs listed.</div>`}
          </div>
          <div class="sprint-overview-col">
            <h3>Active Focus This Sprint</h3>
            ${focus || `<div class="small">No active focus items listed.</div>`}
          </div>
        </div>
      </div>
    `;
  }

  function renderCapacity() {
    const c = CAPACITY_DATA || {};
    const storageKey = "capacity";
    // Apply local edits over the baked data
    const overlay = lsGet(storageKey);
    const data = overlay ? deepMerge(c, overlay) : c;

    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Capacity",
        subtitle: `Source: <code>${c.source || "planning/capacity.md"}</code>. ${overlay ? "<strong>Showing local edits.</strong>" : ""}`,
        actions: editControls(storageKey)
      })}

      <div class="info-banner">
        Edits made here are stored in your browser only (localStorage). The next session will wire Save through Cloudflare Pages Functions to commit back to <code>planning/capacity.md</code> via the GitHub App. See <code>WALKTHROUGH.md</code>.
      </div>

      <div class="panel">
        <div class="panel-title">Pod Leadership</div>
        <table>
          <thead><tr><th>Pod</th><th>Pod Lead</th><th>Producer</th><th>Eng Lead</th><th>Design Lead</th></tr></thead>
          <tbody>
            ${(data.pod_leadership || []).map((p, i) => `
              <tr>
                <td><span class="pod-tag ${podClass(p.pod)}">${p.pod}</span></td>
                <td><span class="editable" data-path="pod_leadership.${i}.pod_lead">${p.pod_lead}</span></td>
                <td><span class="editable" data-path="pod_leadership.${i}.producer">${p.producer}</span></td>
                <td><span class="editable" data-path="pod_leadership.${i}.eng_lead">${p.eng_lead}</span></td>
                <td><span class="editable" data-path="pod_leadership.${i}.design_lead">${p.design_lead}</span></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>

      ${(data.disciplines || []).map((disc, di) => `
        <div class="panel">
          <div class="panel-title">${disc.name}</div>
          <table>
            <thead><tr><th>Name</th><th>Pod</th><th>Role / notes</th></tr></thead>
            <tbody>
              ${(disc.members || []).map((m, mi) => `
                <tr>
                  <td><span class="editable" data-path="disciplines.${di}.members.${mi}.name">${m.name}</span></td>
                  <td><span class="editable" data-path="disciplines.${di}.members.${mi}.pod">${m.pod || ""}</span></td>
                  <td><span class="editable" data-path="disciplines.${di}.members.${mi}.role">${m.role || ""}</span></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      `).join("")}
    `;

    attachEditHandlers((key) => savePathBasedEdits(key, data));
  }

  function renderPriorities(podId) {
    const all = (PRIORITIES_DATA || {}).pods || [];
    const baked = all.find(p => p.id === podId);
    if (!baked) {
      document.getElementById("content").innerHTML = pageHeader({ title: "Pod not found" });
      return;
    }
    const storageKey = `priorities.${podId}`;
    const overlay = lsGet(storageKey);
    const pod = overlay ? deepMerge(baked, overlay) : baked;

    const statusOptions = ["not_started", "in_progress", "complete", "blocked", "parked"];
    const milestoneStatusOptions = ["not_started", "in_progress", "complete", "at_risk", "blocked"];

    const techDebtBlock = pod.tech_debt ? `
      <div class="panel">
        <div class="panel-title">
          Tech Debt Backlog
          <span class="panel-subtitle">Source: <code>${pod.tech_debt.source}</code></span>
        </div>
        <div class="small" style="margin-bottom:10px;">${pod.tech_debt.note || ""}</div>
        <table>
          <thead><tr><th>ID</th><th>Title</th><th>Status</th><th>Note</th></tr></thead>
          <tbody>
            ${(pod.tech_debt.items || []).map((td, ti) => `
              <tr>
                <td><code>${td.id}</code></td>
                <td><span class="editable" data-path="tech_debt.items.${ti}.title">${td.title}</span></td>
                <td><span class="pill pill-${td.status}">${td.status}</span></td>
                <td><span class="editable" data-path="tech_debt.items.${ti}.note">${td.note || ""}</span></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>` : "";

    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: pod.name,
        subtitle: `<span class="pod-tag ${podClass(pod.name)}">${pod.name}</span>
                   &nbsp; Lead: <strong>${pod.pod_lead}</strong> · Producer: <strong>${pod.producer}</strong> · Eng Lead: <strong>${pod.eng_lead}</strong>
                   <br><span class="small">Source: <code>${pod.source_features}</code> + <code>${pod.source_milestone}</code> ${overlay ? "· <strong>local edits applied</strong>" : ""}</span>`,
        actions: editControls(storageKey)
      })}

      <div class="info-banner">
        Edits made here are saved to your browser only. In a follow-up session Save will commit back to the underlying <code>.md</code> files via Cloudflare Pages Functions + GitHub App. See <code>WALKTHROUGH.md</code>.
      </div>

      <div class="panel">
        <div class="panel-title">
          Current Milestone Summary
          <span class="panel-subtitle">${(PRIORITIES_DATA || {}).current_milestone || ""}</span>
        </div>
        <div style="margin-bottom:10px;">
          Status:
          <span class="view-only pill pill-${pod.milestone_status}">${pod.milestone_status.replace(/_/g, " ")}</span>
          <select class="editable-select edit-only" data-path="milestone_status" disabled>
            ${milestoneStatusOptions.map(s => `<option value="${s}" ${s === pod.milestone_status ? "selected" : ""}>${s.replace(/_/g, " ")}</option>`).join("")}
          </select>
        </div>
        <div class="editable" data-path="milestone_summary" style="white-space:pre-wrap;">${pod.milestone_summary}</div>
        <div style="margin-top:14px;">
          <strong style="font-size:12px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.5px;">Checkpoints</strong>
          <table style="margin-top:6px;">
            <thead><tr><th>Checkpoint</th><th>Status</th><th>Note</th></tr></thead>
            <tbody>
              ${(pod.checkpoints || []).map((cp, ci) => `
                <tr>
                  <td><span class="editable" data-path="checkpoints.${ci}.name">${cp.name}</span></td>
                  <td>
                    <span class="view-only pill pill-${cp.status}">${cp.status.replace(/_/g, " ")}</span>
                    <select class="editable-select edit-only" data-path="checkpoints.${ci}.status" disabled>
                      ${statusOptions.map(s => `<option value="${s}" ${s === cp.status ? "selected" : ""}>${s.replace(/_/g, " ")}</option>`).join("")}
                    </select>
                  </td>
                  <td><span class="editable" data-path="checkpoints.${ci}.note">${cp.note}</span></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">
          Features (ranked)
          <span class="panel-subtitle">From <code>${pod.source_features}</code></span>
        </div>
        <div class="small" style="margin-bottom:8px;">In edit mode: rename features, change status, edit notes. Reordering UI is a TODO — for now, change rank values manually.</div>
        <table>
          <thead><tr><th style="width:50px;">Rank</th><th>Feature</th><th>Milestone</th><th>Sprints</th><th>Status</th><th>Note</th></tr></thead>
          <tbody>
            ${(pod.features || []).map((f, fi) => `
              <tr>
                <td><span class="editable" data-path="features.${fi}.rank">${f.rank}</span></td>
                <td><span class="editable" data-path="features.${fi}.name" style="color:var(--text-bright);font-weight:500;">${f.name}</span></td>
                <td><span class="editable" data-path="features.${fi}.milestone">${f.milestone}</span></td>
                <td><span class="editable" data-path="features.${fi}.sprints">${f.sprints}</span></td>
                <td>
                  <span class="view-only pill pill-${f.status}">${f.status.replace(/_/g, " ")}</span>
                  <select class="editable-select edit-only" data-path="features.${fi}.status" disabled>
                    ${statusOptions.map(s => `<option value="${s}" ${s === f.status ? "selected" : ""}>${s.replace(/_/g, " ")}</option>`).join("")}
                  </select>
                </td>
                <td><span class="editable" data-path="features.${fi}.note">${f.note || ""}</span></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>

      ${techDebtBlock}
    `;

    attachEditHandlers((key) => savePathBasedEdits(key, pod));
  }

  function renderBrainHealth() {
    const d = DASHBOARD_DATA || {};
    const arts = d.artifacts || [];
    const bh = BRAIN_HEALTH_DATA || {};
    const today = new Date();

    const artRows = arts.map(a => {
      let status = "fresh", days = null;
      if (a.last_updated) {
        days = Math.floor((today - new Date(a.last_updated)) / (1000 * 60 * 60 * 24));
        if (a.stale_after_days && days > a.stale_after_days) status = "stale";
        else if (a.stale_after_days && days > a.stale_after_days * 0.7) status = "warn";
      }
      return `
        <tr>
          <td><code>${a.file}</code></td>
          <td>${a.label}</td>
          <td>${a.last_updated || "—"}</td>
          <td>${days !== null ? days + "d" : "—"}</td>
          <td>${a.stale_after_days != null ? a.stale_after_days + "d" : "—"}</td>
          <td><span class="pill pill-${status === "fresh" ? "complete" : status === "warn" ? "pending" : "blocked"}">${status}</span></td>
          <td><code>${a.suggested_action}</code></td>
        </tr>`;
    }).join("");

    document.getElementById("content").innerHTML = `
      ${pageHeader({
        title: "Brain Health",
        subtitle: "Staleness, file size, and cross-file consistency checks for the planning brain."
      })}

      <div class="panel">
        <div class="panel-title">Staleness</div>
        <table>
          <thead><tr><th>File</th><th>Label</th><th>Last Updated</th><th>Age</th><th>Threshold</th><th>Status</th><th>Suggested Action</th></tr></thead>
          <tbody>${artRows}</tbody>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title">
          File-size warnings
          <span class="panel-subtitle">LLM context cost grows with file size — flag the heavy hitters</span>
        </div>
        ${(bh.size_warnings && bh.size_warnings.length)
          ? `<table><thead><tr><th>File</th><th>Lines</th><th>Severity</th><th>Note</th></tr></thead><tbody>${
            bh.size_warnings.map(w => `<tr><td><code>${w.file}</code></td><td>${w.lines}</td><td><span class="pill pill-${w.severity === "alert" ? "blocked" : "pending"}">${w.severity}</span></td><td>${w.note}</td></tr>`).join("")
          }</tbody></table>`
          : `<div class="small">No size warnings recorded yet. Wire this up in <code>/production-dashboard</code> by walking <code>planning/</code> and capturing line counts.</div>`}
      </div>

      <div class="panel">
        <div class="panel-title">Consistency checks</div>
        <div class="small" style="margin-bottom:10px;">${(bh.consistency || {}).note || ""}</div>
        <table>
          <thead><tr><th>Check</th><th>Status</th><th>Count</th></tr></thead>
          <tbody>
            ${((bh.consistency || {}).checks || []).map(c => `
              <tr>
                <td>${c.label}</td>
                <td><span class="pill pill-${c.status === "unchecked" ? "pending" : c.status === "ok" ? "complete" : "blocked"}">${c.status}</span></td>
                <td>${c.count != null ? c.count : "—"}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderHelpLinks() {
    const h = (HELP_DATA || {}).useful_links || { groups: [] };
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "Useful Links", subtitle: h.note })}
      ${h.groups.map(g => `
        <div class="panel">
          <div class="panel-title">${g.name}</div>
          <table>
            <thead><tr><th>Link</th><th>Description</th></tr></thead>
            <tbody>
              ${g.links.map(l => `
                <tr>
                  <td><a href="${l.url}" target="_blank" rel="noopener">${l.title} ↗</a></td>
                  <td>${l.desc || ""}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`).join("")}
    `;
  }

  function renderHelpSkills() {
    const h = (HELP_DATA || {}).skills || { groups: [] };
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "Skills List", subtitle: h.note })}
      ${h.groups.map(g => `
        <div class="panel">
          <div class="panel-title">${g.name}</div>
          <table>
            <thead><tr><th style="width:240px;">Command</th><th>What it does</th><th>Notes</th></tr></thead>
            <tbody>
              ${g.items.map(it => `
                <tr>
                  <td><code>${it.cmd}</code></td>
                  <td>${it.desc}</td>
                  <td class="small">${it.notes || ""}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`).join("")}
    `;
  }

  function renderHelpAi() {
    const h = (HELP_DATA || {}).ai_help || { sections: [] };
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "General AI Help", subtitle: h.note })}
      ${h.sections.map(s => `
        <div class="panel">
          <div class="panel-title">${s.title}</div>
          <ul style="padding-left:20px;line-height:1.7;">
            ${s.items.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>`).join("")}
    `;
  }

  function renderGlossary() {
    const h = (HELP_DATA || {}).glossary || [];
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "Glossary", subtitle: "Acronyms and shorthand used across the brain" })}
      <div class="panel">
        <table>
          <thead><tr><th style="width:160px;">Term</th><th>Definition</th></tr></thead>
          <tbody>
            ${h.map(g => `<tr><td><span class="glossary-term">${g.term}</span></td><td>${g.def}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderComingSoon(title, blurb) {
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title })}
      <div class="panel">
        <div class="coming-soon">
          <h2>Coming soon</h2>
          <p>${blurb}</p>
          <p class="small">Tracked in <code>WALKTHROUGH.md</code> as a follow-up.</p>
        </div>
      </div>
    `;
  }

  function render404(hash) {
    document.getElementById("content").innerHTML = `
      ${pageHeader({ title: "Not found" })}
      <div class="panel">
        <p>No route handler for <code>${hash}</code>.</p>
        <p><a href="#/dashboard">Back to Home</a></p>
      </div>
    `;
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Edit save: walk all .editable / .editable-select fields and stash by data-path
  // ────────────────────────────────────────────────────────────────────────────
  function savePathBasedEdits(storageKey, baseData) {
    const overlay = {};
    document.querySelectorAll("[data-path]").forEach(el => {
      const path = el.dataset.path;
      let val;
      if (el.tagName === "SELECT" || el.tagName === "INPUT") {
        val = el.value;
      } else {
        val = (el.innerText || "").trim();
      }
      setPath(overlay, path, val);
    });
    lsSet(storageKey, overlay);
    return true;
  }

  function setPath(obj, path, value) {
    const keys = path.split(".");
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      const nextK = keys[i + 1];
      const isArrayIdx = /^\d+$/.test(nextK);
      if (cur[k] == null) cur[k] = isArrayIdx ? [] : {};
      cur = cur[k];
    }
    cur[keys[keys.length - 1]] = value;
  }

  function deepMerge(target, source) {
    if (Array.isArray(source)) {
      // Merge by index: take target as base, overlay items from source.
      const out = Array.isArray(target) ? target.slice() : [];
      source.forEach((v, i) => {
        if (v && typeof v === "object" && !Array.isArray(v) && out[i] && typeof out[i] === "object") {
          out[i] = deepMerge(out[i], v);
        } else if (v !== undefined) {
          out[i] = v;
        }
      });
      return out;
    }
    if (source && typeof source === "object") {
      const out = Object.assign({}, target);
      Object.keys(source).forEach(k => {
        out[k] = (k in target) ? deepMerge(target[k], source[k]) : source[k];
      });
      return out;
    }
    return source !== undefined ? source : target;
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Search (lightweight, in-memory across nav + features + glossary + skills)
  // ────────────────────────────────────────────────────────────────────────────
  function buildSearchIndex() {
    const idx = [];
    NAV.forEach(section => {
      section.links.forEach(link => {
        idx.push({ section: section.title, title: link.label, route: link.route });
      });
    });
    const pri = (PRIORITIES_DATA || {}).pods || [];
    pri.forEach(p => {
      (p.features || []).forEach(f => {
        idx.push({ section: `Priorities · ${p.name}`, title: f.name, route: `#/priorities/${p.id}` });
      });
    });
    const v = (VALIDATION_DATA || {}).hypotheses || [];
    v.forEach(wh => {
      (wh.bhqs || []).forEach(bhq => {
        (bhq.shqs || []).forEach(shq => {
          idx.push({ section: `SHQ · ${wh.name}`, title: `${shq.id} — ${shq.question}`, route: "#/plans/validation" });
        });
      });
    });
    const f = (FILES_DATA || {}).sections || [];
    f.forEach(sec => {
      const all = [...(sec.files || []), ...((sec.subsections || []).flatMap(ss => ss.files || []))];
      all.forEach(file => {
        idx.push({ section: `File · ${sec.name}`, title: file.label || file.path, route: "#/health/brain", note: file.path });
      });
    });
    ((HELP_DATA || {}).glossary || []).forEach(g => {
      idx.push({ section: "Glossary", title: `${g.term} — ${g.def}`, route: "#/help/glossary" });
    });
    ((HELP_DATA || {}).skills || {}).groups?.forEach(g => {
      g.items.forEach(it => idx.push({ section: `Skill · ${g.name}`, title: `${it.cmd} — ${it.desc}`, route: "#/help/skills" }));
    });
    return idx;
  }

  let SEARCH_INDEX = [];
  function setupSearch() {
    SEARCH_INDEX = buildSearchIndex();
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    function update() {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.style.display = "none"; results.innerHTML = ""; return; }
      const matches = SEARCH_INDEX.filter(it =>
        it.title.toLowerCase().includes(q) || it.section.toLowerCase().includes(q)
      ).slice(0, 25);
      if (!matches.length) {
        results.innerHTML = `<div class="search-empty">No matches.</div>`;
      } else {
        results.innerHTML = matches.map((m, i) => `
          <div class="search-result ${i === 0 ? "active" : ""}" data-route="${m.route}">
            <div class="search-result-section">${m.section}</div>
            <div class="search-result-title">${m.title}</div>
          </div>`).join("");
      }
      results.style.display = "block";
    }

    input.addEventListener("input", update);
    input.addEventListener("keydown", e => {
      const items = Array.from(results.querySelectorAll(".search-result"));
      const activeIdx = items.findIndex(el => el.classList.contains("active"));
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (items.length) {
          if (activeIdx >= 0) items[activeIdx].classList.remove("active");
          items[Math.min(activeIdx + 1, items.length - 1)].classList.add("active");
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (items.length && activeIdx > 0) {
          items[activeIdx].classList.remove("active");
          items[activeIdx - 1].classList.add("active");
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const target = items[Math.max(activeIdx, 0)];
        if (target) {
          go(target.dataset.route);
          input.value = "";
          results.style.display = "none";
        }
      } else if (e.key === "Escape") {
        input.value = "";
        results.style.display = "none";
        input.blur();
      }
    });
    results.addEventListener("click", e => {
      const it = e.target.closest(".search-result");
      if (it) {
        go(it.dataset.route);
        input.value = "";
        results.style.display = "none";
      }
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".topbar-search")) results.style.display = "none";
    });
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== input && !e.target.matches("input,textarea,[contenteditable]")) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Boot
  // ────────────────────────────────────────────────────────────────────────────
  function boot() {
    renderSidebar();
    setupSearch();

    document.getElementById("hamburger").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });

    // Topbar meta line
    const tm = document.getElementById("topbar-meta");
    const d = DASHBOARD_DATA || {};
    if (d.generated_at) {
      tm.textContent = `Data: ${d.generated_at}`;
    }

    window.addEventListener("hashchange", route);

    // Auto-resize embedded iframes when they post their content height
    window.addEventListener("message", (e) => {
      if (!e.data || e.data.type !== "embed-height") return;
      const iframe = document.querySelector(".embed-host iframe");
      if (iframe) {
        // Add a small buffer so we don't introduce an inner scrollbar
        iframe.style.height = (e.data.height + 4) + "px";
      }
    });

    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
