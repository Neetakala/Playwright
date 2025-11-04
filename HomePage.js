class HomePage {
  constructor(page) {
    this.page = page;
    // Correct clickable locators
    this.myAccount = page.locator('a[title="My Account"]');
    this.register = page.locator('a', { hasText: 'Register' });
  }

  async gotoRegister() {
    await this.myAccount.click(); // Opens dropdown
    await this.register.click();  // Clicks on "Register"
  }
}

module.exports = HomePage;
