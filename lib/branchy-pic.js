var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var githubData = parseGithubURL(req.get('referrer'))
  res.redirect(req.query.redirect.replace(/\{branch\}/g, githubData.branch))
})

app.listen(process.env.PORT || 3000)

function parseGithubURL(url) {
  var branch = 'master', m
  m = url.match(/\/tree\/([^\/]+)/)
  if (m && m[1]) {
    branch = m[1]
  }
  return {
    branch: branch
  }
}