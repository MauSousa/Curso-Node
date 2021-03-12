const fileSystem = require("fs")

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = ""
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
    }
    if (listar) {
      console.log("========================")
      console.log("    Tabla del:", base)
      console.log("========================")

      console.log(salida)
    }

    nombreArchivo = `./salida/tabla-${base}.txt`, `creado`
    //Manejo de archivos con FileSync
    await fileSystem.writeFileSync(nombreArchivo, salida)

    return nombreArchivo
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
