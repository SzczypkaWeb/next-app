# next-app

SEO/marketing frontend for the services marketplace, built with
[Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS).

This is a **standalone application**, separate from the Module Federation
shell (`frontend-shell` + `react-app`). It is **not** integrated via Module
Federation - it is a plain server-rendered Next.js app that links out to the
shell app (e.g. for login) via ordinary full-page navigations.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

- `pnpm dev` - start the dev server
- `pnpm build` - production build
- `pnpm start` - run the production build
- `pnpm lint` - run ESLint
- `pnpm test` - run the Vitest test suite
- `pnpm format` - format with Prettier

## Shared UI

This app consumes `@szczypkaweb/shared-ui` the same way `frontend-shell` and
`react-app` do: as a `file:../shared-ui` dependency locally, with `.npmrc`
configured to resolve the `@szczypkaweb` scope from GitHub Packages once the
package is published there.

## Environment variables

- NEXT_PUBLIC_APP_URL=<publiczny adres frontend-shell na Azure, jak już tam wyląduje>

## Known follow-ups (out of scope for this app's bootstrap)

- Real geo-IP based location detection (the location indicator is a
  hardcoded placeholder for now).
- Real search functionality (the search field and category chips are
  static/placeholder for now).
- `/uslugi/[kategoria]/[miasto]` SEO landing pages.
