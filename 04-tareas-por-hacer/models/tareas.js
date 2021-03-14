/* Se manejará de la siguiente manera
  
  { 'uuid-numeroidentificador': { id: numId, description: asd, completadoEn: fecha }  }
*/

const Tarea = require("./tarea")

class Tareas {
  _listado = {}

  get listadoArray() {
    const listado = []
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })

    return listado
  }

  constructor() {
    this._listado = {}
  }

  borrarTarea( id = '' ) {
    delete this._listado[id]
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTarea(description = "") {
    const tarea = new Tarea(description)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto() {
    console.log("")
    this.listadoArray.forEach((tarea, indice) => {
      const numeroIndice = `${indice + 1}`.green
      const { description, completadoEn } = tarea
      const estado = completadoEn
        ? "Completada".bold.brightBlue
        : "Pendiente".bold.brightRed
      console.log(`${numeroIndice}. ${description} :: ${estado}`)
    })
  }

  listarPendientesCompletadas(completada = true) {
    console.log()
    let indice = 0
    this.listadoArray.forEach((tarea) => {
      const { description, completadoEn } = tarea
      const estado = completadoEn
        ? "Completada".bold.brightBlue
        : "Pendiente".bold.brightRed
      if (completada) {
        // Muestra las tareas completas
        if (completadoEn) {
          indice += 1
          console.log(
            `${
              indice.toString().bold.brightBlue
            }. ${description} :: ${completadoEn.brightRed}`
          )
        }
      } else {
        if (!completadoEn) {
          indice += 1
          console.log(
            `${indice.toString().bold.brightRed}. ${description} :: ${estado}`
          )
        }
      }
    })
  }

  toggleCompletadas( ids = [] ) {
    
    ids.forEach( id => {

      const tarea = this._listado[id]
      if( !tarea.completadoEn ) {
        tarea.completadoEn = new Date().toISOString()
      }

    })

    this.listadoArray.forEach( tarea => {
      if( !ids.includes( tarea.id ) ) {
        this._listado[ids].completadoEn = null
      }
    })

  }
}

module.exports = Tareas
