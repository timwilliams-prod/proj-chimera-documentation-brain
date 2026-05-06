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
    "#/plans/roadmap":             () => renderEmbedded("Roadmap", "../dashboard/roadmap.html"),
    "#/plans/validation":          () => renderEmbedded("Validation Roadmap", "../dashboard/validation.html"),
    "#/plans/sprints":             () => renderEmbedded("Sprint Plans", "../dashboard/sprint.html", "Ported as-is from the existing dashboard. Dropdown bug + Next-label work tracked for a follow-up session."),
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
  // Pages
  // ────────────────────────────────────────────────────────────────────────────

  function renderHome() {
    const d = DASHBOARD_DATA || {};
    const m = d.milestone || {};
    const s = d.sprint || {};
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
