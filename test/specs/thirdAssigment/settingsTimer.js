const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');
const settings = require('../../pageobjects/settings.page');

describe('Show timer is off in settings', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/daily/")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('verify the uncheck showtimer option', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.clickSettingsBtn()
        await settings.showTimerBtn.click()
        await expect(settings.showTimerBtn).not.toBeChecked()
        await settings.saveAndCloseBtn()
    })

    it('verify the uncheck showtimer option', async () => {
        await game.logoBtn.click()
        await page.open("/game/daily")
        await modal.clickModalPlayBtn()
        await toolbar.timer.waitForExist({ reverse: true });
        await expect(toolbar.timer).not.toExist()
    })

    it('verify the restore button', async () => {
        await toolbar.clickSettingsBtn()
        await expect(settings.restoreBtn).toBeExisting()
        await settings.restoreBtn.click()
    })
})