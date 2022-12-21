const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const util  = require('../../pageobjects/utils');
const nav = require('../../pageobjects/nav.page');
const utils = require('../../pageobjects/utils');

describe('Anon Welcome Modal', async () => {
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('enter two words', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
                (await game.wordleOverlayPagePlayBtn).click()
            }

        await game.wordleCloseBtn.waitAndClick()
        await browser.pause(1000)
        await browser.keys("ratio")
        await util.waitForAnimation()
        await browser.keys("salet")
        await util.waitForAnimation()
        await expect(game.thirdRowFirstCell).toHaveAttr('aria-label', 'empty')
    })

    it('Verift attempt 3 out of 6', async () => {
        await browser.back()
        await nav.hamburgerBtn.waitAndClick()
        await nav.logoutBtn.waitAndClick()
        await user.login()
        await nav.hamburgerBtn.waitAndClick()
        await nav.wordleNav.waitAndClick()
        await expect(game.attemptThreeOutOfSix).toHaveText("Youʼre on attempt 3 out of 6. Keep it up!")
    })



    it('Verift attempt 3 out of 6', async () => {
        let outerLetters = await utils.getOuterLetters()



    })




})