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

const getEmpleado = ( id, callback ) => {
  
  return new Promise((resolve, reject) => {
    
    const empleado = empleados.find((e) => e.id === id)?.nombre
    
    empleado
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`);
  
  });

};

const getSalario = ( id, callback ) => {
  
  return new Promise((resolve, reject) => {
    
    const salario = salarios.find((s) => s.id === id)?.salario
    
    salario
      ? resolve(salario)
      : reject(`No existe salario con id ${id}`);
  
  });

};

const id = 3;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((error) => console.log(error));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((error) => console.log(error));

getEmpleado( id )
  .then( empleado => {
    
    getSalario( id )
      .then( salario => {
        console.log( 'El empleado:', empleado, 'tiene un salario de:', salario )
      })
      .catch( errors => console.log( errors ))
    
  })


