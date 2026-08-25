exports.LoginPage = 

class LoginPage{

    constructor(page){
        this.page = page;
        this.loginlink ="#login2"
        this.usernameInput="#loginusername"
        this.PasswordInput="#loginpassword"
        this.loginbtn="//*[@id='logInModal']/div/div/div[3]/button[2]"
    }
    async gotoLoginPage(page){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(username,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.PasswordInput).fill(password);
        await this.page.locator(this.loginbtn).click();

    }
}
