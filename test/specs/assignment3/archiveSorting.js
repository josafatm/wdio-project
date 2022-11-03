const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const archive = require('../../pageobjects/archive.page');

describe('Archive: sort Functionality', async () => {

    before(async () => {
        await user.login()
        await page.open("/archive")
        await expect(browser).toHaveUrlContaining('archive')
    });

    it('verify archive previous and next button ', async () => {
        await archive.prevBtn.click()
        await archive.nextBtn.click()
        await browser.refresh()
        expect(archive.nextBtn).toBeDisabled()
    })

    it('verify month and year dropdown  ', async () => {  
        await archive.gridMonthBtn.click()
        const currentMonth = new Date().toLocaleString('en-US', {month: 'long'});
        const monthsDropdown = await archive.monthDropdown;
        await archive.dateList(currentMonth,monthsDropdown)
        expect(archive.monthDropdown).toBeClickable()
        await archive.selectPreviousYear()
        expect(archive.yearDropdown).toBeClickable()
    })
})