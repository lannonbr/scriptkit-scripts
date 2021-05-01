// Menu: Build Portfolio
// Description: Runs a github actions workflow to build my site and deploy it to Netlify
// Author: Benjamin Lannon
// Twitter: @lannonbr
// Shortcut: opt b

const workflowID = 50890;

await arg(
  "are you sure you want to build the site? Press enter to continue..."
);

// triggers a workflow_dispatch event to my workflow
const { stderr, stdout } = exec(
  `/usr/local/bin/gh workflow run ${workflowID} --repo lannonbr/Portfolio`
);

console.log(stderr, stdout);
