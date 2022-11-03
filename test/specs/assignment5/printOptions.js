const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const archive = require('../../pageobjects/archive.page');
const hub = require('../../pageobjects/hub.page');
const chai = require('chai');
const modal = require('../../pageobjects/modal.page');
const chaiExpect = chai.expect;


describe('Verify All Print Buttons', async () => {

    before(async () => {
        await user.login()
        await page.open("")
        await expect(browser).toHaveUrlContaining('crosswords')
    });
    
    it('verify wordplay container', async () => {
        await expect(hub.dailyPrinterBtn).toBeDisplayed()
        await hub.dailyPrinterBtn.click()
        await modal.newspaperRadioBtn.click()
        await modal.print.click()
        await browser.pause(2000)

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        await modal.printClosenBtn.click()
    })

    it('verify wordplay container', async () => {
        await browser.pause(4000)
        await expect(hub.monthlyPrinter).toExist()
        await hub.allSevenPrinters()
        await hub.inProgressBtn.click()
        await hub.allSevenPrinters()  
    })
        
    it('verify wordplay container', async () => {
        await page.open("/archive")

        //today's Day
        const date = new Date()
        day = date.getDate();

        //Daily
        await browser.pause(1000)
        const dailyCount = await archive.printTool.length
        chaiExpect(await dailyCount).to.equal(2)  

        //Bonus
        await archive.bonusBtn.click()
        await browser.pause(1000)
        const bonusCount = await archive.printTool.length
        chaiExpect(await bonusCount).to.equal(11)  

        // //Acrostic
        await archive.acrosticBtn.click()
        await browser.pause(1000)
        const acrosticCount = await archive.printTool.length
        chaiExpect(await acrosticCount).to.equal(22)  

        // //Variety
        await archive.varietyBtn.click()
        await browser.pause(1000)
        const varietyCount = await archive.printTool.length
        chaiExpect(await varietyCount).to.equal(66)  

    })
})