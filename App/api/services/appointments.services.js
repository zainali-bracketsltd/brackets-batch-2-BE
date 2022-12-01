const Appointment = require('../models/appointment')

const scheduleAppointment = async appointment => {
  try {
    const newAppointment = new Appointment(appointment)

    return await newAppointment.save()
  } catch (error) {
    throw error
  }
}

const updateAppointment = async ({ appointmentId, dataToUpdate }) => {
  try {
    const newAppointment = Appointment.findByIdAndUpdate(
      appointmentId,
      dataToUpdate,
      { new: true }
    )

    return newAppointment
  } catch (error) {
    throw error
  }
}

module.exports = { scheduleAppointment, updateAppointment }
