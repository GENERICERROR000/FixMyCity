const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../../configs/config')
const User = require('../../models/user')
const router = express.Router()

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res.status(422).send({
      error: 'You must provide email and password'
    })
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err) } // TODO: WHAT TO DO ABOUT THESES ERRORS (SAME IN SIGNIN)

    if (existingUser) {
      return res.status(422).send({
        error: 'Email is in use'
      })
    }

    const user = new User({
      email: email,
      password: password
    })

    user.save((err) => {
      if (err) { return next(err) } // TODO: WHAT TO DO ABOUT THESES ERRORS (SAME IN SIGNIN)

      const token = jwt.sign(user, config.secret)

      res.send({
        success: true,
        token: token
      })
    })
  })
})

module.exports = router
