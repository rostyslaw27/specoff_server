const express = require('express')

const clientController = require('~/controllers/client')

const router = express.Router()

router.get('/', clientController.getClients)
router.get('/:clientId', clientController.getClient)

module.exports = router
