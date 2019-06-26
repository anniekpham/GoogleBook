const express = require('express')
const app = express()
const { join } = require('path')
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books_db";

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/src/index.html'))
// })

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })

.then(_ => app.listen(PORT))
.catch(e => console.log(e))