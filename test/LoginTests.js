var assert = require('chai').assert,

    test = require('selenium-webdriver/testing'),

    webdriver = require('selenium-webdriver');



// Our test

test.describe('Google', function () {

    test.it('Title should be "Google"', function () {

        // Set timeout to 10 seconds

        this.timeout(10000);



        // Get driver

        var driver = new webdriver.Builder().

        withCapabilities(webdriver.Capabilities.chrome()).

        build();



        // Go to URL

        driver.get('http://www.google.com');



        // Find title and assert

        driver.executeScript('return document.title').then(function(return_value) {

            assert.equal(return_value, 'Google')

        });

       driver.findElement(webdriver.By.className()).click();

        // Quit webdriver

        driver.quit();

    });

});