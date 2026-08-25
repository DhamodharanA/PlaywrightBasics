import{test,expect} from "@playwright/test"


test('Input Boxes',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    const Gender = page.locator("//input[@id='male']");

    await Gender.check();
    await expect(Gender).toBeChecked();
    expect(await Gender.isChecked()).toBeTruthy();

    await page.waitForTimeout(5000);

});