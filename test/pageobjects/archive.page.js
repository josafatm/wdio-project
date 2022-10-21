class archivePage {
    
    get listModeBtn() { return $("button[aria-label='list mode']") }
    get gridModeBtn() { return $("button[aria-label='grid mode']") }
    get tabNavItems() { return $$("[class='tab__tabNavItems'] a") }
    get gridMonthBtn() { return $("select[label='month']") }
    get gridYearBtn() { return $("select[label='year']") }
    get prevBtn() { return $(".archive_prev") }
    get nextBtn() { return $(".archive_next") }
    get monthDropdown() { return $$("select[label='month'] option") }
    get yearDropdown() { return $$("select[label='year'] option") }
    get previousYear() { return $("select[label='year'] option:nth-child(2)") }
    /**
     * To get a different month other than the current one
     * @param {*} currentMonth 
     * @param {*} listOfMonths 
     */
    async dateList(currentMonth,listOfMonths) {
        for (const month of listOfMonths) {
            await month.isDisplayed()
            if( month.getText() !== (currentMonth && month.isClickable())){
                month.click()
                break;
            }
        }
    }
    /**
     * To go through each tab in archive
     */
    async verifyArchiveTabs() {
        const tabList = await this.tabNavItems;
        for (const elem of tabList) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }
    async selectPreviousYear() {
        await this.gridYearBtn.click()
        await this.previousYear.click()
    }



}
module.exports = new archivePage();