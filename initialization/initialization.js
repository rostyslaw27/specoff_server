const express = require('express')
const cors = require('cors')

const {
  config: { CLIENT_URL }
} = require('~/configs/config')

const router = require('~/routes')

const initialization = (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(
    cors({
      origin: CLIENT_URL,
      credentials: true,
    })
  )

  app.use('/', router)
}

module.exports = initialization
