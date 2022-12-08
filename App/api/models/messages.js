const mongoose = require('mongoose')

const { MESSAGE_STATUS_ENUM } = require('../../config/constants')

const messageSchema = new mongoose.Schema(
  {
    // senderId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User'
    // },
    // receiverId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User'
    // },
    text: { type: String },
    // status: {
    //   type: String,
    //   enum: MESSAGE_STATUS_ENUM
    // }
  },
  {
    collection: 'messages',
    timestamps: true
  }
)

module.exports = mongoose.model('Message', messageSchema)
