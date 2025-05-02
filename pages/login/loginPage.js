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

    async test() {
        await this.page.goto('https://dssecurity.tiger.dazlmkengdev02.ienergycloud.solutions/auth/realms/DecisionSpace_Integration_Server/protocol/openid-connect/auth?client_id=fdp-app-dev-fdp-app&redirect_uri=https%3A%2F%2Ffdp-app-feat-powerbi.tiger.dazlmkengdev02.ienergycloud.solutions%2Fprojects%2Fbb05ea91-d4d9-418f-a13e-763fec436186%2Falternative%2Fd463adf4-68af-42cb-b3ff-643b1e8c8d55%2Ffda-dashboard%2F98d91da2-efcf-489c-9748-37a54d411abc&state=985a7d04-8d0e-4078-94f0-d2de07751cf3&response_mode=fragment&response_type=code&scope=openid&nonce=55c60ae5-3186-4f5e-8612-9c98be108648&code_challenge=x7pYcydbkbs__InUUZRWW35hPO89SyMdr9nrk2dODrA&code_challenge_method=S256');
        
        await expect(this.page.getByRole('link', { name: 'OIDC-preview' })).toBeVisible();
        await this.page.getByRole('link', { name: 'OIDC-preview' }).click();
        await this.page.getByRole('textbox', { name: 'Email' }).fill('fdp.automation@lgc.com');
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill('2w;cG!SiC[Y>49');
        await this.page.getByRole('button', { name: 'Sign In' }).click();


        // Wait for iframe to load
        await this.page.waitForSelector('iframe[title="Embedded report"]', { 
            state: 'visible', 
            timeout: 60000 
        });

        // Get the iframe
        const iframe = this.page.locator('iframe[title="Embedded report"]');
        
        // Switch to iframe context
        const frame = await iframe.contentFrame();
        
        if (!frame) {
            throw new Error('Could not access iframe content');
        }

        const frame1 = await this.page.frameLocator('iframe[title="Embedded report"]');

        await frame1.locator('div:text("Risk is seen in preview branch")').waitFor({
            state: 'visible',
            timeout: 60000
        });

    }
    
}

// ✅ Use `module.exports = { LoginPage }` for CommonJS
module.exports = { LoginPage };
