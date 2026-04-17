#!/bin/bash
# =============================================================================
# Tuning Config Purge Script (Bash)
#
# Reads a CSV data file of remove/rename operations and applies them to
# the chimera-unity tuning configs directory. Creates a git branch, updates
# internal JSON "name" fields, fixes cross-references, and commits.
#
# Usage:
#   ./tuning_purge.sh                                           # defaults
#   ./tuning_purge.sh -d my_purge.csv                           # custom data file
#   ./tuning_purge.sh -b "treasure-chest-purge"                 # custom branch
#   ./tuning_purge.sh -r "../other-repo" -d data.csv -b branch  # all options
# =============================================================================
set -e

# ---------------------------------------------------------------------------
# Defaults (override with flags)
# ---------------------------------------------------------------------------
DATA_FILE="tuning_purge_data.csv"
BRANCH="tuning-data-purge"
REPO_PATH="../proj-chimera-production/chimera-unity"
CONFIGS_REL="Assets/Tuning/configs"

while getopts "d:b:r:c:" opt; do
    case $opt in
        d) DATA_FILE="$OPTARG" ;;
        b) BRANCH="$OPTARG" ;;
        r) REPO_PATH="$OPTARG" ;;
        c) CONFIGS_REL="$OPTARG" ;;
        *) echo "Usage: $0 [-d data_file] [-b branch] [-r repo_path] [-c configs_rel]"; exit 1 ;;
    esac
done

