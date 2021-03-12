
const { crearArchivo } = require('./helpers/multiplicar.js')

// Imprimir la tabla del cinco
/*const tablaDelNumero = ( numero ) => {
  
  console.clear();
  console.log(`Imprimiendo la tabla del ${numero}`)
  for(let num = 1; num <= 10; num++) {
    let resultado = numero * num
    console.log(`${numero} * ${num} = ${resultado}`)
  }

}
tablaDelNumero(5)*/

console.clear()

const base = 1

crearArchivo( base )
  .then(nombreArchivo => console.log( nombreArchivo, 'creado'))
  .catch(error => console.log(error))