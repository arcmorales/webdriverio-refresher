var page = require('./page')

// var formPage = Object.create(page, {
//   /**
//      * define elements
//      */
//   username: { get: function () { return $('#username') } },
//   password: { get: function () { return $('#password') } },
//   submitButton: {
//     get: function () { return $('#login button[type=submit]') }
//   },
//   flash: { get: function () { return $('#flash') } },

//   /**
//      * define or overwrite page methods
//      */
//   open: { set: function () {
//     page.open.call(this, 'login')
//   } },

//   submit: { set: function () {
//     this.submitButton.click()
//   } }

// })

module.exports = formPage
