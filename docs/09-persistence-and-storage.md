# Persistence & Storage

The app uses `withStorageSync` from `@angular-architects/ngrx-toolkit` to persist slices of the signals store to local storage.

```ts
withStorageSync({
  key: 'mordern-store',
  select: ({ wishlistItems, cartItems, user }) => ({ wishlistItems, cartItems, user }),
});
```

- Only `wishlistItems`, `cartItems`, and `user` are persisted.
- On reload, state rehydrates automatically.
- This keeps UX consistent across sessions without a backend.

Note: The key string is `mordern-store`; you can rename it to `modern-store` for clarity if desired.
