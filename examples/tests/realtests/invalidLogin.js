module.exports = function (browser) {
  
  this.makeInvalidLogin = function() {
    browser
      .waitForElementVisible('#user_login', 3000)
      .setValue('#user_login', 'dzaras777@yandex.ru')
      .setValue('#user_password', 'FakePassword')
      .click('#new_user > div.pull-left > input')
    return browser;
  };

  this.assertFailedLogin = function(){
    browser
      .waitForElementVisible('#main > div.column.small-12.section.nomargin > section > div > p', 3000)
      .assert.containsText('#main > div.column.small-12.section.nomargin > section > div > p', "You've entered an invalid email or password. You may need to register a new account if you are new to ApprenNet.")  	
  	return browser;
  };

};
