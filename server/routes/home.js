const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("<h1>THIS IS A TEMPORARY HOMEPAGE</h1>")
})

module.exports = router
