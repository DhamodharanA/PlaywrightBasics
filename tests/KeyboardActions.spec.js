import{test,expect} from '@playwright/test'


test('Keyboard Action',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('[name="text1"]').fill('Welcome to Automation')

    await page.type('[name="text1"]','Welcome to Automation')

    //Ctrl + A
    await page.keyboard.press('Control+a')

    //Ctrl + C
    await page.keyboard.press('Control+c')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl + V
    await page.keyboard.press('Control+v')

    await page.waitForTimeout(5000)

})