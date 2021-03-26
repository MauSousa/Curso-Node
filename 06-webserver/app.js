require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')

// Midleware Sirve contenido estático
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

/* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templated-roadtrip/index.html')
}) */

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Augusto Sousa',
    titulo: 'Curso de Node',
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Augusto Sousa',
    titulo: 'Curso de Node',
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Augusto Sousa',
    titulo: 'Curso de Node',
  })
})

app.get('*', (req, res) => {
  res.send('404 | Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
