# Interview Prep Q&A

## Architecture

- Q: Why standalone components?
  - A: Reduced boilerplate and clearer feature organization; Angular 15+ encourages this pattern.

- Q: What is zoneless change detection?
  - A: Removes Zone.js, relying on explicit reactive patterns (signals) and input updates for change detection.

## Router

- Q: What does `withComponentInputBinding()` do?
  - A: It binds route params and data directly to component `input()`s (e.g., `productId`), simplifying parameter handling.

- Q: Why `withViewTransitions()`?
  - A: Enables smoother UI transitions on navigation, improving UX.

## State (Signals)

- Q: Benefits of signals vs RxJS?
  - A: Signals are synchronous, dependency-tracked, ideal for UI state; RxJS excels at async streams. Both can co-exist.

- Q: Why `immer`?
  - A: Easier immutable updates on complex arrays/objects without verbose cloning.

- Q: What does `withStorageSync` provide?
  - A: Local storage persistence of selected state slices (wishlist, cart, user) to improve UX continuity.

## UI & Styling

- Q: How are Material and Tailwind used together?
  - A: Material provides components and theme; Tailwind utilities handle layout/spacing. Styles are overridden in `styles.scss`.

## Forms & Dialogs

- Q: How are forms validated?
  - A: Reactive Forms with validators; dialogs submit and call store methods to update auth state.

## Patterns in Code

- Standalone components, signals store, computed selectors, lazy `loadComponent`, and feature-based directories.
- Use of `style.view-transition-name` for shared element transitions.

## Potential Improvements

- Implement `addReview` and integrate review persistence.
- Add unit/component tests.
- Introduce a backend/API and move seed data out of the client.

Review code files referenced across docs for hands-on familiarity before interviews.