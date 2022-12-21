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
    get calendarHeader() { return $(".archive_calendar-header") }

    get gameView() { return $("div:nth-child(1) > div:nth-child(3) > div:nth-child(2)") }

    get listViewEnabled() { return $("div[class='archive_list-view']") }


    get upsellBanner() { return $(".archive_upsell-title") }
    get upsellSubscribeBtn() { return $(".archive_subscribe-button") }


    
    


    get printTool() { return $$("div[class='printTool']") }

    get archiveDropdown() { return $(".archive_dropdown") }
    get year2021() { return $("option[value='2021']") }


    


    

    get bonusBtn() { return $(".tab__tab[href='/crosswords/archive/bonus'] span") }
    get acrosticBtn() { return $(".tab__tab[href='/crosswords/archive/acrostic']") }
    get varietyBtn() { return $(".tab__tab[href='/crosswords/archive/variety']") }


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