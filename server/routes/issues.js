const express = require('express')
const router = express.Router()
const Issue = require('../models/Issue')

router.get('/', (req, res) => {
  Issue.find((err, issues) => {
    if (err) {
      throw err
    } else {
      res.send(issues)
    }
  })
})

module.exports = router

// NOTE: These are routes for later

// // POST Book
// app.post('/api/v1/issues/new', (req, res) => {
//   let book = req.body
//
//   Book.create(book, (err, newBook) => {
//     if (err) {
//       throw err
//     } else {
//       Book.find((err, books) => {
//         if (err) {
//           throw err
//         } else {
//           res.json(books)
//         }
//       })
//     }
//   })
// })
//
// // DELETE Book
// app.delete('/api/v1/books/delete', (req, res) => {
//   let bookID = req.body.id
//
//   Book.remove({_id: bookID}, (err) => {
//     if (err) {
//       throw err
//     } else {
//       Book.find((err, books) => {
//         if (err) {
//           throw err
//         } else {
//           res.json(books)
//         }
//       })
//     }
//   })
// })
