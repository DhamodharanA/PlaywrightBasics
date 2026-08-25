import{test,expect} from '@playwright/test'


test('Page Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})

    })

test.skip('Full Page Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'Full Page.png',fullPage:true})

    })

test.only('Element Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('//*[@id="tbodyid"]/div[1]').screenshot({ 
                                                    path:'tests/screenshots/'+Date.now()+'Element.png'})

    })