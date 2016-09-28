module.exports = {
  'practice.xyz doing research testing' : function (browser) {
    browser
      .page.webHome().goToTanmay()
      .page.webHome().navigateToLoginPage()
      .page.loginPage().makeLogin()
      .page.loggedInUser().successfullLoginVerification()
      .page.loggedInUser().navigateToAllGroups()
      .page.loggedInUser().createGroupButtonGetClicked()
      .page.createNewGroup().createGroup()
      .page.createNewGroup().doLogOut()
      .end();
  }
};
