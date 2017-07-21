const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const twit = require('twit')

// ----------> API ROUTES <----------
const index = require('./routes/index');
const issues = require('./routes/issues');

app.use('/', index);
app.use('/api/v1/issues', issues);
// ----------> END API ROUTES <----------

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  next()
})

// CONNECT TO DB
mongoose.connect('mongodb://localhost:27017/fixmycitydb')


// ----------> CONNECTIONS TWIITER API <----------
const Twitter = new twit({
  consumer_key: process.env.TWIT_CK,
  consumer_secret: process.env.TWIT_CS,
  access_token: process.env.TWIT_AT,
  access_token_secret: process.env.TWIT_ATS,
  timeout_ms: 60000
})

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

// 404 ERROR
app.use((req, res) => {
  var err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

// START SERVER
app.listen(3000, () => {
  console.log('Server started on port 3000...')
})
