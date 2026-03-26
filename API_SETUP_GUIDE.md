# Third-Party API Setup Guide

This guide will help you obtain API keys for ClickUp, Notion, Miro, Google Calendar, Google Drive, and Slack.

## Setup Steps

### 1. ClickUp API

1. Go to https://app.clickup.com/settings/apps
2. Click on "Apps" in the left sidebar
3. Click "Generate" to create a new API token
4. Copy the token and add it to your `.env` file

**API Documentation:** https://clickup.com/api

**Common endpoints:**
- List spaces: `GET https://api.clickup.com/api/v2/team/{team_id}/space`
- List tasks: `GET https://api.clickup.com/api/v2/list/{list_id}/task`
- Create task: `POST https://api.clickup.com/api/v2/list/{list_id}/task`

### 2. Notion API

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Give it a name and select the workspace
4. Copy the "Internal Integration Token"
5. Go to the database/page you want to access
6. Click "..." → "Add connections" → Select your integration

**API Documentation:** https://developers.notion.com

**Getting database ID:**
- Open the database in Notion
- Copy the URL: `notion.so/{workspace}/{database_id}?v=...`
- The 32-character code is your database ID

### 3. Miro API

1. Go to https://miro.com/app/settings/user-profile/apps
2. Click "Create new app"
3. Fill in app details
4. Go to "OAuth & Permissions"
5. Add required scopes: `boards:read`, `boards:write`
6. Install the app to your team
7. Copy the access token

**API Documentation:** https://developers.miro.com/docs

**Getting board ID:**
- Open your board in Miro
- The URL will be: `miro.com/app/board/{board_id}/`

### 4. Google Calendar & Drive API

**Option A: OAuth 2.0 (Recommended)**

1. Go to https://console.cloud.google.com/
2. Create a new project or select existing one
3. Enable APIs:
   - Google Calendar API
   - Google Drive API
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Choose "Desktop app" as application type
6. Download the JSON file

**Option B: Service Account (For automation)**

1. In Google Cloud Console, go to "Credentials"
2. Click "Create Credentials" → "Service account"
3. Download the JSON key file
4. Share your calendar/drive with the service account email

**API Documentation:**
- Calendar: https://developers.google.com/calendar/api
- Drive: https://developers.google.com/drive/api

### 5. Slack API

1. Go to https://api.slack.com/apps
2. Click "Create New App" → "From scratch"
3. Give it a name and select workspace
4. Go to "OAuth & Permissions"
5. Add required scopes:
   - Bot Token Scopes: `chat:write`, `channels:read`, `users:read`
   - User Token Scopes: (if needed)
6. Install app to workspace
7. Copy the "Bot User OAuth Token" (starts with `xoxb-`)

**For webhooks:**
- Go to "Incoming Webhooks"
- Activate incoming webhooks
- Add new webhook to workspace
- Copy the webhook URL

**API Documentation:** https://api.slack.com/

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual API keys

3. Add `.env` to `.gitignore` to keep secrets safe:
   ```bash
   echo ".env" >> .gitignore
   ```

## Using the APIs

I can help you interact with these services using their REST APIs via bash commands. Example:

**ClickUp - Get tasks:**
```bash
curl -H "Authorization: YOUR_TOKEN" \
  "https://api.clickup.com/api/v2/list/LIST_ID/task"
```

**Notion - Query database:**
```bash
curl -X POST https://api.notion.com/v1/databases/DATABASE_ID/query \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Notion-Version: 2022-06-28"
```

**Slack - Send message:**
```bash
curl -X POST https://slack.com/api/chat.postMessage \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"channel":"CHANNEL_ID","text":"Hello!"}'
```

## Next Steps

Once you've obtained your API keys:
1. Fill in the `.env` file
2. Tell me what you'd like to do with these services
3. I can create helper scripts or integrate them into your workflows
