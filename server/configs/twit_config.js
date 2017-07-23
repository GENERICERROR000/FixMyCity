const twit = require('twit')
const Issue = require('../models/Issue')

// ----------> CONNECTIONS TWIITER API <----------
module.exports = function () {
  // Config Settings For Twit
  const Twitter = new twit({
    consumer_key: process.env.TWIT_CK,
    consumer_secret: process.env.TWIT_CS,
    access_token: process.env.TWIT_AT,
    access_token_secret: process.env.TWIT_ATS,
    timeout_ms: 60000
  })

  // Start Listening To Twitter Stream
  const stream = Twitter.stream('statuses/filter', {track: '#FixMyCity'})

  // Set Action For New Tweet
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
}
// ----------> END CONNECTIONS TWIITER API <----------
