// Libraries
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

// Files
const config = require('./configs/config')
const router = require('./routes/index');
const twit = require('./configs/twit_config')

// Connect To DB
mongoose.connect(config.database)

// App Setup
const app = express()

// TODO: MOVE SECRECT TO .BASH_PROFILE(CHECK IF CORRECT)
app.set('secret', config.secret)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token')
  next()
})

// Initiate Routes
router(app)

// Start Connection To Twitter API
twit()

// Start Server
app.listen(config.port, () => {
  console.log('Server started on port 3000...')
})
