const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const toolbar = require('../../pageobjects/toolbar.page');
const modal = require('../../pageobjects/modal.page');

const user = require('../../pageobjects/login.page');

describe('Pausing Timer', async () => {
    before(async () => {
        await user.login()
        await page.open("/game/daily")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('open new tab with timer', async () => {
        await modal.clickModalPlayBtn()
        await browser.newWindow("https://google.com");
        await browser.pause(1000)
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        await toolbar.pauseBtn.click()
        await browser.pause(5000)
        await toolbar.pauseBtn.click()
        await expect(modal.continueBtn).toBeDisplayed()
        await modal.continueBtn.click()
    })
})