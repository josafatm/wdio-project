const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const util  = require('../../pageobjects/utils');
const nav = require('../../pageobjects/nav.page');


describe('Spelling Bee button in worlde', async () => {
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
        await game.wordleStatsBtn.waitAndClick()
        await game.wordlePromoBtn.waitAndClick()
        await expect(browser).toHaveUrlContaining('spelling-bee')
    })

    it('Verift attempt 3 out of 6', async () => {
        await browser.back()
        if ((await game.wordleOverlayPageText).isDisplayed()){
            (await game.wordleOverlayPagePlayBtn).click()
        }
        await game.wordleCloseBtn.waitAndClick()
        await util.enterWordleAnswer()
        await game.wordleStatsBtn.waitAndClick()
        await game.wordlePromoBtn.waitAndClick()
        await expect(browser).toHaveUrlContaining('spelling-bee')
    })
})