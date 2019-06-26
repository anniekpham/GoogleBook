const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books_db";

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })

.then(_ => app.listen(PORT))
.catch(e => console.log(e))