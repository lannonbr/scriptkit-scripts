// Description: Pulls down trending repos from github and save to database
// Schedule: 0 * * * *
// Exclude: true

/** @type typeof import('playwright') */
const playwright = await npm("playwright");

let dbDefaults = {};

const langs = ["rust", "javascript", "typescript", "go", "python", "ruby"];

for (const lang of langs) {
  dbDefaults[lang] = [];
}

const trendingDB = db("github-trending", dbDefaults);

const browser = await playwright.chromium.launch();

for (const lang of langs) {
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(`https://github.com/trending/${lang}`);

  const repos = await page.evaluate(() => {
    const repos = document.querySelectorAll(".Box-row");

    const results = [];

    for (let repo of repos) {
      const repoName = repo.querySelector("h1 a").getAttribute("href").slice(1);
      let description = repo.querySelector("p")?.textContent.trim();
      const starCount = repo
        .querySelector("div span.d-inline-block.float-sm-right")
        ?.textContent.trim();

      if (!description) {
        description = starCount;
      } else {
        description = `${starCount} | ${description}`;
      }

      results.push({
        name: repoName,
        value: `https://github.com/${repoName}`,
        description,
      });
    }

    return results;
  });

  trendingDB.set(lang, repos).write();
}
await browser.close();
