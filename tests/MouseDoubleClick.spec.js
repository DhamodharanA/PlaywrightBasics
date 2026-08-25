import{test,expect} from '@playwright/test'


test('Mouse Double Click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnClick = await page.locator('//button[normalize-space()="Copy Text"]')

    //Double Click
    await btnClick.dblclick()

    //Verify the Text
    const CopyWord = await page.locator('#field2')

    await expect(CopyWord).toHaveValue('Hello World!')


    await page.waitForTimeout(5000)
})