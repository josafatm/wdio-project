const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');

describe('How to Play article', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('go to spelling bee', async () => {
        await nav.clickSpellingBee()
        await spellingBee.pressPlayBtn()
        await utils.clearLocalStorage()
        await expect(browser).toHaveUrlContaining("spelling-bee")  
    })

    it('Open how to play article', async () => {
        await spellingBee.todayHintsBtn.waitAndClick()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrlContaining("spelling-bee-forum")  
        await browser.switchToWindow(handles[0])
    })
})



