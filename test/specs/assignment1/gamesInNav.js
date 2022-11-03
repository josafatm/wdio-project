const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');

describe('Verify Each Games In Nav Menu', async () => {
    before(async () => {
        await user.login()
        await page.open("/game/daily/")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('click every games in the nav', async () => {
        await nav.hamburgerBtn.click()
        const navGames = await nav.allGames;
        await browser.pause(1000)
        for (const elem of navGames) {
            //await elem.waitForClickable()
            await expect(elem).toBeClickable()
            await elem.click()
            if ((await browser.getUrl()).includes("wordle")) {
                if ((await game.wordleOverlayPageText).isDisplayed()){
                    (await game.wordleOverlayPagePlayBtn).click()
                }
            (await game.wordleCloseBtn).click()
            await browser.back()
            }
        await nav.hamburgerBtn.click()
        }
    })
})