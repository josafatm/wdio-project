class tipsAndTricks {

    get allFiveTitles() { return $$("div[class='tipOrTrick'] div h2") }
    get allMiniFullSizePuzzles() { return $$("div[class='tipOrTrick'] [class='puzzles'] [class='puzzleContainer']") }
    get clueAgreeentTitle() { return $(" div:nth-child(4) > div:nth-child(1) > h2") }
    get questionMarkTitle() { return $(" div:nth-child(5) > div:nth-child(1) > h2") }
    get crosswordseTitle() { return $(" div:nth-child(6) > div:nth-child(1) > h2") }
    get themeTitle() { return $(" div:nth-child(7) > div:nth-child(1) > h2") }
    get rebusTitle() { return $(" div:nth-child(8) > div:nth-child(1) > h2") }
    get miniGameTitle() { return $(".xwd__details--date") }
    get dailGameTitle() { return $(".xwd__details--title") }
    get title() { return $("div[class='tipsAndTricks'] h1") }
}
module.exports = new tipsAndTricks();