const user = require('../pageobjects/login.page');
const nav = require('../pageobjects/nav.page');
const game = require('../pageobjects/game.page');
const page = require('../pageobjects/page');

describe('Proof of concept Demo', async () => {

    it('NYT-Games Login ', async () => {
        await user.login()
        //await user.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
        //await expect(game.loginBtn).not.toBeDisplayed()
    })

    it('Make Two Changes In Puzzle settings', async () => {
        await page.open("/game/daily/")
        await game.goToSettings()
        await game.clickMoveRadioBtn()
        await expect(game.moveBtn).toBeSelected()
        await game.clickNextClueCheckbox()
        await expect(game.nextClueBtn).toBeSelected()
        await game.saveAndCloseSettingsBtn()
    })

    it('Reveal Mini Puzzle', async () => {
        await page.open("/game/mini/")
        await game.revealDropdown("puzzle")
    })

    it('Revealing Daily Puzzle', async () => {
        await page.open("/game/daily/")
        await game.revealDropdown("puzzle")
    })

    it('Verifify Each Games In Nav Menu', async () => {
        await nav.hamburgerBtn.click()
        await nav.clickGamesinNav()
    })
})