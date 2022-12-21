const game = require('../../pageobjects/game.page');
const hub  = require('../../pageobjects/hub.page');
const toolbar = require('../../pageobjects/toolbar.page');
const modal = require('../../pageobjects/modal.page');

describe('Anon mini Modal', async () => {
    before(async () => {
        await browser.url("https://www.nytimes.com/crosswords/game/mini")
        await expect(browser).toHaveUrlContaining('mini')
    });

    it('Verify Progress Modal', async () => {
        await expect(modal.createAccountbtn).toBeDisplayed()
        await expect(modal.playWithoutAccountLink).toBeDisplayed()
    });

    it('Verify Progress Modal', async () => {
        await modal.playWithoutAccountLink.waitAndClick()
        await toolbar.revealDropdown("word")
        await game.logoBtn.waitAndClick()
        await expect(hub.minipuzzleProgress).not.toBeDisplayed()
    });

    //.miniProgress1

})
