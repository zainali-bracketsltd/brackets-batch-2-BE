const express = require('express')
const PORT = 9000

// requiring services
const { listUsers, getUser, addUser } = require('./services')

const app = express()

// body parser
app.use(express.json({ extended: false }))

/**
 * list all users
 */
app.get('/users', (req, res) => {
  const users = listUsers()

  res.send(users)
})

/**
 * get a user with id
 * @param userId
 */
app.get('/users/:userId', (req, res) => {
  const { userId } = req.params

  const user = getUser(userId)

  res.send(user)
})

/**
 * Add a user to DB
 */
app.post('/users', (req, res) => {
  const user = req.body

  const message = addUser(user)

  res.send(message)
})

/**
 * update an existing user
 */

/**
 * delete a user
 */

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
