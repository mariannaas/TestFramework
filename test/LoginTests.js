var assert = require('chai').assert,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    driverCapabilitiy = require('../utils/DriverCapabilities'),
    LandingPage = require('../pages/LandingPage'),
    SearchResultsPage = require('../pages/SearchResultsPage');


test.describe('William Hill', function () {
    var driver;
    this.timeout(15000);

    test.before(function (done) {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.manage().window().maximize();
        done();
    });

    test.after(function (done) {
        driver.quit();
        done();
    });

    test.it('Simple Test - Title should be "William Hill"', function (done) {
        var landingPage = new LandingPage(driver);
        landingPage.openPage();
        landingPage.isWHTitle();
        done();
    });

    test.it("Search for 'Mayfair Roulette' game", function (done) {
        var landingPage = new LandingPage(driver);
        landingPage.openPage();
        landingPage.clickMagnifierButton();
        var gameToSearch = "Mayfair Roulette";
        landingPage.typeSearchQuery(gameToSearch);
        landingPage.clickOnGameTile(gameToSearch);


        // driver.findElement(webdriver.By.className("tile-details")).then(function (elem) {
        //  });
        //driver.findElement(webdriver.By.className('o-btn o-btn--big')).then(function (elem) {
        //   elem.click();
            done();


    });

});