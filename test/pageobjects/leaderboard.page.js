const nav = require('./nav.page')

class leaderboard {

    get playPuzzle() { return $(".lbd-score__link") }
    get nextBtn() { return $(".lbd-button.black") }
    get nameInput() { return $("#name") }
    get checkoutLeaderboardsLink() { return $(".lbd-type__text-link") }
    get lbScoreTime() { return $(".lbd-score__time") }
    get leaderboardHeader() { return $(".lbd-board__header.lbd-type__centered") }
    get settingsBtn() { return $(".lbd-button.white") }
    get addfriendsBtn() { return $(".lbd-button.black") }


    async clickNextBtn() {
        await this.nextBtn.isClickable()
        await this.nextBtn.click()
    } 

    async clickLeaderboardsLink() {
        await this.checkoutLeaderboardsLink.isClickable()
        await this.checkoutLeaderboardsLink.click()
    } 
    async clickPlayPuzzle() {
        await this.playPuzzle.isClickable()
        await this.playPuzzle.click()
        await browser.pause(2000)
    } 

    async goToLeaderBoard() {
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        await nav.leaderboards.click()
        await browser.pause(1000)
    } 








    




}

module.exports = new leaderboard();