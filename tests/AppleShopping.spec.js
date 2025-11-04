// tests/Apple.spec.js
const { test, expect } = require('../Fixtures/baseFixtures');
const ApplePage = require('../Pages/ApplePage');
const { selectTime } = require('../Utils/commonUtilities');  // <-- using new utility

test('E2E Apple Shopping Test', async ({ page, baseURL, utils }) => {
  const apple = new ApplePage(page, baseURL);

  // Step 1: Navigate to Apple search results
  await apple.navigate();
  await apple.searchApple();
  await apple.openAppleProduct();

  // Step 2: Print brand details for verification
  await apple.printBrandDetails();

  // Step 3: Fill product options and upload file
  await apple.fillProductOptions();
  await apple.uploadFile('C:\\Users\\NEETA\\OneDrive\\Desktop\\GR III_EVS II_L7_NB_25-26.pdf');

  // Step 4: Select date (e.g., March 6, 2011)
  await utils.selectDate(page, 'March 2011', 6);

  // Step 5: Set time to 9:30 using new utility
  await apple.timePickerBtn.click();
  await selectTime(page, 9, 30);

  console.log('✅ Apple Shopping E2E Flow completed successfully!');
});
