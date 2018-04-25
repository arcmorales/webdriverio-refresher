function Page () {
}

Page.prototype.open = function (path) {
  browser.url(path)
  console.log(this)
}

module.exports = new Page()
