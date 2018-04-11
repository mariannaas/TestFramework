var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var LandingPage = require('./LandingPage')

LoginDialog = function LandingPage(driver) {
    this.driver = driver;

};

LoginDialog.prototype.validateIfDialogShown = function () {
    this.driver.isElementPresent(webdriver.By.className("c-login-form__register"));
    return webdriver.promise.fulfilled(true);
};
LoginDialog.prototype.validateIfUsernameInputShown = function () {
    this.driver.isElementPresent(webdriver.By.id("login-form__username"));
    return webdriver.promise.fulfilled(true);
};
