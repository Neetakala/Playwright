// Pages/RegistrationPage.js
class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.email = page.locator('#input-email');
    this.telephone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.confirmPassword = page.locator('#input-confirm');
    this.privacyPolicy = page.locator('input[name="agree"]');
    this.continueBtn = page.locator('input[value="Continue"]');
  }

  async fillRegistrationForm({ firstName, lastName, email, telephone, password }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.telephone.fill(telephone);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.privacyPolicy.check();
  }

  async submitForm() {
    await this.continueBtn.click();
  }
}

module.exports = RegistrationPage;
