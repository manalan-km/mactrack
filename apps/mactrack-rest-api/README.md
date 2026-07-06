# mactrack API

Fastify REST API for mactrack. Exposes food entries and macro summaries over HTTP so any client (CLI, Discord bot, future web app) can log and query nutrition data through one interface.

Part of the [mactrack monorepo](../../README.md).

## Stack

- Node.js + TypeScript
- [Fastify](https://fastify.dev/) for routing and validation
- `@mactrack/utils` for shared types and macro calculations

## Running locally

From the repo root:

```bash
pnpm install
pnpm --filter @mactrack/utils build
pnpm --filter api dev
```

The server starts on `http://localhost:3000` by default.

### Configuration

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3000` | Port the server listens on |
| `HOST` | `0.0.0.0` | Bind address |

<!-- TODO: replace with the actual env vars the API reads, or delete the table if there are none yet -->

## Endpoints

<!-- TODO: replace with real routes. Example shape: -->

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/health` | Liveness check |
| `POST` | `/macro` | Log a food entry |
| `GET` | `/entries` | List entries (filter by date) |
| `GET` | `report` | Macro totals for a day |


## Scripts

```bash
pnpm --filter api dev     # run with live reload
pnpm --filter api build   # compile
pnpm --filter api start   # run compiled output
```
