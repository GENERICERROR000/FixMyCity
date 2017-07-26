const Issue = require('../models/Issue')
exports.allIssues = (req, res) => {
  const params = {
    location: [40.70515924, -74.01397682],
    start_date: new Date('6/1/2017'),
    end_date: new Date('7/27/2017')
    // issue_type: req.body.issue_type,
    // num_complaints: req.body.num_complaints
  }
  
  // const params = {
  //   location: req.body.location,
  //   start_date: new Date(req.body.start_date),
  //   end_date: new Date(req.body.end_date),
  //   issue_type: req.body.issue_type,
  //   num_complaints: req.body.num_complaints
  // }

  Issue.aggregate([
    { $geoNear: {
      near: {
       type: "Point",
        coordinates: params.location
      },
      distanceField: "distance",
      spherical: true,
      maxDistance: 10000
    }},
      {$match: {posted_on: {$gt: params.start_date, $lt: params.end_date}}}
    ], (err, issues) => {
      if (err) {
        return res.status(422).send({
          success: false,
          error: 'Issues not found'
        })
      } else {
        res.send(issues)
      }
    }
  )
}
