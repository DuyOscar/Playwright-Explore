const { test, expect } = require('@playwright/test');
// const { PlaywrightDevPage } = require('../../pages/login/playwright-dev-page');
  

// test('getting started should contain table of contents', async ({ page }) => {
//   const playwrightDev = new PlaywrightDevPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.getStarted();
//   await expect(playwrightDev.tocList).toHaveText([
//     `How to install Playwright`,
//     `What's Installed`,
//     `How to run the example test`,
//     `How to open the HTML test report`,
//     `Write tests using web first assertions, page fixtures and locators`,
//     `Run single test, multiple tests, headed mode`,
//     `Generate tests with Codegen`,
//     `See a trace of your tests`
//   ]);
// });

test.describe('two tests', () => {


test('should show Page Object Model article 1', {
    tag: '@11',
}, async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

test('should show Page Object Model article 2', {
  tag: '@12',
}, async ({ page }) => {
const playwrightDev = new PlaywrightDevPage(page);
await playwrightDev.goto();
await playwrightDev.pageObjectModel();
await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

});