import { test, expect } from '@playwright/test';
import { goHome, ensureSignedIn } from './utils';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await goHome(page);
  });

  test('sign in dialog opens and signs in', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    await page
      .locator('app-sign-in-dialog')
      .getByText('Sign in to your account to continue')
      .click();
    await page.getByPlaceholder('Enter your email').fill('playwright@test.com');
    await page.getByPlaceholder('Enter your password').fill('pw123456');
    await page.getByRole('button', { name: 'Sign In' }).click();
    // Avatar appears in header (img alt is user name)
    await expect(page.locator('app-header-actions img[alt="John Doe"]')).toBeVisible();
  });

  test('sign up dialog opens from sign in', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('mat-dialog-container').getByText('Sign up').click();
    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Create Account' }).click();
    // After signup, header avatar should be visible
    await expect(page.locator('app-header-actions img[alt="John Doe"]')).toBeVisible();
  });

  test('sign out from user menu', async ({ page }) => {
    await ensureSignedIn(page);
    // Open menu and sign out
    await page.locator('app-header-actions button:has(img[alt="John Doe"])').click();
    await page.getByRole('menuitem', { name: 'Sign Out' }).click();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  });
});
