const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');
const settings = require('../../pageobjects/settings.page');
const chai = require('chai')
const chaiExpect = chai.expect;

describe('Check Setting Modal', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/mini/")
        await expect(browser).toHaveUrlContaining('mini')
    });

    it('Verify all settings options is appearing', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.settingsBtn.click()
        await settings.verifyOptions()
        chaiExpect(await settings.verifyOptions()).to.equal(13)  
    })

    it('Verify all settings options is appearing', async () => {
        await browser.pause(1000) 
        await settings.toggleBtn.isClickable()
        await settings.toggleBtn.click()
        await expect(settings.toggleBtn).toBeSelected()
        await settings.restoreBtn.isClickable()
        await settings.restoreBtn.click()
        await modal.closeBtn.click() 
    })
})