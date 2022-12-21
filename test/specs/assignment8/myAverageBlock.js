const hub  = require('../../pageobjects/hub.page');
const page  = require('../../pageobjects/page');
const user  = require('../../pageobjects/login.page');




describe('My Average Block', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('Verify Average Section', async () => {
        await expect(hub.myAverageTxt).toBeDisplayed()
        await expect(hub.streaksTxt).toBeDisplayed()
        await expect(hub.moreStats).toBeDisplayed()
        await hub.moreStats.click()
        await expect(browser).toHaveUrlContaining('stats')
    });
})
