const authenticate = require('./authenticate')
const home = require('./home')
const issues = require('./issues')
const users = require('./users')

module.exports = function (app) {
  // ----------> API ROUTES <----------
  // ##### UNPROTECTED ROUTES #####
  app.use('/', home)
  // vvvvv move down later vvvvv
  app.use('/api/v1/issues', issues)
  // ^^^^^ move down later ^^^^^
  app.use('/api/v1/authenticate', authenticate)

  // ##### PROTECTED ROUTES #####
  // Authenticate Routes
  app.use((req, res, next) => {
    var token = req.headers['x-access-token']
    if (token) {
      jwt.verify(token, app.get('secret'), (err, decoded) => {
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

  app.use('/users', users)
  // app.use('/api/v1/issues', issues)

  // 404 ERROR
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
  // ----------> END API ROUTES <----------
}
