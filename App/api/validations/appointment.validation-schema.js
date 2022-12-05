const joi = require('joi')

const appointmentSchema = joi.object({
  userId: joi.string().length(24).alphanum().required(),
  patientName: joi.string().min(3).max(15).required(),
  startTime: joi.date().required(),
  status: joi.string().required()
})

module.exports = appointmentSchema
