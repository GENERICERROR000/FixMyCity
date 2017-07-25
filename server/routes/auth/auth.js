const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../../configs/config')
const User = require('../../models/user')
const router = express.Router()

router.get('/', (req, res) => {
  var token = req.headers['x-access-token']
  if (!!token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'Failed to authenticate token.' })
      } else {
        req.decoded = decoded
        res.send({
          success: true,
          message: 'Token is valid.'
        })
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
})

module.exports = router
