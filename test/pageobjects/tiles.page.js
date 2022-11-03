class tiles {

    get enterBtn() { return $("div[id='pz-game-root'] button:nth-child(2)") }
    get deleteBtn() { return $("div[id='pz-game-root'] button:nth-child(1)") }



}
module.exports = new tiles();