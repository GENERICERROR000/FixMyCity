const jwt = require('jsonwebtoken')
const config = require('../configs/config')
const signin = require('./auth/signin')
const signup = require('./auth/signup')
const home = require('./home')
const issues = require('./issues')

module.exports = function (app) {
  // ##### UNPROTECTED ROUTES #####
  app.use('/', home)
  app.use('/api/v1/signin', signin)
  app.use('/api/v1/signup', signup)

  // ##### PROTECTED ROUTES #####
  // Authenticate Routes
  // TODO: Will change to: authenticate(app)
  app.use((req, res, next) => {
    var token = req.headers['x-access-token']
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Failed to authenticate token.' })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      })
    }
  })

  app.use('/api/v1/issues', issues)

  // 404 ERROR
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
}
