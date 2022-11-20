const { Schema, model } = require('mongoose')

const solutionSchema = new Schema({
  specialist_id: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  client_id: {
    type: String,
    required: true,
  },
  client_name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

module.exports = model('Solution', solutionSchema)
