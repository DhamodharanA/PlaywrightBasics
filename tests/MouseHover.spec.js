import{test,expect} from '@playwright/test'


test('Mouse Hover',async ({page})=>
{
    await page.goto('https://www.meta.com/en-gb/about/company-info/?srsltid=AfmBOop5scp0Ddu8o6w5RdU6LBL9PNfVZRQpWhSvtvLcNzvDyqSL8PwR')

    const AIglasses = await page.locator('//span[normalize-space()="AI glasses"]')
    const OakleyMeta = await page.locator("(//div[@class='x10l6tqk x1ja2u2z x13vifvy xh8yej3 x1sg8tf7'])[1]")
    
    await AIglasses.hover()
    await OakleyMeta.hover()

    await page.waitForTimeout(5000)
})