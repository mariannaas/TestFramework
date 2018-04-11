var webdriver = require('selenium-webdriver');
var tileDetails = require('./TileDetails');
var assert = require('chai').assert;

LandingPage = function LandingPage(driver) {
    this.driver = driver;
    this.url = 'https://vegas.williamhill.com';
}

LandingPage.prototype.openPage = function () {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

/*
 The method is used for clicking on Magnifier button found by @class attribute
 */
LandingPage.prototype.clickMagnifierButton = function () {
    this.driver.findElement(webdriver.By.className('btn-search-magnifier')).click();
    return webdriver.promise.fulfilled(true);
};
/*
 The method is used for entering search value into search input found by xpath
 @param searchQuery - a string searched by user
 */
LandingPage.prototype.typeSearchQuery = function (searchQuery) {
    this.driver.findElement(webdriver.By.xpath("//div[@class='search-input__input-wrapper']/input")).sendKeys(searchQuery);
    this.driver.isElementPresent(webdriver.By.className("categories-list-page__content page__content"));
    return webdriver.promise.fulfilled(true);
};
/*
 Simple check of the page title
 */
LandingPage.prototype.isWHTitle = function () {
    this.driver.executeScript('return document.title').then(function (return_value) {
        assert.equal(return_value, 'Play Online Casino Games at William Hill Vegas');
    });

};
/*
The method is used for performing click on Title
    @param gameToSearch - a string,  game title searched by user
 */
LandingPage.prototype.clickOnGameTile = function (gameToSearch) {
    this.driver.findElement(webdriver.By.xpath("//img[@alt='" + gameToSearch + "']/..")).then(function (elem) {
        scrollToTile();
        elem.click();
    });
    return new TileDetails(this.driver);
};
/*
The method is used for hovering over a tile
    @param gameToSearch - a string, game title searched by user
 */
LandingPage.prototype.hoverOverGameTile = function (gameToSearch) {
    this.driver.findElement(webdriver.By.xpath("//img[@alt='" + gameToSearch + "']/..")).then(function (elem) {
        this.driver.actions().mouseMove(elem).perform();
    });
};

module.exports = LandingPage;


