'use strict';
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var chaiShould = require('chai').should();

const timeOut = 30000;

describe("Login Dialog Validation Suite", function () {
    this.timeout(timeOut);
    var driver;


    before(function () {
        driver =  new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
       // driver = new webdriver.Builder().
       // withCapabilities(webdriver.Capabilities.firefox()).
       // build();
        driver.manage().window().maximize();
        console.log("Selenium Webdriver Chrome Started");

    });

    after(function () {
     //   driver.close();

    });

    beforeEach(function () {
    });

    afterEach(function () {
        driver.manage().deleteAllCookies();
    });

    it("Test01 - Login Dialog is Shown", function() {
        driver.get('https://vegas.williamhill.com');
        driver.wait(function () {
            return driver.elementIsVisible(webdriver.By.className("wf-header__whlogo"));
        }, timeOut);

        driver.wait(until.elementLocated(By.className('foobar'), 10000));
        driver.wait(until.elementIsVisible(firefox_driver.findElement(by)), 10000);
       // driver.findElement(webdriver.By.className("btn-search-magnifier"));
        //console.log("Magnifier button was clicked");
    });

});



