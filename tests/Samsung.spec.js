const { test, expect } = require('../Fixtures/baseFixtures');
const SamsungPage = require('../Pages/SamsungPage');

test('Search and add Samsung Galaxy Tab to cart', async ({ page, baseURL }) => {
  const samsung = new SamsungPage(page);

  await samsung.navigate(baseURL);
  await samsung.searchSamsung();
  await samsung.addSamsungToCart();

  await expect(samsung.cartTotal).toContainText('1 item(s)');
  console.log('✅ Samsung Galaxy Tab added to cart successfully.');
});
