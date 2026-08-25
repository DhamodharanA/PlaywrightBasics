import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';


test('Login Page', async ({ page }) => {

    // Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(5000);

    // Home Page
    const home = new HomePage(page);
    await home.addProducttoCart('Nokia lumia 1520');
    await page.waitForTimeout(5000);
    await home.gotoCart();

    //Cart Page
    const cart = new CartPage(page);
    await page.waitForTimeout(5000)
    const status = await cart.checkproductInCart('Nexus 6');
    await page.waitForTimeout(5000);
   // expect(await status).toBe(true);

});
