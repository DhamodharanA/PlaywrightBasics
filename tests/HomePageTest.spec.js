const { test, expect } = require('@playwright/test');

test('Home Page Test', async ({ page }) => {

    //1.Launch Website
    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title();
    console.log("Page Title:", pageTitle);

    //2.Condition Check
    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log("Page URL:", pageURL);

    //3.Condition Check
    await expect(page).toHaveURL('https://www.demoblaze.com/');
});