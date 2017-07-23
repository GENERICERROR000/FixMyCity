const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("<h1>THIS IS A TEMPORARY HOMEPAGE - FUCK FUCKETY FUCKER FUCK :)</h1>")
})

module.exports = router
