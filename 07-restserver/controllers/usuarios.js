const { response } = require('express')

const usuariosGet = (req, res = response) => {
  res.json({
    message: 'Get API - Controlador',
  })
}

const usuariosPost = (req, res = response) => {
  res.status(201).json({
    message: 'POST API - Controlador',
  })
}

const usuariosPut = (req, res = response) => {
  res.json({
    message: 'Put API - Controlador',
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
