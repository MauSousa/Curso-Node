const express = require('express')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // Middlewares
    this.middlewares()

    // Rutas de la aplicación
    this.routes()
  }

  middlewares() {
    // Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        message: 'Get API',
      })
    })

    this.app.put('/api', (req, res) => {
      res.json({
        message: 'Put API',
      })
    })

    this.app.post('/api', (req, res) => {
      res.status(201).json({
        message: 'POST API',
      })
    })

    this.app.delete('/api', (req, res) => {
      res.json({
        message: 'Delete API',
      })
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server
