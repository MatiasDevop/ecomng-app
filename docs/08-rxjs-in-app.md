# RxJS In App

`AppComponent` includes small, interview-friendly RxJS demos:

- `testPipes()`: `map` → `filter` to process an observable stream.
- `handleErrors()`: `catchError` example for graceful error handling.
- `handleSwitchMap()`: transforms events into inner observables (cancels previous).
- `handleMergeMap()`: concurrent processing of a list of IDs.
- `handleConcatMap()`: sequential processing to preserve order.

These demos are optional and commented; enable them in `ngOnInit()` to practice.
