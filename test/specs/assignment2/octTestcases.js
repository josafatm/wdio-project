const user = require('../../pageobjects/login.page');
const nav = require('../../pageobjects/nav.page');
const game = require('../../pageobjects/game.page');
const page = require('../../pageobjects/page');
const hub = require('../../pageobjects/hub.page');
const web = require('../../pageobjects/utils');
const leaderboard = require('../../pageobjects/leaderboard.page');
const archive = require('../../pageobjects/archive.page');
const stats = require('../../pageobjects/stats.page');
const chai = require('chai')
const chaiExpect = chai.expect;


xdescribe('progress icon appears when the browser back key is pressed', async () => {

    it('NYT-Games Login ', async () => {
        await user.login()
        //await user.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
        //await expect(game.loginBtn).not.toBeDisplayed()
    })

    it('Verify progress icon is appearing', async () => {
        await page.open("")     
        await hub.featuredDailyPuzzle.moveTo()
        while(await hub.featuredDailyPuzzleBanner.getText() !== "PLAY"){

            if((await hub.featuredDailyPuzzleBanner.getText() === "REVIEW")){
                await browser.pause(1000)
                await hub.featuredDailyPuzzle.click()
                await game.clickModalPlayBtn()
                await web.goBackAndRefresh()
                break

            }if((await hub.featuredDailyPuzzleBanner.getText() === "RESUME")){
                await hub.featuredDailyPuzzle.click()
                await game.revealDropdown("puzzle")
                await browser.pause(1000)
                await web.goBackAndRefresh()
                break
            }
        }
  
        await hub.featuredDailyPuzzle.click()
        await game.revealDropdown("word")
        await game.pauseBtn.click() //needs to be pressed
        await web.goBackAndRefresh()
        await hub.featuredDailyPuzzle.moveTo()
        await expect(await hub.featuredDailyPuzzleBanner).toHaveText('RESUME')
        await hub.featuredDailyPuzzle.click()
        await game.modalPlayBtn.isDisplayed()
        await browser.back()
    })

    it('Verify reveal in past seven days', async () => {
        await page.open("")
        await hub.lastSevenDaysText.scrollIntoView();
        await browser.pause(1000)
        //verify that the first item in the seven days is not already solved
        if (await hub.blueStarInSevenDays.isExisting()){
            await hub.blueStarInSevenDays.click()
            await game.clickModalPlayBtn()
            await web.goBackAndRefresh()

        }if(await hub.resumeBannerInSevenDays.isExisting()){
            await hub.firstItemInSevenDays.click()
            await browser.pause(1000)
            await game.revealDropdown("puzzle")
            await game.resetBtn.click()
            await web.goBackAndRefresh()
            await hub.firstItemInSevenDays.isExisting()
        }
        await hub.firstItemInSevenDays.click()
        await game.revealDropdown("puzzle")
        await web.goBackAndRefresh()
        await hub.blueStarInSevenDays.isExisting()
        await hub.firstItemInSevenDays.click()
        await game.clickModalPlayBtn()
        await web.goBackAndRefresh()
        await hub.firstItemInSevenDays.isExisting()
    })

})

xdescribe('auto populate name on leaderboard screen', async () => {

    it('Create a new user account', async () => {
        //await user.login()
        await user.createUser(await web.generatedEmail(),"password")
        await expect(game.loginBtn).not.toBeDisplayed()
        browser.pause(3000)
    })

    it('Populate name & time in leaderboard ', async () => {
        await page.open("")
        await nav.clickHamburgerBtn()
        await nav.clickLeaderboards()

        const randomUsername = await leaderboard.nameInput.getValue()
        await leaderboard.nameInput.clearValue()
        await leaderboard.nameInput.setValue(randomUsername)

        await leaderboard.clickNextBtn()
        await leaderboard.clickLeaderboardsLink()
        await leaderboard.clickPlayPuzzle()
        await game.revealDropdown("puzzle")
        await browser.pause(3000)

        const time = await game.timer.getText()
        await leaderboard.goToLeaderBoard()
        chaiExpect(time).to.equal('0:02' || '0:03')    
  
    })
})

