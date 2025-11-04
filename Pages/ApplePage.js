// Pages/ApplePage.js
const { expect } = require('@playwright/test');

class ApplePage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL = baseURL;

    // Locators
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('//button[@class="btn btn-default btn-lg"]');
    this.searchHeading = page.locator('h1');
    this.product = page.locator('.product-thumb', { hasText: 'Apple Cinema 30"' });
    this.productTitle = page.locator('h1');
    this.brandDetailsList = page.locator('.list-unstyled').nth(7);
    this.checkbox = page.locator('input[value="10"]');
    this.textInput = page.locator('#input-option208');
    this.colorSelect = page.locator('#input-option217');
    this.textArea = page.locator('#input-option209');
    this.uploadButton = page.locator('#button-upload222');
    this.timePickerBtn = page.locator('.input-group-btn').nth(2);
  }

  async navigate() {
    await this.page.goto(this.baseURL);
  }

  async searchApple() {
    await this.searchInput.fill('Apple');
    await this.searchButton.click();
    await expect(this.searchHeading).toHaveText('Search - Apple');
    console.log('✅ You have results for search - Apple');
  }

  async openAppleProduct() {
    await this.product.locator("button[onclick*='cart.add']").click();
    await expect(this.productTitle).toHaveText('Apple Cinema 30"');
    console.log('✅ You have details for Apple Cinema 30"');
  }

  async printBrandDetails() {
    const listcount = await this.brandDetailsList.count();
    for (let i = 0; i < listcount; i++) {
      const text = await this.brandDetailsList.nth(i).textContent();
      console.log(`Brand Detail ${i + 1}: ${text}`);
    }
  }

  async fillProductOptions() {
    await this.checkbox.click();
    await this.textInput.fill('test');
    await this.colorSelect.selectOption({ value: '1' });
    await this.textArea.fill('this is test');
  }

  async uploadFile(filePath) {
    this.page.on('dialog', async (dialog) => {
      console.log('Alert Message:', dialog.message());
      expect(dialog.message()).toContain('Your file was successfully uploaded!');
      await dialog.accept();
    });

    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.uploadButton.click(),
    ]);

    await fileChooser.setFiles(filePath);
    console.log('✅ File uploaded successfully.');
  }
}

module.exports = ApplePage;
