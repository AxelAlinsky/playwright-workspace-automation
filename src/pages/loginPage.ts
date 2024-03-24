import { Page, errors } from '@playwright/test';
import { loginSelectors } from '../components/ui/loginSelectors';
import Url from '../data/urls.json';


export class LoginPage {
    private page: Page;
    private static config = {
        loginTimeout: 5000,
        successURL: Url.sauceDemo.homeUrl,
    };

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        try {
            console.log('Attempting to log in');
            await this.page.fill(loginSelectors.usernameInput, username, { timeout: LoginPage.config.loginTimeout });
            await this.page.fill(loginSelectors.passwordInput, password, { timeout: LoginPage.config.loginTimeout });
            await this.page.click(loginSelectors.loginButton, { timeout: LoginPage.config.loginTimeout });
            await this.waitForLoginSuccess();
            console.log('Login successful');
        } catch (error) {
            console.log(`Login failed: ${error.message}`);
            throw error;
        }
    }

    async waitForLoginSuccess(): Promise<void> {
        console.log('Waiting for login success confirmation');
        await this.page.waitForURL(LoginPage.config.successURL, { timeout: LoginPage.config.loginTimeout });
    }
}
