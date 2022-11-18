const page = require('../../pageobjects/page');
const nav = require('../../pageobjects/nav.page');
const spellingBee = require('../../pageobjects/spellingBee.page');
const user = require('../../pageobjects/login.page');
const utils = require('../../pageobjects/utils');

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

    it('Validate "Too short" message', async () => {
        let letter = await utils.getLetters()
        await browser.keys(letter)
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Too short')
    })

    it('Validate "Good!" message', async () => {
        let word = await utils.getListOfWords()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await expect(spellingBee.successMessage).toHaveText('Good!')
    })
    
    it('Validate "Nice!" message', async () => {
        let word = await utils.getFiveLetterWord()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await expect(spellingBee.successMessage).toHaveText('Nice!')
    })

    it('Validate "Amazing!" message', async () => {
        await browser.pause(1500)
        let word = await utils.getSevenLetterWord()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await expect(spellingBee.successMessage).toHaveText('Awesome!')
    })

    it('Validate "Pangram!" message', async () => {
        let word = await utils.getPangramWord()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await expect(spellingBee.pangramMessage).toHaveText('Pangram!')
    })

    it('Validate "Bad Letters" message ', async () => {
        await browser.pause(1500)
        await browser.keys("wrong")
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Bad letters')
    })

    it('Validate "Already Found!" message', async () => {
        await browser.pause(1500)
        let word = await utils.getFiveLetterWord()
        await browser.keys(word[0])
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Already found')
    })

    it('Validate "Missing center letter" message ', async () => {
        await browser.pause(1500)
        let word = await utils.getOuterLetters()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Missing center letter')
    })

    it('Validate "Not in word list" message ', async () => {
        await browser.pause(1500)
        let word = await utils.getAllLetters()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Not in word list')
    })

    it('Validate "Too long" message ', async () => {
        await browser.pause(1500)
        let word = await utils.getCenterLetter()
        await browser.keys(word)
        await browser.keys("Enter")
        await expect(spellingBee.errorMessage).toHaveText('Too long')
    })

})