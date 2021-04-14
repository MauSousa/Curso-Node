const { response } = require('express')
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario')
const { validationResult } = require('express-validator')

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
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }

  const { nombre, correo, password, role } = req.body
  const usuario = new Usuario({ nombre, correo, password, role })

  // TODO: Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo })
  if (existeEmail) {
    return res.status(400).json({
      message: 'El correo ya está registrado',
    })
  }

  // TODO: Encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  usuario.password = bcryptjs.hashSync(password, salt)

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
