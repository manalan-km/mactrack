# mactrack

A personal macro-tracking platform for logging food intake and tracking nutrition goals, built as a TypeScript monorepo. One shared core, multiple ways to interact with it: a REST API, a command-line app, and a Discord bot.

> **Status:** In active development. Interfaces and schemas are still evolving.

## Why a monorepo?

Macro tracking is a "log it wherever you are" problem. The fastest interface depends on context: a terminal when I'm at my desk, Discord when I'm on my phone, an API for anything else to build on. Rather than duplicating domain logic (macro maths, food entry shapes, validation) across three codebases, everything shared lives in [`@mactrack/utils`](./packages/utils) and each app stays a thin interface layer.

## Structure

```
mactrack/
├── apps/
│   ├── api/           # Fastify REST API
│   ├── cli/           # Command-line app (Stricli)
│   └── discord-bot/   # Discord bot
└── packages/
    └── utils/         # @mactrack/utils - shared domain logic and helpers
```

<!-- TODO: correct folder names above to match apps/ exactly; add web app row if present -->

| Package | Description |
| --- | --- |
| `apps/api` | REST API for creating and querying food entries and macro summaries. Built with Fastify. |
| `apps/cli` | Terminal client for quick logging and lookups. Built with Stricli, bundled with tsup. |
| `apps/discord-bot` | Log and query macros through Discord commands. |
| `packages/utils` | Shared types, macro calculations, and helpers, consumed by all apps via subpath exports. |

## Tech

- **Language:** TypeScript end to end
- **Workspace:** pnpm workspaces
- **API:** Fastify
- **CLI:** Stricli + tsup
- **Linting:** ESLint (flat config, `eslint.config.mts`)

## Getting started

Requires Node.js 20+ and pnpm 9+.

```bash
# clone and install all workspace dependencies
git clone https://github.com/manalan-km/mactrack.git
cd mactrack
pnpm install

# build the shared package first (apps depend on it)
pnpm --filter @mactrack/utils build

# run an app
pnpm --filter api dev            # REST API
pnpm --filter cli dev            # CLI
pnpm --filter discord-bot dev    # Discord bot (requires DISCORD_TOKEN, see its README)
```



## Development notes

- Shared code changes go in `packages/utils`; apps should not import from each other.
- `@mactrack/utils` exposes focused entry points via subpath exports (e.g. `@mactrack/utils/macros`) so apps only pull in what they use.
- Lint the whole workspace with `pnpm lint`. <!-- TODO: confirm script exists -->

## Roadmap

- [ ] Persistent storage backend 
- [ ] Daily/weekly macro summaries across all clients
- [ ] Deployment of the API

## Licence

MIT <!-- TODO: add a LICENSE file or change/remove this line -->
