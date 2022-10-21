class gamePage {

    get logoBtn() { return $("svg[class='pz-nav__logo']") }
    get acrossHeading() { return $(" div[class='xwd__layout_container'] div div:nth-child(1) h3") }
    get clueNumberTwo() { return $("li[class='xwd__clue--li xwd__clue--selected'] span[class='xwd__clue--text xwd__clue-format']") }

    /*wordle*/
    get wordleCloseBtn() { return $("div[class='Modal-module_closeIcon__b4z74']") }
    get wordleOverlayPageText() { return $("div[class='Welcome-module_title__BVIWQ']") }
    get wordleOverlayPagePlayBtn() { return $("button[class='Welcome-module_button__tEJl9']") }

    /*Daily puzzle hints*/
    get fithHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(5)") }
    get forthHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(4)") }
    get thirdHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(3)") }
    get secondHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(2)") }
    get firstHintDown() { return $("div:nth-child(2) > ol:nth-child(2) > li:nth-child(1)") }
}
module.exports = new gamePage();