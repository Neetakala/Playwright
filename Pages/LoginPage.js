// Pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL = baseURL;

    this.email = page.locator('#input-email');
    this.password = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
    
    // ✅ Corrected locator
    this.successHeading = page.locator('h2:has-text("My Account")');
  }

  async navigate() {
    await this.page.goto(`${this.baseURL}index.php?route=account/login`);
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    // Wait for navigation and page load
    await this.page.waitForLoadState('networkidle');
    
    // ✅ More reliable: wait for heading to be visible
    await expect(this.successHeading).toBeVisible({ timeout: 10000 });

    // Optional: check text content too
    await expect(this.successHeading).toContainText('My Account');

    console.log('✅ Login successful and My Account page displayed.');
  }
}

module.exports = LoginPage;
