import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const PREVIEW_FILE = "pi-preview-latest.md";

/**
 * Obsidian Preview Extension
 *
 * Opens the last assistant response as a markdown file in Obsidian.
 *
 * Usage:
 *   /preview        — open last assistant response in Obsidian
 *   ctrl+shift+b    — keyboard shortcut (configurable via PI_OBSIDIAN_PREVIEW_SHORTCUT env var)
 *
 * Configuration:
 *   Set PI_OBSIDIAN_PREVIEW_SHORTCUT to any valid pi key combo
 *   (e.g. export PI_OBSIDIAN_PREVIEW_SHORTCUT="ctrl+shift+o")
 *   to override the default ctrl+shift+b shortcut.
 */

async function extractAndOpen(ctx: any, pi: ExtensionAPI) {
  const branch = ctx.sessionManager.getBranch();
  let markdown = "";
  for (let i = branch.length - 1; i >= 0; i--) {
    const entry = branch[i] as any;
    if (entry?.type === "message" && entry?.message?.role === "assistant") {
      const parts = (entry.message.content ?? [])
        .filter((c: any) => c.type === "text")
        .map((c: any) => c.text);
      markdown = parts.join("\n");
      break;
    }
  }

  if (!markdown.trim()) {
    pi.sendMessage({
      customType: "preview-info",
      content: "No assistant response to preview.",
      display: true,
    });
    return;
  }

  // Write to gitignored file in vault root
  await writeFile(join(ctx.cwd, PREVIEW_FILE), markdown, "utf-8");

  // Wait for Obsidian's file watcher to pick up the new file
  await new Promise((r) => setTimeout(r, 500));

  // Open in Obsidian — retry once if file not yet indexed
  for (const attempt of [0, 1]) {
    try {
      await pi.exec("obsidian", ["open", `path=${PREVIEW_FILE}`]);
      break;
    } catch {
      if (attempt === 0) await new Promise((r) => setTimeout(r, 1000));
      else {
        pi.sendMessage({
          customType: "preview-error",
          content: "Could not open preview in Obsidian.",
          display: true,
        });
      }
    }
  }
}

export default function (pi: ExtensionAPI) {
  // /preview command
  pi.registerCommand("preview", {
    description: "Open last assistant response in Obsidian",
    handler: async (_args, ctx) => {
      await extractAndOpen(ctx, pi);
    },
  });

  // Keyboard shortcut (configurable via PI_OBSIDIAN_PREVIEW_SHORTCUT env var)
  const shortcutKey = process.env.PI_OBSIDIAN_PREVIEW_SHORTCUT || "ctrl+shift+b";
  pi.registerShortcut(shortcutKey, {
    description: "Preview last assistant response in Obsidian",
    handler: async (ctx) => {
      await extractAndOpen(ctx, pi);
    },
  });
}
