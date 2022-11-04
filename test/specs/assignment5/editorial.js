const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const game = require('../../pageobjects/game.page');
const modal = require('../../pageobjects/modal.page');


describe('Wordplay Section', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/daily")
        await expect(browser).toHaveUrlContaining('daily')
    });
    
    it('verify the wordplay sectio links', async () => {
        await modal.clickModalPlayBtn()
        await game.wordPlay.isDisplayed()
        await game.wordPlay.scrollIntoView()

        const containers = await game.wordPlayHeadings;
        for (const container of containers) {
            await container.waitForClickable()
            await expect(container).toBeClickable()
            await container.moveTo()     
        }
    })
})