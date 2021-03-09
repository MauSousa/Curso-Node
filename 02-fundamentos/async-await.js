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

const getInfoUsuario = async (id) => {
  
  try {
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
    return `El salario del empleado: ${empleado} es de: ${salario}`
    
  } catch (err) {
    throw err
  }

}

const id = 3

getInfoUsuario(id)
  .then(message => {
    console.log('TODO BIEN!')
    console.log(message)
  })
  .catch( err => {
    console.log('TODO MAL!')
    console.log(err)
  })