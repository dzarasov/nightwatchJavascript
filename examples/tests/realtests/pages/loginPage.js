module.exports = function (browser) {
  this.makeLogin = function() {
    browser
      .waitForElementVisible('#user_login', 3000)
      .setValue('#user_login', 'dzaras777@yandex.ru')
      .setValue('#user_password', 'Mikel55555')
      .click('#new_user > div.pull-left > input')
    return browser;
  };
};

