import { Page, expect } from '@playwright/test';

export async function goHome(page: Page) {
  await page.goto('/');
  await page.waitForURL('**/products/All');
}

export async function goToCategory(page: Page, name: 'All' | 'Electronics' | 'Clothing') {
  await page.goto(`/products/${name}`);
  await expect(page.getByRole('heading', { name })).toBeVisible();
}

export async function openCart(page: Page) {
  // Router link buttons do not have accessible names, use attribute-based selector
  await page.locator('button[routerlink="/cart"]').click();
  await page.waitForURL('**/cart');
}

export async function openWishlist(page: Page) {
  await page.locator('button[routerlink="/wishlist"]').click();
  await page.waitForURL('**/wishlist');
}

export async function addFirstGridProductToCart(page: Page) {
  const firstCard = page.locator('app-product-card').first();
  await expect(firstCard).toBeVisible();
  await firstCard.getByRole('button', { name: /Add to Cart/i }).click();
}

export async function toggleWishlistOnFirstGridProduct(page: Page) {
  const firstToggle = page.locator('app-product-card app-toggle-wishlist-button button').first();
  await expect(firstToggle).toBeVisible();
  await firstToggle.click();
}

export async function goToProductDetailById(page: Page, id: string) {
  await page.goto(`/product/${id}`);
  await page.waitForURL(`**/product/${id}`);
}

export async function proceedToCheckout(page: Page) {
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
}

export async function signInFromDialog(page: Page) {
  // Dialog should be visible
  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  // Fill and submit
  const email = page.getByPlaceholder('Enter your email');
  const password = page.getByPlaceholder('Enter your password');
  await email.fill('e2e@test.com');
  await password.fill('secret123');
  await page.getByRole('button', { name: 'Sign In' }).click();
}

export async function ensureSignedIn(page: Page) {
  // If header shows Sign in, perform login
  const signInBtn = page.getByRole('button', { name: 'Sign in' });
  if (await signInBtn.isVisible().catch(() => false)) {
    await signInBtn.click();
    await signInFromDialog(page);
  }
}
