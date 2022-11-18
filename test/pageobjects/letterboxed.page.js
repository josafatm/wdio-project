class statsPage {
    
    get errorMessage() { return $('div[class="lb-message-box error-message"] span') }
    get successMessage() { return $('div[class="lb-message-box success-message"] span') }
    get restartBtn() { return $('.pz-toolbar-button.lb-toolbar-button__restart') }

    async getfirstLetterEachSide() {
        return browser.execute(() => {
            let words = window.gameData.sides
            let firstLetters = words.map((word) => word[0]).join('')
            return firstLetters + firstLetters[0]
          })
    }

    async getAWord() {
        return browser.execute(() => {
            return window.gameData.dictionary[1]
          })
    }

    async getSevenLetterWord() {
        let wordlist = await browser.execute(() => {
            return wordlist = window.gameData.dictionary
        })

        let useword = [] 

        for(let i =0; i < wordlist.length; i++) {
            if(wordlist[i].length >= 7){
                useword.push(wordlist[i])
                break;
            }
        }
        return useword
    }
}
module.exports = new statsPage();