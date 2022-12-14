const game = require('../pageobjects/game.page')

class nav {
    get loginBtn() { return $("div[id='js-nav-actions'] a[class='pz-nav__button white js-nav-login']") }
    get logoutBtn() { return $(".pz-nav__button.gray.js-nav-logout") }
    get hamburgerBtn() { return $(".pz-nav__hamburger-box") }
    get leaderboards() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/puzzles/leaderboards']") }
    get archive() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/crosswords/archive']") }
    get stats() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/puzzles/stats']") }
    get allGames() { return $$("[data-testid] a:first-child") }
    get allNavItems() { return $$("a[class='js-nav-tracker pz-nav-drawer__link']") }
    get letterBoxed() { return $("div[data-testid='letter-boxed']") }
    get spellingBee() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/puzzles/spelling-bee']") }


    get wordleNav() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/games/wordle/index.html']") }




    
    /**
     * to click the Hamburger
     */
    async clickHamburgerBtn(){
        await this.hamburgerBtn.waitForClickable()
        await this.hamburgerBtn.click()
    }
    /**
     * to click leaderboards
     */
    async clickLeaderboards(){
        await this.leaderboards.waitForClickable()
        await this.leaderboards.click()
    }

    async clickSpellingBee(){
        await this.clickHamburgerBtn()
        await browser.pause(1000)
        await this.spellingBee.waitForClickable()
        await this.spellingBee.click()

    }
    async clickLetterboxed(){
        await this.clickHamburgerBtn()
        await browser.pause(1000)
        await this.letterBoxed.waitForClickable()
        await this.letterBoxed.click()

    }



    /**
     * to click every game in the nav
     */
    async clickGamesinNav() {
        const navGames = await this.allGames;
        await browser.pause(1000)
        for (const elem of navGames) {
            await elem.waitForClickable()
            await elem.click()
            if ((await browser.getUrl()).includes("wordle")) {
                if ((await game.wordleOverlayPageText).isDisplayed()){
                    (await game.wordleOverlayPagePlayBtn).click()
                }
            (await game.wordleCloseBtn).click()
            await browser.back()
            }
        await this.hamburgerBtn.click()
        }
    }
    /**
    * to hover over all items
    */
    async hoverAllItemsInNav() {
        const navList = await this.allNavItems;
        for (const elem of navList) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }
}
module.exports = new nav();