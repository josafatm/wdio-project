const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');

describe('Autocheck settings persists when user reopens the puzzle', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/daily/")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('Enabling autocheck', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.checkBtn.click()
        await toolbar.autoCheck.click()
        if(modal.autoCheckBtn.toBeDisplayed()){
            modal.autoCheckBtn.click()
        }
        await expect(toolbar.enabledAutocheck).toBeDisplayed()
    })

    it('Verify autocheck is still enabled after returning', async () => {
        await game.logoBtn.click()
        await page.open("/game/daily")
        await modal.clickModalPlayBtn()
        await expect(toolbar.enabledAutocheck).toBeDisplayed()
    })
})