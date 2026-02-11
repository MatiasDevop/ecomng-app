import { test, expect } from '@playwright/test';
import {
  goHome,
  addFirstGridProductToCart,
  openCart,
  proceedToCheckout,
  signInFromDialog,
} from './utils';

test.describe('Checkout', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
    await addFirstGridProductToCart(page);
    await openCart(page);
  });

  test('place order flow', async ({ page }) => {
    await proceedToCheckout(page);
    // If auth required, sign in via dialog
    if (
      await page
        .getByRole('heading', { name: 'Sign In' })
        .isVisible()
        .catch(() => false)
    ) {
      await signInFromDialog(page);
    }

    await page.waitForURL('**/checkout');
    await expect(page.getByRole('heading', { name: 'Checkout Page' })).toBeVisible();

    // Fill minimal shipping fields (they are optional in this mock)
    await page.getByPlaceholder('First Name').fill('Jane');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Address').fill('123 Market St');
    await page.getByPlaceholder('City').fill('Metropolis');
    await page.getByPlaceholder('State').fill('CA');
    await page.getByPlaceholder('Zip Code').fill('90001');

    // Place order
    await page.getByRole('button', { name: 'Place Order' }).click();
    await expect(page.getByText('Processing Order...')).toBeVisible();

    // Navigates to order success after processing
    await page.waitForURL('**/order-success');
    await expect(page.getByRole('heading', { name: 'Order Placed Successfully!' })).toBeVisible();
  });
});
