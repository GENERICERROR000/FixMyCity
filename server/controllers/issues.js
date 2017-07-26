const Issue = require('../models/Issue')

exports.allIssues = (req, res) => {
  Issue.find((err, issues) => {
    if (err) {
      return res.status(422).send({
        success: false,
        error: 'Issues not found'
      })
    } else {
      res.send(issues)
    }
  })
}
