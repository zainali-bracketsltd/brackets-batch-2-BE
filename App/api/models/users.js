const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    userName: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    phoneNumber: {
      type: String
    },
    password: {
      type: String
    },
    bio: {
      type: String
    },
    dateOfBirth: {
      type: String
    },
    profilePath: {
      type: String
    },
    uniqueKeys: {
      type: [String]
    },
    OTP: {
      type: String
    }
  },
  {
    timestamps: true,
    strict: true,
    collection: 'users'
  }
)

module.exports = mongoose.model('User', usersSchema)
