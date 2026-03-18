# Dependency Map

Last Updated: 2026-03-18

## Purpose
Simple map of how pods and features overlap. Use this to identify impact radius of changes.

---

## Pod Dependencies

### Empire
**Depends On:**
- [TBD - fill in as integrations are defined]

**Depended On By:**
- [TBD]

**Shared Resources:**
- [TBD]

---

### Metagame
**Depends On:**
- [TBD]

**Depended On By:**
- [TBD]

**Shared Resources:**
- [TBD]

---

### Battle
**Depends On:**
- [TBD]

**Depended On By:**
- [TBD]

**Shared Resources:**
- [TBD]

---

### Social Dynamics
**Depends On:**
- [TBD]

**Depended On By:**
- [TBD]

**Shared Resources:**
- [TBD]

---

### Dozer
**Depends On:**
- [TBD]

**Depended On By:**
- [TBD]

**Shared Resources:**
- [TBD]

---

## Feature Cross-Cuts

### Cross-Cutting Features (affect multiple pods)

<!--
Use this template for each cross-cutting feature:

#### [Feature Name]
- **Pods Involved**: [list]
- **Owner**: [pod]
- **Integration Points**: [how pods connect]
- **Risk**: [what could go wrong]
-->

---

## Critical Paths

<!--
Use this template for critical paths:

### Path: [Name]
```
Pod A → Pod B → Pod C
```
- **Risk Level**: Low / Medium / High / Critical
- **Note**: [Why this path matters]
-->

---

## Update Guidelines

- Add new dependency when a pod starts consuming another's API
- Mark shared resources when two+ pods modify the same system
- Update critical paths when major features change flow
- Review this monthly in architecture sync
