// Menu: Learn with Jason Search
// Description: Browse Learn With Jason Episodes
// Author: Benjamin Lannon
// Twitter: @lannonbr

let episode = await arg(
  `Search for an episode of Learn with Jason`,
  async () => {
    const resp = await get("https://www.learnwithjason.dev/episodes.json");

    console.log(JSON.stringify(resp.data.episodes[0], null, 2));

    return resp.data.episodes.map((episode) => {
      return {
        value: episode.slug.current,
        name: episode.title,
      };
    });
  }
);

let url = `https://www.learnwithjason.dev/${episode}`;

exec(`open ${url}`);
