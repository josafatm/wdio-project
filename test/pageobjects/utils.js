class utils {
    /**
    * * to go back and refresh the page
    */
    async goBackAndRefresh() {
        await browser.pause(1000)
        await browser.back()
        await browser.refresh()       
    }
    /**
     * to generate a random email
     */
    async generatedEmail() {
        return `josafat.melendez+${Date.now()}@nytimes.com`
    }
    /**
     * to move down then right
     */
    async moveDownThenRight() {
        await browser.keys("ArrowDown")
        await browser.keys("ArrowRight")
    }
    /**
     * to move left four times
     */
    async moveLeftFourTimes() {
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.pause(500)

    }
    /**
     * to move left three times
     */
    async moveLeftThreeTimes() {
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.keys("ArrowLeft")
        await browser.pause(500)
    }
    /**
     * to move right twice
     */
    async moveRightTwice() {
        await browser.keys("ArrowRight")
        await browser.keys("ArrowRight")
    }
}
module.exports = new utils();