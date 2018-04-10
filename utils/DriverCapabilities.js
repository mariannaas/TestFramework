var webdriver =require('selenium-webdriver'),
    driver;

var getDriver = function() {
        return this.driver;

};

var setDriver = function(testBrowser) {
    switch(testBrowser) {
        case 'FIREFOX':
            return new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).
            build();
        case 'IE':
            return new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.ie()).
            build();
        case 'ANDROID':
            return new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.android()).
            build();
        default:
            return new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
    }
    done();
};

module.exports.getDriver = getDriver;