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

const perDayCategorizedAnalytics = async userId => {
  try {
    const aggregationPipeline = [
      {
        $match: {
          userId: mongoose.Types.ObjectId('63882e4cf6c3446ebe4d7ddc'),
          status: APPOINTMENT_STATUS_ENUM[2]
        }
      },
      {
        $addFields: {
          day: {
            $dayOfMonth: '$startTime'
          },
          hour: {
            $hour: '$startTime'
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
          timeSpentAM: {
            $sum: {
              $cond: [
                {
                  $lt: ['$hour', 12]
                },
                '$duration',
                0
              ]
            }
          },
          timeSpentPM: {
            $sum: {
              $cond: [
                {
                  $gte: ['$hour', 12]
                },
                '$duration',
                0
              ]
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          day: '$_id',
          timeSpentAM: 1,
          timeSpentPM: 1
        }
      }
    ]

    const results = await Appointment.aggregate(aggregationPipeline)

    return results
  } catch (error) {
    throw error
  }
}

module.exports = { perDayAnalytics, perDayCategorizedAnalytics }
