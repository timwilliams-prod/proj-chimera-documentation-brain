#!/usr/bin/env bash
# Lotus Telemetry Verify (macOS / Linux)
#
# Confirms the .claude/hooks/log-event.js hook will record events with the
# right identity. Most producers don't need to set anything — the hook
# auto-detects identity from `git config user.email` and uses a shared key
# baked into the repo for spam protection.
#
# Run from the repo root:
#   bash .claude/hooks/setup-telemetry.sh
#
# Optionally sets LOTUS_TELEMETRY_PRODUCER as a display-name override.

set -e

SHARED_KEY='lts_GkunqNt-ve0vaI0UziIa4IHOomVGgnaI'

# Detect target rc file
if [[ "$SHELL" == */zsh ]] && [[ -f "$HOME/.zshrc" ]]; then
    RC_FILE="$HOME/.zshrc"
elif [[ -f "$HOME/.bashrc" ]]; then
    RC_FILE="$HOME/.bashrc"
elif [[ -f "$HOME/.bash_profile" ]]; then
    RC_FILE="$HOME/.bash_profile"
else
    RC_FILE="$HOME/.zshrc"
    touch "$RC_FILE"
fi

MARKER_BEGIN="# >>> lotus-telemetry >>>"
MARKER_END="# <<< lotus-telemetry <<<"

extract_override() {
    if [[ -f "$RC_FILE" ]]; then
        sed -n "/$MARKER_BEGIN/,/$MARKER_END/p" "$RC_FILE" 2>/dev/null \
            | grep '^export LOTUS_TELEMETRY_PRODUCER=' \
            | sed -E "s/^export LOTUS_TELEMETRY_PRODUCER=['\"]?([^'\"]*)['\"]?$/\1/" \
            | head -n1
    fi
}

write_override() {
    local value="$1"
    local tmp
    tmp=$(mktemp)
    if [[ -f "$RC_FILE" ]]; then
        sed "/$MARKER_BEGIN/,/$MARKER_END/d" "$RC_FILE" > "$tmp"
    fi
    if [[ -n "$value" ]]; then
        {
            echo "$MARKER_BEGIN"
            echo "export LOTUS_TELEMETRY_PRODUCER='$value'"
            echo "$MARKER_END"
        } >> "$tmp"
    fi
    mv "$tmp" "$RC_FILE"
}

echo -e "\033[1mLotus Telemetry Verify\033[0m"
echo

# --- Detect identity ---
echo -e "\033[36m--- Identity ---\033[0m"

OVERRIDE=$(extract_override)
GIT_EMAIL=$(git config user.email 2>/dev/null || true)

if [[ -n "$OVERRIDE" ]]; then
    echo -e "  Override (LOTUS_TELEMETRY_PRODUCER): \033[32m$OVERRIDE\033[0m"
    if [[ -n "$GIT_EMAIL" ]]; then
        echo -e "  Git email (will be ignored):         \033[90m$GIT_EMAIL\033[0m"
    else
        echo -e "  Git email (will be ignored):         \033[90m(not configured)\033[0m"
    fi
    EFFECTIVE="$OVERRIDE"
elif [[ -n "$GIT_EMAIL" ]]; then
    echo -e "  Git email (auto-detected): \033[32m$GIT_EMAIL\033[0m"
    EFFECTIVE="$GIT_EMAIL"
else
    echo -e "  \033[31mNo identity available.\033[0m"
    echo -e "  \033[33mEither set 'git config --global user.email <your@email>' or set LOTUS_TELEMETRY_PRODUCER below.\033[0m"
    EFFECTIVE='unattributed'
fi

echo
echo -e "  Events will be recorded as: \033[1m$EFFECTIVE\033[0m"
echo

# --- Optional override ---
echo -e "\033[36m--- Optional override ---\033[0m"
echo "Set a friendlier display name (e.g. 'Tim' instead of 'tim.williams@fortisgames.com'),"
echo "or leave blank to use the auto-detected identity above."
read -r -p "  Display name (Enter=skip, '-'=clear existing override): " NEW_OVERRIDE

if [[ "$NEW_OVERRIDE" == "-" ]]; then
    write_override ""
    echo -e "  \033[33mOverride cleared from $RC_FILE.\033[0m"
elif [[ -n "$NEW_OVERRIDE" ]]; then
    write_override "$NEW_OVERRIDE"
    export LOTUS_TELEMETRY_PRODUCER="$NEW_OVERRIDE"
    echo -e "  \033[32mOverride saved to $RC_FILE.\033[0m Events will be recorded as: $NEW_OVERRIDE"
    echo -e "  \033[33mRESTART your terminal AND Claude Code so hooks inherit it.\033[0m"
fi

# --- Smoke test ---
echo
echo -e "\033[36m--- Smoke test ---\033[0m"
echo "POST https://lotus-production-brain.pages.dev/api/log-event"

SESSION="verify-$(uuidgen 2>/dev/null | tr '[:upper:]' '[:lower:]' | head -c 8 || date +%s)"
PAYLOAD='{"actor_type":"producer","actor_name":"verify-script","session_id":"'"$SESSION"'","event_type":"skill_invocation","skill":"verify-telemetry"}'

HTTP_OUT=$(mktemp)
STATUS=$(curl -sS -o "$HTTP_OUT" -w '%{http_code}' \
    -X POST \
    -H 'content-type: application/json' \
    -H "x-lotus-shared-key: $SHARED_KEY" \
    -d "$PAYLOAD" \
    'https://lotus-production-brain.pages.dev/api/log-event' 2>&1 || echo '?')
BODY=$(cat "$HTTP_OUT")
rm -f "$HTTP_OUT"

if [[ "$STATUS" == "201" ]]; then
    echo -e "  \033[32mHTTP 201 - event landed.\033[0m"
    echo -e "  \033[90mResponse: $BODY\033[0m"
    echo
    echo -e "\033[1mDone. Telemetry is working.\033[0m"
    echo "If you set an override above, RESTART Claude Code so hooks inherit it."
elif [[ "$STATUS" == "401" ]]; then
    echo -e "  \033[31mHTTP 401 - shared key rejected.\033[0m"
    echo "  The SHARED_KEY in this script doesn't match the deployed function."
    echo "  Pull latest from main and re-run."
elif [[ "$STATUS" == "302" ]] || [[ "$BODY" == *"<!DOCTYPE"* ]]; then
    echo -e "  \033[31mHTTP 302 - Cloudflare Access still gating /api/log-event.\033[0m"
    echo "  Ask Tim to add a Bypass policy for path /api/log-event in"
    echo "  Zero Trust > Access > Applications > lotus-production-brain > Policies."
else
    echo -e "  \033[33mHTTP $STATUS - unexpected response.\033[0m"
    echo "  Body: $BODY"
fi
