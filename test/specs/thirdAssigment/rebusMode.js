const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');

describe('Rebus mode', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/daily/2022/10/18")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('Verify progress icon is appearing', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.clearBtn.click()
        await toolbar.puzzleAndTimerBtn.click()
        await expect(modal.startOverBtn).toBeClickable()
        await modal.startOverBtn.click()
    })

    it('Verify rebus button is enabled the first time  ', async () => {
        await browser.keys("Escape")
        await expect(toolbar.rebusBtn).toBeEnabled()
    })

    it('Verify rebus button is enabled the second time  ', async () => {
        await browser.keys("goat")
        await browser.keys("Enter")
        await browser.keys("Escape")
        await expect(toolbar.rebusBtn).toBeEnabled()
    })
})
