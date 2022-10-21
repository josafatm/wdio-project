class statsPage {
    
    get statsHeader() { return $(".stats-header") }
    get puzzleSolved() { return $("div:nth-child(1) > p:nth-child(2)") }
    get solvedRate() { return $("div:nth-child(2) > p:nth-child(2)") }
    get currentStreak() { return $("div:nth-child(3) > p:nth-child(3)") }
    get longestStreak() { return $("div:nth-child(4) > p:nth-child(3)") }   
}
module.exports = new statsPage();