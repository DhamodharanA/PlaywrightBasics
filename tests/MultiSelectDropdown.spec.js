import{test,expect} from "@playwright/test"


test('Handle Dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple option from multi select dromdown
    //await page.selectOption('#colors',['Blue','Red','Yellow']);

    // 1. check the number of option in dropdown
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    // 2. check the number of option in dropdown using JS array
    //const options = await page.$$('#colors option');
    //console.log("Number of Options:",options.length);
   //await expect(options.length).toBe(7);

   //3. check presence of value in the dropdown
   const content = await page.locator('#colors').textContent();
   await expect.soft (content.includes('Red')).toBeTruthy();
   await expect.soft (content.includes('Black')).toBeFalsy();


    await page.waitForTimeout(5000);
})