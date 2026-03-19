# Feature: Combat System

Last Updated: 2026-03-18
Status: In Active Development
Owner: Combat Systems Pod

---

## Overview

Real-time action combat system with combo mechanics, special moves, and multiplayer support.

### Goals
- Provide responsive, skill-based combat
- Support both single-player and multiplayer
- Enable deep combo system for skilled players
- Maintain 60fps performance on min spec

### Non-Goals
- Turn-based combat
- Auto-combat/idle gameplay
- Realistic weapon simulation

---

## Requirements

### Functional Requirements

#### FR-1: Basic Combat
- Players can execute light/heavy attacks
- Attacks have startup, active, recovery frames
- Hitboxes detect collisions with enemies
- Damage calculation based on weapon + stats
- Health depletion triggers death state

#### FR-2: Combo System
- Input buffer allows chaining attacks (300ms window)
- Combo counter tracks consecutive hits
- Combo multiplier increases damage (1x → 1.5x at 10+ hits)
- Combos break on hit taken or 2s timeout

#### FR-3: Special Moves
- Energy/mana resource for special moves
- Unique moves per weapon type
- Special moves can cancel normal attacks
- Cooldowns prevent spam

#### FR-4: Multiplayer Combat
- < 100ms perceived latency for attacks
- Server-authoritative hit detection
- Client-side prediction for responsiveness
- Rollback on prediction mismatches

### Non-Functional Requirements

#### NFR-1: Performance
- 60fps minimum on min spec (GTX 1060, i5-7400)
- < 16ms frame time budget for combat systems
- Max 100 active hitboxes per frame

#### NFR-2: Balance
- No weapon/combo dominates >60% of high-level play
- TTK (time to kill) 8-15 seconds for equally skilled players
- Counter-play exists for all strategies

#### NFR-3: Accessibility
- One-button combos available (reduced effectiveness)
- Difficulty settings adjust enemy damage/health
- Colorblind-friendly hit indicators

---

## Architecture

### Components

#### CombatManager
- Singleton managing all combat interactions
- Registers/unregisters combatants
- Processes hitbox collisions
- Publishes combat events

#### CombatEntity
- Component attached to anything that can fight
- Properties: health, defense, damage modifiers
- Methods: TakeDamage(), Die(), IsInvulnerable()

#### AttackController
- Handles attack input buffering
- Manages attack state machine
- Triggers animation events
- Spawns hitboxes

#### ComboTracker
- Tracks combo state per entity
- Calculates damage multipliers
- Publishes combo events (start, break, milestone)

#### HitboxCollider
- Defines attack collision volumes
- Properties: damage, knockback, hit stun
- Active for specific frame ranges

### Data Flow

```
Player Input → AttackController → Animation System
                    ↓
            Hitbox Spawn (frame X)
                    ↓
            CombatManager Collision Check
                    ↓
            Damage Calculation (base × combo × modifiers)
                    ↓
            CombatEntity.TakeDamage()
                    ↓
            UI Update + VFX/SFX
```

### Multiplayer Architecture

- Client predicts own attacks immediately
- Client sends input to server
- Server simulates combat authoritatively
- Server sends results to all clients
- Clients reconcile on mismatch

---

## Technical Specifications

### Timing Values
- Light Attack: 8f startup, 4f active, 12f recovery (400ms total)
- Heavy Attack: 15f startup, 6f active, 20f recovery (683ms total)
- Input Buffer Window: 18f (300ms at 60fps)
- Combo Timeout: 120f (2000ms)

### Damage Formula
```
FinalDamage = BaseDamage × WeaponMultiplier × ComboMultiplier × DefenseReduction
ComboMultiplier = 1 + min(ComboCount × 0.05, 0.5) // max 1.5x at 10+ hits
DefenseReduction = AttackPower / (AttackPower + Defense × 0.5)
```

### Network Specs
- Tick Rate: 30 Hz
- Input Delay: 2 frames (67ms)
- Rollback Limit: 8 frames (267ms)

---

## Dependencies

### External Dependencies
- Character Systems: Stats (attack power, defense)
- Animation System: State machine, event callbacks
- Physics Engine: Collision detection
- Multiplayer: Network sync, prediction
- UI: Health bars, combo counter, damage numbers

### Shared Resources
- Animation State Machine (shared with Character Systems)
- Physics Engine (shared with World/Environment)
- Input System (shared with all gameplay)

---

## Testing Strategy

### Unit Tests
- Damage calculation accuracy
- Combo multiplier logic
- Input buffer timing
- State machine transitions

### Integration Tests
- Combat + Animation integration
- Hitbox collision accuracy
- Multiplayer sync correctness
- UI update responsiveness

### Performance Tests
- 100 concurrent combatants
- 1000 hitbox checks per frame
- Network simulation (100ms, 200ms latency)

### Balance Tests
- Weapon parity (win rate analysis)
- TTK across skill levels
- Combo viability metrics

---

## Risks & Mitigations

### Risk: Network Latency Breaks Feel
- **Impact**: High - Players quit due to laggy combat
- **Probability**: Medium
- **Mitigation**: Client prediction + rollback, region-based matchmaking
- **Owner**: Multiplayer Pod

### Risk: Animation/Hitbox Desync
- **Impact**: Medium - Unfair hits, player frustration
- **Probability**: Medium
- **Mitigation**: Frame-accurate animation events, extensive testing
- **Owner**: Combat Systems Pod

### Risk: Performance Degradation
- **Impact**: High - Breaks 60fps target
- **Probability**: Low - if we monitor
- **Mitigation**: Perf budget enforcement, profiling per sprint
- **Owner**: Combat Systems Pod

### Risk: Balance Issues Post-Launch
- **Impact**: Medium - Meta stagnation
- **Probability**: High - inevitable with complex systems
- **Mitigation**: Telemetry on weapon usage, quick balance patches
- **Owner**: Combat Systems + Design

---

## Open Questions

- [ ] Should blocking be a separate system or integrated into combat?
- [ ] How do environmental hazards interact with combat damage?
- [ ] What's the policy on friendly fire in multiplayer?
- [ ] Do we need replay/killcam features?

---

## Implementation Plan

### Phase 1 (Sprint 23-24): Foundation
- Basic attack system (light/heavy)
- Hitbox collision
- Damage calculation
- Simple animations

### Phase 2 (Sprint 25-26): Combos
- Input buffering
- Combo tracking
- Multiplier system
- UI integration

### Phase 3 (Sprint 27-28): Special Moves
- Resource system (energy/mana)
- Special move framework
- Per-weapon move sets

### Phase 4 (Sprint 29-30): Multiplayer
- Network sync
- Prediction/rollback
- Latency testing
- Balance tuning

### Phase 5 (Sprint 31+): Polish
- VFX/SFX
- Accessibility features
- Tutorial integration
- Balance iteration

---

## References

- Notion Combat Design Doc: [link]
- ClickUp Epic: COMBAT-100
- Animation State Machine Spec: [link]
- Multiplayer Architecture Doc: [link]
