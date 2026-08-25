import { test,expect } from '@playwright/test'


test('LocatingMultipleElements',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    // const links = await page.$$('a');

    // for(const link of links)
    // {
    //     const linktext = await link.textContent()
    //     console.log(linktext);
    // }

    //Product Text
    await page.waitForSelector('//div[@id="tbodyid"]//div//h4');
    const Productname = await page.$$('//div[@id="tbodyid"]//div//h4');

        for (const product of Productname) {
            const Producttext = await product.textContent();
            console.log(Producttext);
        }
    
})