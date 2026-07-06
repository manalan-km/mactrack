# mactrack CLI

Command-line client for mactrack: log food and check macro totals without leaving the terminal.

Part of the [mactrack monorepo](../../README.md).

## Stack

- Node.js + TypeScript
- [Stricli](https://bloomberg.github.io/stricli/) for command routing and argument parsing
- [tsup](https://tsup.egoist.dev/) for bundling
- `@mactrack/utils` for shared types and macro calculations

## Running locally

From the repo root:

```bash
pnpm install
pnpm --filter @mactrack/utils build
pnpm --filter cli dev
```

Or build and run the bundled binary:

```bash
pnpm --filter cli build
node apps/cli/dist/index.js --help   # TODO: confirm output path / bin name
```

## Usage

```bash
mactrack --help
```

```bash
mactrack macro "chicken breast" --protein 31 --carbs 0 --fat 3.6 --grams 100
mactrack report today            # macro totals for today
```


## Scripts

```bash
pnpm --filter cli dev     # run from source
pnpm --filter cli build   # bundle with tsup
```

<!-- TODO: confirm these scripts exist in apps/cli/package.json -->
