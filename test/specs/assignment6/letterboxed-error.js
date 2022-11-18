const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const letterboxed = require('../../pageobjects/letterboxed.page');

describe('Confirming Word Validation', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('go to letterboxed', async () => {
        await nav.clickLetterboxed()
        await spellingBee.pressPlayBtn()
        //reset game
        await expect(browser).toHaveUrlContaining("letter-boxed")  
    })
    
    it('Validate "Too short" message', async () => {
        await browser.keys("Enter")
        await expect(letterboxed.errorMessage).toHaveText('Too short')
    })

    it('Validate "not a word"" message', async () => {
        await browser.pause(1500)
        let word = await letterboxed.getfirstLetterEachSide()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(letterboxed.errorMessage).toHaveText('Not a word')
    })

})