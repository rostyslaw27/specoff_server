const express = require('express')

const solutionController = require('~/controllers/solution')

const router = express.Router()

router.get('/', solutionController.getSolutions)
router.post('/create', solutionController.createSolution)

module.exports = router
