const User = require('../models/users')

const createUser = async user => {
  try {
    const newUser = new User(user)

    return await newUser.save()
  } catch (error) {
    throw error
  }
}

const getUserById = async userId => {
  try {
    const user = await User.findById(userId).select('-password').lean()

    return user
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

const updateUser = async ({ userId, dataToUpdate }) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(userId, dataToUpdate, {
      new: true
      // upsert: true
    })

    return userUpdated
  } catch (error) {
    throw error
  }
}

const verifyOTP = async ({ userId, OTP }) => {
  try {
    const user = await User.findOne({ _id: userId, OTP })
      .lean()
      .select('-password')

    console.log('*** OTP verified ***', user)

    return user
  } catch (error) {
    throw error
  }
}

module.exports = {
  createUser,
  getUserExistance,
  getUserById,
  updateUser,
  verifyOTP
}
