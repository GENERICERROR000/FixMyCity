const jwt = require('jsonwebtoken')
const config = require('./configs/config')
const Authentication = require('./controllers/authentication')
const Issues = require('./controllers/issues')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("<h1>THIS IS A TEMPORARY HOMEPAGE</h1>")
  })
  app.get('/api/v1/auth', Authentication.auth)
  app.post('/api/v1/signin', Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)
  app.use(Authentication.checkToken)
  app.post('/api/v1/issues', Issues.filteredIssues)
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
}
