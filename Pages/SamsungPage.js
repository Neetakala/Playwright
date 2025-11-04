// Pages/SamsungPage.js
const { expect } = require('@playwright/test');

class SamsungPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('//button[@class="btn btn-default btn-lg"]');
    this.product = page.locator('.product-layout', { hasText: 'Samsung Galaxy Tab 10.1' });
    this.successAlert = page.locator('.alert-success');
    this.cartTotal = page.locator('#cart-total');
  }

  async navigate(baseURL) {
    await this.page.goto(baseURL);
  }

  async searchSamsung() {
    await this.searchInput.fill('Samsung');
    await this.searchButton.click();
    await expect(this.page.locator('h1')).toHaveText('Search - Samsung');
  }

  async addSamsungToCart() {
    await this.product.locator("button[onclick*='cart.add']").click();
    await expect(this.successAlert).toContainText('Success: You have added Samsung Galaxy Tab 10.1');
  }
}

module.exports = SamsungPage;
