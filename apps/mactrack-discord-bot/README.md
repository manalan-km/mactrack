# mactrack Discord bot

Discord bot for mactrack: log food and check macro totals from any device with Discord, which in practice means logging from your phone without needing a dedicated app.

Part of the [mactrack monorepo](../../README.md).

## Stack

- Node.js + TypeScript
- discord.js 
- `@mactrack/utils` for shared types and macro calculations

## Setup

1. Create an application and bot at the [Discord Developer Portal](https://discord.com/developers/applications).
2. Copy the bot token.
3. Invite the bot to your server with the applications.commands scope. <!-- TODO: confirm required scopes/permissions -->
4. Create an env file:

```bash
# apps/discord-bot/.env
DISCORD_TOKEN=your-bot-token
```

## Running locally

From the repo root:

```bash
pnpm install
pnpm --filter @mactrack/utils build
pnpm --filter discord-bot dev
```

## Scripts

```bash
pnpm --filter discord-bot dev     # run with live reload
pnpm --filter discord-bot build   # compile
```
