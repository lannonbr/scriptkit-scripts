// Menu: List Keyboard Shortcuts
// Description: List out all scripts with keyboard shortcuts
// Shortcut: opt s
// Author: Benjamin Lannon
// Twitter: @lannonbr

let scriptMetadata = JSON.parse(
  (await readFile(path.join(kenvPath(), "cache", "menu-cache.json"))).toString()
);

let opts = [];

for (let script of scriptMetadata) {
  if (script.shortcut) {
    opts.push({
      name: `${script.value}: ${script.shortcut}`,
    });
  }
}

await arg("Current shortcuts", opts);
