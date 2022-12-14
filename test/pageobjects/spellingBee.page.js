const { wordle } = require("./nav.page")

class spellingBeePage {
    
    get playBtn() { return $("div[class='pz-moment__button-wrapper slide-up'] button[type='button']") }
    get title() { return $(".pz-moment__title.large.slide-up") }
    get queenBeeBtn() { return $("div[class='pz-moment__button-wrapper slide-up'] button[type='button']") }
    get closeBtn() { return $("button[aria-label='Close']") }

    //spelling Bee Hive Buttons
    get keyCell() { return $(".hive-cell:nth-of-type(1)") }
    get northwestCell() { return $(".hive-cell:nth-of-type(2)") }
    get northCell() { return $(".hive-cell:nth-of-type(3)") }
    get northeastCell() { return $(".hive-cell:nth-of-type(4)") }
    get southeastCell() { return $(".hive-cell:nth-of-type(5)") }
    get southCell() { return $(".hive-cell:nth-of-type(6)") }
    get southwestCell() { return $(".hive-cell:nth-of-type(7)") }
    get inputField() { return $(".sb-hive-input-content") }
    get inputCursor() { return $(".sb-hive-input-content") }



    get moreBtn() { return $("button[type='button'] span[class='pz-dropdown__label']") }
    get rankingsBtn() { return $("li:nth-child(2) button:nth-child(1)") }
    get howToPlayBtn() { return $("li:nth-child(1) button:nth-child(1)") }
    get thisArticleLink() { return $("a[href='https://www.nytimes.com/2021/12/09/crosswords/spellingbee-tips.html']") }
    get buzzwordsLink() { return $("p:nth-child(6) > a:nth-child(1)") }

    get todayHintsBtn() { return $(".pz-toolbar-button.pz-toolbar-button__hints") }

    
    get toggleStatsRanking() { return $("div[class='pz-toggle__option']") }
    get selectedStatRank() { return $(".pz-toggle__option.selected") }

    


    get welcomebackText() { return $(".pz-moment__title.large.slide-up") }


    
    






    get rankings() { return $$("div[id='portal-game-modals'] li span") }
    get rankingCloseBtn() { return $("div[class='sb-modal-close']") }

    get weekdays() { return $$('.sb-stats-bar__weekday') }
    get errorMessage() { return $('div[class="sb-message-box error-message"] span') }
    get successMessage() { return $('div[class="sb-message-box success-message"] span') }
    get pangramMessage() { return $('div span[ class="sb-message"]') }
    get statsBtn() { return $('span[class="pz-toolbar-button pz-toolbar-button__stats"]') }
    get statisticsTitle() { return $('.sb-modal-title') }


    get hiveInputAmount() { return $$('div:nth-child(1) > div:nth-child(2) > span:nth-child(1) span') }



    get deleteBtn() { return $('.hive-action.hive-action__delete.sb-touch-button') }
    get shuffleBtn() { return $('.hive-action.hive-action__shuffle.sb-touch-button') }
    get EnterBtn() { return $('.hive-action.hive-action__delete.sb-touch-button') }


    get shuffledWords() { return $$('div[class="hive"] svg[class="hive-cell outer"] text[class="cell-letter"] ') }

    
    
    


    async verifyArchiveTabs() {
        const days = await this.weekdays;
        for (const day of days) {
            await day.waitForClickable()
            await day.moveTo()
        }
    }
    
    



    async getShuffledWords() {
        const words = await this.shuffledWords;
        let wording = ''
        for (const word of words) {
            let letter = await word.getText()
            wording = wording+letter
            await word.moveTo()
        }
        console.log(`This is the word:  ${wording}`)
        return wording
    }
    
    








    async resetBoard(){
        await browser.pause(500)
        this.northCell.click()
        this.northwestCell.click()
        this.northeastCell.click()
        this.southeastCell.click()
        this.southCell.click()
        this.southwestCell.click()
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(1000)
    }

    async getRanking(){
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await this.keyCell.click()
        await browser.pause(500)
        await browser.keys("Enter")
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(1000)

    }

    async resetAndGetRanking(){
        await browser.pause(1000)
        await this.resetBoard()
        await this.getRanking()
        await browser.pause(2000)
    }

    async clickRankingBtn(){
        await browser.pause(1000)
        await this.moreBtn.click()
        await browser.pause(1000)
        await this.rankingsBtn.click()
        await browser.pause(1000)
    }

    async pressPlayBtn(){
        await browser.pause(1000)
        await this.playBtn.click()
        await browser.pause(1500)
        if(await this.title.isDisplayed()){
            await this.closeBtn.click()
        }
    }




}
module.exports = new spellingBeePage();