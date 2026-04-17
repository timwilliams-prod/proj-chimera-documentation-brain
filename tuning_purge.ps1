# =============================================================================
# Tuning Config Purge Script (PowerShell 5.1+)
#
# Reads a CSV data file of remove/rename operations and applies them to
# the chimera-unity tuning configs directory. Creates a git branch, updates
# internal JSON "name" fields, fixes cross-references, and commits.
#
# Usage:
#   .\tuning_purge.ps1                                  # defaults
#   .\tuning_purge.ps1 -DataFile .\my_purge.csv         # custom data file
#   .\tuning_purge.ps1 -Branch "treasure-chest-purge"   # custom branch name
#   .\tuning_purge.ps1 -RepoPath "..\other-repo"        # custom repo path
# =============================================================================
param(
    [string]$DataFile   = "tuning_purge_data.csv",
    [string]$Branch     = "tuning-data-purge",
    [string]$RepoPath   = "..\proj-chimera-production\chimera-unity",
    [string]$ConfigsRel = "Assets\Tuning\configs"
)

$ErrorActionPreference = "Stop"

# ---------------------------------------------------------------------------
# Resolve paths
# ---------------------------------------------------------------------------
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Resolve data file (relative to script dir)
if (-not [System.IO.Path]::IsPathRooted($DataFile)) {
    $DataFile = Join-Path $ScriptDir $DataFile
}
if (-not (Test-Path $DataFile)) {
    Write-Host "ERROR: Data file not found: $DataFile" -ForegroundColor Red
    exit 1
}

# Resolve repo dir (relative to script dir)
if (-not [System.IO.Path]::IsPathRooted($RepoPath)) {
    $RepoPath = Join-Path $ScriptDir $RepoPath
}
$RepoDir = (Resolve-Path $RepoPath -ErrorAction SilentlyContinue).Path
if (-not $RepoDir -or -not (Test-Path $RepoDir)) {
    Write-Host "ERROR: Repo not found at: $RepoPath" -ForegroundColor Red
    exit 1
}

$ConfigsFullPath = Join-Path $RepoDir $ConfigsRel
if (-not (Test-Path $ConfigsFullPath)) {
    Write-Host "ERROR: Configs directory not found: $ConfigsRel" -ForegroundColor Red
    exit 1
}

