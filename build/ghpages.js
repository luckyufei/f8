var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, '../site'), function (err) {
  if (err) {
    console.error(err)
  }
})
