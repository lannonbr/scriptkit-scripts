// Name: Create Notion Event

/** @type {import("@johnlindquist/kit")} */

/** @type {import("@notionhq/client")} */
const { Client } = await npm("@notionhq/client");

const eventName = await arg("Enter event name:");
const date = await arg("Enter event date (YYYY-MM-DD):");
const type = await arg("Enter event type:", ["Game", "Manga"]);

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const database_id = process.env.NOTION_EVENT_DB;

await notion.pages.create({
  parent: {
    database_id,
  },
  properties: {
    Name: {
      title: [
        {
          text: {
            content: eventName,
          },
        },
      ],
    },
    Release: {
      date: {
        start: date,
      },
    },
    Type: {
      select: {
        name: type,
      },
    },
  },
});
