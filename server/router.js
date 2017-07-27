const jwt = require('jsonwebtoken'),
  config = require('./configs/config'),
  Authentication = require('./controllers/authentication'),
  Issues = require('./controllers/issues')

// ########## Connect Routes With Controllers ##########
module.exports = (app) => {
  // ----------> Unprotected Routes <----------
  app.get('/', (req, res) => {
    res.send("<h1>THIS IS A TEMPORARY HOMEPAGE</h1>")
  })
  app.get('/api/v1/auth', Authentication.auth)
  app.post('/api/v1/signin', Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)

  // ----------> Set Authentication <----------
  app.use(Authentication.checkToken)

  // ----------> Protected Routes <----------
  app.post('/api/v1/issues', Issues.filteredIssues)

  // ----------> Set 404 <----------
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
}