# ---------------------------------------------------------------------------
# Resolve paths
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Resolve data file relative to script dir
if [[ "$DATA_FILE" != /* ]]; then
    DATA_FILE="$SCRIPT_DIR/$DATA_FILE"
fi
if [ ! -f "$DATA_FILE" ]; then
    echo "ERROR: Data file not found: $DATA_FILE"
    exit 1
fi

# Resolve repo dir relative to script dir
if [[ "$REPO_PATH" != /* ]]; then
    REPO_PATH="$SCRIPT_DIR/$REPO_PATH"
fi
REPO_DIR="$(cd "$REPO_PATH" 2>/dev/null && pwd)" || {
    echo "ERROR: Repo not found at: $REPO_PATH"
    exit 1
}

CONFIGS_FULL="$REPO_DIR/$CONFIGS_REL"
if [ ! -d "$CONFIGS_FULL" ]; then
    echo "ERROR: Configs directory not found: $CONFIGS_REL"
    exit 1
fi

# ---------------------------------------------------------------------------
# Parse data file
# ---------------------------------------------------------------------------
echo "Reading data file: $DATA_FILE"
REMOVE_LINES=()
RENAME_LINES=()

while IFS= read -r rawline || [ -n "$rawline" ]; do
    line="$(echo "$rawline" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    [[ -z "$line" || "$line" == \#* ]] && continue

    op="$(echo "$line" | cut -d',' -f1 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    if [ "$op" = "remove" ]; then
        REMOVE_LINES+=("$line")
    elif [ "$op" = "rename" ]; then
        RENAME_LINES+=("$line")
    fi
done < "$DATA_FILE"

echo "  Loaded ${#REMOVE_LINES[@]} removes, ${#RENAME_LINES[@]} renames"

# ---------------------------------------------------------------------------
# Setup branch
# ---------------------------------------------------------------------------
cd "$REPO_DIR"
echo ""
echo "=========================================="
echo " Setting up branch: $BRANCH"
echo "=========================================="

git fetch origin
git checkout develop
git pull origin develop

if git show-ref --verify --quiet "refs/heads/$BRANCH" 2>/dev/null; then
    echo "WARNING: Branch '$BRANCH' already exists."
    echo "Delete it first with: git branch -D $BRANCH"
    exit 1
fi

git checkout -b "$BRANCH"
echo "Created branch: $BRANCH from develop"

# ---------------------------------------------------------------------------
# Counters & rename log
# ---------------------------------------------------------------------------
REMOVE_COUNT=0
RENAME_COUNT=0
SKIP_COUNT=0
RENAMES_FILE=$(mktemp)
trap "rm -f $RENAMES_FILE" EXIT

# ---------------------------------------------------------------------------
# Find config file (case-insensitive) -> sets FOUND_FILE or empty
# ---------------------------------------------------------------------------
find_config() {
    local schema_dir="$1"
    local config_name="$2"
    local dir="$CONFIGS_FULL/$schema_dir"
    FOUND_FILE=""

    [ ! -d "$dir" ] && return

    # Try exact match first
    if [ -f "$dir/${config_name}.json" ]; then
        FOUND_FILE="$dir/${config_name}.json"
        return
    fi

    # Case-insensitive fallback
    FOUND_FILE=$(find "$dir" -maxdepth 1 -iname "${config_name}.json" -print -quit 2>/dev/null || true)
}

# ---------------------------------------------------------------------------
# Process removes
# ---------------------------------------------------------------------------
echo ""
echo "=========================================="
echo " Removing configs"
echo "=========================================="

CURRENT_SCHEMA=""
for line in "${REMOVE_LINES[@]}"; do
    schema="$(echo "$line" | cut -d',' -f2 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    config="$(echo "$line" | cut -d',' -f3 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"

    if [ "$schema" != "$CURRENT_SCHEMA" ]; then
        CURRENT_SCHEMA="$schema"
        echo "-- $schema --"
    fi

    find_config "$schema" "$config"
    if [ -n "$FOUND_FILE" ] && [ -f "$FOUND_FILE" ]; then
        # Get path relative to repo root for git
        rel="${FOUND_FILE#$REPO_DIR/}"
        git rm -f "$rel" 2>/dev/null || true
        [ -f "${FOUND_FILE}.meta" ] && git rm -f "${rel}.meta" 2>/dev/null || true
        echo "  [DEL] $config"
        ((REMOVE_COUNT++)) || true
    else
        echo "  [SKIP] NOT FOUND: $schema/$config.json"
        ((SKIP_COUNT++)) || true
    fi
done

# ---------------------------------------------------------------------------
# Process renames
# ---------------------------------------------------------------------------
echo ""
echo "=========================================="
echo " Renaming configs"
echo "=========================================="

CURRENT_SCHEMA=""
for line in "${RENAME_LINES[@]}"; do
    schema="$(echo "$line"  | cut -d',' -f2 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    old_name="$(echo "$line" | cut -d',' -f3 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
    new_name="$(echo "$line" | cut -d',' -f4 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"

    if [ "$schema" != "$CURRENT_SCHEMA" ]; then
        CURRENT_SCHEMA="$schema"
        echo "-- $schema --"
    fi

    find_config "$schema" "$old_name"
    if [ -z "$FOUND_FILE" ] || [ ! -f "$FOUND_FILE" ]; then
        echo "  [SKIP] NOT FOUND: $schema/$old_name.json"
        ((SKIP_COUNT++)) || true
        continue
    fi

    dir="$(dirname "$FOUND_FILE")"
    new_file="$dir/${new_name}.json"
    rel_old="${FOUND_FILE#$REPO_DIR/}"
    rel_new="${new_file#$REPO_DIR/}"

    # Read internal name
    internal_name=$(sed -n 's/.*"name" *: *"\([^"]*\)".*/\1/p' "$FOUND_FILE" | head -1)

    # git mv files
    git mv "$rel_old" "$rel_new"
    [ -f "${FOUND_FILE}.meta" ] && git mv "${rel_old}.meta" "${rel_new}.meta"
    echo "  [MV]  $old_name -> $new_name"

    # Update internal name
    if [ -n "$internal_name" ] && [ "$internal_name" != "$new_name" ]; then
        sed -i "s|\"name\": \"${internal_name}\"|\"name\": \"${new_name}\"|" "$new_file"
        echo "        internal: $internal_name -> $new_name"
        echo "${internal_name}|${new_name}" >> "$RENAMES_FILE"
    fi

    ((RENAME_COUNT++)) || true
done

# ---------------------------------------------------------------------------
# Cross-reference updates
# ---------------------------------------------------------------------------
echo ""
echo "=========================================="
echo " Updating cross-references"
echo "=========================================="

if [ -s "$RENAMES_FILE" ]; then
    while IFS='|' read -r old_ref new_ref; do
        echo "  Scanning: \"${old_ref}\" -> \"${new_ref}\""
        matching=$(grep -rl "\"${old_ref}\"" "$CONFIGS_FULL" --include="*.json" 2>/dev/null || true)
        if [ -n "$matching" ]; then
            echo "$matching" | while read -r file; do
                sed -i "s|\"${old_ref}\"|\"${new_ref}\"|g" "$file"
                echo "    Updated: ${file#$REPO_DIR/}"
            done
        else
            echo "    No references found."
        fi
    done < "$RENAMES_FILE"
else
    echo "  No renames to cross-reference."
fi

# ---------------------------------------------------------------------------
# Collect affected schemas for commit message
# ---------------------------------------------------------------------------
SCHEMAS=$(awk -F',' '!/^[[:space:]]*#/ && !/^[[:space:]]*$/ { gsub(/^[[:space:]]+|[[:space:]]+$/, "", $2); print $2 }' "$DATA_FILE" | sort -u | paste -sd', ')

# ---------------------------------------------------------------------------
# Commit
# ---------------------------------------------------------------------------
echo ""
echo "=========================================="
echo " Committing"
echo "=========================================="

git add -A "$CONFIGS_REL"

git commit -m "$(cat <<EOF
Tuning data purge: remove and rename deprecated configs

Schemas affected: $SCHEMAS

Actions taken:
- Removed $REMOVE_COUNT deprecated/legacy configs
- Renamed $RENAME_COUNT configs to follow naming conventions
- Updated internal "name" fields in renamed configs
- Updated cross-references across all config JSON files

Data file: $(basename "$DATA_FILE")
EOF
)"

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
echo ""
echo "=========================================="
echo " DONE"
echo "=========================================="
echo "  Removed:  $REMOVE_COUNT configs"
echo "  Renamed:  $RENAME_COUNT configs"
echo "  Skipped:  $SKIP_COUNT (not found on disk)"
echo ""
echo "  Branch: $BRANCH"
echo "  Review:  git log --stat -1"
echo "  Push:    git push -u origin $BRANCH"
