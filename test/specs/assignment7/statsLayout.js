const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');

describe('Verify stats toggle', async () => {
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
        await expect(spellingBee.selectedStatRank).toHaveText('This Week')
    })

    it('toggle stats', async () => {
        await spellingBee.toggleStatsRanking.click()
        await expect(spellingBee.selectedStatRank).toHaveText('Last Week')
    })
})



