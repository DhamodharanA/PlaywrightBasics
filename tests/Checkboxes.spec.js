import{test,expect} from "@playwright/test"


test('Handle Checkboxes',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //Single Checkbox
    const fstday = await page.locator("//input[@id='monday']");
    await fstday.check();

    await expect(fstday).toBeChecked();
    expect (await page.locator("//input[@id='monday']").isChecked()).toBeTruthy();
    expect (await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

    //Multiple Checkboxes
    const checkboxLocators = [
        "//input[@id='sunday']",
        "//input[@id='tuesday']",
        "//input[@id='friday']"
    ]

    //Select Multiple Checkboxes
    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check();
    }

    //UnSelect the Multiple Checkboxes which are already selected
    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked());
        {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);

    await page.close();

})