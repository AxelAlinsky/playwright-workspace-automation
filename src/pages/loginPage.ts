// import { loginPageSelectors } from '../components/ui/loginPageSelectors';
// import { Page } from '@playwright/test';


// export class LoginPage {
//     private page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     async login(username: string, password: string) {
//         await this.page.fill(loginPageSelectors.login.usernameInput, username);
//         await this.page.fill(loginPageSelectors.login.passwordInput, password);
//         await this.page.click(loginPageSelectors.login.loginButton);
//     }
// }


import { Page } from '@playwright/test';
import { loginSelectors } from '../components/ui/loginPageSelectors';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill(loginSelectors.usernameInput, username);
        await this.page.fill(loginSelectors.passwordInput, password);
        await this.page.click(loginSelectors.loginButton);
    }
}

