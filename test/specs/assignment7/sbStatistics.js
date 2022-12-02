const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const util  = require('../../pageobjects/utils');
const nav = require('../../pageobjects/nav.page');


describe('Verify stats page', async () => {
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('stats page', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
                (await game.wordleOverlayPagePlayBtn).click()
            }

        await game.wordleCloseBtn.waitAndClick()
        await game.wordleStatsBtn.waitAndClick()
        await game.linkMyAcountBtn.isDisplayed()
        await game.statsInfoLink.isDisplayed()
        await expect(game.statContainer).toBeExisting()
    })


})