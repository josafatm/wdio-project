const page = require('../../pageobjects/page');
const modal = require('../../pageobjects/modal.page');
const settings = require('../../pageobjects/settings.page');
const user = require('../../pageobjects/login.page');
const toolbar = require('../../pageobjects/toolbar.page');
const utils = require('../../pageobjects/utils');
const gamePage = require('../../pageobjects/game.page');

describe('Verify settings skip filled functionality', async () => {

    before(async () => {
        await user.login()
        await page.open("/game/daily/2022/06/16")
        await expect(browser).toHaveUrlContaining('daily')
    });

    it('verify the game is cleared', async () => {
        await modal.clickModalPlayBtn()
        await toolbar.clearBtn.click()
        await toolbar.puzzleAndTimerBtn.click()
        await expect(modal.startOverBtn).toBeClickable()
        await modal.startOverBtn.click()
    })

    it('verify the skip filled functionality is enabled', async () => {
        await utils.moveLeftFourTimes()
        await utils.moveRightTwice()
        await browser.keys("a")
        await browser.keys("b")
        await utils.moveLeftFourTimes()
        await browser.keys("c")
        await browser.keys("d")
        await expect(gamePage.fithHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })

    it('verify the skip filled functionality is disabled', async () => {
        await toolbar.clickSettingsBtn()
        await browser.pause(1000)
        await settings.skipFilledBtn.click()
        await expect(settings.skipFilledBtn).not.toBeSelected()
        await settings.saveAndCloseBtn()
        await browser.pause(1000)
        await utils.moveLeftThreeTimes()
        await expect(gamePage.firstHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })

    it('verify two leters are inserted ', async () => {
        await browser.keys("e")
        await browser.keys("f")
        await expect(gamePage.thirdHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })

    it('verify the skip filled functionality is disabled', async () => {
        await utils.moveLeftThreeTimes()
        await browser.keys("g")
        await browser.keys("h")
        await expect(gamePage.thirdHintDown).toHaveAttribute('class',"xwd__clue--li xwd__clue--highlighted")
    })
    




})
