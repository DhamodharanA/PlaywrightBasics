import { test,expect } from "@playwright/test";


test('Locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    //Click Login Button
    await page.locator('id=login2').click();

    //Enter the Username
    await page.fill("id=loginusername",'pavanol')

    //Enter the Password
    await page.fill('id=loginpassword','test@123')

    //Click Login link
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    //Verify the Logout Link Presence
    const Logoutlink = await page.locator('id=logout2')

    await expect(Logoutlink).toBeVisible({ timeout: 10000 });

    await page.close()

})