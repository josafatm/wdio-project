const page = require('../../pageobjects/page');
const toolbar = require('../../pageobjects/toolbar.page');
const settings = require('../../pageobjects/settings.page');
const user = require('../../pageobjects/login.page');

before(async () => {
    await user.login()
    await page.open("/game/daily/")
    await expect(browser).toHaveUrlContaining('daily')
});

describe('Reveal Puzzles', async () => {
    
    it('verify Mini puzzle is fully revealed', async () => {
        await page.open("/game/mini/")
        await toolbar.revealDropdown("puzzle")
    })

    it('verify Daily puzzle is fully revealed', async () => {
        await page.open("/game/daily/")
        await toolbar.revealDropdown("puzzle")
    })
})
