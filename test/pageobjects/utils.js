const axios = require('axios')


class utils {
    /**
    * * to go back and refresh the page
    */
    async enterWordleAnswer() {
        const date = new Date()
        const formattedDate = date.toLocaleDateString('en-CA')
        const solutionResponse = await axios.get(
          `https://www.stg.nytimes.com/svc/wordle/v2/${formattedDate}.json`,
        )
        //solution word
        let solution = solutionResponse.data.solution

        for (let i = 0; i < solution.length; i += 1) {
            await browser.pause(500)
            await browser.keys(solution[i])
            await browser.pause(500)
        }
        await browser.keys('Enter')
      
    }


    async goBackAndRefresh() {
        await browser.pause(1000)
        await browser.back()
        await browser.refresh()       
    }
    /**
     * to generate a random email
     */
    async generatedEmail() {
        return `josafat.melendez+${Date.now()}@nytimes.com`
    }
    /**
     * to move down then right
     */
    async moveDownThenRight() {
        await browser.keys("ArrowDown")
        await browser.keys("ArrowRight")
    }
    /**
     * to move left four times
     */
    async moveLeftFourTimes() {
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.pause(500)

    }
    /**
     * to move left three times
     */
    async moveLeftThreeTimes() {
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.pause(500)
    }
    /**
     * to move right twice
     */
    async moveRightTwice() {
        await browser.keys("ArrowRight")
        await browser.keys("ArrowRight")
    }

    async waitForAnimation() {
        await browser.pause(2000)
        await browser.keys("Enter")
        await browser.pause(2000)
    }















    async getGameDataAnswers() {
        return browser.execute(() => {
            return window.gameData.today.answers
          })
    }
    async getSpellingBeeLettersOptions() {
        return browser.execute(() => {
            return window.gameData.today.validLetters
          })
    }


    async getLetters() {
        return browser.execute(() => {
            let l = window.gameData.today.validLetters.slice(0,3)
            return l.join("")

          })
    }


    async getAllLetters() {
        return browser.execute(() => {
            let l = window.gameData.today.validLetters.slice("")
            return l.join("")
       
        })

    }

    async getOuterLetters() {
        return browser.execute(() => {
            let l = window.gameData.today.outerLetters.slice("")
            return l.join("")
        })
    }




    async getElementInLetters(letter) {
        let outerLetters = await utils.getOuterLetters()
        return outerLetters.indexOf(letter)
    }



    async getCenterLetter() {
        return browser.execute(() => {
            let l = window.gameData.today.centerLetter.toString()
            return l.repeat(20)  
       
        })
    }


    



    async getListOfWords() {
        return browser.execute(() => {
            let w = window.gameData.today.answers
            return w.sort(function(a, b){
                return a.length - b.length;
            });
          })
    }



    async getPangramWord() {
        return browser.execute(() => {
            let w = window.gameData.today.pangrams
            return w.sort(function(a, b){
                return a.length - b.length;
            });
          })
    }
















    async getFiveLetterWord() {
        return browser.execute(() => {
            let words = window.gameData.today.answers
            return words.filter(arr => arr.length >= 5);
          })
    }





    async getSevenLetterWord() {
        let wordlist = await browser.execute(() => {
            return wordlist = window.gameData.today.answers
        })
        const pangram = await browser.execute(() => {
            return pangram = window.gameData.today.pangrams
        })

        for(let i =0; i < wordlist.length; i++) {
            for(let j =0; j < pangram.length; j++){
                if(wordlist[i] === pangram[j]){
                    wordlist.splice(i,1)
                }
            }
        }
        return wordlist.filter(arr => arr.length >= 7);
    }





    



    async getwordWithNoPangram() {
        let wordlist = await browser.execute(() => {
            return wordlist = window.gameData.today.answers
        })
        const pangram = await browser.execute(() => {
            return pangram = window.gameData.today.pangrams
        })

        for(let i =0; i < wordlist.length; i++) {
            for(let j =0; j < pangram.length; j++){
                if(wordlist[i] === pangram[j]){
                    wordlist.splice(i,1)
                }
            }
        }
        return wordlist
    }







    async clearLocalStorage() {
        return browser.execute(() => {
             window.reset()
          })
    }




}
module.exports = new utils();




