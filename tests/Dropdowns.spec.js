import{test,expect} from '@playwright/test'


test("handle dropdowns",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Label / Visoble Text
    //await page.locator("#country").selectOption({label:'India'});

    //Visible Text
    //await page.locator("#country").selectOption('India');

    //Value
    //await page.locator("#country").selectOption({value:'India'});

    //Index
    //await page.locator("#country").selectOption({index:3});

    //Text
    //await page.selectOption("#country",'India');


    //Assertions
    // 1. Check number of option in dropdown Approach 1
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2. Check number of option in dropdown Approach 2
    // const options = await page.$$('#country option');
    // console.log("Number of Options:",options.length);
    // await expect(options.length).toBe(10);

    // 3. Check Presence of value in the dropdown approach 3
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();

    // 4. Check presence of value in the dropdown approach 2 using loop
   
    // const options = await page.$$("#country option");

    // let status = false;

    // for (const option of options) {

    //     let value = await option.textContent();

    //     if (value.includes("France")) {
    //         status = true;
    //         break;
    //     }
    // }

    // expect(status).toBeTruthy();

    // await page.waitForTimeout(5000);

    //5. Select option from dropdown using loop
    const options = await page.$$('#country option');
    for(const option of options)
    {
        let value = await option.textContent();
    
        if (value.includes('India'))
        {
            await page.selectOption('#country', value);
            break;
        }
    }
    await page.waitForTimeout(5000);

});
    
