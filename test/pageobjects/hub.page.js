class hubPage {
    
    get featuredDailyPuzzle() { return $("div[class='featured button action-play primary puzzleInfo js-hub-tracker'] h3[class='title']") }
    get featuredDailyPuzzleReviewBanner() { return $(".progressIconContent.puzzleProgressBlueStar") }

    get featuredDailyPuzzleBanner() { return $("div[class='featured button action-play primary puzzleInfo js-hub-tracker'] div[class='cardRibbon']") }
    get minipuzzleProgress() { return $("div[class='hub-welcome__section mini'] div div[role='button'] div[class='cardRibbon']") }
    get wordPlayLink() { return $(".hub-wordplay-link") }

    get miniPuzzle() { return $(".miniProgress0") }

    get moreGames() { return $$("div[class='hub-our-games__content'] a") }

    get monthlyBonus() { return $(".progress__sectionHeader") }
    get featuredArticle() { return $("h3[class='hub-section-header']") }

    get lastSevenDayText() { return $("div[class='pz-content'] button:nth-child(1) span:nth-child(1)") }
    get inProgressText() { return $("div[class='pz-content'] button:nth-child(2) span:nth-child(1)") }
    get varietyPuzzlesText() { return $("h2[class='hub-section-header']") }

    get footerText() { return $("p[class='pz-footer__featured-text']:nth-child(2)") }

    get logo() { return $("#js-logo-nav") }
    get subscribeBtn() { return $("div[id='js-nav-actions'] a[class='pz-nav__button js-nav-subscribe']") }
    get subscribeNowBtn() { return $("#offerSubmit") }

    get allFooterLinks() { return $$("ul[class='pz-footer__list'] a") }

    async hoverMoreGames() {
        const topSixgames = await this.moreGames;
        for (const elem of topSixgames) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }

    async footerLinks() {
        const links = await this.allFooterLinks;
        for (const elem of links) {
            await elem.waitForClickable()
            await elem.moveTo()
        }
    }

    /*last seven days*/
    get lastSevenDaysText() { return $("div[class='active']") }
    get lastSevenDays() { return $$("div[class='tab_tabBody'] div[class='thumb action-play standard puzzleInfo js-hub-tracker']") }
    get firstItemInSevenDays() { return $("div[class='expandToRow'] div:nth-child(1) a:nth-child(1) div:nth-child(1) h3:nth-child(1)") }
    get blueStarInSevenDays() { return $("div[class='expandToRow'] div[class='progressIconContent puzzleProgressBlueStar']") }
    get resumeBannerInSevenDays() { return $("div[class='expandToRow'] div[class='progressIconContent puzzleProgress1']") }
    get sevenDayBanner() { return $("div:nth-child(2) >div> div:nth-child(2) > div> div:nth-child(1> a > div > div:nth-child(2) > div:nth-child(2)") }

}
module.exports = new hubPage();
//div[class='featured button action-play primary puzzleInfo js-hub-tracker'] span