# ---------------------------------------------------------------------------
# Helper: path relative to repo root, forward-slashed (PS 5.1 compatible)
# ---------------------------------------------------------------------------
function Get-RelPath {
    param([string]$FullPath)
    $normalized = $FullPath.Replace('/', '\')
    $base = $RepoDir.Replace('/', '\').TrimEnd('\') + '\'
    if ($normalized.StartsWith($base, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $normalized.Substring($base.Length) -replace '\\','/'
    }
    return $FullPath -replace '\\','/'
}

# ---------------------------------------------------------------------------
# Parse the data file
# ---------------------------------------------------------------------------
Write-Host "Reading data file: $DataFile"
$operations = @()
foreach ($rawLine in Get-Content $DataFile) {
    $line = $rawLine.Trim()
    if ($line -eq '' -or $line.StartsWith('#')) { continue }
    $parts = $line -split ','
    $op = @{
        Action     = $parts[0].Trim()
        SchemaDir  = $parts[1].Trim()
        ConfigName = $parts[2].Trim()
        NewName    = if ($parts.Count -ge 4) { $parts[3].Trim() } else { '' }
    }
    $operations += $op
}

$removeOps = @($operations | Where-Object { $_.Action -eq 'remove' })
$renameOps = @($operations | Where-Object { $_.Action -eq 'rename' })
Write-Host "  Loaded $($removeOps.Count) removes, $($renameOps.Count) renames"

# ---------------------------------------------------------------------------
# Setup branch
# ---------------------------------------------------------------------------
Set-Location $RepoDir
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Setting up branch: $Branch" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

git fetch origin
git checkout develop
git pull origin develop

$branchCheck = git show-ref --verify --quiet "refs/heads/$Branch" 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "WARNING: Branch '$Branch' already exists." -ForegroundColor Yellow
    Write-Host "Delete it first with: git branch -D $Branch"
    exit 1
}

git checkout -b $Branch
Write-Host "Created branch: $Branch from develop" -ForegroundColor Green

# ---------------------------------------------------------------------------
# Counters & rename tracker
# ---------------------------------------------------------------------------
$script:RemoveCount = 0
$script:RenameCount = 0
$script:SkipCount   = 0
$Renames = New-Object System.Collections.ArrayList

# ---------------------------------------------------------------------------
# Find a config file (case-insensitive) -> full path or $null
# ---------------------------------------------------------------------------
function Find-ConfigFile {
    param([string]$SchemaDir, [string]$ConfigName)
    $dir = Join-Path $ConfigsFullPath $SchemaDir
    if (-not (Test-Path $dir)) { return $null }
    $match = Get-ChildItem -Path $dir -Filter "$ConfigName.json" -File -ErrorAction SilentlyContinue |
             Select-Object -First 1
    if ($match) { return $match.FullName }
    return $null
}

# ---------------------------------------------------------------------------
# Process removes
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Removing configs" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$currentSchema = ''
foreach ($op in $removeOps) {
    if ($op.SchemaDir -ne $currentSchema) {
        $currentSchema = $op.SchemaDir
        Write-Host "-- $currentSchema --"
    }

    $jsonFile = Find-ConfigFile $op.SchemaDir $op.ConfigName
    if ($jsonFile) {
        $rel = Get-RelPath $jsonFile
        git rm -f $rel 2>$null
        if (Test-Path "$jsonFile.meta") {
            git rm -f "$rel.meta" 2>$null
        }
        Write-Host "  [DEL] $($op.ConfigName)"
        $script:RemoveCount++
    }
    else {
        Write-Host "  [SKIP] NOT FOUND: $($op.SchemaDir)/$($op.ConfigName).json" -ForegroundColor Yellow
        $script:SkipCount++
    }
}

# ---------------------------------------------------------------------------
# Process renames
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Renaming configs" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$currentSchema = ''
foreach ($op in $renameOps) {
    if ($op.SchemaDir -ne $currentSchema) {
        $currentSchema = $op.SchemaDir
        Write-Host "-- $currentSchema --"
    }

    $jsonFile = Find-ConfigFile $op.SchemaDir $op.ConfigName
    if (-not $jsonFile) {
        Write-Host "  [SKIP] NOT FOUND: $($op.SchemaDir)/$($op.ConfigName).json" -ForegroundColor Yellow
        $script:SkipCount++
        continue
    }

    $dir = Split-Path $jsonFile -Parent
    $newFile = Join-Path $dir "$($op.NewName).json"
    $relOld = Get-RelPath $jsonFile
    $relNew = Get-RelPath $newFile

    # Read internal name
    $content = Get-Content $jsonFile -Raw
    $internalName = $null
    if ($content -match '"name"\s*:\s*"([^"]+)"') {
        $internalName = $Matches[1]
    }

    # git mv files
    git mv $relOld $relNew
    if (Test-Path "$jsonFile.meta") {
        git mv "$relOld.meta" "$relNew.meta"
    }
    Write-Host "  [MV]  $($op.ConfigName) -> $($op.NewName)"

    # Update internal name
    if ($internalName -and $internalName -ne $op.NewName) {
        $content = $content -replace [regex]::Escape("`"name`": `"$internalName`""), "`"name`": `"$($op.NewName)`""
        Set-Content -Path $newFile -Value $content -NoNewline -Encoding UTF8
        Write-Host "        internal: $internalName -> $($op.NewName)"
        $null = $Renames.Add(@{ Old = $internalName; New = $op.NewName })
    }

    $script:RenameCount++
}

# ---------------------------------------------------------------------------
# Cross-reference updates
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Updating cross-references" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if ($Renames.Count -gt 0) {
    $allJsonFiles = Get-ChildItem -Path $ConfigsFullPath -Filter "*.json" -Recurse -File

    foreach ($rename in $Renames) {
        $search  = "`"$($rename.Old)`""
        $replace = "`"$($rename.New)`""
        Write-Host "  Scanning: `"$($rename.Old)`" -> `"$($rename.New)`""

        $found = $false
        foreach ($file in $allJsonFiles) {
            $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
            if ($content -and $content.Contains($search)) {
                $content = $content.Replace($search, $replace)
                Set-Content -Path $file.FullName -Value $content -NoNewline -Encoding UTF8
                Write-Host "    Updated: $(Get-RelPath $file.FullName)"
                $found = $true
            }
        }
        if (-not $found) {
            Write-Host "    No references found."
        }
    }
}
else {
    Write-Host "  No renames to cross-reference."
}

# ---------------------------------------------------------------------------
# Commit
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Committing" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

git add -A $ConfigsRel

# Collect affected schemas for commit message
$schemas = ($operations | ForEach-Object { $_.SchemaDir } | Select-Object -Unique) -join ', '

$commitMsg = @"
Tuning data purge: remove and rename deprecated configs

Schemas affected: $schemas

Actions taken:
- Removed $($script:RemoveCount) deprecated/legacy configs
- Renamed $($script:RenameCount) configs to follow naming conventions
- Updated internal "name" fields in renamed configs
- Updated cross-references across all config JSON files

Data file: $(Split-Path $DataFile -Leaf)
"@

git commit -m $commitMsg

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host " DONE" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host "  Removed:  $script:RemoveCount configs"
Write-Host "  Renamed:  $script:RenameCount configs"
Write-Host "  Skipped:  $script:SkipCount (not found on disk)"
Write-Host ""
Write-Host "  Branch: $Branch"
Write-Host "  Review:  git log --stat -1"
Write-Host "  Push:    git push -u origin $Branch"
