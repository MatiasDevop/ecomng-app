# Components and Pages

## Layout

- `HeaderComponent`: top app bar (Material toolbar)
- `HeaderActionsComponent`: wishlist/cart badges; auth menu; sign-in/up dialogs

## Reusable Components

- `ProductCardComponent`: displays product, projects action area; adds to cart
- `ToggleWishlistButtonComponent`: toggles wishlist state
- `QtySelectorComponent`: increment/decrement quantity; emits changes
- `StarRating`: renders 0–5 stars and projects text (e.g., count)
- `SummarizeOrder`: computes subtotal/tax/total, projects `checkoutItems` and `actionButtons`
- `BackButton`: simple router-link button with icon

## Directive

- `ViewPanel`: provides consistent panel styling via host classes

## Pages

- Products Grid (`products/:category`): side nav of categories; grid of product cards using `store.filteredProducts()`
- Product Detail (`product/:productId`): hero image, `ProductInfo`, `ViewReviews`
  - `ProductInfo`: category, rating, price, stock, description, quantity, actions
  - `ViewReviews`: `RatingSummary`, list of `ViewReviewItem`, `WriteReview` (when signed in)
- Wishlist: shows `wishlistItems` with ability to remove/clear
- Cart: lists `cartItems` (each as `ShowCartItem`), summary panel with checkout action
- Checkout: shipping + payment forms, summary with list of items, place order button
- Order Success: confirmation content with link to continue shopping

## Data Flow Highlights

- Components inject `EcommerceStore` and call methods (e.g., `addToCart`) directly.
- Signals allow templates to call selectors like `store.cartCount()`.
- Route inputs (e.g., `productId`, `category`) are fed into the store (`setProductId`, `setCategory`).