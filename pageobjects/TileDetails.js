var webdriver = require('selenium-webdriver');
var loginDialog = require('./LoginDialog');
var landingPage = require('./LandingPage');

TileDetails = function LandingPage(driver) {
    this.driver = driver;
};

/*
The method is used for performing a click on 'Play Now' button
 */
TileDetails.prototype.clickOnPlayNowButton = function () {
    this.driver.findElement(webdriver.By.xpath("//div[@class='tile-details__buttons']/button[text()='Play Now']")).then(function (elem) {
        scrollToTile();
        elem.click();
    });
    return new LoginDialog(this.driver);
};
