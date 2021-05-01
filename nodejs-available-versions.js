// Menu: Available Node versions
// Description: View all supported versions of NodeJS
// Author: Benjamin Lannon
// Twitter: @lannonbr

let resp = await get(
  "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json"
);
const data = Object.entries(resp.data);

/** @type typeof import('dayjs') */
let dayjs = await npm("dayjs");

let opts = [];

for (let [version, info] of data) {
  let isSupported =
    dayjs(info.start).diff(dayjs(), "days") < 0 &&
    dayjs(info.end).diff(dayjs(), "days") > 0;

  if (isSupported) {
    opts.push({
      name: `Node ${version}`,
      description: `Maintainence ends on ${dayjs(info.end).format(
        "MMMM DD, YYYY"
      )}`,
      endDate: info.end,
    });
  }
}

opts = opts.sort((a, b) => {
  return dayjs(a.endDate).unix() - dayjs(b.endDate).unix();
});

await arg("These versions of NodeJS are currently maintained", opts);
