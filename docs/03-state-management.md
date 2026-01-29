# State Management (Signals)

Global state lives in `src/app/ecommerce-store.ts` using `signalStore` from `@ngrx/signals`.

## State Shape

- `products: Product[]` seed list
- `category: string` current filter (defaults to `All`)
- `wishlistItems: Product[]`
- `cartItems: CartItem[]`
- `user: User | undefined`
- `loading: boolean`
- `selectedProductId: string | undefined`
- `writeReview: boolean`

## Persistence

`withStorageSync({ key: 'mordern-store', select: { wishlistItems, cartItems, user } })` persists select slices to local storage.

## Computed Selectors

- `filteredProducts`: filters by `category`
- `wishlistCount`: length of `wishlistItems`
- `cartCount`: sum of quantities in `cartItems`
- `selectedProduct`: product by `selectedProductId`

## Methods (Actions)

- Category/Product selection: `setCategory(category)`, `setProductId(productId)`
- Wishlist: `addToWishlist(product)`, `removeFromWishlist(product)`, `clearWishlist()`
- Cart:
  - `addToCart(product, quantity?)` (increments if present)
  - `setItemQuantity({ productId, quantity })`
  - `addAllWishlistToCart()` (then clears wishlist)
  - `moveToWishlist(product)`
  - `removeFromCart(product)`
- Checkout: `proceedToCheckout()` (auth gate), `placeOrder()` (simulate async, clear cart, navigate)
- Auth: `signIn(...)`, `signUp(...)`, `signOut()`
- Reviews UI: `showWriteReview()`, `hideWriteReview()`; `addReview(...)` is scaffolded

## Immutability

Uses `immer.produce()` to update arrays immutably while keeping code concise.

## Signals vs RxJS

Signals provide synchronous, dependency-tracked reactivity ideal for UI/state. RxJS remains useful for asynchronous streams, e.g., demos in `AppComponent`.
