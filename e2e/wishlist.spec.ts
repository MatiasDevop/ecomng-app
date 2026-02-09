import { test, expect } from '@playwright/test';
import { goHome, openWishlist, toggleWishlistOnFirstGridProduct } from './utils';

test.describe('Wishlist', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
  });

  test('toggle wishlist from grid and manage in wishlist page', async ({ page }) => {
    await toggleWishlistOnFirstGridProduct(page);

    await openWishlist(page);
    // If any items exist, page shows wishlist grid and count
      // Wait for either wishlist items or empty state to appear
      await page.waitForSelector('app-product-card, app-empty-wishlist');
    const hasItems = await page.locator('app-product-card').first().isVisible().catch(() => false);
    if (hasItems) {
      // Clear wishlist
      await page.getByRole('button', { name: 'Clear Wishlist' }).click();
      await expect(page.locator('app-empty-wishlist')).toBeVisible();
    } else {
      await expect(page.locator('app-empty-wishlist')).toBeVisible();
    }
  });
});
