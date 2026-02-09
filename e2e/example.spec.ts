import { expect, test } from '@playwright/test';

test.describe('Smoke', () => {
  test('app loads with correct title and header', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/NgEcommerce/);
    await expect(page.getByRole('link', { name: 'Modern Store' })).toBeVisible();

    // Redirects to products/All
    await page.waitForURL('**/products/All');
    await expect(page.getByRole('heading', { name: 'All' })).toBeVisible();
    // Ensure product cards render
    await expect(page.locator('app-product-card').first()).toBeVisible();
  });
});
