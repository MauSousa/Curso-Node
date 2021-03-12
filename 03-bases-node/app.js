console.clear()

const { crearArchivo } = require("./helpers/multiplicar.js")
const argv  = require('./yargs/yargs')

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((error) => console.log(error))
