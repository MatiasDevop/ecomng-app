# Overview

This app is a modern Angular 20 standalone application for a small ecommerce storefront. It demonstrates:

- Standalone components and feature-based file structure.
- Signals-based global state with `@ngrx/signals` and local computed signals.
- Angular Router with view transitions and component input binding.
- Angular Material (M3) theming + Tailwind CSS utilities.
- Zoneless change detection for performance.

## Tech Stack

- Angular 20 (standalone components)
- Router: `withViewTransitions`, `withComponentInputBinding`
- State: `@ngrx/signals` `signalStore` + `immer` for immutable updates
- Persistence: `@angular-architects/ngrx-toolkit` `withStorageSync`
- UI: Angular Material, Tailwind CSS v4
- Notifications: `@ngxpert/hot-toast`
- RxJS demos for interview practice

## App Architecture

- Bootstrap: `src/main.ts` calls `bootstrapApplication(AppComponent, appConfig)`
- App config: `src/app/app.config.ts` wires providers:
  - `provideZonelessChangeDetection()`
  - `provideBrowserGlobalErrorListeners()`
  - `provideRouter(routes, withComponentInputBinding(), withViewTransitions())`
  - `provideHotToastConfig(...)` and Material dialog defaults
- Global Store: `src/app/ecommerce-store.ts`
  - State slices: `products`, `category`, `wishlistItems`, `cartItems`, `user`, `loading`, `selectedProductId`, `writeReview`
  - Computed selectors: `filteredProducts`, `wishlistCount`, `cartCount`, `selectedProduct`
  - Methods: wishlist/cart actions, checkout flow, auth, reviews
- Routing: `src/app/app.routes.ts` lazy-loads pages:
  - `products/:category`, `product/:productId`, `wishlist`, `cart`, `checkout`, `order-success`
- UI Layout: `HeaderComponent` + `HeaderActionsComponent`
- Pages: product grid, product detail, wishlist, cart, checkout, order success
- Components: product card, wishlist toggle, qty selector, star rating, summarize order, back button
- Styles: `src/styles.scss` defines Material theme overrides and uses Tailwind utilities

## Data

- Seed data: `src/app/constant.ts` exports `products: Product[]` with reviews
- Models: `src/app/models/` define `Product`, `CartItem`, `Order`, `User`, `UserReview`

## Key Flows

- Browsing: `products/:category` filters products using store’s `category`
- Detail view: `product/:productId` uses store’s `selectedProductId`
- Wishlist: add/remove/toggle; bulk move to cart
- Cart: adjust quantity, move to wishlist, remove
- Checkout: summarize totals and simulate order placement
- Auth: sign in/up dialogs; `user` enables checkout and review writing

See the subsequent docs for deep dives on each area.