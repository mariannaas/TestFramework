var webdriver = require('selenium-webdriver');


function SearchResultsPage(driver) {
    this.driver = driver;
}

// SearchResultsPage.prototype.clickOnGameTile = function (gameToSearch) {
//     this.driver.findElement(webdriver.By.xpath("//img[@alt='" + gameToSearch + "']/..")).then(function (elem) {
//        // this.driver.executeScript("arguments[0].scrollIntoView(true);", elem);
//       //  driver.actions().mouseMove(elem).perform();
//         elem.click();
//     });
//     return webdriver.promise.fulfilled(true);
//};
SearchResultsPage.prototype.hoverOverSearchedGame = function (gameTitle) {

};
SearchResultsPage.prototype.clickOnMoreButton = function () {
};

SearchResultsPage.prototype.clickOnPlayGameButton = function () {

};

module.exports = SearchResultsPage;