// Menu: List Keyboard Shortcuts
// Description: List out all scripts with keyboard shortcuts
// Shortcut: opt s
// Author: Benjamin Lannon
// Twitter: @lannonbr

let scripts = await readdir(path.join(kenvPath(), "scripts"));

scripts = scripts.filter((script) => script.endsWith(".js"));

let opts = [];

for (let script of scripts) {
  let file = (
    await readFile(path.join(kenvPath(), "scripts", script))
  ).toString();
  let shortcutLine = file
    .split("\n")
    .find((line) => line.startsWith("// Shortcut:"));
  if (shortcutLine) {
    opts.push({
      name: `${script}: ${shortcutLine.split("// Shortcut: ")[1]}`,
    });
  }
}

await arg("Current shortcuts", opts);
