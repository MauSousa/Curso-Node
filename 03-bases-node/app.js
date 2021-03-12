
const { crearArchivo } = require('./helpers/multiplicar.js')

console.clear()

// console.log( process.argv )

// Esto no se hace
// const [ , ,argumentoTres ] = process.argv
// const [, base = 5 ] = argumentoTres.split('=')

// console.log( base )

// const base = 1

crearArchivo( base )
  .then(nombreArchivo => console.log( nombreArchivo, 'creado'))
  .catch(error => console.log(error))