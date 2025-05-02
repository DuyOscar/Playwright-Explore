const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login/loginPage');
const { beforeEach } = require('node:test');

test.describe('3D Component',{
    tag: '@regression',
}, () => {

    test.describe.configure({ mode: 'parallel' }); // Run tests in parallel

    for (let i = 1; i <= 100; i++) {
        test(`Visual testing ${i}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.test();
        });
    }

});
