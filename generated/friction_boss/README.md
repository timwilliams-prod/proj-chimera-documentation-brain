# Agentic Engineering Quest Log

> A producer's campaign tracker for the agentic engineering effort on Lotus.

## What this is

A static HTML dashboard that turns the agentic engineering roadmap into a quest log with a visible boss monster (Friction), XP, party members, and chapters. Built for producers + leadership — playful in tone, serious in substance.

**Lives at:** `generated/agentic_quest_log/`

## Files

| File | Role |
|---|---|
| `index.html` | The dashboard. Open in any browser. |
| `quests.json` | The data source. Hand-edited by the champion. |
| `README.md` | This file. |

## How to update

Two valid paths depending on where you are:

### Path A — quick edit, single-file workflow
1. Open `index.html` in a text editor.
2. Find the `const QUEST_DATA = { ... };` block near the bottom.
3. Edit the JSON inline.
4. Save. Open in browser. Done.

### Path B — clean source-of-truth workflow (preferred when stable)
1. Edit `quests.json`.
2. Run the inline regeneration:

```bash
python3 -c "
import json, re
data = json.load(open('quests.json'))
html = open('index.html').read()
html = re.sub(
  r'const QUEST_DATA = \{[\s\S]*?\};',
  'const QUEST_DATA = ' + json.dumps(data, indent=2) + ';',
  html, count=1
)
open('index.html', 'w').write(html)
print('Regenerated.')
"
```

3. Open `index.html` in a browser.

You can also serve the directory locally and the page will fetch `quests.json` directly — useful if you want the JSON to be the live source while iterating.

## What goes where

| Field | Meaning |
|---|---|
| `boss.currentHp` | Decrement as quests complete. Drives the HP bar and current phase. |
| `boss.phases` | Six phases mapped to HP thresholds. Don't change the structure; tweak descriptions if needed. |
| `captain.xp` / `xpToNext` / `level` | Increment XP as quests complete. Level up when XP ≥ xpToNext (manually for now). |
| `captain.totalXpEarned` | Lifetime XP. Never decrements. |
| `party[]` | Crew members. Status: `active`, `vacant`, `locked`. Type: `human`, `agent`, `system`. |
| `chapters[]` | Phases of the campaign. Status: `available`, `active`, `locked`. |
| `chapters[].quests[]` | Individual quests. Status: `available`, `active`, `complete`, `locked`. |

## Updating after a quest completes

When you finish a quest:

1. In `quests.json`, set the quest's `status` to `complete`.
2. Add the quest's `xp` value to `captain.xp` and `captain.totalXpEarned`.
3. Subtract the quest's `frictionDamage` from `boss.currentHp`.
4. If a downstream quest's prerequisites are now satisfied, change its status from `locked` to `available`.
5. If a chapter's status should advance, update it.
6. Bump `campaign.lastUpdated`.
7. Regenerate (Path A or B above).

This will eventually be a `/quest-complete <id>` skill. For now, manual.

## Aesthetic notes

The look is deliberate: JRPG quest board meets producer's planning screen. Cinzel display + Spectral body + JetBrains Mono for system text. Aged-gold for completed/earned, electric cyan for active/in-flight, blood-red for the boss. Paper grain overlay, vignette, decorative corners on every panel.

If you find yourself wanting to add neon, RGB gradients, or anything that screams "AI dashboard" — resist. The audience makes games. They have taste.

## Future hooks

- `/quest-complete` skill that updates JSON + regenerates HTML
- `/quest-add` skill for proposing new quests
- Auto-regeneration on commit hook
- Embedding the boss HP into producer briefings ("Boss HP this week: 720 → 690")
