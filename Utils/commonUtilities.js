// Utils/commonUtilities.js
function generateRandomEmailId() {
  const timestamp = Date.now();
  return `${timestamp}@gmail.com`;
}

async function selectDate(page, monthYear, day) {
  let currentMonthYear = await page.locator('.datepicker-days .picker-switch:visible').first().textContent();
  currentMonthYear = currentMonthYear.trim();

  while (currentMonthYear !== monthYear) {
    await page.locator('.datepicker-days .next').first().click();
    await page.waitForTimeout(500);
    currentMonthYear = await page.locator('.datepicker-days .picker-switch:visible').first().textContent();
    currentMonthYear = currentMonthYear.trim();
  }

  const allDays = page.locator('.datepicker-days td.day');
  const count = await allDays.count();
  for (let i = 0; i < count; i++) {
    const text = await allDays.nth(i).textContent();
    if (text.trim() === String(day)) {
      await allDays.nth(i).click();
      break;
    }
  }
}

module.exports = { generateRandomEmailId, selectDate };
