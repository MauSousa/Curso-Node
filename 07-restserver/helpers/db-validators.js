const Role = require('../models/role')

const esRoleValido = async (role = '') => {
  const existeRole = await Role.findOne({ role })
  if (!existeRole) {
    throw new Error(`El role ${role} no está registrado en la DB`)
  }
}

module.exports = {
  esRoleValido,
}
