const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

router.post('/api/v1/authenticate', (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) {
      throw err // TODO: CHANGE TO SENDING CORRECT ERROR BACK TO CLIENT
    } else if (!user) {
      res.send({
        success: false,
        message: 'User not found.'
      })
    } else if (user) {
      if (user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) {
          throw err // TODO: CHANGE TO SENDING CORRECT ERROR BACK TO CLIENT
        }
        if (!isMatch) {
          return false
        }
        return true
        })) {
          res.send({
            success: false,
            message: 'Incorrect password.'
          })
        }
      } else {
        const token = jwt.sign(user, app.get('secret'))

        res.send({
          success: true,
          token: token
        })
      }
    })
  }
)

module.exports = router
