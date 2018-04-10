var page = require('./Page');


function SearchResultsPage (webdriver) {
    page.call(this, webdriver, 'https://vegas.williamhill.com/en-gb/search');
}

SearchResultsPage.prototype = Object.create(page.prototype);
SearchResultsPage.prototype.constructor = SearchResultsPage;

SearchResultsPage.prototype.getDisplayedResults = function() {
    return this.driver.findElements({ });
};
SearchResultsPage.prototype.hoverOverSearchedGame = function(gameTitle){

};
SearchResultsPage.prototype.clickOnMoreButton = function(){};

SearchResultsPage.prototype.clickOnPlayGameButton = function(){

};

module.exports = SearchResultsPage;