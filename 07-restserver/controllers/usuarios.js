const { response } = require('express')
const bcryptjs = require('bcryptjs')

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
  const { nombre, correo, password, role } = req.body
  const usuario = new Usuario({ nombre, correo, password, role })

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  usuario.password = bcryptjs.hashSync(password, salt)

  await usuario.save()

  res.json({
    usuario,
  })
}

const usuariosPut = async (req, res = response) => {
  const { id } = req.params

  const { password, google, correo, ...resto } = req.body

  // TODO validar pass contra db
  if (password) {
    const salt = bcryptjs.genSaltSync()
    resto.password = bcryptjs.hashSync(password, salt)
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto)

  res.json({
    message: 'Put API - Controlador',
    usuario,
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
