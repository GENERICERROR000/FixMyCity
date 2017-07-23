// Libraries
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const logger = require('morgan')
const mongoose = require('mongoose')

// Files
const authenticate = require('./routes/authenticate')
const config = require('./configs/config')
const index = require('./routes/index')
const issues = require('./routes/issues')
const twit = require('./configs/twit_config')
const users = require('./routes/users')

// TODO: REMOVE MODELS FROM SERVER FILE
// Models
const User = require('./models/User')

// Connect To DB
mongoose.connect(config.database)

// ----------> APP SETUP <----------
const app = express()

app.set('secret', config.secret) // secret variable

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token')
  next()
})
// ----------> END APP SETUP <----------

// ----------> API ROUTES <----------
// ##### UNPROTECTED ROUTES #####
app.use('/', index)
// move down later
app.use('/api/v1/issues', issues)
app.use('/api/v1/authenticate', authenticate)

app.use((req, res, next) => {
  var token = req.headers['x-access-token']
  if (token) {
    jwt.verify(token, app.get('secret'), (err, decoded) => {
      if (err) {
        return res.json({
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

// ##### PROTECTED ROUTES #####
app.use('/users', users)
// app.use('/api/v1/issues', issues)

// 404 ERROR
app.use((req, res) => {
  var err = new Error('Not Found')
  err.status = 404
  res.json(err)
})
// ----------> END API ROUTES <----------

// Start Connection To Twitter API
twit()

// Start Server
app.listen(config.port, () => {
  console.log('Server started on port 3000...')
})
