# NgEcommerce

An Angular 20 standalone app demonstrating modern patterns: Signals-based state via `@ngrx/signals`, Angular Material (M3) theming, Tailwind CSS utility styling, zoneless change detection, and router features like view transitions and component input binding.

## Quick Start

```bash
npm install
npm start
```

Visit http://localhost:4200.

## Study Guide & Documentation

A comprehensive study guide lives in the `docs/` folder:

- Overview: [docs/01-overview.md](docs/01-overview.md)
- Routing: [docs/02-routing-and-navigation.md](docs/02-routing-and-navigation.md)
- State: [docs/03-state-management.md](docs/03-state-management.md)
- Components & Pages: [docs/04-components-and-pages.md](docs/04-components-and-pages.md)
- Data Models: [docs/05-data-models.md](docs/05-data-models.md)
- UI & Styling: [docs/06-ui-styling.md](docs/06-ui-styling.md)
- Dialogs & Forms: [docs/07-dialogs-and-forms.md](docs/07-dialogs-and-forms.md)
- RxJS Demos: [docs/08-rxjs-in-app.md](docs/08-rxjs-in-app.md)
- Persistence: [docs/09-persistence-and-storage.md](docs/09-persistence-and-storage.md)
- Performance & Practices: [docs/10-performance-and-best-practices.md](docs/10-performance-and-best-practices.md)
- Interview Prep Q&A: [docs/11-interview-prep.md](docs/11-interview-prep.md)

Start with [docs/01-overview.md](docs/01-overview.md) for the big picture.

## Dev Commands

- Serve: `npm start` (or `ng serve`)
- Build: `npm run build`
- Test: `npm test`

## Notes

- This app uses standalone components; there are no NgModules.
- Signals power local and global state; see `src/app/ecommerce-store.ts`.
- Tailwind CSS v4 and Angular Material styles are combined in `src/styles.scss`.
