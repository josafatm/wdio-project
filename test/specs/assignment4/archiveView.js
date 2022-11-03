const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const archive  = require('../../pageobjects/archive.page');

describe('Verify Each Games In Nav Menu', async () => {
    before(async () => {
        await user.login()
        await page.open("/archive")
        await expect(browser).toHaveUrlContaining('archive')
    });

    it('verify the list view', async () => {
        await archive.listModeBtn.click()
        await expect(archive.listViewEnabled).toExist()
    })

    it('verify the grid view', async () => {
        await archive.gridModeBtn.click()
        await expect(archive.listViewEnabled).not.toExist()
    })
})