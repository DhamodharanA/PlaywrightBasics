# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewOrange.spec.js >> NewOrange login
- Location: tests\NewOrange.spec.js:5:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import{test,expect, chromium} from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('NewOrange login', async ({ page }) => {
  6  | 
> 7  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
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
  25 |     await Admin.click();
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
  51 |     //Enter Employee Name
  52 |     const EmployeeNameInput = await page.getByPlaceholder('Type for hints...');
  53 |     await EmployeeNameInput.fill('Emily  Jones');
  54 | 
  55 |     //Verify the username Label is visible
  56 |     const UsernameLabel = await page.locator('//label[normalize-space()="Username"]');
  57 |     expect(UsernameLabel).toBeVisible({ timeout: 5000 });
  58 | 
  59 |     //Enter Username
  60 |     const UsernameInput = await page.locator('#oxd-input.oxd-input--focus');
  61 |     await UsernameInput.fill('Emily');
  62 | 
  63 | })
  64 | 
  65 | test.skip('Window Handling', async()=>{
  66 |     
  67 |     const browser = await chromium.launch();
  68 |     const context = await browser.newContext();
  69 |     const page1 = await context.newPage();
  70 | 
  71 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  72 |     await expect(page1).toHaveTitle('OrangeHRM');
  73 | 
  74 |     const page2 = context.waitForEvent('page');
  75 |     await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  76 | 
  77 |     const newPage = await page2;
  78 |     await newPage.waitForLoadState();
  79 |     await newPage.close();
  80 |     await expect(page1).toHaveTitle('OrangeHRM');
  81 | 
  82 | 
  83 | })
```