const tools = require('../pageobjects/toolbar.page');

class modal  {

    get resetBtn() { return $("button[aria-label='Reset']") }
    get autoCheckBtn() { return $("button[aria-label='Use autocheck']") }
    

    /*Welcome*/
    get modalPlayBtn() { return $(".pz-moment__button") }

     /*clear puzzle*/
     get startOverBtn() { return $("button[aria-label='Start over']") }

     /*congrats*/
     get closeBtn() { return $(".pz-icon.pz-icon-close") }
     get viewAllGamesBtn() { return $("button[aria-label='View all games']") }
     get congratsText() { return $(".pz-moment__title.large") }

     /* reveal*/
     get confirmRevealBtn() { return $("button[aria-label='Reveal']") }
 
     /*Reset Timer*/
     get resetTimerBtn() { return $("button[aria-label='Reset timer']") }
     get neverMindBtn() { return $(" button[aria-label='Never mind']") }     
    /**
     * to click the modal play button
     */
     async clickModalPlayBtn(){
        await this.modalPlayBtn.waitForClickable()
        await this.modalPlayBtn.click()
        if (await this.resetBtn.isExisting()) {
            await this.resetBtn.click()
        }
        await browser.pause(1000)
    }
}
module.exports = new modal();




