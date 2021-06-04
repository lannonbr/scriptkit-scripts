// Menu: List Keyboard Shortcuts
// Description: List out all scripts with keyboard shortcuts
// Shortcut: opt s
// Author: Benjamin Lannon
// Twitter: @lannonbr

let { buildMenu } = await cli("fns");
let scriptMetadata = await buildMenu();

console.log(scriptMetadata)

let opts = [];

for (let script of scriptMetadata) {
  if (script.shortcut) {
    opts.push({
      name: `${script.command}: ${script.shortcut}`,
    });
  }
}

console.log(opts)

await arg("Current shortcuts", opts);
