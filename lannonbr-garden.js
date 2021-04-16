// Menu: Lannonbr.com Garden
// Description: Search posts on lannonbr.com
// Author: Benjamin Lannon
// Twitter: @lannonbr

let resp = await get("https://lannonbr.com/posts.json");

let post = await arg("What post do you want to read", resp.data.items);

let { focusTab } = await kit("chrome");

focusTab(post);
copy(post);
