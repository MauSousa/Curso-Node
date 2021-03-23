const inquirer = require('inquirer')
require('colors')

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.gray} Buscar Ciudad`,
      },
      {
        value: 2,
        name: `${'2.'.gray} Historial`,
      },
      {
        value: 0,
        name: `${'0.'.gray} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log('==========================='.green)
  console.log('  Seleccione una opción'.brightBlue)
  console.log('===========================\n'.green)

  const { opcion } = await inquirer.prompt(preguntas)

  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presiona ${'enter'.blue} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      },
    },
  ]

  const { description } = await inquirer.prompt(question)
  return description
}

const listarLugares = async (lugares = []) => {
  const choices = lugares.map((lugar, indice) => {
    const index = `${indice + 1}`.green
    return {
      value: lugar.id,
      name: `${index}. ${lugar.nombre}`,
    }
  })

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione un lugar:',
      choices,
    },
  ]

  const { id } = await inquirer.prompt(preguntas)
  return id
}

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, indice) => {
    const index = `${indice + 1}`.green

    return {
      value: tarea.id,
      name: `${index}. ${tarea.description}`,
      checked: tarea.completadoEn ? true : false,
    }
  })

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices,
    },
  ]

  const { ids } = await inquirer.prompt(pregunta)
  return ids
}

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
  confirmar,
  mostrarListadoChecklist,
}
