const express = require('express')

const router = express.Router()

const AppointmentController = require('../controllers/appointments.controllers')

const checkAuth = require('../middlewares/checkAuth')

const { authorizeTo } = require('../middlewares/authorization')

const { validateData } = require('../middlewares/validate-data')

const { SYSTEM_ROLES_ENUM } = require('../../config/constants')

const appointmentSchema = require('../validations/appointment.validation-schema')

const AnalyticsController = require('../controllers/analytics.controllers')

router.get(
  '/per-day/:userId',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.MD, SYSTEM_ROLES_ENUM.SYS_ADMIN),
  AnalyticsController.perDayAnalytics
)

router.get(
  '/per-day-categorized/:userId',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.MD, SYSTEM_ROLES_ENUM.SYS_ADMIN),
  AnalyticsController.perDayCategorizedAnalytics
)

module.exports = router
