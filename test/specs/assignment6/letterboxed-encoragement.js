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
        await letterboxed.restartBtn.click()
        await expect(browser).toHaveUrlContaining("letter-boxed")  
    })
    
    it('Validate "Awesome!" message', async () => {
        let word = await letterboxed.getAWord()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(letterboxed.successMessage).toHaveText('Awesome!')
    })

    it('Validate "Awesome!" message', async () => {
        await browser.pause(2500)
        await browser.keys("Backspace")
        await browser.keys("Enter")
        await expect(letterboxed.successMessage).toHaveText('Nice!')
    })

    it('Validate "Genius!" message', async () => {
        await browser.pause(2500)
        await letterboxed.restartBtn.click()
        let word = await letterboxed.getSevenLetterWord()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(letterboxed.successMessage).toHaveText('Genius!')

    })
})