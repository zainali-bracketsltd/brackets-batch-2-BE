const MessageService = require('./api/services/messages.services')

function listenEvents (io) {
  io.on('connection', socket => {
    console.log('*** socket connected ***', socket.id)

    socket.emit('message', {
      text: 'Assalamu Alaikum!'
    })

    socket.on('message', message => {
      MessageService.createMessage(message)
    })
  })
}

module.exports = { listenEvents }
