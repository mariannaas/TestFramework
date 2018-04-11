var assert = require('chai').assert,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    driverCapabilitiy = require('../utils/DriverCapabilities'),
    landingPage = require('../pageobjects/LandingPage'),
    loginDialog = require('../pageobjects/LoginDialog'),
    tileDetais = require('../pageobjects/TileDetails');



test.describe('William Hill', function () {
    var driver;
    this.timeout(15000);

    test.before(function (done) {
        driver = require('../utils/DriverCapabilities').getDriver();
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
        landingPage.openPage(); //navigate to WH landing page
        landingPage.clickMagnifierButton(); //click Magnifier Button

        var gameToSearch = "Mayfair Roulette";
        landingPage.typeSearchQuery(gameToSearch); // In displayed search input enter 'Mayfair Roulette'
        landingPage.hoverOverGameTile(gameToSearch); //Hover mouse over searched game

        var tileDetails = landingPage.clickOnGameTile(gameToSearch); //click on Tile details
        var loginDialog = tileDetails.clickOnPlayNowButton(); // click on 'Play Now' button
        loginDialog.validateIfDialogShown(); // check if login window appears

        done(); // for performing sync


    });

});