require('colors')

const { guardarDB, leerDb } = require('./helpers/guardarArchivo')
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

const main = async() => {
  
  let opt = ''
  const tareas = new Tareas()
  const tareasDb = leerDb()

  if( tareasDb ) {
    tareas.cargarTareasFromArray(tareasDb)
  }

  do {
    opt = await inquirerMenu()

    switch (opt) {

      case '1':
        // crear opcion
        const descripcion = await leerInput('Descripción:')
        tareas.crearTarea( descripcion )
      break

      case '2':
        tareas.listadoCompleto()
      break
      
      case '3':
        tareas.listarPendientesCompletadas()
      break
      
      case '4':
        tareas.listarPendientesCompletadas( false )
      break
      
      case '5':
        const ids = await mostrarListadoChecklist( tareas.listadoArray )
        tareas.toggleCompletadas( ids )
      break
      
      case '6':
        const id = await listadoTareasBorrar( tareas.listadoArray )
        if( id !== '0' ){
          const ok = await confirmar('¿Está seguro de borrarlo?')
          if( ok ) {
            tareas.borrarTarea( id )
            console.log('\nTarea borrada satisfactoriamente')
          }
        }
      break

    }

    guardarDB( tareas.listadoArray) 

    await pausa()
    
    
  } while (opt !== '0')
  
  
}


main()