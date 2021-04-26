// Menu: Unix Timestamp
// Description: Copy current unix timestamp (in seconds) to clipboard
// Shortcut: alt shift u

/** @type typeof import('dayjs') */
const dayjs = await npm('dayjs')
await copy(dayjs().unix().toString())