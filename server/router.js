const jwt = require('jsonwebtoken'),
  config = require('./configs/config'),
  Authentication = require('./controllers/authentication'),
  Issues = require('./controllers/issues')


const Issue = require('./models/Issue')
const faker = require('faker');



// ########## Connect Routes With Controllers ##########
module.exports = (app, http) => {
  // ----------> Unprotected Routes <----------
  app.get('/', (req, res) => {
    for (var i = 0; i < 1000; i++) {
      const issue = new Issue ({
        posted_by: faker.lorem.word(),
        posted_by_id: 12345,
        profile_image: "http://loremflickr.com/g/100/100/cornß",
        posted_on: new Date(Date.now()),
        tweet_content: faker.lorem.sentence(),
        status: "new",
        media: ["http://loremflickr.com/g/320/240/roadwork", "http://loremflickr.com/g/320/240/roadwork"],
        location: {
          coordinates: [Number(faker.address.latitude()), Number(faker.address.latitude())]
        }
      })

      issue.save((err, newIssue) => {
        if(err) console.log("Error saving Tweet:", err)
      })
    }
    res.send("<h1>YOU HAVE DATA!</h1>")

  })










  app.get('/api/v1/auth', Authentication.auth)
  app.post('/api/v1/signin', Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)

  // ----------> Set Authentication <----------
  app.use(Authentication.checkToken)

  // ----------> Protected Routes <----------
  app.post('/api/v1/issues', Issues.filteredIssues)
  // app.post('/api/v1/issues/new', )
  app.put('/api/v1/issues', Issues.updateIssue)
  app.delete('/api/v1/issues', Issues.deleteIssue)

  // ----------> Set 404 <----------
  app.use((req, res) => {
    var err = new Error('Not Found')
    err.status = 404
    res.send(err)
  })
}
