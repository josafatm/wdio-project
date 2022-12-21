const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');
const chai = require('chai')
const chaiExpect = chai.expect;

describe('Confirming Word Validation', async () => {
    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });

    it('go to spelling bee', async () => {
        await nav.clickSpellingBee()
        await spellingBee.pressPlayBtn()
        await utils.clearLocalStorage()
        await expect(browser).toHaveUrlContaining("spelling-bee")  
    })

    it('add three letters', async () => {
        await spellingBee.northeastCell.click()
        await spellingBee.southCell.click()
        await spellingBee.southeastCell.click()
        await expect(spellingBee.hiveInputAmount).toBeElementsArrayOfSize(3)
    })

    it('verify the delete button', async () => {
        await spellingBee.deleteBtn.click()
        await spellingBee.deleteBtn.click()
        await spellingBee.deleteBtn.click()
        await expect(spellingBee.hiveInputAmount).toBeElementsArrayOfSize(0)
    })

    it('verify the shuffle button', async () => {

        let firstShuffle = await spellingBee.getShuffledWords()
        await spellingBee.shuffleBtn.waitAndClick()
        await browser.pause(1000)
        let secondShuffle = await spellingBee.getShuffledWords()
        chaiExpect(firstShuffle).not.to.equal(secondShuffle);
    })

    //grab all Letters 
    //put in array
    //click a particle letter 

    

})
