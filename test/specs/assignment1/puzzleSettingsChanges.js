const page = require('../../pageobjects/page');
const tools = require('../../pageobjects/toolbar.page');
const settings = require('../../pageobjects/settings.page');
const user = require('../../pageobjects/login.page');

describe('Make Two Changes In Puzzle settings', async () => {
    before(async () => {
        await user.login()
        await page.open("/game/daily/")
        await expect(browser).toHaveUrlContaining('daily')

    });

    it('settings page is opened', async () => {
        await tools.goToSettings()
        await expect(settings.Title).toBeDisplayed()
    })

    it('click move radio button', async () => {
        await settings.clickMoveRadioBtn()
        await expect(settings.moveBtn).toBeSelected()
    })

    it('click next clue checkbox', async () => {
        await settings.clickNextClueCheckbox()
        await expect(settings.nextClueBtn).toBeSelected()
        await settings.saveAndCloseBtn()
    })
})