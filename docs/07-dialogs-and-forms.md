# Dialogs & Forms

## Sign In Dialog

- File: `src/app/components/sign-in-dialog/sign-in-dialog.ts`
- Uses Reactive Forms (`NonNullableFormBuilder`), Material form field & input.
- Toggles password visibility with a signal.
- On submit: validates, calls `store.signIn(...)`, and supports `checkout` flow.

## Sign Up Dialog

- File: `src/app/components/sign-up-dialog/sign-up-dialog.ts`
- Reactive Form with name/email/password/confirmPassword.
- On submit: calls `store.signUp(...)` and can return to checkout.

## Dialog Defaults

- Provided via `MAT_DIALOG_DEFAULT_OPTIONS` in `app.config.ts` (appearance, labels).

## Forms in Checkout

- `ShippingForm` and `PaymentForm` are imported by `Checkout` page (see folder structure).
- Submit is gated by `store.loading()` and simulated order placement.