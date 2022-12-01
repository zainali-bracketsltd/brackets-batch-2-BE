const mongoose = require('mongoose')

const { APPOINTMENT_STATUS_ENUM } = require('../../config/constants')

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    patientName: { type: String },
    startTime: { type: Date },
    status: {
      type: String,
      enum: APPOINTMENT_STATUS_ENUM
    },
    endTime: {
      type: Date
    }
  },
  {
    collection: 'appointments',
    timestamps: true
  }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
