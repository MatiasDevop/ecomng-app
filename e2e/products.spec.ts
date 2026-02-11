import { test, expect } from '@playwright/test';
import { goHome, addFirstGridProductToCart, goToProductDetailById } from './utils';

test.describe('Products', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
  });

  test('add product to cart from grid', async ({ page }) => {
    await addFirstGridProductToCart(page);
    // Cart badge becomes visible; navigate to cart to verify
    await page.locator('button[routerlink="/cart"]').click();
    await page.waitForURL('**/cart');
    await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
    await expect(page.locator('app-show-cart-item')).toHaveCount(1);
  });

  test('product detail shows info and allows add to cart', async ({ page }) => {
    // Click first product image to navigate to detail
    await page.locator('app-product-card img[alt="product image"]').first().click();
    const addBtn = page
      .locator('app-product-info')
      .getByRole('button', { name: /Add to Cart/i })
      .first();
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    // Navigate to cart and assert item exists
    await page.locator('button[routerlink="/cart"]').click();
    await page.waitForURL('**/cart');
    await expect(page.locator('app-show-cart-item').first()).toBeVisible();
  });

  test('out-of-stock product has disabled Add to Cart', async ({ page }) => {
    // Product id '2' (Wireless Headphones ABC) is out of stock per constants
    await goToProductDetailById(page, '2');
    const addBtn = page.getByRole('button', { name: /Out of Stock/i });
    await expect(addBtn).toBeDisabled();
  });
});
