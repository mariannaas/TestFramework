var assert = require('chai').assert,

    test = require('selenium-webdriver/testing'),

    webdriver = require('selenium-webdriver');



// Our test

test.describe('William Hill', function () {

    test.it('Title should be "William Hill"', function () {

        // Set timeout to 10 seconds

        this.timeout(10000);
       // Get driver

        var driver = new webdriver.Builder().

        withCapabilities(webdriver.Capabilities.chrome()).

        build();



        // Go to URL

        driver.get('https://vegas.williamhill.com');



        // Find title and assert

        driver.executeScript('return document.title').then(function(return_value) {

            assert.equal(return_value, 'Play Online Casino Games at William Hill Vegas')

        });

        var magnifierButton = driver.findElement(webdriver.By.className('btn-search-magnifier'));
        magnifierButton.click();
        this.timeout(30000);
        var searchBox = driver.findElement(webdriver.By.xpath("//div[@class='search-input__input-wrapper']/input"));
        searchBox.sendKeys('Mayfair Roulette');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'Mayfair Roulette');
        });

        // Quit webdriver
        driver.manage().deleteAllCookies();
        driver.quit();

    });

});

// /html/body/div[3]/div/div/div[2]/div[3]/div/div/div[1]/div/div/div/div/input