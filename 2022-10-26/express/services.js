const fs = require('fs')

let users = fs.readFileSync('users.json', 'utf-8')

users = JSON.parse(users)

const listUsers = () => {
  return users
}

const getUser = userId => {
  userId = Number(userId)

  return users.find(user => user.id === userId)
}

const addUser = user => {
  users.unshift(user)

  fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8')

  return 'SUCCESS: user added'
}

module.exports = {
  listUsers: listUsers,
  getUser: getUser,
  addUser: addUser
}
