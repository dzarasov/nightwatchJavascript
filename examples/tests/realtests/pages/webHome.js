module.exports = function (ppp) {

  this.goToTanmay = function() {
    ppp
      .windowMaximize()
      .url('https://www.practice.xyz/')
      .waitForElementVisible('body', 1000)
    return ppp;
  };


  this.navigateToLoginPage = function() {
    ppp
      .click('#menu-item-344');
    return ppp;
  };

};













