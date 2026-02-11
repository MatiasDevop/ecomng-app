import { test, expect } from '@playwright/test';
import {
  goHome,
  addFirstGridProductToCart,
  openCart,
  proceedToCheckout,
  signInFromDialog,
} from './utils';

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
    await addFirstGridProductToCart(page);
    await openCart(page);
  });

  test('adjust quantity, move to wishlist, and remove', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
    const item = page.locator('app-show-cart-item').first();
    await expect(item).toBeVisible();

    // Increase quantity using the qty selector's increment button
    const incBtn = item.locator('button', { has: page.locator('mat-icon', { hasText: 'add' }) });
    await incBtn.click();
    await expect(page.locator('app-show-cart-item')).toHaveCount(1);

    // Move to wishlist (click button with favorite_border icon)
    const moveBtn = item.locator('button', {
      has: page.locator('mat-icon', { hasText: 'favorite_border' }),
    });
    await moveBtn.click();
    await expect(page.locator('app-show-cart-item')).toHaveCount(0);

    // Wishlist now has item
    await page.locator('button[routerlink="/wishlist"]').first().click();
    await page.waitForURL('**/wishlist');
    await expect(page.getByRole('heading', { name: 'My Wishlist' })).toBeVisible();
  });

  test('proceed to checkout triggers auth then navigates', async ({ page }) => {
    await proceedToCheckout(page);
    await signInFromDialog(page);
    await page.waitForURL('**/checkout');
    await expect(page.getByRole('heading', { name: 'Checkout Page' })).toBeVisible();
  });
});
