const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const archive  = require('../../pageobjects/archive.page');

describe('Verify Upsell Banner', async () => {
    before(async () => {
        await page.open("/archive")
        await expect(browser).toHaveUrlContaining('archive')
    });

    it('verify the list view', async () => {
        await expect(archive.upsellBanner).toBeDisplayed()
        await archive.upsellSubscribeBtn.click()
        await expect(browser).toHaveUrlContaining('subscription')
    })
})