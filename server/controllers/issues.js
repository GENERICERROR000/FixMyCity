const Issue = require('../models/Issue')

exports.filteredIssues = (req, res) => {
  const params = {
    location: req.body.location || [0, 0] ,
    start_date: (req.body.start_date ? new Date(req.body.start_date) : new Date('4/21/2006')),
    end_date: (req.body.end_date ? new Date(req.body.end_date) : new Date(Date.now())),
    issue_type: req.body.issue_type || /.*/g,
    num_complaints: req.body.num_complaints || /.*/g
  }

  Issue.aggregate([
    {
      $geoNear: {
      near: {
        type: "Point",
        coordinates: params.location
      },
      distanceField: "distance",
      spherical: true,
      maxDistance: (req.body.location ? 35000 : 13000000)
      }
    },
    {
      $match: {posted_on: {$gt: params.start_date, $lt: params.end_date}}
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
