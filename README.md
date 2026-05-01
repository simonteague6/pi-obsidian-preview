# pi-obsidian-preview

Open the last Pi assistant response in Obsidian — right from pi's TUI.

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
