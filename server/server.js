const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const twit = require('twit')
const jwt = require('jsonwebtoken')
const config = require('./config')

const index = require('./routes/index')
const users = require('./routes/users')
const issues = require('./routes/issues')
const Twitter = new twit({
  consumer_key: process.env.TWIT_CK,
  consumer_secret: process.env.TWIT_CS,
  access_token: process.env.TWIT_AT,
  access_token_secret: process.env.TWIT_ATS,
  timeout_ms: 60000
})

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

app.set('secret', config.secret) // secret variable

// CONNECT TO DB
mongoose.connect(config.database)

// ----------> MODELS <----------
const User = require('./models/User')
const Issue = require('./models/Issue')
// ----------> END MODELS <----------

// ----------> API ROUTES <----------
// ##### UNPROTECTED ROUTES #####
app.use('/', index)

app.post('/api/v1/authenticate', (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    console.log(user);
    if (err) {
      throw err
    } else if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      })
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        })
      } else {
        var token = jwt.sign(user, app.get('secret'))

        res.json({
          success: true,
          token: token
        })
      }
    }
  })
})

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
app.use('/api/v1/issues', issues)

// 404 ERROR
app.use((req, res) => {
  var err = new Error('Not Found')
  err.status = 404
  res.json(err)
})
// ----------> END API ROUTES <----------

// ----------> CONNECTIONS TWIITER API <----------
var stream = Twitter.stream('statuses/filter', {track: '#FixMyCity'})

stream.on('tweet', (tweet) => {
  let issue = {
    posted_by: tweet.user.screen_name,
    posted_by_id: tweet.user.id,
    posted_on: tweet.created_at,
    tweet_content: tweet.text,
    location: {
      type: "Point",
      coordinates: tweet.geo.coordinates
    },
    status: "new",
    hits: 1,
    report: ''
  }

  Issue.create(issue, (err, newIssue) => {
    if (err) {
      throw err
    }
  })
})
// ----------> END CONNECTIONS TWIITER API <----------

// START SERVER
app.listen(config.port, () => {
  console.log('Server started on port 3000...')
})
