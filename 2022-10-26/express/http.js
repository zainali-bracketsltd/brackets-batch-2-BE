const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('sending test response. \n')

  res.write('sending test response2')

  res.end()
})

server.listen(9000, () => {
  console.log('listening on port 9000')
})
