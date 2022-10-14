class utils {
    
    async goBackAndRefresh() {
        await browser.pause(1000)
        await browser.back()
        await browser.refresh()       
    }

    async generatedEmail() {
        return `josafat.melendez+${Date.now()}@nytimes.com`
    }

    async moveDownThenRight() {
        await browser.keys("ArrowDown")
        await browser.keys("ArrowRight")
    }

}
module.exports = new utils();