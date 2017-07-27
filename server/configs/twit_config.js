const twit = require('twit')
const Issue = require('../models/Issue')

module.exports = () => {
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
    // TODO: NEED TO TURN ISSUE INTO TAGS WITH FN
    const issue = new Issue ({
      posted_by: tweet.user.screen_name,
      posted_by_id: tweet.user.id,
      posted_on: new Date(tweet.created_at),
      tweet_content: tweet.text,
      location: {
        coordinates: tweet.geo.coordinates
      }
    })

    issue.save((err, newIssue) => {
      if(err) console.log("Error saving Tweet:", err)
    })
  })
}
