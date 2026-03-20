# Getting Started with Claude Code

A no-nonsense guide to getting Claude Code running with this documentation brain. For the full deep-dive, see the [internal Notion doc](https://www.notion.so/Agentic-Coding-28c3f0b3b6ab80c29673c65e83affd68).

---

## Step 1: Install Git

**Windows:**
1. Download from [git-scm.com/downloads/win](https://git-scm.com/downloads/win)
2. Run the installer — **defaults are fine for everything**

**Mac:**
1. Open Terminal and run `git --version`
2. If Git isn't installed, macOS will prompt you to install Command Line Tools — click Install
3. Alternatively, install via [Homebrew](https://brew.sh/): `brew install git`

**Verify (both):** Open a terminal and type `git --version`

> **Which terminal?** On Windows: Windows Terminal, Command Prompt, or PowerShell. On Mac: Terminal (built in) or [iTerm2](https://iterm2.com/).

---

## Step 2: Install Claude Desktop & Claude Code

### Claude Desktop (the chat app)
1. Download from [claude.ai/download](https://claude.ai/download)
2. Install and sign in with your Anthropic account

### Claude Code (the terminal tool)
Claude Code is a command-line tool that lets Claude read, edit, and reason about files on your machine.

1. Install Node.js if you don't have it: [nodejs.org](https://nodejs.org/) (LTS version)
   - **Mac alternative:** `brew install node`
2. Open a terminal and run:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. Verify: `claude --version`
4. Full install docs: [docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## Step 3: Connect to the Fortis AI Gateway

Fortis provides an AI Gateway that gives you unlimited access to the latest models from Anthropic and Google. You must be on your **Fortis-provided hardware** for this to work.

Open a terminal and run:

```bash
fortis-ai-gateway login
```

That's it — once authenticated, Claude Code will route through the gateway automatically.

> **Not working?** Check the [internal Notion doc](https://www.notion.so/Agentic-Coding-28c3f0b3b6ab80c29673c65e83affd68) for troubleshooting and access requests.

---

## Step 4: Set Up Your Working Directory

Pick a folder where you want to work. Example:

**Mac / Git Bash:**
```bash
mkdir ~/ClaudeWorkspace
cd ~/ClaudeWorkspace
```

**Windows (Command Prompt / PowerShell):**
```
mkdir %USERPROFILE%\ClaudeWorkspace
cd %USERPROFILE%\ClaudeWorkspace
```

> `~/` is shorthand for your home folder. On Windows that's typically `C:\Users\YourName\`.

---

## Step 5: Clone This Repo

```bash
git clone https://github.com/timwilliams-prod/proj-chimera-documentation-brain.git
cd proj-chimera-documentation-brain
```

You now have the full documentation brain on your machine.

---

## Step 6: Start Your First Conversation

From inside the repo folder, just type:

```bash
claude
```

That's it. Claude Code launches, sees the repo, and is ready to work with all the documentation. Type a question or command and hit Enter.

To exit, type `/exit` or press `Ctrl+C`.

---

## Terminal Command Reference

You don't need to be a terminal expert. Here's everything you'll actually use:

### Navigation

| Command | What it does |
|---------|-------------|
| `cd folder-name` | Move into a folder |
| `cd ..` | Move up one folder |
| `cd ~/ClaudeWorkspace/proj-chimera-documentation-brain` | Jump straight to the repo (Mac / Git Bash) |
| `ls` | List files in current folder (Mac / Git Bash / PowerShell) |
| `dir` | List files in current folder (Command Prompt) |
| `pwd` | Show what folder you're in |

### Claude Code

| Command | What it does |
|---------|-------------|
| `claude` | Start Claude Code in the current folder |
| `/exit` | Exit Claude Code |
| `Ctrl+C` | Also exits (or cancels current operation) |

### Git (Keeping Your Copy Up to Date)

| Command | What it does |
|---------|-------------|
| `git pull` | Download the latest changes from the team |
| `git status` | See what files you've changed |
| `git add .` | Stage all your changes for commit |
| `git commit -m "your message"` | Save your changes with a description |
| `git push` | Upload your commits to the shared repo |

**Typical flow after making changes:**
```bash
git add .
git commit -m "Updated Empire pod plan priorities"
git push
```

**Typical flow before starting work:**
```bash
git pull
```

### The Vim Escape Hatch

If Git drops you into a scary-looking text editor during a merge conflict (you'll know because you can't type normally), just type:

```
:wq!
```

Then press `Enter`. You're free. (This saves and exits Vim.)

---

## Your First Demo

Once you're inside Claude Code, try this:

```
Read product_targets.md, all pod plans, and capacity.md.
For the M&Ms milestone: which features are most at risk of
slipping, and why? Consider staffing, dependencies, and
timeline. Give me a prioritized risk list with one concrete
recommendation per risk.
```

This is a good demo because it shows what makes the brain powerful — Claude reads across multiple files, cross-references targets against plans against staffing, and synthesizes an answer that would take a human 30+ minutes of tab-switching to assemble.

### Other Things to Try

```
What would happen if we moved one backend engineer from Battle to Empire for 2 sprints?
```

```
/risk-evaluation
```

```
Summarize what each pod is focused on for M&Ms in 2 sentences each.
```

```
Are there any features in the pod plans that aren't covered by a feature doc yet?
```

---

## Tips

- **You don't need to tell Claude which files to read.** It can see the whole repo and will find what it needs. But being specific helps it give better answers faster.
- **Slash commands** (`/risk-evaluation`, `/roadmap-update`, etc.) are built-in workflows. Type them exactly as shown.
- **Claude remembers context within a conversation.** You can say "now do the same thing for Battle pod" and it knows what you mean.
- **If something looks wrong, ask Claude to explain its reasoning.** It will show you which files it read and how it reached its conclusions.
- **Always `git pull` before starting work** to make sure you have the latest version.
