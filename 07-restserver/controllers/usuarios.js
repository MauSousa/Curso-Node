/* eslint-disable no-unused-vars */
const { response } = require('express')
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario')

const usuariosGet = async (req, res = response) => {
  // const { query, nombre = 'No name', apiKey, page = 1, limit } = req.query
  const { limite = 5, desde = 0 } = req.query
  const query = { state: true }

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ])

  res.json({
    total,
    usuarios,
    /* totalUsuarios,
    usuarios, */
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

  const { _id, password, google, correo, ...resto } = req.body

  // validar pass contra db
  if (password) {
    const salt = bcryptjs.genSaltSync()
    resto.password = bcryptjs.hashSync(password, salt)
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto)

  res.json(usuario)
}

const usuariosPatch = (req, res = response) => {
  res.json({
    message: 'Patch API - Controlador',
  })
}

const usuariosDelete = async (req, res = response) => {
  const { id } = req.params

  // Borrar fisicamente al usario
  const usuario = await Usuario.findByIdAndUpdate(id, { state: false })

  res.json({
    usuario,
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
}
