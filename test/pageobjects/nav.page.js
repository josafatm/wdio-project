const game = require('../pageobjects/game.page')

class nav {
    
    /*nav buttons */
    get loginBtn() { return $("div[id='js-nav-actions'] a[class='pz-nav__button white js-nav-login']") }
    get hamburgerBtn() { return $(".pz-nav__hamburger-box") }

    /* nav games*/
    get leaderboards() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/puzzles/leaderboards']") }
    get archive() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/crosswords/archive']") }
    get stats() { return $(".js-nav-tracker.pz-nav-drawer__link[href='/puzzles/stats']") }

    /*group of nav items*/
    get allGames() { return $$("[data-testid] a:first-child") }
    get allNavItems() { return $$("a[class='js-nav-tracker pz-nav-drawer__link']") }

    async clickHamburgerBtn(){
        await this.hamburgerBtn.waitForClickable()
        await this.hamburgerBtn.click()
    }
    async clickLeaderboards(){
        await this.leaderboards.waitForClickable()
        await this.leaderboards.click()
    }

    /*Games in nav*/
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
    
    /* All items in the nav*/
    async hoverAllItemsInNav() {
        const navList = await this.allNavItems;
        for (const elem of navList) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }
}

module.exports = new nav();