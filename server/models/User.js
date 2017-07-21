const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  location: {
    type: {type: String},
    coordinates: []
  },
  admin: {
    type: Boolean,
    required: true
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User
