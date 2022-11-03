const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const chai = require('chai')
const chaiExpect = chai.expect;

describe('SB Ranking', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('go to spelling bee', async () => {
        await nav.clickHamburgerBtn()
        await browser.pause(1000)
        await nav.spellingBee.click()
        await expect(browser).toHaveUrlContaining("spelling-bee")
    })

    it('go to spelling bee', async () => {
        await browser.pause(1000)
        await spellingBee.playBtn.click()
        await browser.pause(1000)

        if(await spellingBee.title.isDisplayed()){
            await spellingBee.closeBtn.click()
        }
        await browser.pause(1000)
        await spellingBee.resetBoard()

        await spellingBee.getRanking()
        
        await browser.pause(2000)
        await spellingBee.closeBtn.click()

        await browser.pause(1000)
        await spellingBee.moreBtn.click()
        await browser.pause(1000)
        await spellingBee.rankingsBtn.click()
        await browser.pause(1000)

        const ranks = await spellingBee.rankings.length
        chaiExpect(await ranks).to.equal(9)  

        await spellingBee.rankingCloseBtn.click()
        await browser.pause(1000)



    })

    it('go to spelling bee', async () => {
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(2000)
        await spellingBee.closeBtn.click()

        await browser.pause(1000)
        await spellingBee.moreBtn.click()
        await browser.pause(1000)
        await spellingBee.rankingsBtn.click()
        await browser.pause(1000)

        const ranks = await spellingBee.rankings.length
        chaiExpect(await ranks).to.equal(10)  
    })

})