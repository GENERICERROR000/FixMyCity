const mongoose = require('mongoose')

const issueSchema = mongoose.Schema({
  posted_by: {
    type: String,
    required: true
  },
  posted_by_id: {
    type: Number,
    required: true
  },
  posted_on: {
    type: String,
    required: true
  },
  tweet_content: {
    type: String,
    required: true
  },
  // issue: {
  //   type: String,
  //   required: true
  // },
  location: { // unclear if this will work
    type: {type: String},
    coordinates: []
  },
  status: {
    type: String,
    required: true
  },
  hits: Number,
  report: String
})

const Issue = mongoose.model('Issue', issueSchema)
module.exports = Issue
