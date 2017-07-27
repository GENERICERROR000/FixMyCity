const bodyParser = require('body-parser'),
  cors = require('cors'),
  express = require('express'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  config = require('./configs/config'),
  router = require('./router'),
  twit = require('./configs/twit_config')

// ########## Create Server ##########
// ----------> Connect To DB <----------
mongoose.connect(config.database, (err) => {
  if(err) console.log(err)
  console.log("Connected to DB:", config.database)
})

// ----------> Init app <----------
const app = express()

// ----------> Set Middleware <----------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use(config.headers)

// ----------> Set Routes <----------
router(app)

// ----------> Connect To Twitter API <----------
twit()

// ----------> Init Server <----------
app.listen(config.port, (err) => {
  if(err) console.log('Something went wrong', err)
  console.log('Server started on port 3000...')
})
