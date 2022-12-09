const MessageService = require('./api/services/messages.services')

function listenEvents (io) {
  io.on('connection', socket => {
    console.log('*** socket connected ***', socket.id)

    socket.join('my-room')

    socket.emit('message', {
      text: 'Assalamu Alaikum!'
    })

    socket.on('message', message => {
      MessageService.createMessage(message)

      socket.to('my-room').emit('message', message)
    })
  })
}

module.exports = { listenEvents }
