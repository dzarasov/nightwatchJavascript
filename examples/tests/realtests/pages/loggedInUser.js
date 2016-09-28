module.exports = function (browser) {
  
  this.successfullLoginVerification = function() {
    browser
      .waitForElementVisible('#main > div.column.small-12.section.nomargin > section > div > p', 3000)
      .assert.containsText('#main > div.column.small-12.section.nomargin > section > div > p', 'Signed in successfully')
    return browser;
  };

  this.navigateToAllGroups = function(){
    browser
      .waitForElementVisible('#dashboard > section > div.large-3.columns > section > div.text-center > a', 3000)
      .click('#dashboard > section > div.large-3.columns > section > div.text-center > a')
      return browser;
  }

  this.createGroupButtonGetClicked = function(){
    browser
      .click('#main > div.group-page.column > h1 > a')
      return browser;
  }


};