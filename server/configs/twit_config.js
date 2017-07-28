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
    // TODO: CHECK MEDIA TO SEE IF IMG VS VIDEO
    
    const media = tweet.entities.media ? tweet.entities.media[0].media_url_https : ''

    const issue = new Issue ({
      posted_by: tweet.user.screen_name,
      posted_by_id: tweet.user.id,
      profile_image: tweet.user.profile_image_url_https,
      posted_on: new Date(tweet.created_at),
      tweet_content: tweet.text,
      media: media,
      location: {
        coordinates: tweet.geo.coordinates
      }
    })

    issue.save((err, newIssue) => {
      if(err) console.log("Error saving Tweet:", err)
    })
  })
}
