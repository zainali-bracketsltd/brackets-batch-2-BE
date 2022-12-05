const mongoose = require('mongoose')
const { APPOINTMENT_STATUS_ENUM } = require('../../config/constants')

const Appointment = require('../models/appointment')

const perDayAnalytics = async userId => {
  try {
    const aggregationPipeline = [
      {
        $match: {
          userId: mongoose.Types.ObjectId(userId),
          status: APPOINTMENT_STATUS_ENUM[2]
        }
      },
      {
        $addFields: {
          day: {
            $dayOfMonth: '$startTime'
          },
          duration: {
            $dateDiff: {
              startDate: '$startTime',
              endDate: '$endTime',
              unit: 'second'
            }
          }
        }
      },
      {
        $group: {
          _id: '$day',
          timeSpent: {
            $sum: '$duration'
          }
        }
      },
      {
        $project: {
          _id: 0,
          day: '$_id',
          timeSpent: 1
        }
      }
    ]

    const results = await Appointment.aggregate(aggregationPipeline)

    return results
  } catch (error) {
    throw error
  }
}

module.exports = { perDayAnalytics }
