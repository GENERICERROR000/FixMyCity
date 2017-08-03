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

exports.updateIssue = (req, res) => {
  const issueID = req.body.issueID,
    notes = req.body.updatedIssueParts.notes || null,
    status = req.body.updatedIssueParts.status || null,
    report = req.body.updatedIssueParts.report || null

  let updates = {}
  if (notes) updates.notes = notes
  if (status) updates.status = status
  if (report) updates.report = report

  Issue.findByIdAndUpdate(issueID, updates, {new: true}, (err, updatedIssue) => {
    if (err) {
      return res.status(422).send({
        success: false,
        error: 'Something went wrong'
      })
    } else {
      res.send(updatedIssue)
    }}
  )
}


exports.deleteIssue = (req, res) => {
  const issueID = req.headers['issue_id']

  Issue.findOneAndRemove(issueID, (err) => {
    if (err) {
      res.status(422).send({
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
