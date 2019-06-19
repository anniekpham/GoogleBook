const { Schema, model } = require('mongoose')

const db = {
  Books: require('./book.js')(Schema, model),
}

module.exports = db