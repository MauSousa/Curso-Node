const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRoleValido = async (role = '') => {
  const existeRole = await Role.findOne({ role })
  if (!existeRole) {
    throw new Error(`El role ${role} no está registrado en la DB`)
  }
}

const emailExiste = async (correo = '') => {
  const existeEmail = await Usuario.findOne({ correo })
  if (existeEmail) {
    throw new Error(`El correo: ${correo} ya está registrado`)
  }
}

module.exports = {
  esRoleValido,
  emailExiste,
}
