const { Schema, model } = require('mongoose')

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = model('Client', clientSchema)
