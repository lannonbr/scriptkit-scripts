let color = await arg(`Choose a color`, [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
]);
let mult = await arg(
  `Choose a multiple of 100`,
  `
  <div class="flex justify-center">
    <div class="w-10 h-10 text-${color}-100 flex items-center justify-center">100</div>
    <div class="w-10 h-10 text-${color}-200 flex items-center justify-center">200</div>
    <div class="w-10 h-10 text-${color}-300 flex items-center justify-center">300</div>
    <div class="w-10 h-10 text-${color}-400 flex items-center justify-center">400</div>
    <div class="w-10 h-10 text-${color}-500 flex items-center justify-center">500</div>
    <div class="w-10 h-10 text-${color}-600 flex items-center justify-center">600</div>
    <div class="w-10 h-10 text-${color}-700 flex items-center justify-center">700</div>
    <div class="w-10 h-10 text-${color}-800 flex items-center justify-center">800</div>
    <div class="w-10 h-10 text-${color}-900 flex items-center justify-center">900</div>
  </div>
`
);

let place = await arg("What are we styling", [
  { name: "border", value: "border" },
  { name: "text-color", value: "text" },
  { name: "background", value: "bg" },
]);

copy(`${place}-${color}-${mult}`);
