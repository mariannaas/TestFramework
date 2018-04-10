var webdriver = require('selenium-webdriver');
var page = require('./Page');
var searchResultsPage = require('./SearchResultsPage');

function LandingPage (webdriver) {
    page.call(this, webdriver, 'https://vegas.williamhill.com');
}

LandingPage.prototype = Object.create(page.prototype);
LandingPage.prototype.constructor = LandingPage;

/*
 The method is used for clicking on Magnifier button found by @class attribute
 */
LandingPage.prototype.clickMagnifierButton = function () {
    this.driver.findElement(webdriver.By.className('btn-search-magnifier')).click();
    this.timeout(30000);
};
/*
 The method is used for entering search value into search input found by xpath
 */
LandingPage.prototype.typeSearchQuery = function(searchQuery) {
    this.driver.findElement(webdriver.By.xpath("//div[@class='search-input__input-wrapper']/input")).sendKeys(searchQuery);
    return new searchResultsPage(this.driver);
};


module.exports = LandingPage;


