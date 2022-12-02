const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const util  = require('../../pageobjects/utils');
const nav = require('../../pageobjects/nav.page');
const page = require('../../pageobjects/page');
const login = require('../../pageobjects/login.page');

describe('Wordle Login with FB and Google accounts', async () => {

    before(async () => {
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('Verify the welcome screen', async () => {
        await nav.hamburgerBtn.waitAndClick()
        await nav.wordleNav.waitAndClick()
        await expect(game.wordleLoginBtn).toBePresent()
    })


    it('Login with Facebook ', async () => {
        await game.wordleLoginBtn.waitAndClick()
        await login.fbBtn.waitAndClick()
        await browser.pause(2000)

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await login.facebookSignin("nytdiaspark@gmail.com","nytimes123")
        await browser.switchToWindow(handles[0])
        await game.wordleModalHeading.waitForDisplayed()
        await login.delCookie()

        await browser.url("https://www.nytimes.com/crosswords")
        await nav.hamburgerBtn.waitAndClick()
        await nav.wordleNav.waitAndClick()
        await expect(game.wordleLoginBtn).toBePresent()

    })

    xit('Login with Google ', async () => {

        await game.wordleLoginBtn.waitAndClick()
        await login.googleBtn.waitAndClick()
        await browser.pause(5000)

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        
        await login.googleSignin("crossword.nyt@gmail.com","cross321")
        await browser.switchToWindow(handles[0])
        await browser.pause(7000)
    })
})