const express = require('express')
const router = express.Router()
const User = require('../models/User')

// TODO: DELETE THIS ONCE HAVE THINGS WORKING
router.get('/', (req, res) => {
  User.find((err, issues) => {
    if (err) {
      throw err
    } else {
      res.send(issues)
    }
  })
})

module.exports = router
