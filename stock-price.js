// Shortcut: opt s

import { getCurrentPrice } from 'yahoo-stock-prices';
let { say } = await kit('speech')

let ticker = await arg('What stock do you want to check')

const price = await getCurrentPrice(ticker.toUpperCase())

say(`${ticker.toUpperCase()} is trading at $${price}`)