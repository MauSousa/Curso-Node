const { response } = require('express')
const Usuario = require('../models/usuario')

const usuariosGet = (req, res = response) => {
  const { query, nombre, apiKey, page = 1, limit } = req.query

  res.json({
    message: 'Get API - Controlador',
    query,
    nombre,
    apiKey,
    page,
    limit,
  })
}

const usuariosPost = async (req, res = response) => {
  const body = req.body
  const usuario = new Usuario(body)

  await usuario.save()

  res.json({
    usuario,
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
