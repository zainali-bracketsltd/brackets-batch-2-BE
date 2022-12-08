const AnalyticsService = require('../services/analytics.services')

const perDayAnalytics = async (req, res) => {
  try {
    const { userId } = req.params

    const results = await AnalyticsService.perDayAnalytics(userId)

    res.status(200).json({
      message: 'SUCCESS: analytics generated.',
      results
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

const perDayCategorizedAnalytics = async (req, res) => {
  try {
    const { userId } = req.params

    const results = await AnalyticsService.perDayCategorizedAnalytics(userId)

    res.status(200).json({
      message: 'SUCCESS: analytics generated.',
      results
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

module.exports = { perDayAnalytics, perDayCategorizedAnalytics }
