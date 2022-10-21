class gameSettings  {

    get enableShortzbtn() { return $("img[alt='Shortz Mode']")}
    get stayBtn() { return $("#switchStay") }
    get moveBtn() { return $("#switchMove") }
    get clearSquareBtn() { return $("#triggerClear") }
    get toggleBtn() { return $("#triggerToggle") }
    get backspaceBtn() { return $("input[name='backspaceAcrossWords']") }
    get skipFilledBtn() { return $("#skipFilled") }
    get skipPenciledBtn() { return $("#skipPenciled") }
    get jumpBackBtn() { return $("input[name='jumpBack']") }
    get nextClueBtn() { return $("input[name='autoAdvance']") }
    get soundOnBtn() { return $("input[name='soundOn']") }
    get showTimerBtn() { return $("input[name='showTimer']") }
    get SuppressWarningsBtn() { return $("input[name='suppressDisqualificationWarnings']") }
    get milestonesBtn() { return $("input[name='showMilestones']") }
    get forceGoldBtn() { return $("input[name='forceGoldStarEligibility']") }
    get speedupSyncBtn() { return $("input[name='speedUpSyncInterval']") }
    get SuppressAutoCheckBtn() { return $("input[name='suppressAutocheckNotice']")}
    get saveCloseBtn() { return $("button[aria-label='Save and close']") }
    get restoreBtn() { return $("button[aria-label='Restore defaults']") }
    get allOptions() { return $$("div[class='xwd__settings-modal--inset'] label span") }
    get Title() { return $$(".pz-moment__title.medium") }

    async clickNextClueCheckbox(){
        await this.nextClueBtn.waitForClickable()
        await this.nextClueBtn.click()
    }
    async saveAndCloseBtn(){
        await this.saveCloseBtn.waitForClickable()
        await this.saveCloseBtn.click()
    }
    async clickMoveRadioBtn(){
        await this.moveBtn.waitForClickable()
        await this.moveBtn.click()
    }
    async verifyOptions(){
        const numberOfOptions = []
        const allOptions = await this.allOptions;
        for (const elem of allOptions) {
            await elem.waitForClickable()
            numberOfOptions.push(elem)
            await elem.moveTo()
        }
        return numberOfOptions.length
    }
    
}
module.exports = new gameSettings();

