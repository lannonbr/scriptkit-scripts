// Menu: Sync Scripts
// Description: Pull from backup scripts git repo & create shell scripts for ones that don't have one yet
// Author: Benjamin Lannon
// Twitter: @lannonbr

exec('cd ~/.kenv/scripts && git pull origin main')
await cli('create-all-bins')