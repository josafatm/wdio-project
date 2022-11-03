const game = require('../../pageobjects/game.page');
const user = require('../../pageobjects/login.page');
const archive  = require('../../pageobjects/archive.page');
const util  = require('../../pageobjects/utils');
const axios = require('axios')


describe('keyword selection', async () => {
    let solution = ''
    before(async () => {
        await user.login()
        await browser.url("https://www.nytimes.com/games/wordle/index.html")
        await expect(browser).toHaveUrlContaining('wordle')
    });

    it('confrim keyboard Letter Color Selection ', async () => {
        if ((await game.wordleOverlayPageText).isDisplayed()){
                (await game.wordleOverlayPagePlayBtn).click()
            }
        await game.wordleCloseBtn.isDisplayed()
        await game.wordleCloseBtn.click()

        const date = new Date()
        const formattedDate = date.toLocaleDateString('en-CA')
        const solutionResponse = await axios.get(
          `https://www.stg.nytimes.com/svc/wordle/v2/${formattedDate}.json`,
        )
        //solution word
        solution = solutionResponse.data.solution
      
          for (let i = 0; i < solution.length; i += 1) {
            await browser.pause(500)
            await browser.keys(solution[i])
            await browser.pause(500)
        }
        await browser.keys('Enter')
          
        //correct word in keyboard
        for (let i = 0; i < solution.length; i += 1) {
            await expect($(`button[data-key=${solution[i]}]`)).toHaveAttributeContaining('data-state', 'correct')
          }

    })






})