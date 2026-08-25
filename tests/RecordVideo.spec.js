import{test,expect} from '@playwright/test'

let page;

//BeforeEach
test.beforeAll(async({browser})=>{
    page = await browser.newPage()

    await page.goto('https://www.demoblaze.com/')

    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

})
//AfterEach
test.afterAll(async()=>{
    //Logout
    await page.locator('#logout2').click
})

test('Home Page test', async()=>{
    //HomePage
    const products = await page.$$('.nav-link')
    expect(products).toHaveLength(11)

    await page.waitForTimeout(5000)
})
