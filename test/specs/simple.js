var LandingPage = require('../pageobject/landing.page.js')
var LoginPage = require('../pageobject/login.page.js')
var expect = require('chai').expect

describe('This is a simple test suite', function () {
  it('should get the correct title', function () {
    LandingPage.open('http://the-internet.herokuapp.com/login')
    // browser.url('http://the-internet.herokuapp.com')
    var title = browser.getTitle()
    expect(title).to.equal('The Internet')
  })

  it('should be able to go to log in page', function () {
    // console.log('what', LoginPage.username())
    LoginPage.setUsername('foo')
    LoginPage.setPassword('bar')
    LoginPage.submitForm()
    var message = LoginPage.flash()
    expect(message).to.contain('Your username is invalid!')
  })
})
