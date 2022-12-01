const express = require('express')

const router = express.Router()

const AppointmentController = require('../controllers/appointments.controllers')

const checkAuth = require('../middlewares/checkAuth')

const { authorizeTo } = require('../middlewares/authorization')

const { SYSTEM_ROLES_ENUM } = require('../../config/constants')

router.post(
  '/schedule',
  checkAuth,
  authorizeTo([SYSTEM_ROLES_ENUM.ASSISTANT]),
  // data validation
  AppointmentController.scheduleAppointment
)

router.patch(
  '/:appointmentId',
  checkAuth,
  authorizeTo([SYSTEM_ROLES_ENUM.ASSISTANT, SYSTEM_ROLES_ENUM.MD]),
  AppointmentController.updateAppointment
)

module.exports = router
