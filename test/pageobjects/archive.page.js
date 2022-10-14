class archivePage {
    
    get listModeBtn() { return $("button[aria-label='list mode']") }
    get gridModeBtn() { return $("button[aria-label='grid mode']") }
    get tabNavItems() { return $$("[class='tab__tabNavItems'] a") }
    get gridMonthBtn() { return $("select[label='month']") }
    get gridYearBtn() { return $("select[label='year']") }

    async verifyArchiveTabs() {
        const tabList = await this.tabNavItems;
        for (const elem of tabList) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }
}
module.exports = new archivePage();
