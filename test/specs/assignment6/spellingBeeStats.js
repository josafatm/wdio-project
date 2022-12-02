const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');

describe('Confirming Word Validation', async () => {
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

    it('Open Stats Modal', async () => {
        await browser.pause(1000)
        await spellingBee.statsBtn.click()
        await expect(spellingBee.statisticsTitle).toHaveText('Statistics')
    })

    it('verify each day of the week', async () => {
        await expect(spellingBee.weekdays[0]).toHaveText('M')
        await expect(spellingBee.weekdays[6]).toHaveText('S')
        await spellingBee.rankingCloseBtn.click()
    })

    it('verify raking with little points ', async () => {
        let word = await utils.getFiveLetterWord()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await browser.pause(1000)
        //await expect(spellingBee.errorMessage).toHaveText('Already found')
    })

})



