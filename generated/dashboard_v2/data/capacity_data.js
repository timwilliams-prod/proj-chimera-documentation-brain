// generated/dashboard_v2/data/capacity_data.js
// Editable summary of planning/capacity.md.
// EDIT FLOW (v2 prototype): edits go to localStorage. Future: GitHub commit via Pages Functions.
//
// To regenerate: parse Pod Leadership Summary + discipline tables from planning/capacity.md.
// This is intentionally a denormalized snapshot — the source of truth is still capacity.md.

const CAPACITY_DATA = {
  generated_at: "2026-05-04",
  source: "planning/capacity.md",

  pod_leadership: [
    { pod: "Empire",          pod_lead: "Diana Vasilescu", producer: "Brann Livesay",   eng_lead: "Dan Dupuis",    design_lead: "Diana Vasilescu" },
    { pod: "Metagame",        pod_lead: "Leonard Perez",   producer: "Tim Williams",    eng_lead: "Dan Dupuis",    design_lead: "Leonard Perez" },
    { pod: "Battle",          pod_lead: "Lincoln Li",      producer: "Thorben Novais",  eng_lead: "Jota Oliveira", design_lead: "Lincoln Li" },
    { pod: "Social Dynamics", pod_lead: "Paul Flores",     producer: "Tim Williams",    eng_lead: "Derek Gallant", design_lead: "Paul Flores" },
    { pod: "Dozer",           pod_lead: "—",               producer: "—",               eng_lead: "Derek Gallant", design_lead: "—" }
  ],

  // High-level discipline rosters. Source of truth is planning/capacity.md.
  // Edit here for the at-a-glance view; commit changes back to capacity.md (future).
  disciplines: [
    {
      name: "Engineering",
      members: [
        { name: "Henrique De Lima", pod: "Empire",          role: "Sole client engineer" },
        { name: "Dan Dupuis",       pod: "Empire/Metagame", role: "Eng Lead (cross-pod)" },
        { name: "Jota Oliveira",    pod: "Battle",          role: "Eng Lead" },
        { name: "Derek Gallant",    pod: "Dozer/Social",    role: "Eng Lead" }
      ]
    },
    {
      name: "Design",
      members: [
        { name: "Diana Vasilescu", pod: "Empire",          role: "Pod & Design Lead" },
        { name: "Leonard Perez",   pod: "Metagame",        role: "Pod & Design Lead" },
        { name: "Lincoln Li",      pod: "Battle",          role: "Pod & Design Lead" },
        { name: "Paul Flores",     pod: "Social Dynamics", role: "Pod & Design Lead" },
        { name: "Jacob Siegel",    pod: "Empire",          role: "Map Content design" },
        { name: "Elise Cole",      pod: "Empire",          role: "Map Content design" }
      ]
    },
    {
      name: "UX",
      members: [
        { name: "Yura",  pod: "Empire", role: "On maternity leave from 5/11 — see WME continuity plan" }
      ]
    },
    {
      name: "Art (post Art Pod closure 2026-04-13)",
      members: [
        { name: "Kevin Griffith",      pod: "Cross-pod",        role: "Art Director" },
        { name: "Brendan Cheatham",    pod: "Cross-pod",        role: "Assoc. Art Director" },
        { name: "Guilherme Lascasas",  pod: "Empire",           role: "2D Env" },
        { name: "Thiago Saraiva",      pod: "Empire",           role: "Senior 3D" },
        { name: "Marcos Teles",        pod: "Empire",           role: "Tech Art" },
        { name: "Vinod Rams",          pod: "Battle",           role: "" },
        { name: "Ben Clair",           pod: "Battle",           role: "" },
        { name: "Felipe Chaves",       pod: "Battle",           role: "" },
        { name: "Tony Bonilla",        pod: "Battle",           role: "" },
        { name: "Vini Muniz",          pod: "Battle",           role: "" },
        { name: "Danny Oliveira",      pod: "Battle",           role: "VFX" },
        { name: "Alessandro Oliveira", pod: "Battle",           role: "VFX" },
        { name: "Pedro Sarraf",        pod: "Cross-pod / Battle CP3+", role: "Lead Tech Art" }
      ]
    },
    {
      name: "Audio",
      members: [
        { name: "Lawrence Steele", pod: "Cross-pod", role: "" }
      ]
    }
  ],

  ooo: {
    note: "Live OOO calendar lives in Google Calendar. Pull via /sprint-plan or production dashboard refresh.",
    calendar_id: "c_3992c42a3903831f4100bc114a0b4758274a26d5a31f749f5aaacc140caeddc7@group.calendar.google.com"
  }
};
