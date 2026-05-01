# pi-obsidian-preview

Open the last Pi assistant response in Obsidian, to preview and render Markdown, LaTex, code, diff, mermaid, and more. Inspired by pi-markdown-preview, but using obsidian's markdown rendering engine for further extensibility. 

## Install

**Per-project** (only active when pi runs from your vault):

```bash
cd ~/your-vault
pi install -l npm:pi-obsidian-preview
```

**Global** (active everywhere — set `PI_OBSIDIAN_VAULT_PATH` in your shell profile first):

```bash
export PI_OBSIDIAN_VAULT_PATH="$HOME/your-vault"   # add to ~/.zshrc
pi install npm:pi-obsidian-preview
```

## Usage

| Action | How |
|---|---|
| Open last response in Obsidian | Type `/preview` in pi |
| Keyboard shortcut | `Ctrl+Shift+B` (optional — use `/preview` instead if you prefer) |

The extension writes the last assistant response to `pi-preview-latest.md` in your vault root and opens it in Obsidian.

## visual-explain skill

This package includes a skill that tells the agent it can use Obsidian's full rendering palette — Mermaid diagrams, LaTeX math, callouts, and rich formatting — to explain concepts visually. The agent produces rich responses in chat; you preview them with `/preview`.

| Trigger | How |
|---|---|
| Ask for explanation or visualization | Auto-activates on phrases like "help me visualize it", "show me", "draw a diagram", "explain how X works" |
| Invoke explicitly | `/skill:visual-explain` |

**What the agent can generate:**
- **Mermaid diagrams** — flowchart, sequenceDiagram, classDiagram, stateDiagram, erDiagram, gantt, pie, gitGraph, mindmap, timeline, and more
- **LaTeX math** — `$inline$` and `$$block$$` (math topics only)
- **Obsidian callouts** — `> [!note]`, `> [!warning]`, `> [!tip]`, and 13 more types, with custom titles and foldable variants
- **Other formatting** — highlight, strikethrough, task lists, footnotes, wikilinks, hidden comments, block anchors, YAML frontmatter

## Prerequisites

- **Obsidian CLI** on PATH — install via Homebrew: `brew install obsidian`
- **Per-project**: run pi from your vault root (`cd ~/your-vault && pi`)
- **Global**: set `PI_OBSIDIAN_VAULT_PATH` (see below)

## Configuration

Both environment variables are optional. Only set what you need.

| Env var | When to set | Default |
|---|---|---|
| `PI_OBSIDIAN_VAULT_PATH` | Only for global installs (skip for per-project) | Current directory |
| `PI_OBSIDIAN_PREVIEW_SHORTCUT` | Only to change the default shortcut | `ctrl+shift+b` |

Add to `~/.zshrc` or equivalent:

```bash
# Required for global installs:
export PI_OBSIDIAN_VAULT_PATH="$HOME/your-vault"

# Optional — customize the shortcut:
export PI_OBSIDIAN_PREVIEW_SHORTCUT="ctrl+shift+o"
```

## Troubleshooting

| Problem | Fix |
|---|---|
| `/preview` doesn't appear | Confirm pi is restarted after install |
| "obsidian: command not found" | `brew install obsidian` |
| "No assistant response" | Ask pi a question first, then `/preview` |
| Obsidian opens but file is empty | The extension retries once — wait ~2 seconds |

## License

MIT
