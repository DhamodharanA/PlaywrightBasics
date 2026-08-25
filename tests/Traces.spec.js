import{test,expect} from '@playwright/test'


test('Home Page test', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

    //HomePage
    const products = await page.$$('.nav-link')
    expect(products).toHaveLength(8)

    await page.waitForTimeout(5000)

    //Logout
    await page.locator('#logout2').click

})