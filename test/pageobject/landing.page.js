function LandingPage () {
}

LandingPage.prototype.open = function (path) {
  browser.url(path)
}

module.exports = new LandingPage()
