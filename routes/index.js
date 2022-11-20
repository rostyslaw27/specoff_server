const express = require('express')

const client = require('~/routes/client')
const solution = require('~/routes/solution')

const router = express.Router()

router.use('/clients', client)
router.use('/solutions', solution)

module.exports = router
