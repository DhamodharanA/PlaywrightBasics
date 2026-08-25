import{test,expect} from "@playwright/test"


test('Input Boxes',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    const Fstname = page.locator("//input[@id='name']");

    await expect(Fstname).toBeVisible();
    await expect(Fstname).toBeEmpty();
    await expect(Fstname).toBeEditable();
    await expect(Fstname).toBeEnabled();

    await Fstname.fill("John");

    await page.waitForTimeout(5000);

});