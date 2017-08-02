const Issue = require('../models/Issue')

exports.filteredIssues = (req, res) => {
  const location = req.body.location || [0, 0],
    maxDistance = req.body.location ? 35000 : 13000000,
    start_date = (req.body.start_date ? new Date(req.body.start_date) : new Date('4/21/2006')),
    end_date = (req.body.end_date ? new Date(req.body.end_date) : new Date(Date.now())),
    issue_type = req.body.issue_type || /.*/g,
    num_complaints = req.body.num_complaints || /.*/g,
    type = req.body.type


  Issue.aggregate([
    {
      $geoNear: {
      near: {
        type: "Point",
        coordinates: location
      },
      distanceField: "distance",
      spherical: true,
      maxDistance: maxDistance
      }
    },
    {
      $match: {posted_on: {$gt: start_date, $lt: end_date}}
    },
    {
      $match: {status: type}
    },
    {
      $sort : {posted_on : -1}
    }

  ], (err, issues) => {
    if (err) {
      return res.status(422).send({
        success: false,
        error: 'Issues not found'
      })
    } else {
      res.send(issues)
    }}
  )
}

exports.deleteIssue = (req, res) => {
  const issueID = req.body.id

  Issue.remove({_id: issueID}, (err) => {
    if (err) {
      res.send({
        success: false,
        message: "Something went wrong"
      })
    }

    res.send({
      success: true,
      message: "Issue was successfully deleted"
    })
  })
}
