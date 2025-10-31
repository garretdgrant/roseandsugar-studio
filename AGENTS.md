# Repository Guidelines

## Project Structure & Module Organization

The studio runs from this repo’s root. Sanity schemas live in `schemaTypes/`; `index.ts` re-exports `class.ts` and `pre-designs.ts`, so add new document definitions there. Desk structure customizations and the Vision tool live in `sanity.config.ts`; update its orderable list whenever you introduce a new type. Static brand assets belong in `static/`. `dist/` is produced by `pnpm build`—regenerate it rather than editing generated files.

## Build, Test, and Development Commands

- `pnpm install` — Sync dependencies after cloning or when `pnpm-lock.yaml` changes.
- `pnpm dev` — Run the hot-reloading Studio on `http://localhost:3333`.
- `pnpm start` — Serve the production bundle for regression smoke tests.
- `pnpm build` — Compile the static Studio into `dist/`.
- `pnpm deploy` — Publish the latest build to Sanity managed hosting.
- `pnpm deploy-graphql` — Refresh the GraphQL API when schemas change.
- `pnpm prettier` — Apply repo-wide formatting before committing.

## Coding Style & Naming Conventions

All code is TypeScript; add explicit types for schema fields and shared helpers. Prettier enforces single quotes, no semicolons, and a 100-character line length—run it instead of formatting by hand. ESLint extends `@sanity/eslint-config-studio`; resolve warnings before reviews. Name schema files after their document types (`class.ts`) and export schema objects with PascalCase identifiers to match Sanity conventions.

## Testing Guidelines

No automated suite exists yet. When schema or desk changes affect editors, describe the manual test plan in your PR and verify via `pnpm dev`. For migrations that touch production data, dry-run in a draft dataset or coordinate with the content team before deploying.

## Commit & Pull Request Guidelines

Commits follow the existing conventional prefixes (`feat:`, `chore:`, `fix:`) with short imperative summaries (`feat: add waitlist capacity`). Keep schema changes and data migrations grouped so history stays traceable. PRs must outline the change, link Jira/Linear issues, include Studio screenshots or screen recordings for UI updates, list tests performed, and call out any follow-up scripts.

## Security & Configuration Tips

Authenticate locally with `sanity login`; long-lived `SANITY_AUTH_TOKEN` values belong in a personal `.env`, not in Git. The project targets `p984b1z5/production`, so confirm you have the correct dataset before running `deploy` or `deploy-graphql`. When requesting new tokens or roles, document the required scopes so ops can provision them safely.
