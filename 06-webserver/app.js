const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  res.write('404 | Page Not Found')
  res.end()
})

server.listen(3543)

console.log('Escuchando el puerto', 3543)
