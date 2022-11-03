const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');
const gamePage = require('../../pageobjects/game.page');



describe('Check rebus Functionality', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/mini/2022/10/16")
        await expect(browser).toHaveUrlContaining('mini')
    });

    it('verify puzzle is cleared ', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.clearBtn.click()
        await toolbar.puzzleAndTimerBtn.click()
        await expect(modal.startOverBtn).toBeClickable()
        await modal.startOverBtn.click()
    })

    it('verify rebus with ENTER key', async () => {
        await toolbar.rebusBtn.click()
        await browser.keys("word")
        await browser.pause(1000)
        await browser.keys("Enter")
        await expect(gamePage.secondHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })

    it('verify rebus with CLICKING OUT  ', async () => {
        await toolbar.rebusBtn.click()
        await browser.pause(1000)
        await browser.keys("goat")
        await browser.pause(1000)
        await game.acrossHeading.click()
        await expect(gamePage.thirdHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })

    it('verify rebus with ESCAPE key ', async () => {
        await toolbar.rebusBtn.click()
        await browser.keys("bike")
        await browser.pause(1000)
        await browser.keys("Escape")
        await expect(gamePage.thirdHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })
})