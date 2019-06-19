const { Books } = require('../model')

module.exports = app => {
    app.get('/books', (req, res) => {
        Books.find({}, (e, books) => {
            if (e) throw e
            res.json(books)
        })
    })
    app.post('/books', (req, res) => {
        Books.create(req.body, e => {
          if (e) throw e
          res.sendStatus(200)
        })
    })
    app.delete('/books/:id', (req, res) => {
        Books.findByIdAndDelete(req.params.id, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    })
}