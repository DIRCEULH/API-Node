const express = require('express')
const router = express.Router()
const controller = require('../controllers/personController')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.put('/:id', controller.put)
router.post('/', controller.post)
router.delete('/:id', controller.delete)

module.exports = router
