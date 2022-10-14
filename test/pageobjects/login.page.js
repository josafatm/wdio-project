const Page = require('./page')
const nav = require('./nav.page')

class user {
    
    async delCookie() { await browser.deleteCookies('NYT-S'); }

    async setCookie() {
        await browser.setCookies({
            domain: '.nytimes.com',
            expiry: 1696290846, 
            name: 'NYT-S',
            value: '2weMqKyg/gTiw8FDpfx78eLnyN6Q/Z2RODygpp2BopI37O.st93CusPoAI.5rVWtr1jOoea6bgYnSTsrB90hjTHY0wA9rc9IWlq1UlWHI8n7Ij./XlHiUpcS5.xshxE8G87RXgB7/0ZTCwRE9WOR9ET0DfqlIgfGVQXO97dv7egKi8.rvYh2d43nKj6PpsrqrHtaBw/ksVuNL01GB0db3nzw00^^^^CBISKQiXk-SYBhCPlOSYBhoSMS2gFykSw8ymhppRyxOrT8VoIN6eiUUqAh43GkA3NjFCdhZE5U3d_heXbCbS4kHTMVTzWVejuo8YzJlkUHvSzyZ-xYSdb_vwEtvXgU-7wjI53Py-d8f-jqlu9MEO',
            path: '/',
            domain: '.nytimes.com',
        })
        await Page.open("/");
    }

    async login() {
        await Page.open("/");
        await this.clickLoginBtn()
        await this.delCookie();
        await this.setCookie();
    } 

    get usernameInputBox(){return $("#email")}
    get passwordInputBox(){return $("#password")}
    get continueBtn(){return $("[data-testid='submit-email']")}
    get signinBtn(){return $("[data-testid='login-button']")}
    get registerBtn(){return $("[data-testid='register-button']")}

    /*Login user*/
    async loginUser(username, password) {
        await Page.open('/');
        await this.clickLoginBtn()
        browser.pause(2000)
        if(await (await browser.getUrl()).includes("stg")){
            await browser.url("https://myaccount.nytimes.com/")
        }
        await this.setusernameAndPassword(username,password);
    }

    async setUsername(username){
        await this.usernameInputBox.waitForDisplayed()
        await this.usernameInputBox.setValue(username)
        await this.continueBtn.click()
    }
    async setPassword(password){
        await this.usernameInputBox.waitForDisplayed()
        await this.passwordInputBox.setValue(password)
    }

    async setusernameAndPassword(username,password){
        await this.usernameInputBox.waitForDisplayed()
        await this.setUsername(username)
        await this.setPassword(password)
        await this.signinBtn.click()
        await browser.pause(1000)
    }

    async clickLoginBtn(){
        await nav.loginBtn.waitForDisplayed();
        await nav.loginBtn.click();
    }

    /*Creating account*/
    async createAccountBtn(){
        await this.registerBtn.waitForDisplayed();
        await this.registerBtn.click();
    }

    async createNewAccount(username,password){
        await this.usernameInputBox.waitForDisplayed()
        await this.setUsername(username)
        await this.createAccountBtn()
        await this.setPassword(password)
        await this.registerBtn.click()
        await browser.pause(1000)
    }

    async createUser(username, password) {
        await Page.open('/');
        await this.clickLoginBtn()
        browser.pause(2000)
        // if(await (await browser.getUrl()).includes("stg")){
        //     await browser.url("https://myaccount.nytimes.com/")
        // }
        await this.createNewAccount(username,password);
    }
}
module.exports = new user();
