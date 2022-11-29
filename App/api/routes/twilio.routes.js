const express = require('express')
const router = express.Router()

const TwilioController = require('../controllers/twilio.controllers')

router.post('/sms-status-callback', TwilioController.smsStatusCallback)

module.exports = router
