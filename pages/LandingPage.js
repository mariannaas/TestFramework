var webdriver = require('selenium-webdriver');
var searchResultsPage = require('./SearchResultsPage');
var assert = require('chai').assert;

 LandingPage = function LandingPage (driver) {
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
 */
LandingPage.prototype.typeSearchQuery = function(searchQuery) {
    this.driver.findElement(webdriver.By.xpath("//div[@class='search-input__input-wrapper']/input")).sendKeys(searchQuery);
    return new searchResultsPage(this.driver);
};
/*
 Simple check of the page title
 */
LandingPage.prototype.isWHTitle = function(){
    this.driver.executeScript('return document.title').then(function(return_value) {
        assert.equal(return_value, 'Play Online Casino Games at William Hill Vegas');
    });

};

module.exports = LandingPage;


