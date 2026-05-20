// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test('login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter username
  await page.locator('input[name="username"]').fill('Admin');

  // Enter password
  await page.locator('input[name="password"]').fill('admin123');

  // Click login button
  await page.locator('button[type="submit"]').click();

  // Expects page to navigate to dashboard
  await expect(page).toHaveURL(/dashboard/);
});