xdescribe('Restoring default settings', async () => {

    it('Login user', async () => {
        await user.login()
        //await user.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
        //await expect(game.loginBtn).not.toBeDisplayed()
    })

    it('verify show timer in settings ', async () => {
        await page.open("/game/daily/")
        await game.goToSettings()
        await game.showTimerBtn.click()
        await game.saveCloseBtn.click()
        const timer = await game.timer.isExisting()
        chaiExpect(timer).to.equal(false)
        await browser.pause(1000)
        await game.clickSettingsBtn()
        await game.restoreBtn.click()
        await game.saveCloseBtn.click()
 
    })
})

xdescribe('changing directions in puzzle settings', async () => {

    it('Login user', async () => {
        await user.login()
        //await user.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
        //await expect(game.loginBtn).not.toBeDisplayed()
    })

    it('verify show timer in settings ', async () => {
        await page.open("/game/mini/")
        await game.clickModalPlayBtn()
        await web.moveDownThenRight()
        await game.clickSettingsBtn()
        await game.switchArrowBtn.click()
        await game.saveAndCloseSettingsBtn()
        await web.moveDownThenRight()
    })
})

xdescribe('Hub Layout for Subscribed user', async () => {

    it('Login user', async () => {
        await user.login()
        //await user.loginUser("josafat.melendez@nytimes.com","K5sFqn-eKZFA}Pv?.")
        //await expect(game.loginBtn).not.toBeDisplayed()
    })

    it('verify Navigation', async () => {
        await nav.hamburgerBtn.click()
        await nav.hoverAllItemsInNav()
        await nav.hamburgerBtn.click()
        //await expect(elem).toBeClickable()

    })

    it('verify banners', async () => {
        await hub.miniPuzzle.moveTo()
        await expect(hub.miniPuzzle).toExist()

        await hub.featuredDailyPuzzle.moveTo()
        await expect(hub.featuredDailyPuzzleBanner).toExist()

        await hub.wordPlayLink.moveTo()
        await expect(hub.wordPlayLink).toExist()

    })

    it('verify Games Hub', async () => {
        await hub.hoverMoreGames()
        await expect(hub.monthlyBonus).toExist()
        await expect(hub.lastSevenDayText).toExist()
        await expect(hub.inProgressText).toExist()
        await expect(hub.varietyPuzzlesText).toExist()        
        await expect(hub.featuredArticle).toExist()
        await expect(hub.footerText).toExist()
    })

    it('verify Archives ', async () => {
        await page.open("/archive/")
        await archive.listModeBtn.isDisplayed()
        await archive.gridModeBtn.isDisplayed()
        await archive.verifyArchiveTabs()
        await archive.gridMonthBtn.isDisplayed()
        await archive.gridYearBtn.isDisplayed()
    })

    it('verify Statictics ', async () => {
        await page.open("")
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        await nav.stats.click()
        await browser.pause(1000)
        await stats.puzzleSolved.isDisplayed()
        await stats.solvedRate.isDisplayed()
        await stats.currentStreak.isDisplayed()
        await stats.longestStreak.isDisplayed()

    })

    it('verify Leaderboard ', async () => {
        await page.open("")
        await nav.clickHamburgerBtn()
        await nav.clickLeaderboards()
        await browser.pause(1000)
        await leaderboard.leaderboardHeader.isDisplayed()
        await leaderboard.settingsBtn.isDisplayed()
        await leaderboard.addfriendsBtn.isDisplayed()
    })
})

xdescribe('Masthead & Footer', async () => {

    it('verify menu bar', async () => {
        await page.open("")
        await hub.logo.isDisplayed()
        await hub.subscribeBtn.isDisplayed()
        await hub.subscribeBtn.click()
        await hub.subscribeNowBtn.isDisplayed()
        await browser.back()
        await nav.loginBtn.isDisplayed()
    })

    it('verify every footer link', async () => {
        await hub.footerLinks()
    })


})



