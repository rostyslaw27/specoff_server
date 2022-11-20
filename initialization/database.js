const mongoose = require('mongoose')

const {
  config: { MONGODB_URL }
} = require('~/configs/config')

const databaseInitialization = async () => {
  await mongoose.connect(MONGODB_URL)
  console.log('Connected to MongoDB.')
}

module.exports = databaseInitialization
