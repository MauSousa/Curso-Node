const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRoleValido = async (role = '') => {
  const existeRole = await Role.findOne({ role })
  if (!existeRole) {
    throw new Error(`El role ${role} no es válido`)
  }
}

const emailExiste = async (correo = '') => {
  // verifica si el correo existe
  const existeEmail = await Usuario.findOne({ correo })
  if (existeEmail) {
    throw new Error(`El correo: ${correo} ya está registrado`)
  }
}

const existeUsuarioPorId = async (id) => {
  // verifica si existe un usuario con el id que le pasamos
  const existeUsuario = await Usuario.findById(id)
  if (!existeUsuario) {
    throw new Error(`El id no existe: ${id}`)
  }
}

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
}
