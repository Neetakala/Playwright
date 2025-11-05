// tests/Login.spec.js
const { test, expect } = require('@playwright/test');

test('[@smoke] User can log in successfully', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.fill('#input-email', 'neeta.kalasshetti@gmail.com');
  await page.fill('#input-password', 'Test@123');
  await page.click('input[value="Login"]');
  await expect(page.locator('h2')).toContainText('My Account');
  //test git
});

test('[@regression] Verify login with invalid credentials', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.fill('#input-email', 'wrong@example.com');
  await page.fill('#input-password', 'wrongpass');
  await page.click('input[value="Login"]');
  await expect(page.locator('.alert-danger')).toBeVisible();
});
