const express = require('express')
const controller = require('../controllers/mainController');
const router = express.Router()

router.get('/', controller.index)

router.get('/resume', controller.showResume)

module.exports = router