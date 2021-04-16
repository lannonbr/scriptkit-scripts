// Menu: GitHub Discussions
// Description: Open the Discussions pane of a GitHub repo
// Author: Benjamin Lannon
// Twitter: @lannonbr

let { focusTab } = await kit("chrome");
let repo = await arg("Enter repo (ex: johnlindquist/kit):");

focusTab(`https://github.com/${repo}/discussions`);
