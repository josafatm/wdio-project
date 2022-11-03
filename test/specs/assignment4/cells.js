const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const game = require('../../pageobjects/game.page');

describe('Archive: sort Functionality', async () => {

    before(async () => {
        await user.login()
        await page.open("/daily")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('verify cells ', async () => {
        await page.open("/daily")
        console.log(await game.cells.length)

        const cellcount = await game.allNavItems;
        for (const cell of cellcount) {
            await cell.waitForClickable()
            await cell.moveTo()
            console.log(cell)
        }
    })
})