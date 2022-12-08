const Message = require('../models/messages')

const createMessage = async message => {
  console.log('*** creating message ***')

  try {
    const newMessage = new Message(message)

    return await newMessage.save()
  } catch (error) {
    throw error
  }
}

const listMessages = async () => {
  try {
    const messages = Message.find({})

    return messages
  } catch (error) {
    throw error
  }
}

module.exports = { listMessages, createMessage }
