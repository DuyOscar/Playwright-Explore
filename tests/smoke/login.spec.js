const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login/loginPage');
const { beforeEach } = require('node:test');

test.describe('Login test',{
    tag: '@smoke',
}, () => {

    test.beforeAll(async ({ browser }) => {
        console.log('🚀 Before All: Setup test environment');
    });

    test.afterAll(async () => {
        console.log('🧹 After All: Cleanup test environment');
    });

    test.beforeEach(async ({ page }) => {
        console.log('🔄 Before Each: Navigating to the login page');
        await page.goto(process.env.BASE_URL);
    });

    test.afterEach(async ({ page }) => {
        console.log('✅ After Each: Test execution completed');
    });


    test('User should be able to login 1', { tag: '@LGN001' }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        // await loginPage.goto();
        // await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        // await loginPage.verifyLoginSuccess();
        console.log("1- Test demo login success")
        await loginPage.verifyLoginSuccess();

    });

    test('User should be able to login 2', { tag: '@LGN002' }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        // await loginPage.goto();
        // await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        console.log("2-Test demo login success ")
        await loginPage.verifyLoginSuccess();

    });
});
