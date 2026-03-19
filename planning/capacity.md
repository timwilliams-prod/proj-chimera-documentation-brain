# Team Capacity

Last Updated: 2026-03-19
Current Milestone: Systems Validation (final sprint, ends 3/30)
Next Milestone: M&Ms (starts ~3/31, ends Jun 23, 2026)

> Staffing allocations by discipline and role across milestones.
> People move between pods - this file is the single view of where everyone is.
> For what features are prioritized, see `planning/pods/*_Plan.md`. For feature cost details, see `planning/features/*.md`.

---

## How to Read This File

- **Allocations are approximate** - sprint-level precision where known, ranges where not
- **Notes capture intent**, not commitments ("expected to support Dozer after M&Ms")
- Update this file when people move, join, or when milestone plans change
- Cross-reference with feature estimates in `planning/features/*.md` to check feasibility
- People marked with a risk icon have split responsibilities that create scheduling risk

---

## Leadership

| Person | Role | Notes |
|--------|------|-------|
| James Fielding | Game Director | |
| Holly Mellor | Executive Producer | |
| Kevin Griffith | Art Director | |
| Derek Gallant | Tech Director | |
| Hafiz Kassam | QA Lead | |

---

## Pod Leadership Summary

| Pod | Producer | Design Lead | Eng Lead | QA POC |
|-----|----------|-------------|----------|--------|
| Empire | Brann Livesay | Diana Vasilescu | Dan Dupuis | Laura Santana |
| Metagame | Tim Williams | Leonard Perez | Dan Dupuis | Hugo Hideo |
| Battle | Thorben Novais | Lincoln Li | Jota Oliveira | Julio Scarabelli |
| Social Dynamics | Tim Williams | Paul Flores | Derek Gallant | - |
| Dozer | - | - | Derek Gallant | - |
| Art | Brann Livesay | - | - | - |

---

## Engineering

| Person | Role | Pod (Current) | M&Ms (7 spr) | M&C (6 spr) | Notes |
|--------|------|---------------|---------------|----|-------|
| Gabriel Arruda | Client Engineer | Empire | Empire | [TBD] | |
| Henrique De Lima | Client Engineer | Empire | Empire | [TBD] | |
| Marcos Loures | Client Engineer | Empire | Empire | [TBD] | |
| Dan Dupuis | Engineering Lead | Metagame | Metagame | [TBD] | |
| Guilherme Quizzini | Client Engineer | Metagame | Metagame | [TBD] | |
| Jota Oliveira | Client Engineer | Battle | Battle | [TBD] | |
| Randy Pasion | Client Engineer | Social Dynamics | [TBD] | [TBD] | Also responsible for build pipeline (Dozer). Feature work at risk of interruption. |
| Garrett Eidsvig | Backend Engineer | Social Dynamics | [TBD] | [TBD] | Also responsible for networking/infrastructure (Dozer). Feature work at risk of interruption. |
| Bruno Bacelar | Backend Engineer | Social Dynamics | [TBD] | [TBD] | |
| Derek Gallant | Engineering Lead | Dozer | Dozer | [TBD] | |
| Bruno Freitas | Engineer | Dozer | Dozer | [TBD] | |
| Marcos Teles | Tech Artist | Empire | Empire | [TBD] | |

---

## Design

| Person | Role | Pod (Current) | M&Ms (7 spr) | M&C (6 spr) | Notes |
|--------|------|---------------|---------------|----|-------|
| Diana Vasilescu | Design Lead | Empire | Empire | [TBD] | |
| Elise Cole | Designer | Empire | Empire | [TBD] | |
| Jacob Siegel | Designer | Empire | Empire | [TBD] | |
| Leonard Perez | Design Lead | Metagame | Metagame | [TBD] | |
| Chris Fidalgo | Designer | Metagame | Metagame | [TBD] | |
| Lincoln Li | Design Lead | Battle | Battle | [TBD] | |
| Nathan Hajek | Designer | Battle | Battle | [TBD] | |
| Dylan Jeffery | Designer | Battle | Battle | [TBD] | |
| Vishaal Gupta | Designer | Battle | Battle | [TBD] | |
| Paul Flores | Design Lead | Social Dynamics | [TBD] | [TBD] | |

