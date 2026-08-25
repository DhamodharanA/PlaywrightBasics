# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewOrange.spec.js >> NewOrange login
- Location: tests\NewOrange.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//a[normalize-space()="Dashboard"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//a[normalize-space()="Dashboard"]')

```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Admin')

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
  14 |     await page.getByPlaceholder('Password').fill('admin123');
  15 | 
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 | 
  18 |     //Dashboard Page
  19 |     const Dashboard = await page.locator('//a[normalize-space()="Dashboard"]')
  20 |     expect(Dashboard).toBeVisible({ timeout: 5000 });
  21 | 
  22 |     //Admin Page 
  23 |     const Admin = await page.getByText('Admin')
  24 |     expect(Admin).toBeVisible({ timeout: 5000 });
> 25 |     await Admin.click();
     |                 ^ Error: locator.click: Test ended.
  26 | 
  27 |     //Click Add
  28 |     const AddButton = await page.locator('//button[normalize-space()="Add"]');
  29 |     await AddButton.click();
  30 | 
  31 |     //user Role Dropdown
  32 |     const UserRole = await page.locator('//label[normalize-space()="User Role"]/following::div[1]');
  33 |     await UserRole.click();
  34 | 
  35 |      // Click the "Admin" option
  36 |     const adminOption = page.locator('//div[@role="option" and normalize-space()="Admin"]');
  37 |     await adminOption.click();
  38 | 
  39 |     //Status Dropdown
  40 |     const Status = await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]');
  41 |     await Status.click();
  42 | 
  43 |      // Click the "Enabled" option
  44 |     const statusOption = page.locator('//div[@role="option" and normalize-space()="Enabled"]');
  45 |     await statusOption.click();
  46 | 
  47 |     //Verify the employee Name Label is visible
  48 |     const EmployeeNameLabel = await page.locator('//label[normalize-space()="Employee Name"]');
  49 |     expect(EmployeeNameLabel).toBeVisible({ timeout: 5000 });
  50 | 
  51 |     //Enter Employee Name and select from autocomplete suggestions
  52 |     const EmployeeNameInput = await page.getByPlaceholder('Type for hints...');
  53 |     await EmployeeNameInput.fill('Emily  Jones');
  54 |     await EmployeeNameInput.press('ArrowDown');
  55 |     await EmployeeNameInput.press('Enter');
  56 | 
  57 |     //Verify the username Label is visible
  58 |     const UsernameLabel = await page.locator('//label[normalize-space()="Username"]');
  59 |     expect(UsernameLabel).toBeVisible({ timeout: 5000 });
  60 | 
  61 |     //Enter Username
  62 |     const UsernameInput = page.locator('//label[normalize-space()="Username"]/following::input[1]');
  63 |     await expect(UsernameInput).toBeVisible({ timeout: 5000 });
  64 |     await UsernameInput.fill('Emily');
  65 | 
  66 | })
  67 | 
  68 | test.skip('Window Handling', async()=>{
  69 |     
  70 |     const browser = await chromium.launch();
  71 |     const context = await browser.newContext();
  72 |     const page1 = await context.newPage();
  73 | 
  74 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  75 |     await expect(page1).toHaveTitle('OrangeHRM');
  76 | 
  77 |     const page2 = context.waitForEvent('page');
  78 |     await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  79 | 
  80 |     const newPage = await page2;
  81 |     await newPage.waitForLoadState();
  82 |     await newPage.close();
  83 |     await expect(page1).toHaveTitle('OrangeHRM');
  84 | 
  85 | 
  86 | })
```