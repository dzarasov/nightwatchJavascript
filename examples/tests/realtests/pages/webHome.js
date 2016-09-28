module.exports = function (browser) {
  this.goToTanmay = function() {
    browser
      .windowMaximize()
      .url('https://www.practice.xyz/')
      .waitForElementVisible('body', 1000)
    return browser;
  };


  this.navigateToLoginPage = function() {
    browser
      .click('#menu-item-344');
    return browser;
  };
  
};













