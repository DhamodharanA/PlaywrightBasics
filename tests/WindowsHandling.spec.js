import{test,expect, chromium} from '@playwright/test'


test('Windows Handling', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagepromise = context.waitForEvent('page');
    await page1.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div/p[2]/a').click();

    const newpage = await pagepromise;
    await expect(newpage).toHaveURL('https://orangehrm.com/')
    await newpage.waitForTimeout(5000)
    await newpage.close()

    await page1.waitForTimeout(5000)
    

    await browser.close()
})