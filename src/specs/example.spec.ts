import { expect, beforeEach, describe } from '@playwright/test';
import Accounts from '../data/accounts.json';
import Url from '../data/urls.json';
import SuiteContext from '@playwright/test';
import { test } from '../resources/fixture'; 



// describe before each 
test.describe('User Authentication', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto(Url.sauceDemo.loginURL);
  });

  test.afterEach(async ({ page }) => {
    await 
  }

  test('Valid Login Test', async ({ page, loginPage }) => {
    await loginPage.login(Accounts.standard_user.username, Accounts.standard_user.password);
  });


});

