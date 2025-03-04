const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.dashboardText = page.getByText('Swag Labs');
    }

    async goto() {
        await this.page.goto(process.env.BASE_URL);
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.dashboardText).toBeVisible();
    }
}

// ✅ Use `module.exports = { LoginPage }` for CommonJS
module.exports = { LoginPage };
