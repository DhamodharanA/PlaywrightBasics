import { test, expect } from '@playwright/test';
import { OrangeHRMLogin } from '../pages/OrangeHRMLogin';

test('OrangeHRM login', async ({ page }) => {
  const orangeHRM = new OrangeHRMLogin(page);

  await orangeHRM.gotoLoginPage();
  await orangeHRM.waitForLoginReady();

  await expect(
    page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[1]')
  ).toBeVisible({ timeout: 5000 });

  await orangeHRM.clickOrangeHrmIncAndCloseChild();

  await orangeHRM.login('Admin', 'admin123');
});