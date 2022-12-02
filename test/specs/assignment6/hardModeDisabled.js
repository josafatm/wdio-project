const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');
const util  = require('../../pageobjects/utils');

xdescribe('Hard Mode in wordle', async () => {
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('enter Wordle', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
            (await game.wordleOverlayPagePlayBtn).click()
        }
        await game.wordleCloseBtn.isDisplayed()
        await game.wordleCloseBtn.click()
    })

    it('verify hardmode option', async () => {
        await browser.pause(1000)
        await game.toggleHardModeEnterWord()
        await game.toggleHardModeEnterWord()
        await game.clickHardModeBtn()
        await expect(game.wordleToaster).toHaveText('Hard mode can only be enabled at the start of a round')
    })
})