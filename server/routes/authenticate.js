const express = require('express')
const router = express.Router()

router.post('/api/v1/authenticate', (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    console.log(user);
    if (err) {
      throw err
    } else if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      })
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        })
      } else {
        var token = jwt.sign(user, app.get('secret'))

        res.json({
          success: true,
          token: token
        })
      }
    }
  })
})

module.exports = router
