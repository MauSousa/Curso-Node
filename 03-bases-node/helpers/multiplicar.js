const fileSystem = require('fs');

const crearArchivo = async (base = 1) => {


  try {
    console.log('========================')
  console.log('    Tabla del:', base )
  console.log('========================')
  let salida = ""

  for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`
  }
  console.log( salida )

  nombreArchivo = `tabla-${base}.txt`
  //Manejo de archivos con FileSync
  await fileSystem.writeFileSync(nombreArchivo, salida)

  return nombreArchivo
  } catch (error) {
    throw error
  }
  
  
}


module.exports = {
  crearArchivo
}