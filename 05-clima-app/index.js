require('dotenv').config()

const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require('./helpers/inquirer')
const Busquedas = require('./models/busquedas')

const main = async () => {
  let opt

  const busquedas = new Busquedas()

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        // Mostrar mensaje para que escriba la ciudad
        const terminoBusqueda = await leerInput('Ciudad: ')

        // Buscar la ciudad
        const lugares = await busquedas.ciudad(terminoBusqueda)

        // Seleccionar la ciudad
        const idSeleccionado = await listarLugares(lugares)
        if (idSeleccionado === '0') continue

        //Obtenemos el lugar seleccionado por el usario para mandarlo a pantalla
        const lugarSeleccionado = lugares.find(
          (lugar) => lugar.id === idSeleccionado
        )
        const { nombre, longitud, latitud } = lugarSeleccionado

        // Guardar en DB
        busquedas.guardarHistorial(nombre)

        // Obtener los datos del clima
        const clima = await busquedas.climaLugar(latitud, longitud)

        const { temperatura, description, minima, maxima } = clima

        // Mostrar los resultados
        console.log('\nInformación de la ciudad'.blue)
        console.log('Ciudad:', nombre)
        console.log('Latitud:', latitud)
        console.log('Longitud:', longitud)
        console.log('Temperatura:', temperatura + '°C')
        console.log('Mínima:', minima + '°C')
        console.log('Máxima:', maxima + '°C')
        console.log('Descripción:', description)
        break

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, index) => {
          const indice = `${index + 1}.`.blue
          console.log(`${indice} ${lugar}`)
        })
        break
    }

    if (opt !== 0) await pausa()
  } while (opt !== 0)
}

main()
