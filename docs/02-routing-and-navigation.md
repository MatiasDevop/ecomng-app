# Routing and Navigation

Routes are defined in `src/app/app.routes.ts` using lazy `loadComponent`:

- `/` → redirects to `products/All`
- `products/:category` → `ProductsGridComponent`
- `product/:productId` → `ViewProductDetail`
- `wishlist` → `MyWishlistComponent`
- `cart` → `ViewCart`
- `checkout` → `Checkout`
- `order-success` → `OrderSuccessComponent`

## Router Features Used

- `withViewTransitions()`: enables browser view transitions for smoother navigation.
- `withComponentInputBinding()`: binds route params directly to component inputs.
  - Example: `ViewProductDetail` declares `productId = input.required<string>()` and the router passes `:productId` automatically.
  - Example: `ProductsGridComponent` declares `category = input<string>('All')` for `:category`.

## Navigation Flow

- Header actions use `RouterLink` to `/wishlist` and `/cart`.
- Back buttons (`BackButton`) navigate to pre-defined routes.
- `proceedToCheckout()` checks `user`; if unauthenticated, opens sign-in dialog with `checkout` flag.
- After placing order, navigation goes to `/order-success`.