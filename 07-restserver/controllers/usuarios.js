const { response } = require('express')

const usuariosGet = (req, res = response) => {
  const { query = 'No query', nombre, apiKey } = req.query

  res.json({
    message: 'Get API - Controlador',
    query,
    nombre,
    apiKey,
  })
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body

  res.json({
    message: 'POST API - Controlador',
    nombre,
    edad,
  })
}

const usuariosPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    message: 'Put API - Controlador',
    id,
  })
}

const usuariosPatch = (req, res = response) => {
  res.json({
    message: 'Patch API - Controlador',
  })
}

const usuariosDelete = (req, res = response) => {
  res.json({
    message: 'Delete API - Controlador',
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
}
