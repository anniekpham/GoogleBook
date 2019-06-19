const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)


require('mongoose').connect('mongodb://localhost/books_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
.then(_ => app.listen(PORT))
.catch(e => console.log(e))