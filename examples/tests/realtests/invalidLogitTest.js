module.exports = {
  'practice.xyz fake login testing' : function (browser) {
    browser
      .page.webHome().goToTanmay()
      .page.webHome().navigateToLoginPage()
      .page.invalidLogin().makeInvalidLogin()
      .page.invalidLogin().assertFailedLogin()
      .end();
  }
};
