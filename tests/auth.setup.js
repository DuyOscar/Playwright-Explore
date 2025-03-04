import { test as setup, expect } from '@playwright/test';
import path from 'path';
const { LoginPage } = require('../../2_Playwright_Only/pages/login/loginPage');
const { beforeEach } = require('node:test');

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  await loginPage.verifyLoginSuccess();
  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});