---

## UX / UI

| Person | Role | Pod (Current) | M&Ms (7 spr) | M&C (6 spr) | Notes |
|--------|------|---------------|---------------|----|-------|
| Kevin Ligon | UX Lead | Metagame | [TBD] | [TBD] | |
| Yura Rusin | UX Designer | Empire | Empire | [TBD] | Governors UI needed by Sprint 2 of M&Ms |
| Miguel Duran | UI Artist | Metagame | Metagame | [TBD] | |

---

## Art

| Person | Role | Pod (Current) | M&Ms (7 spr) | M&C (6 spr) | Notes |
|--------|------|---------------|---------------|----|-------|
| Kevin Griffith | Art Director | Art | Art | Art | Cross-pod leadership |
| Brendan Cheatham | Associate Art Director | Art | Art | Art | Cross-pod leadership |
| Lawrence Steele | Sound Engineer | Art | Art | Art | |
| Danny | Artist | Art | [TBD] | [TBD] | |
| Alessandro | Artist | Art | [TBD] | [TBD] | |
| Pedro | Artist | Art | [TBD] | [TBD] | |
| Guilherme | Artist | Art | [TBD] | [TBD] | |
| Vinod Rams | Artist | Art | [TBD] | [TBD] | |
| Thiago | Artist | Art | [TBD] | [TBD] | |
| Ben Clair | Artist | Battle | Battle | [TBD] | |
| Felipe Chaves | Artist | Battle | Battle | [TBD] | |
| Tony Bonilla | Artist | Battle | Battle | [TBD] | |
| Vinicius | Artist | Battle | Battle | [TBD] | |

---

## QA

| Person | Role | Pod (Current) | M&Ms (7 spr) | M&C (6 spr) | Notes |
|--------|------|---------------|---------------|----|-------|
| Hafiz Kassam | QA Lead | Cross-pod | Cross-pod | Cross-pod | |
| Laura Santana | QA | Empire | Empire | [TBD] | |
| Hugo Hideo | QA | Metagame | Metagame | [TBD] | |
| Julio Scarabelli | QA | Battle | Battle | [TBD] | |

---

## Production

| Person | Role | Pod(s) | Notes |
|--------|------|--------|-------|
| Tim Williams | Producer | Metagame, Social Dynamics | Two pods |
| Brann Livesay | Producer | Empire, Art | Two pods |
| Thorben Novais | Producer | Battle | |

---

## Known Staffing Risks

| Risk | Impact | Pods Affected | Notes |
|------|--------|---------------|-------|
| Randy Pasion split: Social Dynamics + Dozer (build pipeline) | Any feature work assigned to Randy is at risk of interruption from build pipeline operational issues | Social Dynamics, Dozer | All features depending on Randy should carry schedule risk buffer |
| Garrett Eidsvig split: Social Dynamics + Dozer (networking/infra) | Any feature work assigned to Garrett is at risk of interruption from networking/infrastructure issues | Social Dynamics, Dozer | All features depending on Garrett should carry schedule risk buffer |
| Battle has 1 client engineer (Jota) | Features are sequential - no parallelism, delays cascade | Battle | Large design team (4) relative to engineering (1) |
| Social Dynamics effective engineering capacity is reduced | 2 of 3 engineers (Randy, Garrett) have Dozer obligations | Social Dynamics | Bruno Bacelar is the only fully-dedicated backend engineer |
| Tim Williams produces 2 pods | Attention split between Metagame and Social Dynamics | Metagame, Social Dynamics | |
| Brann Livesay produces 2 pods | Attention split between Empire and Art | Empire, Art | |

---

## Change Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-03-19 | Full team roster populated with real staffing data | Moving from placeholder to actual team |
| 2026-03-19 | Initial capacity file created | Restructuring brain for better separation of concerns |
