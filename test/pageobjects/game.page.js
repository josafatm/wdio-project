class gamePage {

    get logoBtn() { return $("svg[class='pz-nav__logo']") }
    get acrossHeading() { return $(" div[class='xwd__layout_container'] div div:nth-child(1) h3") }
    get clueNumberTwo() { return $("li[class='xwd__clue--li xwd__clue--selected'] span[class='xwd__clue--text xwd__clue-format']") }

    /*wordle*/
    //get wordleCloseBtn() { return $("div[class='Modal-module_closeIcon__b4z74']") }
    get wordleOverlayPageText() { return $("div[class='Welcome-module_title__BVIWQ']") }
    get wordleOverlayPagePlayBtn() { return $("button[class='Welcome-module_button__tEJl9']") }
    get wordleCloseBtn() { return $("button[aria-label='Close']") }
    get wordleSettingsBtn() { return $('button[id="settings-button"]') }
    get wordleHardModeBtn() { return $("button[aria-label='hardMode']") }
    get wordleToaster() { return $("div[class='Toast-module_toast__Woeb- Toast-module_fade__uPhAg']") }
    get wordleHighContrastBtn() { return $("button[aria-label='colorblindMode'] span[class='Switch-module_knob__oRTpP']") }

    get wordleHamburgerBtn() { return $("button[id='AppHeader-module_navButton__fB5nf']") }
    get wordleLoginBtn() { return $("a button[type='button']")}
    get wordleLogoutBtn() { return $("a[role='button']") }
    get wordleNavLoginBtn() { return $("a[class='NavAccount-module_loginButton__ANAQ0']")}

    get wordleModalHeading() { return $(".Modal-module_heading__oD1Ps.Modal-module_newHeading__VPJpL")}
    get wordleSectionText() { return $(`section[class="Help-module_help__9NXqR"]`)}
    get wordleStatsBtn() { return $(`#statistics-button`)}
    get wordlePromoBtn() { return $(`#promo-button`)}


    get spellingBeeStatsBtn() { return $(`a[href="https://www.nytimes.com/puzzles/spelling-bee"]`)}
    get statsModule() { return $(`div[class="Stats-module_statistics__Hke7Z"]`)}
    get linkMyAcountBtn() { return $(`button[aria-label='Link stats to my account']`)}
    get statsInfoLink() { return $(`button[class='Stats-module_statsInfoBtn__WUPls']`)}




    get statContainer() { return $(`.Stats-module_gameStats__ZP1aW.Stats-module_testGameStats__ourh0`)}

    
    get errorPage() { return $(`div[class='pz-error__message'] h1`)}

    



   


    

    

    get wordleHeaderText() { return $(`div[class="AppHeader-module_title__6sqs-"]`)}

    
    

    


    



    

    get body() { return $(".scrollable") }
    get wordPlay() { return $("a[href='https://www.nytimes.com/column/wordplay'][target='_blank']")}
    get wordPlayHeadings() { return $$(".xwd__editorial-content--cardsContainer a div:nth-child(2) h2")}

    get thirdRowFirstCell() { return $("div[aria-label='Row 3'] div:nth-child(1) div:nth-child(1)")}
    get attemptThreeOutOfSix() { return $("div[ class=Welcome-module_subtitle__PHs6d]")}

    get getSixChancesText() { return $('div[class="Welcome-module_subtitle__PHs6d"] span')}

    


    



    /*Daily puzzle hints*/
    get fithHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(5)") }
    get forthHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(4)") }
    get thirdHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(3)") }
    get secondHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(2)") }
    get firstHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(1)") }

    get cells() { return $$("g[data-group='cells'] g[class='xwd__cell'] [class='xwd__cell--cell xwd__cell--nested']") }


    


    get keyboardBtns() { return $$(`div[class="Keyboard-module_keyboard__1HSnn"] button`) }


  
   
    async clickPage() { this.container.click()}
    async clickBody() {browser.waitAndClick(this.container)}

    async loadWithNoStorage() {
        browser.execute(() => {
            window.localStorage.clear()
          })
          browser.refresh()    
    }

    async clickBody() {browser.waitAndClick(this.container)}

    async clickHardModeBtn() {
        
        await this.wordleSettingsBtn.waitAndClick()
        await browser.pause(1000)
        await this.wordleHardModeBtn.waitAndClick()
        await browser.pause(1000)
        await this.wordleCloseBtn.waitAndClick()

    }

    async enterWord() {
        await browser.pause(2000)
        await browser.keys('great')
        await browser.pause(3000)
        await browser.keys('Enter')
        await browser.pause(2000)


    }


    async toggleHardModeEnterWord() {
        await this.clickHardModeBtn()
        await this.enterWord()
    }












}
module.exports = new gamePage();