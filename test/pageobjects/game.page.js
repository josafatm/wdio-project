class gamePage {

    /*Welcome Modal*/
    get modalPlayBtn() { return $(".pz-moment__button") }

    /*featured games*/
    get puzzleProgress() { return $("div[class='featured button action-play primary puzzleInfo js-hub-tracker'] h3[class='title']") }
    
    /*Puzzle Settings Modal*/
    get settingsBtn() { return $(".xwd__toolbar_icon--settings-gear") }
    get moveBtn() { return $("input[value='move']") }
    get nextClueBtn() { return $("input[name='autoAdvance']") }
    get showTimerBtn() { return $("input[name='showTimer']") }
    get switchArrowBtn() { return $("#switchMove") }
    get saveCloseBtn() { return $("button[aria-label='Save and close']") }
    get restoreBtn() { return $("button[aria-label='Restore defaults']") }

    /*Toolbar*/
    get toolbarRevealBtn() { return $("button[aria-label='reveal']") }
    get resetBtn() { return $("button[aria-label='Reset']") }
    get pauseBtn() { return $("button[aria-label='Timer Pause Button']") }
    get timer() { return $(".timer-count") }

    /*Toolbar reveal dropdown*/
    get revealSquareBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(1) button:nth-child(1)") }
    get revealWordBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(2) button:nth-child(1)") }
    get revealFullPuzzlelBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(3) button:nth-child(1)") }
    get revealHalfPuzzlelBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(4) button:nth-child(1)") }

    /*congrats modal*/
    get closeBtn() { return $(".pz-icon.pz-icon-close") }
    get viewAllGamesBtn() { return $("button[aria-label='View all games']") }
    get congratsText() { return $(".pz-moment__title.large") }

    /* reveal modal */
    get confirmRevealBtn() { return $("button[aria-label='Reveal']") }

    /*wordle*/
    get wordleCloseBtn() { return $("div[class='Modal-module_closeIcon__b4z74']") }
    get wordleOverlayPageText() { return $("div[class='Welcome-module_title__BVIWQ']") }
    get wordleOverlayPagePlayBtn() { return $("button[class='Welcome-module_button__tEJl9']") }

    /*Welcome Modal and Reset*/
    async clickModalPlayBtn(){
        await this.modalPlayBtn.waitForClickable()
        await this.modalPlayBtn.click()
        browser.pause(1000)
        if ((await this.resetBtn).isDisplayed()) {
            (await this.resetBtn).click()
        }
    }

    /*Tool Bar*/
    async clickSettingsBtn(){
        await this.settingsBtn.waitForClickable()
        await this.settingsBtn.click()
    }

    /*Puzzle Settings*/
    async clickMoveRadioBtn(){
        await this.moveBtn.waitForClickable()
        await this.moveBtn.click()
    }

    async clickNextClueCheckbox(){
        await this.nextClueBtn.waitForClickable()
        await this.nextClueBtn.click()
    }

    async saveAndCloseSettingsBtn(){
        await this.saveCloseBtn.waitForClickable()
        await this.saveCloseBtn.click()
    }

    async goToSettings(){
        await this.clickModalPlayBtn()
        await this.clickSettingsBtn()
    }

    /*Reveal Puzzles*/
    async revealFullPuzzle(){
        await this.revealFullPuzzlelBtn.waitForClickable()
        await this.revealFullPuzzlelBtn.click()
    }

    async revealHalfPuzzle(){
        await this.revealHalfPuzzlelBtn.waitForClickable()
        await this.revealHalfPuzzlelBtn.click()
    }

    async clickModalRevealBtn(){
        await this.confirmRevealBtn.waitForClickable()
        await this.confirmRevealBtn.click()
    }
    
    async revealDropdown(option) {
        await this.clickModalPlayBtn()
        await this.toolbarRevealBtn.click()
        if(option === "square"){
            await this.revealSquareBtn.click()
        }if(option === "word"){
            await this.revealWordBtn.click()
        }if(option === "puzzle"){
            await browser.pause(2000)
            await this.revealFullPuzzlelBtn.click()
            await this.clickModalRevealBtn()
            await this.congratsText.isDisplayed()
            await this.closeBtn.click()
        }     
    }
}
module.exports = new gamePage();