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
    get rankings() { return $$("div[id='portal-game-modals'] li span") }
    get rankingCloseBtn() { return $("div[class='sb-modal-close']") }

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
}
module.exports = new spellingBeePage();