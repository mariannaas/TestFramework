var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');


describe( 'Test Suite' , function() {
    let driver;
    this.timeout(600000);

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.manage().window().maximize();

    });

    after(function () {
      driver.quit();

    });

    it('Test Case', function () {
        let url = "http://www.google.com"
        driver.get(url).then();
        driver.findElement(webdriver.By.id(username)).sendKeys("test");

        // a promise is returned while ‘click’ action
        // is registered in ‘driver’ object
        driver.findElement(webdriver.By.id(submit)).click();
        driver.getTitle().then(function (title) {
            expect(title).equals(my_title);
        });
    });
});




