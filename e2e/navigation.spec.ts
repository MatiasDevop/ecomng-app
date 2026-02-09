import { test, expect } from '@playwright/test';
import { goHome, goToCategory } from './utils';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
  });

  test('brand link returns to home', async ({ page }) => {
    await page.goto('/products/Electronics');
    await expect(page.getByRole('heading', { name: 'Electronics' })).toBeVisible();

    await page.getByRole('link', { name: 'Modern Store' }).click();
    await page.waitForURL('**/products/All');
    await expect(page.getByRole('heading', { name: 'All' })).toBeVisible();
  });

  test('switch categories via sidenav', async ({ page }) => {
    await goToCategory(page, 'Electronics');
    await expect(page.locator('app-product-card').first()).toBeVisible();

    await goToCategory(page, 'Clothing');
    await expect(page.locator('app-product-card').first()).toBeVisible();
  });
});
