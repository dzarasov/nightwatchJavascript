module.exports = function (browser) {

  this.createGroup = function() {
    browser
      .waitForElementVisible('#name', 3000)
      .setValue('#name', 'Cool Group')
      .click('#main > div:nth-child(2) > div > form > input.btn.button.radius.big.success')
      .waitForElementVisible('#main > div > section > div', 3000)
      .assert.containsText('#main > div > section > div', "Group created")
    return browser;
  };


  this.doLogOut = function(){
  	browser
  		.waitForElementVisible('#header > div > div.column.small-2.medium-8.large-7 > div > div > a > span', 3000)
  		.click('#header > div > div.column.small-2.medium-8.large-7 > div > div > a > span')
  		.waitForElementVisible('#header > div > div.column.small-2.medium-8.large-7 > div > div > div > ul > li:nth-child(4) > a', 3000)
  		.click("#header > div > div.column.small-2.medium-8.large-7 > div > div > div > ul > li:nth-child(4) > a")
  		return browser;
  }
}
  
