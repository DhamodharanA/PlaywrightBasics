import {test,expect} from "@playwright/test"


test('Auto Suggest Dropdown',async ({page})=>{

    await page.goto('https://www.google.com/')

    await page.locator("//*[@id='APjFqb']").fill('ai tool ');

    //-------------------------------------------------
    await page.waitForSelector("//div[@role='option']")
    //---------------------------------------------------

   const fromCityOptions = await page.$$("//div[@role='option']")

   for(let option of fromCityOptions)
   {
    const value = await option.textContent()
    //console.log(value)
    if(value.includes('ai tool hindi'))
    {
        await option.click()
        break;
    }
   }

   await page.waitForTimeout(9000)
})



//const suggestions = await page.locator("//div[@role='option']").allTextContents();

//console.log(suggestions);