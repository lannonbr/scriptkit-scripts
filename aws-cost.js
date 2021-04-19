// Menu: View AWS Cost of time period
// Description: Warning: This will cost $0.01 per run

let start = await arg('Enter start date (YYYY-MM-DD)')
let end = await arg('Enter end date (YYYY-MM-DD)')

let {stdout} = exec(`aws ce get-cost-and-usage --time-period Start=${start},End=${end} --granularity MONTHLY --metrics "BlendedCost"`)

let data = JSON.parse(stdout)

let monthCost = data.ResultsByTime[0].Total.BlendedCost

let { say } = await kit('speech')
await say(`Your AWS bill is $${Number(monthCost.Amount).toFixed(2)}`)