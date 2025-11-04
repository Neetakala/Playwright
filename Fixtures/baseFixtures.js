// Fixtures/baseFixtures.js
const { test: base, expect } = require('@playwright/test');
const utils = require('../Utils/commonUtilities');

// Static URL for your website
const baseURL = 'https://naveenautomationlabs.com/opencart/';

exports.test = base.extend({
  baseURL: async ({}, use) => {
    await use(baseURL);
  },

  utils: async ({}, use) => {
    await use(utils);
  },

  // ✅ Fixture to log in before test
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`${baseURL}index.php?route=account/login`);
    await page.fill('#input-email', 'neeta.kalashetti@gmail.com');
    await page.fill('#input-password', 'Test@123');
    await page.click('input[value="Login"]');

    await page.waitForSelector('text=My Account', { timeout: 10000 });
    console.log('✅ Logged in successfully');

    await use(page);
    await context.close();
  },
});

exports.expect = expect;
