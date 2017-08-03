const jwt = require('jsonwebtoken'),
  config = require('./configs/config'),
  Authentication = require('./controllers/authentication'),
  Issues = require('./controllers/issues')


const Issue = require('./models/Issue')
const faker = require('faker');



// ########## Connect Routes With Controllers ##########
module.exports = (app, http) => {
  // ----------> Unprotected Routes <----------
  app.get('/', (req, res) => {
    res.send("<h1>Sample API Hompage - HEHEHEHEHEHEHEHEHEHE</h1>")
  })

  app.get('/api/v1/auth', Authentication.auth)
  app.post('/api/v1/signin', Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)

  // ----------> Set Authentication <----------
  app.use(Authentication.checkToken)

  // ----------> Protected Routes <----------
  app.post('/api/v1/issues', Issues.filteredIssues)
  // app.post('/api/v1/issues/new', )
  app.put('/api/v1/issues', Issues.updateIssue)
  app.delete('/api/v1/issues', Issues.deleteIssue)

  // ----------> Set 404 <----------
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
}
