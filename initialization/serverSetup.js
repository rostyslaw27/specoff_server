require('dotenv').config()
const databaseInitialization = require('~/initialization/database')
const initialization = require('~/initialization/initialization')

const {
  config: { SERVER_PORT }
} = require('~/configs/config')

const serverSetup = async (app) => {
  await databaseInitialization()
  initialization(app)
  return app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`)
  })
}

module.exports = serverSetup
