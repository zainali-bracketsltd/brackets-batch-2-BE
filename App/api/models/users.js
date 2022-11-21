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
    }
  },
  {
    timestamps: true,
    strict: true,
    collection: 'users'
  }
)

module.exports = mongoose.model('User', usersSchema)
