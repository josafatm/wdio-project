const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');

describe('how to Play article and email', async () => {
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
        await browser.pause(1000)
        await spellingBee.moreBtn.waitAndClick()
        await spellingBee.howToPlayBtn.waitAndClick()
        await spellingBee.thisArticleLink.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrlContaining("spellingbee-tips")  
        await browser.switchToWindow(handles[0])
        
    })

    it('Open buzzword email', async () => {

        await spellingBee.buzzwordsLink.waitAndClick()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrlContaining("spellingbee-tips")  
        await browser.switchToWindow(handles[0])
        
    })
})



