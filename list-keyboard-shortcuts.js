// Menu: List Keyboard Shortcuts
// Description: List out all scripts with keyboard shortcuts
// Shortcut: opt s
// Author: Benjamin Lannon
// Twitter: @lannonbr

let scripts = await getScripts();

let opts = [];

for (let script of scripts) {
  if (script.shortcut) {
    opts.push({
      name: `${script.command}: ${script.shortcut}`,
    });
  }
}

await arg("Current shortcuts", opts);
