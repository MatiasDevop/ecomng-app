# Performance & Best Practices

## Signals and Computed

- Prefer signals for synchronous UI state.
- Use `computed` selectors for derived values (`filteredProducts`, totals).
- Avoid expensive computations inside templates; compute them in code.

## Zoneless Change Detection

- `provideZonelessChangeDetection()` removes Zone.js reliance.
- Favors predictable updates via signals and input changes.

## Immutable Updates

- Use `immer.produce()` for array/object updates to avoid mutation bugs.
- Example: add to cart merges or pushes with minimal logic.

## Router View Transitions

- Smooth visual transitions improve perceived performance.
- Pair with `style.view-transition-name` for images (e.g., product images).

## Material + Tailwind

- Keep Material component overrides consistent.
- Use Tailwind utilities for layout; avoid deep custom CSS unless necessary.

## Error Handling

- Global browser error listeners help catch unexpected issues.
- Localized error toasts provide immediate feedback for user actions.

## Testing Ideas

- Unit test store methods (wishlist/cart/checkout) with sample data.
- Component tests for `ProductCard`, `ToggleWishlistButton`, `SummarizeOrder`.
