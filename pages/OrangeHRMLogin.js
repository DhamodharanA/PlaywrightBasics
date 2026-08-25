exports.OrangeHRMLogin =
class OrangeHRMLogin {
  constructor(page) {
    this.page = page;

    this.logoCandidates = [
      '//*[@id="app"]/div[1]/div/div[1]/div/div[1]',
      'img[alt*="Orange"]',
      '.oxd-branding img',
      'img[src*="logo"]'
    ];

    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.orangeHrmLink = this.page.getByRole('link', {
      name: 'OrangeHRM, Inc'
    });
  }

  async gotoLoginPage() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      }
    );
  }

  async waitForLoginReady(timeout = 20000) {
    await this.page
      .locator(this.usernameInput)
      .waitFor({ state: 'visible', timeout });
  }

  async clickOrangeHrmIncAndCloseChild() {
    const childWindowPromise = this.page.waitForEvent('popup');

    await this.orangeHrmLink.click();

    const childWindow = await childWindowPromise;
    await childWindow.close();
  }

  async isLogoVisible() {
    await this.waitForLoginReady();

    for (const selector of this.logoCandidates) {
      const locator = this.page.locator(selector);

      if (await locator.count() && await locator.first().isVisible()) {
        return true;
      }
    }

    return false;
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};