// playwright.config.js
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
 reporter: [
    ['line'], // or 'list' / 'dot'
    ['allure-playwright', {
      outputFolder: 'allure-results', // this is where raw results go
    }]
 ]
,
  use: {
    baseURL: 'https://naveenautomationlabs.com/opencart/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',  
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
      testMatch: /.*Registration\.spec\.js/,   // only run Registration tests here
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
      testMatch: /^(?!.*Registration\.spec\.js).*\.spec\.js/,  // run all tests except Registration on firefox
    },
  ],
};

module.exports = config;
