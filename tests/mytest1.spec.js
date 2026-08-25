import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=Cj0KCQjw39zSBhDhARIsANammDtpsaOCqS4kxeY4fiDc3kM9WzxqGpcwCPIheVxZVmm57_zF-fd4wVUaAu9WEALw_wcB');
  await page.locator('div').filter({ hasText: /^From$/ }).nth(1).click();
  await page.getByRole('combobox', { name: 'From' }).fill('delhi');
  await page.getByRole('button', { name: 'New Delhi Railway Station,' }).click();
  await page.getByRole('button', { name: 'Lucknow,' }).click();
  await page.getByRole('button', { name: 'Search buses' }).click();
  await page.getByRole('tab', { name: ' Bus' }).click();
});