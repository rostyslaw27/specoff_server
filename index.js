require('module-alias/register')
require('./module-aliases')
const express = require('express')
const serverSetup = require('~/initialization/serverSetup')

const app = express()

const start = async () => {
  await serverSetup(app)
}

start()