import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage'; // Fix the file path casing

export const test = baseTest.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    
//   productsPage: async ({ page }, use) => {
//     await use(new ProductsPage(page));
//   },
});
