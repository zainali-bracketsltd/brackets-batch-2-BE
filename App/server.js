require('dotenv').config()

const PORT = 8999

const express = require('express')
const http = require('http')
const { connectDB } = require('./config/dbConn')

// importing routers
const UserRoutes = require('./api/routes/users.routes')
const TwilioRoutes = require('./api/routes/twilio.routes')
const AppointmentRoutes = require('./api/routes/appointments.routes')
const AnalyticsRoutes = require('./api/routes/analytics.routes')

const app = express()

connectDB()

// server testing
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server running...'
  })
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/users', UserRoutes)
app.use('/twilio', TwilioRoutes)
app.use('/appointments', AppointmentRoutes)
app.use('/analytics', AnalyticsRoutes)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
