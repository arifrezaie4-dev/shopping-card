# Shopping Cart

A shopping cart application being migrated to Next.js with the App Router,
strict TypeScript, Tailwind CSS, and Redux Toolkit.

## Current migration phase

Phase 2 migrates the responsive home and product listing pages to the Next.js
App Router. The shared header and product actions use the existing Redux store;
the cart page remains in `src/legacy` for a later phase. Existing UI source is
retained under `src/legacy`, and product images remain in `public/images`.

## Stack

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS 4 through its PostCSS integration
- Redux Toolkit and React Redux

The Redux store is created per provider instance. Cart storage is read and
written only in client-side effects; reducers contain no browser storage or UI
side effects. Invalid or unavailable stored data is reported in the browser
console and does not prevent the application from starting.

## Development

```sh
npm install
npm run dev
```

Available checks:

```sh
npm run build
npm run lint
npm run typecheck
```

## Structure

```text
src/
  app/                 App Router layout, home and products pages, styles, providers
  components/           Shared header and reusable product components
  data/products.ts     Typed local product catalog
  lib/
    features/          Redux Toolkit slices
    cart-storage.ts    Client-side cart persistence helpers
    hooks.ts           Typed Redux hooks
    store.ts           Per-provider Redux store factory
  legacy/              Existing UI retained for the next migration phase
  types/product.ts     Product and cart item types
public/
  images/              Existing product images
```
