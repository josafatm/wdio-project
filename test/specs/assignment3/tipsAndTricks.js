const page = require('../../pageobjects/page');
const user = require('../../pageobjects/login.page');
const tipsAndTricks = require('../../pageobjects/tips.tricks.page');

describe('Verify layout of Tips & Tricks page', async () => {

    before(async () => {
        await user.login()
        await page.open("/tips-and-tricks")
        await expect(browser).toHaveUrlContaining('tips-and-tricks')
    });

    it('Verify progress icon is appearing', async () => {
        await tipsAndTricks.clueAgreeentTitle.isDisplayed()
        await tipsAndTricks.questionMarkTitle.isDisplayed()
        await tipsAndTricks.crosswordseTitle.isDisplayed()
        await tipsAndTricks.themeTitle.isDisplayed()
        await tipsAndTricks.rebusTitle.isDisplayed()
        await expect(tipsAndTricks.title).toBeExisting()
    })

    it('Verify mini and daily games', async () => {
    const navList = await tipsAndTricks.allMiniFullSizePuzzles;
    for (const elem of navList) {
        await elem.waitForClickable()
        await elem.click()
        const url = await browser.getUrl()
        console.log(url)
        if(url.includes("mini")){
            expect((await tipsAndTricks.miniGameTitle).getText()) === "Tips & Tricks"
        }if(url.includes("daily")){
            expect((await tipsAndTricks.miniGameTitle).getText()) === "The Crossword"
        }
        await browser.back()
    }
})
})