const Page = require('./page')
const nav = require('./nav.page')

class user {

    get usernameInputBox(){return $("#email")}
    get passwordInputBox(){return $("#password")}
    get continueBtn(){return $("[data-testid='submit-email']")}
    get signinBtn(){return $("[data-testid='login-button']")}
    get registerBtn(){return $("[data-testid='register-button']")}

    get fbBtn(){return $("#js-facebook-oauth-login")}
    get fbPasswordInputBox(){return $("#pass")}
    get fbsigninBtn(){return $("input[type='submit']")}


    get googleBtn(){return $("#js-google-oauth-login")}
    get googleUsernameInputBox(){return $("input[type='email']")}
    get googlePasswordInputBox(){return $("input[type='password']")}
    get googleNextBtn(){return $("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']")}




    







    
    /**
     * To delete cookie
     */
    async delCookie() { 
        await browser.deleteCookies(["NYT-S"])
     }
    /**
     * To set cookie
     */
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
    /**
     * To login with cookiee
     */
    async login() {
        await Page.open("/");
        await this.clickLoginBtn()
        await this.delCookie();
        await this.setCookie();
    } 

    async facebookSignin(username,password) {
        await this.usernameInputBox.waitForDisplayed()
        await this.usernameInputBox.setValue(username)
        await this.fbPasswordInputBox.waitForDisplayed()
        await this.fbPasswordInputBox.setValue(password)
        await this.fbsigninBtn.click()
    } 


    async googleSignin(username,password) {
        await this.googleUsernameInputBox.waitForDisplayed()
        await this.googleUsernameInputBox.setValue(username)
        await browser.pause(3000)
        await this.googleNextBtn.click()
        
        await this.googlePasswordInputBox.waitForDisplayed()
        await this.googlePasswordInputBox.setValue(password)
        await this.googleNextBtn.click()
    } 



    

    /**
     * To set the username
     * @param {*} username 
     */
    async setUsername(username){
        await this.usernameInputBox.waitForDisplayed()
        await this.usernameInputBox.setValue(username)
        await this.continueBtn.click()
    }
    /**
     * To set the password
     * @param {*} password 
     */
    async setPassword(password){
        await this.passwordInputBox.waitForDisplayed()
        await this.passwordInputBox.setValue(password)
    }
    /**
     * To set the credentials
     * @param {*} username 
     * @param {*} password 
     */
    async setusernameAndPassword(username,password){
        await this.usernameInputBox.waitForDisplayed()
        await this.setUsername(username)
        await this.setPassword(password)
        await this.signinBtn.click()
        await browser.pause(1000)
    }
    /**
     * To login with username and password
     * @param {*} username 
     * @param {*} password 
     */
    async loginUser(username, password) {
        await Page.open('/');
        await this.clickLoginBtn()
        browser.pause(2000)
        if((await browser.getUrl()).includes("stg")){
            await browser.url("https://myaccount.nytimes.com/")
        }
        await this.setusernameAndPassword(username,password);
    }
    /**
     * To login with username and password
     * @param {*} username 
     * @param {*} password 
     */
    async loginUser(username, password) {
        await Page.open('/');
        await this.clickLoginBtn()
        browser.pause(2000)
        if(await (await browser.getUrl()).includes("stg")){
            await browser.url("https://myaccount.nytimes.com/")
        }
        await this.setusernameAndPassword(username,password);
    }
    /**
     * log in with an account
     */
    async loginWithAccount() {
        this.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
    }
    /**
     * To click the login button
     */
    async clickLoginBtn(){
        await nav.loginBtn.waitForDisplayed();
        await nav.loginBtn.click();
    }
    /**
     * To click register account button
     */
    async createAccountBtn(){
        await this.registerBtn.waitForDisplayed();
        await this.registerBtn.click();
    }
    /**
     * to create a new account with credentials 
     * @param {*} username 
     * @param {*} password 
     */
    async createNewAccount(username,password){
        await this.usernameInputBox.waitForDisplayed()
        await this.setUsername(username)
        await this.createAccountBtn()
        await this.setPassword(password)
        await this.registerBtn.click()
        await browser.pause(1000)
    }
    /**
     * to create a new user 
     * @param {*} username 
     * @param {*} password 
     */
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
