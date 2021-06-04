// Menu: GitHub Trending
// Description: Show today's Trending GitHub Repos for various languages

const trendingDB = await db("github-trending");

const langs = ["rust", "javascript", "typescript", "go", "python", "ruby"];
for (const lang of langs) {
  onTab(lang, async () => {
    const repo = await arg("Select a repo to open it", trendingDB[lang]);
    exec(`open ${repo}`);
  });
}
