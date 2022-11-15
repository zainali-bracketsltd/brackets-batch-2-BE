const PORT = 8999

const express = require('express')
const http = require('http')
const { connectDB } = require('./config/dbConn')

// importing routers
const UserRoutes = require('./api/routes/users.routes')

const app = express()

connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/users', UserRoutes)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
