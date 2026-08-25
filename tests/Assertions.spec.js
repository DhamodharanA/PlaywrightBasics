import{test,expect} from '@playwright/test'


test('AssertionsTest',async({page})=>{

    //Open the Website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //1. expect(page).tohaveURL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //2. expect(page).toHaveTitle()
    const tittle = await expect(page).toHaveTitle('OrangeHRM')
    
    // 3. expect(locator).toBeVisible()
    const Logo = await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[1]')
    await expect(Logo).toBeVisible()

    // 4. expect(locator).toBeEnabled()
    const usernamee = await page.locator('//input[@name="username"]')
    await expect(usernamee).toBeEnabled()
    await usernamee.fill('Admin')

    const Password = await page.locator('//input[@name="password"]')
    await Password.fill('admin123')

    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
    
    
    await page.locator("//a[normalize-space()='My Info']").click();
    // 5. expect(locator).toBeChecked()

})