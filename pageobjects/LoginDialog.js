var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var LandingPage = require('./LandingPage')

LoginDialog = function LandingPage(driver) {
    this.driver = driver;

};
/*
Simple validation if the whole dialog element was shown
 */
LoginDialog.prototype.validateIfDialogShown = function () {
    this.driver.isElementPresent(webdriver.By.className("c-login-form__register"));
    return webdriver.promise.fulfilled(true);
};
/*
Validation if  username input was shown
 */
LoginDialog.prototype.validateIfUsernameInputShown = function () {
    this.driver.isElementPresent(webdriver.By.id("login-form__username"));
    return webdriver.promise.fulfilled(true);
};
