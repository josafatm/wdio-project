const modal = require('../pageobjects/modal.page');

class toolBar  {

    get settingsBtn() { return $(".xwd__toolbar_icon--settings-gear") }
    get timer() { return $(".timer-count") }
    get pauseBtn() { return $("button[aria-label='Timer Pause Button']") }
    get rebusBtn() { return $("button[aria-label='Rebus']") }
    get clearBtn() { return $("button[aria-label='clear']") }
    get toolbarRevealBtn() { return $("button[aria-label='reveal']") }
    get checkBtn() { return $("button[aria-label='check']") }
    get enabledAutocheck() { return $("button[aria-label='autocheck']") }
    get resetBtn() { return $("button[aria-label='Reset']") }
    get pauseBtn() { return $(".pz-icon.pz-icon-pause") }


    

    /*CHECK dropdown*/
    get autoCheck() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(1)") }
    get checkSquare() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(2)") }
    get checkWord() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(3) ") }
    get checkPuzzle() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(4) ") }

    /*CLEAR dropdown*/
    get incompleteBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(1)") }
    get wordBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(2)") }
    get puzzleBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(3)") }
    get puzzleAndTimerBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(4)") }

    /*REVEAL dropdown*/
    get revealSquareBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(1) button:nth-child(1)") }
    get revealWordBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(2) button:nth-child(1)") }
    get revealFullPuzzlelBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(3) button:nth-child(1)") }
    get revealHalfPuzzlelBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(4) button:nth-child(1)") }
    /**
     * to click settings button
     */
    async clickSettingsBtn(){
        await this.settingsBtn.waitForClickable()
        await this.settingsBtn.click()
    }
    /**
     * to go to settings from game launch
     */
    async goToSettings(){
        await modal.clickModalPlayBtn()
        await this.clickSettingsBtn()
    }
    /**
     * to reveal full puzzle
     */
    async revealFullPuzzle(){
        await this.revealFullPuzzlelBtn.waitForClickable()
        await this.revealFullPuzzlelBtn.click()
    }
    /**
     * to reveal half puzzle
     */
    async revealHalfPuzzle(){
        await this.revealHalfPuzzlelBtn.waitForClickable()
        await this.revealHalfPuzzlelBtn.click()
    }
    /**
    * to click reveal modal
    */
    async clickModalRevealBtn(){
        await modal.confirmRevealBtn.waitForClickable()
        await modal.confirmRevealBtn.click()
    }
    /**
     * to select what type of reveal to use 
     */
    async revealDropdown(option) {
        await modal.clickModalPlayBtn()
        await this.toolbarRevealBtn.click()
        if(option === "square"){
            await this.revealSquareBtn.click()
        }if(option === "word"){
            await this.revealWordBtn.click()
        }if(option === "puzzle"){
            await browser.pause(2000)
            await this.revealFullPuzzlelBtn.click()
            await this.clickModalRevealBtn()
            await modal.congratsText.isDisplayed()
            await modal.closeBtn.click()
        }     
    }
}
module.exports = new toolBar();