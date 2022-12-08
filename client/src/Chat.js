import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

let socket

const Chat = () => {
  const [messages, UpdateMessages] = useState()

  const [text, setText] = useState('')

  // connect socket
  useEffect(() => {
    socket = io('http://localhost:8999')

    socket.on('message', data => {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    ;(async () => {
      // fetch list of messages here
    })()
  }, [])

  const sendMessage = e => {
    e.preventDefault()

    socket.emit('message', { text })
  }

  return (
    <div className='chat'>
      <h1>Testing socket</h1>

      <form onSubmit={sendMessage}>
        <input
          type='text'
          value={text}
          onChange={newTxt => setText(newTxt.target.value)}
        />
        {/* <input type='submit' value='Send' /> */}
      </form>
    </div>
  )
}

export default Chat
