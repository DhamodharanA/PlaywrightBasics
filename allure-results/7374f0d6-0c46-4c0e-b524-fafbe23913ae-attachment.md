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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class="oxd-select-text oxd-select-text--focus"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: mandaa user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: Admin
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - textbox "Type for hints..." [ref=e180]
          - generic [ref=e182]:
            - generic [ref=e184]: Status*
            - generic [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: "-- Select --"
              - generic [ref=e190]: 
          - generic [ref=e192]:
            - generic [ref=e194]: Username*
            - textbox [ref=e196]
        - generic [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e200]:
              - generic [ref=e202]: Password*
              - textbox [ref=e204]
            - paragraph [ref=e205]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e207]:
            - generic [ref=e209]: Confirm Password*
            - textbox [ref=e211]
        - separator [ref=e212]
        - generic [ref=e213]:
          - paragraph [ref=e214]: "* Required"
          - button "Cancel" [ref=e215] [cursor=pointer]
          - button "Save" [ref=e216] [cursor=pointer]
    - generic [ref=e217]:
      - paragraph [ref=e218]: OrangeHRM OS 5.9
      - paragraph [ref=e219]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e220] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  40 |     const Status = await page.locator('//div[@class="oxd-select-text oxd-select-text--focus"]');
> 41 |     await Status.click();
     |                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 | 
  43 |      // Click the "Enabled" option
  44 |     const statusOption = page.locator('//div[@role="option" and normalize-space()="Enabled"]');
  45 |     await statusOption.click();
  46 | 
  47 |     //Verify the employee Name Label is visible
  48 |     const EmployeeNameLabel = await page.locator('//label[normalize-space()="Employee Name"]');
  49 |     expect(employeeNameLabel).toBeVisible({ timeout: 5000 });
  50 | 
  51 |     //Enter Employee Name
  52 |     await page.getByPlaceholder("'Type for hints...'").fill('Daran Jones');
  53 | 
  54 |     //Verify the username Label is visible
  55 |     const UsernameLabel = await page.locator('//label[normalize-space()="Username"]');
  56 |     expect(UsernameLabel).toBeVisible({ timeout: 5000 });
  57 | 
  58 |     //Enter Username
  59 |     const UsernameInput = await page.locator('#oxd-input.oxd-input--focus');
  60 |     await UsernameInput.fill('Daran');
  61 | 
  62 | })
  63 | 
  64 | test('Window Handling', async()=>{
  65 |     
  66 |     const browser = await chromium.launch();
  67 |     const context = await browser.newContext();
  68 |     const page1 = await context.newPage();
  69 | 
  70 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  71 |     await expect(page1).toHaveTitle('OrangeHRM');
  72 | 
  73 |     const page2 = context.waitForEvent('page');
  74 |     await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  75 | 
  76 |     const newPage = await page2;
  77 |     await newPage.waitForLoadState();
  78 |     await newPage.close();
  79 |     await expect(page1).toHaveTitle('OrangeHRM');
  80 | 
  81 | 
  82 | })
```