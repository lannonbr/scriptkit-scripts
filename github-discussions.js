// Menu: GitHub Discussions
// Description: Open the Discussions pane of a GitHub repo
// Author: Benjamin Lannon
// Twitter: @lannonbr

let repo = await arg("Enter repo (ex: johnlindquist/kit):");

exec(`open https://github.com/${repo}/discussions`);
