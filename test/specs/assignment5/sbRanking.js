const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const chai = require('chai')
const chaiExpect = chai.expect;

describe('Confirming Queen Bee Ranking', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('go to spelling bee', async () => {
        await nav.clickSpellingBee()
        await expect(browser).toHaveUrlContaining("spelling-bee")
    })

    it('reset and get a ranking', async () => {
        await spellingBee.pressPlayBtn()
        await spellingBee.resetAndGetRanking() 
        await spellingBee.closeBtn.click()
        await spellingBee.clickRankingBtn()

        const ranks = await spellingBee.rankings.length
        chaiExpect(await ranks).to.equal(9)  
        await spellingBee.rankingCloseBtn.click()
    })

    it('get Queen Bee Ranking', async () => {
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.keys("Enter")
        await browser.pause(1000)
        await spellingBee.closeBtn.click()

        await spellingBee.clickRankingBtn()


        const ranks = await spellingBee.rankings.length
        chaiExpect(await ranks).to.equal(10)  
    })
})