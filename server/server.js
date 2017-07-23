// Libraries
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const logger = require('morgan')
const mongoose = require('mongoose')

// Files
const config = require('./configs/config')
const router = require('./routes/index');
const twit = require('./configs/twit_config')

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

// Initiate Routes
router(app)

// Start Connection To Twitter API
twit()

// Start Server
app.listen(config.port, () => {
  console.log('Server started on port 3000...')
})
