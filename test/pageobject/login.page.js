
function LoginPage () {
}

LoginPage.prototype.setUsername = function () {
  return $('#username')
  // console.log('here')

  // return browser.setValue('#username', uname)
}
LoginPage.prototype.setPassword = function (pwd) {
  return browser.setValue('#password', pwd)
}
LoginPage.prototype.submitForm = function () {
  return browser.submitForm('#login')
}

LoginPage.prototype.flash = function () {
  return browser.getText('#flash')
}

module.exports = new LoginPage()

// BELOW IS WORKING

// var Page = require('./page')

// var Ara = function () {

// }

// var LoginPage = Object.create(Ara, {
//   /**
//      * define elements
//      */
//   username: { get: function () { return browser.element('#username') } },
//   password: { get: function () { return browser.element('#password') } },
//   form: { get: function () { return browser.element('#login') } },
//   flash: { get: function () { return browser.element('#flash') } },

//   /**
//      * define or overwrite page methods
//      */
//   open: { value: function () {
//     Page.open.call(this, 'login')
//   } }

//   // submit: { value: function () {
//   //   this.form.submitForm()
//   // } }
// })

// module.exports = LoginPage
