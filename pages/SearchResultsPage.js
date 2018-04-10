var webdriver = require('selenium-webdriver');


function SearchResultsPage (driver) {
    this.driver = driver;
    this.url =  'https://vegas.williamhill.com/en-gb/search';
}

SearchResultsPage.prototype.getDisplayedResults = function() {
    return this.driver.findElements({ });
};
SearchResultsPage.prototype.hoverOverSearchedGame = function(gameTitle){

};
SearchResultsPage.prototype.clickOnMoreButton = function(){};

SearchResultsPage.prototype.clickOnPlayGameButton = function(){

};

module.exports = SearchResultsPage;