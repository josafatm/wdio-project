class gamePage {

    get logoBtn() { return $("svg[class='pz-nav__logo']") }
    get acrossHeading() { return $(" div[class='xwd__layout_container'] div div:nth-child(1) h3") }
    get clueNumberTwo() { return $("li[class='xwd__clue--li xwd__clue--selected'] span[class='xwd__clue--text xwd__clue-format']") }

    /*wordle*/
    //get wordleCloseBtn() { return $("div[class='Modal-module_closeIcon__b4z74']") }
    get wordleOverlayPageText() { return $("div[class='Welcome-module_title__BVIWQ']") }
    get wordleOverlayPagePlayBtn() { return $("button[class='Welcome-module_button__tEJl9']") }
    get wordleCloseBtn() { return $("button[aria-label='Close']") }
    get wordleSettingsBtn() { return $("#settings-button") }

    get wordleHighContrastBtn() { return $("button[aria-label='colorblindMode'] span[class='Switch-module_knob__oRTpP']") }

    get body() { return $(".scrollable") }


    get wordPlay() { return $("a[href='https://www.nytimes.com/column/wordplay'][target='_blank']")}
    get wordPlayHeadings() { return $$(".xwd__editorial-content--cardsContainer a div:nth-child(2) h2")}



    
    


    
    

    

    /*Daily puzzle hints*/
    get fithHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(5)") }
    get forthHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(4)") }
    get thirdHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(3)") }
    get secondHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(2)") }
    get firstHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(1)") }

    get cells() { return $$("g[data-group='cells'] g[class='xwd__cell'] [class='xwd__cell--cell xwd__cell--nested']") }


        get cells() { return $$("g[data-group='cells'] g[class='xwd__cell'] [class='xwd__cell--cell xwd__cell--nested']") }


    


    get keyboardBtns() { return $$(`div[class="Keyboard-module_keyboard__1HSnn"] button`) }


    //div[class="Keyboard-module_keyboard__1HSnn"] button

    ///button[data-key=${/[a-z]/g}]
    // get container() { return $("div[class*='App-module_game']") }
    // get body() { return $("body") }
    // get statsButton() { return $("button#statistics-button") }
    // get helpButton() { return $("#help-button")}


   
    async clickPage() { this.container.click()}
    async clickBody() {browser.waitAndClick(this.container)}

    async loadWithNoStorage() {
        browser.execute(() => {
            window.localStorage.clear()
          })
          browser.refresh()    
    }

    async clickBody() {browser.waitAndClick(this.container)}

}
module.exports = new gamePage();