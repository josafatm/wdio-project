const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const util  = require('../../pageobjects/utils');

describe('Color blind mode in wordle', async () => {
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('enter two words', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
                (await game.wordleOverlayPagePlayBtn).click()
            }
        await game.wordleCloseBtn.isDisplayed()
        await game.wordleCloseBtn.click()
        await browser.pause(1000)
        await browser.keys("ratio")
        await util.waitForAnimation()
        await browser.keys("salet")
        await util.waitForAnimation()
    })

    it('verify colorblind option', async () => {
        await game.wordleSettingsBtn.click()
        await game.wordleHighContrastBtn.click()
        await game.wordleCloseBtn.click()
        await browser.pause(1000)
        await expect(game.body).toHaveAttributeContaining('class', 'colorblind')
    })


})