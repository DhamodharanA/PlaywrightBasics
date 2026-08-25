import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();

  //Click on Dropdown
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div[1]/div[2]").click()
  await page.waitForTimeout(5000)

  const options = await page.$$("//div[@role='listbox']//span")

  for(let option of options)
  {
    const Jobtitle = await option.textContent()
    //console.log(Jobtitle);
    if(Jobtitle.includes('QA Engineer'))
    {
      await option.click()
      break;
    }
  }
  await page.waitForTimeout(5000)
});

