// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../../pages/login/loginPage');
// const { beforeEach } = require('node:test');

// test.describe('3D Component',{
//     tag: '@regression',
// }, () => {

//     test.beforeAll(async ({ browser }) => {
//         console.log('🚀 Before All: Setup test environment');
//     });

//     test.afterAll(async () => {
//         console.log('🧹 After All: Cleanup test environment');
//     });

//     test.beforeEach(async ({ page }) => {
//         console.log('🔄 Before Each: Navigating to the login page');
//         await page.goto(process.env.BASE_URL);
//     });

//     test.afterEach(async ({ page }) => {
//         console.log('✅ After Each: Test execution completed');
//     });


//     test('Visual testing', { tag: '@VS001' }, async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         console.log("Login success using auth setup")
//         // await loginPage.verifyLoginSuccess();
//         await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
//         // await expect(page).toHaveScreenshot('landing.png');
//         expect(await page.screenshot()).toMatchSnapshot('landing1.png');

//     });

// });
