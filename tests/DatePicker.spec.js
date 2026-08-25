import{test,expect} from '@playwright/test'


test('Date Picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // 1. Method 1
    //await page.fill('#datepicker','03/15/2024')

    //Date Picker
    const Year ="2022"
    const Month = "March"
    const Date = "18"

    await page.click('#datepicker')

    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
    
        if(currentYear==Year && currentMonth==Month)
        {
            break;
        }
        await page.locator('[title="Prev"]').click()
    }
     /*   const dates = await page.$$("//a[@class='ui-state-default']")

        for(const dt of dates)
        {
            if(await dt.textContent()==Date)
            {
                await dt.click();
                break;
            }
        }*/

// Date Selection Without Loop
    //await page.click("//a[@class='ui-state-default'][text()='5']")

// Date Pick from above Function
    await page.click("//a[@class='ui-state-default'][text()='${Date}']")


    await page.waitForTimeout(9000)
})