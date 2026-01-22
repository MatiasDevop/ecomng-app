# UI & Styling

## Angular Material (M3)

- Theme configured in `src/styles.scss` via `@use '@angular/material' as mat;` and `@include mat.theme(...)`.
- Component-specific overrides for buttons, icon buttons, sidenav, list.
- Dialog shape overridden with `mat.dialog-overrides`.

## Tailwind CSS v4

- Enabled through PostCSS (`@tailwindcss/postcss`) and `@use 'tailwindcss';` in `styles.scss`.
- Utility classes are sprinkled across templates (e.g., flex/grid/padding).
- A custom responsive grid utility is defined in `styles.scss` for product cards.

## Design Notes

- Header uses Material toolbar and Tailwind spacing for layout.
- `ViewPanel` directive standardizes panel styling.
- Combined approach leverages Material components with Tailwind utilities for fast iteration.