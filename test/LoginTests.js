var assert = require('chai').assert,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');
    landingPage = require('');



// Our test

test.describe('William Hill', function () {
    test.before(function(){

    });

    test.it('Title should be "William Hill"', function () {
        this.timeout(10000);
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

        driver.get('https://vegas.williamhill.com');
        driver.executeScript('return document.title').then(function(return_value) {
            assert.equal(return_value, 'Play Online Casino Games at William Hill Vegas')
        });

        var magnifierButton = driver.findElement(webdriver.By.className('btn-search-magnifier'));
        magnifierButton.click();
        this.timeout(30000);
        var searchParameter = 'Mayfair Roulette';
        var searchBox = driver.findElement(webdriver.By.xpath("//div[@class='search-input__input-wrapper']/input"));
        searchBox.sendKeys('Mayfair Roulette');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, searchParameter);
            console.log("step-1")
        });

        //div[.//img[contains(@alt, 'Mayfair Roulette')]]
        // var tile = driver.findElement(webdriver.By.xpath("//div[@class='content']")).then(function(elem) {
        //     driver.actions().mouseMove(elem).perform();
        // });
        driver.manage().deleteAllCookies();
        driver.quit();

    });

});