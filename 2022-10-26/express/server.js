const express = require('express')
const PORT = 9000

// requiring services
const { listUsers, getUser, addUser } = require('./services')

const app = express()

// body parser
app.use(express.json({ extended: false }))

app.use((req, res, next) => {
  // write logic
  // change req or res objects
  // send response or end response cycle
  // pass to next middleware

  const url = req.originalUrl
  const method = req.method

  console.log(`Request received method -> ${method}, url -> ${url} `)

  req.instructor = 'Zain'

  next()
})

/**
 * list all users
 */
app.get('/users', (req, res) => {
  const users = listUsers()

  res.send({ instructor: req.instructor, users })
})

/**
 * get a user with id
 * @param userId
 */
app.get(
  '/users/:userId',
  (req, res, next) => {
    const { userId } = req.params

    isNaN(userId) ? res.send({ error: 'Invalid userId type.' }) : next()

    // if (isNaN(userId)) {
    //   res.send({
    //     error: 'Invalid userId type.'
    //   })
    // } else {
    //   next()
    // }
  },
  (req, res) => {
    const { userId } = req.params

    const user = getUser(userId)

    res.send(user)
  }
)

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
app.patch('/users/:userId', (req, res) => {
  try {
    const user = req.body

    let users = listUsers()

    users = users.map(u => {
      if (u.id === userId) {
        return user
      } else {
        return user
      }
    })

    fs.writeFileSync('users.json', JSON.stringify(users))

    res.send('SUCCESS: user updated.')
  } catch (error) {
    console.log(error)
  }
})

/**
 * delete a user
 */
app.delete('/users/:userId', (req, res) => {
  // delete user here
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
