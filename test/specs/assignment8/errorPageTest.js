const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');

describe('Verify Each Games In Nav Menu', async () => {
    before(async () => {
        await user.login()
        await page.open("/game/daily/")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('check 404 link', async () => {
        await browser.url("https://www.nytimes.com/puzzles/fake-link?error=401")
        await expect(game.errorPage).toBeDisplayed()
    })
    it('check 404 link', async () => {
        await browser.url("https://www.nytimes.com/puzzles/fake-link?error=404")
        await expect(game.errorPage).toBeDisplayed()
    })
    it('check 500 link', async () => {
        await browser.url("https://www.nytimes.com/puzzles/fake-link?error=500")
        await expect(game.errorPage).toBeDisplayed()
    })

})

