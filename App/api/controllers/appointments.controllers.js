const AppointmentService = require('../services/appointments.services')

const scheduleAppointment = async (req, res) => {
  try {
    const appointment = req.body

    const newAppointment = await AppointmentService.scheduleAppointment(
      appointment
    )

    res.status(201).json({
      message: 'SUCCESS: appointment scheduled',
      newAppointment
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}

const updateAppointment = async (req, res) => {
  try {
    const { status } = req.body

    const { appointmentId } = req.params

    const updatedAppointment = await AppointmentService.updateAppointment({
      appointmentId,
      dataToUpdate: { status }
    })

    res.status(200).json({
      message: `SUCCESS: appointment status changed to ${updatedAppointment.status}`,
      updatedAppointment
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}

module.exports = { scheduleAppointment, updateAppointment }
