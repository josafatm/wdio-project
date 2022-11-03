const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');

xdescribe('Verify Each Games In Nav Menu', async () => {
    before(async () => {
        await user.login()
        await page.open("")

    });

    it('click every games in the nav', async () => {
        await nav.hamburgerBtn.click()
        await nav.letterBoxed.click()
        

     
    })
})