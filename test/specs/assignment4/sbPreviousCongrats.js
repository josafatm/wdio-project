const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const archive  = require('../../pageobjects/archive.page');
const nav = require('../../pageobjects/nav.page');

describe('Verify Each Games In Nav Menu', async () => {
    before(async () => {
        await user.login()
        await page.open("/archive")
        await expect(browser).toHaveUrlContaining('archive')
    });

    it('go to spelling bee', async () => {
        await nav.clickHamburgerBtn()
        await nav.spellingBee.click()
        await expect(browser).toHaveUrlContaining("spelling-bee")
    })

    it('verify the grid view', async () => {
        await archive.gridModeBtn.click()
        await expect(archive.listViewEnabled).not.toExist()
    })
})