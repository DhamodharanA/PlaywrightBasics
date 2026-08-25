import{test,expect, chromium} from '@playwright/test';



test('NewOrange login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });

    //Login Page
    const Logo = await page.getByAltText('company-branding')
    expect(Logo).toBeVisible({ timeout: 5000 });

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    //Dashboard Page
    const Dashboard = await page.locator('//a[normalize-space()="Dashboard"]')
    expect(Dashboard).toBeVisible({ timeout: 5000 });

    //Admin Page 
    const Admin = await page.getByText('Admin')
    expect(Admin).toBeVisible({ timeout: 5000 });
    await Admin.click();

    //Click Add
    const AddButton = await page.locator('//button[normalize-space()="Add"]');
    await AddButton.click();

    //user Role Dropdown
    const UserRole = await page.locator('//label[normalize-space()="User Role"]/following::div[1]');
    await UserRole.click();

     // Click the "Admin" option
    const adminOption = page.locator('//div[@role="option" and normalize-space()="Admin"]');
    await adminOption.click();

    //Status Dropdown
    const Status = await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]');
    await Status.click();

     // Click the "Enabled" option
    const statusOption = page.locator('//div[@role="option" and normalize-space()="Enabled"]');
    await statusOption.click();

    //Verify the employee Name Label is visible
    const EmployeeNameLabel = await page.locator('//label[normalize-space()="Employee Name"]');
    expect(EmployeeNameLabel).toBeVisible({ timeout: 5000 });

    //Enter Employee Name and select from autocomplete suggestions
    const EmployeeNameInput = await page.getByPlaceholder('Type for hints...');
    await EmployeeNameInput.fill('Emily  Jones');
    await EmployeeNameInput.press('ArrowDown');
    await EmployeeNameInput.press('Enter');

    //Verify the username Label is visible
    const UsernameLabel = await page.locator('//label[normalize-space()="Username"]');
    expect(UsernameLabel).toBeVisible({ timeout: 5000 });

    //Enter Username
    const UsernameInput = page.locator('//label[normalize-space()="Username"]/following::input[1]');
    await expect(UsernameInput).toBeVisible({ timeout: 5000 });
    await UsernameInput.fill('Emily');

})

test.skip('Window Handling', async()=>{
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM');

    const page2 = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()

    const newPage = await page2;
    await newPage.waitForLoadState();
    await newPage.close();
    await expect(page1).toHaveTitle('OrangeHRM');


})

//HI this notes