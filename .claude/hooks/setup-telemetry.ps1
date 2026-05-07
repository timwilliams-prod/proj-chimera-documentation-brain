# Lotus Telemetry Verify (Windows / PowerShell)
#
# Confirms the .claude/hooks/log-event.js hook will record events with the
# right identity. Most producers don't need to set anything — the hook
# auto-detects identity from `git config user.email` and uses a shared key
# baked into the repo for spam protection.
#
# Run from the repo root:
#   powershell -ExecutionPolicy Bypass -File .claude\hooks\setup-telemetry.ps1
#
# Optionally sets LOTUS_TELEMETRY_PRODUCER as a display-name override.

$ErrorActionPreference = 'Stop'

Write-Host "Lotus Telemetry Verify" -ForegroundColor White
Write-Host ""

# --- Detect identity ---
Write-Host "--- Identity ---" -ForegroundColor Cyan

$override = [Environment]::GetEnvironmentVariable('LOTUS_TELEMETRY_PRODUCER', 'User')
$gitEmail = $null
try {
    $gitEmail = (& git config user.email 2>$null).Trim()
} catch { }

if (-not [string]::IsNullOrEmpty($override)) {
    Write-Host "  Override (LOTUS_TELEMETRY_PRODUCER): $override" -ForegroundColor Green
    Write-Host "  Git email (will be ignored):         $(if ($gitEmail) { $gitEmail } else { '(not configured)' })" -ForegroundColor DarkGray
    $effective = $override
} elseif (-not [string]::IsNullOrEmpty($gitEmail)) {
    Write-Host "  Git email (auto-detected): $gitEmail" -ForegroundColor Green
    $effective = $gitEmail
} else {
    Write-Host "  No identity available." -ForegroundColor Red
    Write-Host "  Either set ``git config --global user.email <your@email>`` or set LOTUS_TELEMETRY_PRODUCER below." -ForegroundColor Yellow
    $effective = 'unattributed'
}

Write-Host ""
Write-Host "  Events will be recorded as: $effective" -ForegroundColor White
Write-Host ""

# --- Optional override ---
Write-Host "--- Optional override ---" -ForegroundColor Cyan
Write-Host "Set a friendlier display name (e.g. 'Tim' instead of 'tim.williams@fortisgames.com'),"
Write-Host "or leave blank to use the auto-detected identity above."
$newOverride = Read-Host "  Display name (Enter=skip, '-'=clear existing override)"

if ($newOverride -eq '-') {
    [Environment]::SetEnvironmentVariable('LOTUS_TELEMETRY_PRODUCER', $null, 'User')
    Write-Host "  Override cleared." -ForegroundColor Yellow
} elseif (-not [string]::IsNullOrEmpty($newOverride)) {
    [Environment]::SetEnvironmentVariable('LOTUS_TELEMETRY_PRODUCER', $newOverride, 'User')
    Write-Host "  Override saved. Events will be recorded as: $newOverride" -ForegroundColor Green
    Write-Host "  RESTART Claude Code so the new value is inherited." -ForegroundColor Yellow
}

# --- Smoke test ---
Write-Host ""
Write-Host "--- Smoke test ---" -ForegroundColor Cyan
Write-Host "POST https://lotus-production-brain.pages.dev/api/log-event"

$payload = '{"actor_type":"producer","actor_name":"verify-script","session_id":"verify-' + [Guid]::NewGuid().ToString('N').Substring(0,8) + '","event_type":"skill_invocation","skill":"verify-telemetry"}'

$response = & curl.exe -sS -X POST `
    -H 'content-type: application/json' `
    -H 'x-lotus-shared-key: lts_GkunqNt-ve0vaI0UziIa4IHOomVGgnaI' `
    -d $payload `
    -w "`n__STATUS__%{http_code}" `
    'https://lotus-production-brain.pages.dev/api/log-event' 2>&1

$parts = ($response -join "`n") -split '__STATUS__'
$body = $parts[0].Trim()
$status = if ($parts.Length -gt 1) { $parts[1].Trim() } else { '?' }

if ($status -eq '201') {
    Write-Host "  HTTP 201 - event landed." -ForegroundColor Green
    Write-Host "  Response: $body" -ForegroundColor DarkGray
    Write-Host ""
    Write-Host "Done. Telemetry is working." -ForegroundColor White
    Write-Host "If you set an override above, RESTART Claude Code so hooks inherit it."
} elseif ($status -eq '401') {
    Write-Host "  HTTP 401 - shared key rejected." -ForegroundColor Red
    Write-Host "  The SHARED_KEY in this script doesn't match the deployed function."
    Write-Host "  Pull latest from main and re-run."
} elseif ($status -eq '302' -or $body -match '<!DOCTYPE') {
    Write-Host "  HTTP 302 - Cloudflare Access still gating /api/log-event." -ForegroundColor Red
    Write-Host "  Ask Tim to add a Bypass policy for path /api/log-event in"
    Write-Host "  Zero Trust > Access > Applications > lotus-production-brain > Policies."
} else {
    Write-Host "  HTTP $status - unexpected response." -ForegroundColor Yellow
    Write-Host "  Body: $body"
}
