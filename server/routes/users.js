const express = require('express')
const router = express.Router()
const User = require('../models/User')

// TODO: THIS IS NOT CORRECT YET - CURRENTLY WILL GRAB ALL USERS
router.get('/', (req, res) => {
  User.find((err, issues) => {
    if (err) {
      throw err
    } else {
      res.json(issues)
    }
  })
})

module.exports = router
