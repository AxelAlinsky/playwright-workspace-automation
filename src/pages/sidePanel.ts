import { Page, errors } from '@playwright/test';
import { loginSelectors } from '../components/ui/loginSelectors';
import Url from '../data/urls.json';


export class sidePanel {
    private page: Page;
    private static config = {

    };

    constructor(page: Page) {
        this.page = page;
    }

    async logout(): Promise<void> {
        try {
            // click on the burger menu
            await this.page.click
        } catch (error) {
            console.log(`Login failed: ${error.message}`);
            throw error;
        }
    }

}
