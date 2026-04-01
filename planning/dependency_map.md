# Dependency Map

Last Updated: 2026-04-01

## Purpose
Simple map of how pods and features overlap. Use this to identify impact radius of changes.

---

## Pod Dependencies

### Empire
**Depends On:**
- **Battle** — Battle provides battle IDs that Empire embeds in map content
- **Metagame** — Meta defines economy/rewards that Empire surfaces in map progression
- **Map Goals Handshake** — Shared Notion doc where Empire, Battle, and Meta align on map goals before implementation (see [Map Goals Handshake](#map-goals-handshake-empire--battle--metagame) below)

**Depended On By:**
- **Battle** — Empire's map context wraps Battle encounters
- **Metagame** — Empire's map journey is the primary surface for Meta progression/rewards

**Shared Resources:**
- Map Goals Notion document (shared with Battle, Metagame)

---

### Metagame
**Depends On:**
- **Battle** — Battle provides battle IDs that Meta references for reward hooks
- **Map Goals Handshake** — Must align on map goals before implementing economy/rewards (see [Map Goals Handshake](#map-goals-handshake-empire--battle--metagame) below)

**Depended On By:**
- **Empire** — Empire pulls in Meta's economy/rewards for map content
- **Battle** — Battle outcomes feed into Meta progression

**Shared Resources:**
- Map Goals Notion document (shared with Empire, Battle)

---

### Battle
**Depends On:**
- **Map Goals Handshake** — Must align on map goals before populating battle IDs (see [Map Goals Handshake](#map-goals-handshake-empire--battle--metagame) below)

**Depended On By:**
- **Empire** — Empire consumes Battle's battle ID list for map content
- **Metagame** — Meta consumes battle IDs for economy/reward hookups

**Shared Resources:**
- Map Goals Notion document (shared with Empire, Metagame)

---

### Social Dynamics
**Depends On:**
- **Dozer** — Server infrastructure for multiplayer features (see [Server-Dependent Features](#server-dependent-features))

**Depended On By:**
- [TBD — fill in as social integrations are defined]

**Shared Resources:**
- [TBD]

---

### Dozer
**Depends On:**
- No pod dependencies — Dozer is infrastructure/support

**Depended On By:**
- **All pods** — Any major pipeline, build, or environment issues require Dozer support (Randy & Garrett specifically, as the senior engineers most familiar with the build pipeline and deployed environments)
- **All server-dependent features** — See [Server-Dependent Features](#server-dependent-features) below

**Shared Resources:**
- Build pipeline
- Deployed environments (dev, staging, prod)
- Forge (central tech tool for game management and its UI)

---

## Cross-Cutting Coordination Patterns

### Map Goals Handshake (Empire / Battle / Metagame)

A three-pod coordination pattern for map content. A shared Notion document serves as the authoritative source for map goals.

**How it works:**
1. **Align** — All three pods review and agree on map goals in the shared Notion doc before any implementation begins
2. **Implement in parallel** — Once goals are locked, each pod works independently:
   - **Battle** defines and populates the list of battle IDs
   - **Metagame** designs the economy/rewards tied to those battles
   - **Empire** assembles the overall map experience and player journey
3. **Final QA** — Cross-pod QA pass at the end to verify integration

**Key rule:** After alignment, pods can implement in parallel without requiring ongoing communication/coordination — *unless the goals themselves need to be updated*. If goals change, all three pods must re-align before continuing.

**Risk:** If goals change mid-implementation, all three pods take rework. Keep goal changes to a minimum once aligned.

---

### Dozer Infrastructure Support

Randy & Garrett (Dozer) are the senior engineers most familiar with the build pipeline and deployed environments. Any major pipeline, build, or environmental issue across any pod should pull them in for support.

**Trigger:** Major (not minor) pipeline/build/environment issues
**Response:** Pull in Randy and/or Garrett to diagnose and support

---

### Server-Dependent Features

Any feature requiring a backend service — whether leveraging an existing service or building a new one — needs server development and/or integration work. This creates a dependency on Dozer/backend engineering capacity.

**Forge** is the central tech tool for managing the game and its UI. Several features below are Forge-integrated or Forge-adjacent.

| Feature | Notes |
|---------|-------|
| Leaderboards | Backend service + client integration |
| Matchmaking | Backend service + client integration |
| Shop | Backend service + Forge admin UI |
| Interstitials | Backend service for content delivery |
| Ad Monetization | Third-party SDK + backend integration |
| Live Events | Backend service + Forge admin UI |
| Admin Communications | Forge tool for in-game messaging |
| Push Notifications | Backend service + third-party integration |
| Battlepass | Backend service + Forge admin UI |
| Growthbook | Experiments front-end for Forge (AB testing) |
| Analytics | All analytics efforts require backend instrumentation |

**Impact:** Server engineering capacity is a shared bottleneck across these features. Scheduling should account for backend dev availability in `planning/capacity.md`.

---

## Critical Paths

### Path: Map Content Delivery
```
Map Goals Alignment (all 3 pods) → Battle (IDs) + Meta (rewards) + Empire (experience) [parallel] → Cross-pod QA
```
- **Risk Level**: Medium
- **Note**: The handshake is the gate. If goals slip or change, all three pods are blocked or reworking. Once past alignment, the parallel nature reduces calendar risk.

### Path: Server Feature Pipeline
```
Feature Design → Server/Backend Dev (Dozer capacity) → Client Integration → QA
```
- **Risk Level**: Medium
- **Note**: Multiple features compete for limited backend engineering time. Prioritization across the server-dependent feature list is critical.

---

## Update Guidelines

- Add new dependency when a pod starts consuming another's API
- Mark shared resources when two+ pods modify the same system
- Update critical paths when major features change flow
- Review this monthly in architecture sync
