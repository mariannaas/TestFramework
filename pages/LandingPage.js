// class ="btn-search-magnifier" click = "showSearchInput()"

//div class="search-input__input-wrapper" /input value

//o-btn o-btn--more tile-menu__button tile-menu__button--more

// button o-btn o-btn--big text()='Play Now'

//class = login-component__wrapper
var webdriver = require('selenium-webdriver');

LandingPage = function LandingPage (driver) {
  this.driver = driver;
  this.url = "https://vegas.williamhill.com/"
};

LandingPage.prototype.visit = function(){
    this.driver.get(this.url);
    return webdriver.promised.fullfilled(true);
};

module.exports = LandingPage;


