const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');
const util  = require('../../pageobjects/utils');

describe('How to play Modal', async () => {
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('verify how to play modal', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
            (await game.wordleOverlayPagePlayBtn).click()
        }
        await game.wordleModalHeading.isDisplayed()
        await expect(game.wordleSectionText).toBePresent()
    })
})
