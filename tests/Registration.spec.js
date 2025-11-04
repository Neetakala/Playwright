const { test, expect } = require('../Fixtures/baseFixtures');
const { generateRandomEmailId } = require('../Utils/commonUtilities');
const HomePage = require('../Pages/HomePage');
const RegistrationPage = require('../Pages/RegistrationPage');

test.use({ browserName: 'chromium' }); 
test('Registration with valid data', async ({ page, baseURL }) => {
  const home = new HomePage(page);
  const register = new RegistrationPage(page);

  const email = generateRandomEmailId();

  await page.goto(baseURL);
  await home.gotoRegister();

  await register.fillRegistrationForm({
    firstName: 'Neeta',
    lastName: 'Patil',
    email,
    telephone: '9876543210',
    password: 'Password123',
  });

  await register.submitForm();
  await expect(page.locator('h1')).toHaveText('Your Account Has Been Created!');
  console.log(`✅ Registration successful with email: ${email}`);
});
