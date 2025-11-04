// Pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.myAccount = page.locator('a[title="My Account"]');
    this.register = page.locator('a', { hasText: 'Register' });
    this.login = page.locator('a', { hasText: 'Login' });
  }

  async gotoRegister() {
    await this.myAccount.click();
    await this.register.click();
  }

  async gotoLogin() {
    await this.myAccount.click();
    await this.login.click();
  }
}

module.exports = HomePage;
