// Menu: Todoist Tasks
// Description: View this week's tasks from Todoist
// Author: Benjamin Lannon
// Twitter: @lannonbr
// Shortcut: opt t

/** @type typeof import('todoist') */
const todoistPackage = await npm("todoist");

/** @type typeof import('dayjs') */
const dayjs = await npm("dayjs");

// API Token can be found here: https://todoist.com/prefs/integrations
const token = await env("TODOIST_TOKEN");

const client = todoistPackage.v8(token);

await client.sync();

let items = client.items.get();

items = items.filter((item) => {
  let dueDate = dayjs(item.due.date);

  return dueDate.diff(dayjs(), "day") <= 7;
}).sort((a, b) => {
	return dayjs(a.due.date).diff(dayjs(b.due.date));
});

await arg(
  "View this week's tasks",
  items.map((item) => {
    return {
      name: item.content,
      description: `Due: ${item.due.date}`,
    };
  })
);
