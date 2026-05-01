# pi-obsidian-preview

Open the last Pi assistant response in Obsidian — right from pi's TUI.

## Install

```bash
pi install npm:pi-obsidian-preview
```

## Usage

| Action | How |
|---|---|
| Open last response in Obsidian | Type `/preview` in pi |
| Keyboard shortcut | `Ctrl+Shift+B` |

The extension writes the last assistant response to `pi-preview-latest.md` in your vault root and opens it in Obsidian.

## Prerequisites

- **Obsidian CLI** on PATH — install via Homebrew: `brew install obsidian`
- **Run pi from your vault root** — `cd ~/your-vault && pi`

## Configuration

Customize the keyboard shortcut by setting an environment variable:

```bash
export PI_OBSIDIAN_PREVIEW_SHORTCUT="ctrl+shift+o"
```

Add this to your `~/.zshrc` or equivalent shell profile.

## Troubleshooting

| Problem | Fix |
|---|---|
| `/preview` doesn't appear | Confirm pi is restarted after install |
| "obsidian: command not found" | `brew install obsidian` |
| "No assistant response" | Ask pi a question first, then `/preview` |
| Obsidian opens but file is empty | The extension retries once — wait ~2 seconds |

## License

MIT
