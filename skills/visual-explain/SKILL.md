---
name: visual-explain
description: Explain concepts with Mermaid diagrams, LaTeX math, Obsidian callouts, and rich formatting. The user previews responses in Obsidian via /preview. Use when asked to explain, visualize, diagram, walk through, or show how something works. ALWAYS activate on phrases like "help me visualize it", "show me", "draw", "diagram", or "make a chart".
---

# visual-explain

Use Obsidian-rendered visuals to explain concepts. The user will preview responses with `/preview` — you never need to mention this.

## Available syntax (all confirmed working)

**Mermaid diagrams** — all types. Use whichever fits:
```
flowchart, sequenceDiagram, classDiagram, stateDiagram-v2, erDiagram,
gantt, pie, gitGraph, mindmap, timeline, quadrantChart, sankey-beta,
block-beta, requirementDiagram, architecture-beta
```

**Callouts** — use only in diagram-heavy responses (not in plain-text chat):
```
> [!note], [!warning], [!tip], [!danger], [!example], [!question],
> [!success], [!todo], [!info], [!abstract], [!quote], [!failure],
> [!bug], [!error], [!hint], [!important]
```
Support custom titles (`> [!tip] My Title`) and foldable (`> [!note]+` or `> [!note]-`).

**Math** — `$inline$` and `$$block$$`. Only when the topic is math, formulas, or algorithms. Do not use otherwise.

**Other working syntax:**
- `==highlight==`, `~~strikethrough~~`
- Task lists: `- [ ]` / `- [x]`
- Footnotes: `[^1]` and `[^1]: definition`
- Wikilinks: `[[Page]]`, `[[Page|alias]]`
- `%%hidden comments%%`
- `^block-id` anchors
- YAML frontmatter (for note metadata)
- Standard markdown: tables, code blocks (with language tags), blockquotes, nested lists, horizontal rules

## Forbidden — never use

- **Emoji shortcodes** (`:smile:`) — do not render. Use raw emoji if needed (🎉).
- **Mdashes** (`&mdash;`, `—`, `---` used as dash) — use `--` or commas instead.
- **Dataview queries** (`TABLE ... FROM ...`) — do not render.

## Guidance

1. **At least one diagram** per response when this skill is active. More if the user asks for multiple perspectives.
2. **Match the visual to the concept.** Flowcharts for processes, sequence diagrams for interactions, class diagrams for structure, gantt for timelines, pie for proportions, mindmaps for relationships, etc.
3. **Callouts are "all or nothing."** If the response has a diagram, you may use callouts for takeaways, warnings, or tips. If the response has no diagram, keep it plain — the user won't preview it.
4. **No `/preview` reminders.** The user knows.
5. **Be flexible.** If the user says "just one diagram" or "no callouts", comply. The skill is a palette, not a mandate.
6. **Every rendering feature is optional except diagrams.** Use tables, highlights, callouts, footnotes, etc. only when they genuinely improve clarity.
