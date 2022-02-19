// Name: Get Upcoming Notion Events

/** @type {import("@johnlindquist/kit")} */

/** @type {import("@notionhq/client")} */
const { Client } = await npm("@notionhq/client");

/** @type {import("dayjs")} */
const dayjs = await npm("dayjs");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const database_id = process.env.NOTION_EVENT_DB;

const response = await notion.databases.query({
  database_id,
  filter: {
    property: "Release",
    date: {
      on_or_after: dayjs().format("YYYY-MM-DD"),
    },
  },
});

const contents = response.results.map((item) => {
  const props = item.properties;

  return {
    name: props.Name.title[0].text.content,
    date: props.Release.date.start,
    type: props.Type.select.name,
  };
});

await arg(
  "Here are the upcoming events",
  contents.map((item) => {
    return {
      name: `${item.type}: ${item.name}`,
      description: `Coming ${dayjs(item.date).format("MMMM DD, YYYY")}`,
    };
  })
);
