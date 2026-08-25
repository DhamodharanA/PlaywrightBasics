# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewOrange.spec.js >> NewOrange login
- Location: tests\NewOrange.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('password')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import{test,expect, chromium} from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('NewOrange login', async ({ page }) => {
  6  | 
  7  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
  8  | 
  9  |     //Login Page
  10 |     const Logo = await page.getByAltText('company-branding')
  11 |     expect(Logo).toBeVisible({ timeout: 5000 });
  12 | 
  13 |     await page.getByPlaceholder('Username').fill('Admin');
> 14 |     await page.getByRole('password').fill('admin123');
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  15 | 
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 | 
  18 | })
  19 | 
  20 | test('Window Handling', async()=>{
  21 |     
  22 |     const browser = await chromium.launch();
  23 |     const context = await browser.newPage();
  24 |     const page1 = await context.newPage();
  25 | 
  26 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  27 |     await expect(page1).toHaveTitle('OrangeHRM');
  28 | 
  29 |     const page2 = context.waitForEvent('page');
  30 |     await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  31 |     
  32 | 
  33 |     const newPage = await page2;
  34 |     await newPage.waitForLoadState();
  35 |     await expect(newPage).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM');
  36 |     await newPage.close();
  37 |     await page1.bringToFront();
  38 |     await expect(page1).toHaveTitle('OrangeHRM');
  39 | 
  40 | 
  41 | })
```