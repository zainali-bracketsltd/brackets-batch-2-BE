const User = require('../models/users')

const createUser = async user => {
  try {
    const newUser = new User(user)

    return await newUser.save()
  } catch (error) {
    throw error
  }
}

const getUserExistance = async ({ email, userName }) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ email: { $eq: email } }, { userName: { $eq: userName } }]
    }).lean()

    // existingUser ? true : false

    return existingUser
  } catch (error) {
    throw error
  }
}

module.exports = { createUser, getUserExistance }
