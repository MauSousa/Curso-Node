// Callback Hell
const empleados = [
  {
    id: 1,
    nombre: "Augusto",
  },
  {
    id: 2,
    nombre: "Julia",
  },
  {
    id: 3,
    nombre: "Vanesa",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = ( id, callback) => {

  const empleado = empleados.find( e => e.id === id )

  if( empleado ) {
    callback( null, empleado )
  }
  else {
    callback( `Empleado con id ${id} no existe` )
  }

}

const getSalario = ( id, callback ) => {

  const salario = salarios.find( s => s.id === id )?.salario

  if( salario ) {
    callback( null, salario )
  }
  else {
    callback( `Salario con id ${id} no existe` )
  }

}

const id = 2

getEmpleado( id, ( err, empleado ) => {
  
  if( err ) {
    console.log( 'ERROR!' )
    return console.log( err )
  }

  console.log( 'Empleado existe!' )
  console.log( empleado.nombre )

})

getSalario( id, (err,salario) => {
  if( err ) {
    console.log( 'ERROR!' )
    return console.log( err )
  }

  console.log( 'Salario existe!' )
  console.log( salario )
})


