const fs = require('fs')
const axios = require('axios')

class Busquedas {
  historial = [] //historial
  dbPath = './db/database.json' //db file

  constructor() {
    this.leerDB()
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(' ')
      palabras = palabras.map(
        (palabra) => palabra[0].toUpperCase() + palabra.substring(1)
      )
      return palabras.join(' ')
    })
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: 'es',
    }
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: 'metric',
      lang: 'es',
    }
  }
  async ciudad(lugar = '') {
    try {
      //Peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      })
      const resp = await instance.get()
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        longitud: lugar.center[0],
        latitud: lugar.center[1],
      }))
    } catch (error) {
      return []
    }
  }

  async climaLugar(lat, lon) {
    try {
      console.clear()

      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
        params: { lat, lon, ...this.paramsWeather },
      })

      const resp = await instance.get()

      const { weather, main } = resp.data

      return {
        description: weather[0].description,
        minima: main.temp_min,
        maxima: main.temp_max,
        temperatura: main.temp,
      }
    } catch (error) {
      console.log(error)
    }
  }

  guardarHistorial(lugar = '') {
    if (this.historial.includes(lugar.toLowerCase())) return

    this.historial = this.historial.splice(0, 5)

    this.historial.unshift(lugar.toLowerCase())

    // Grabar en DB o en archivo JSON
    this.guardarDB()
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    }

    fs.writeFileSync(this.dbPath, JSON.stringify(payload))
  }

  leerDB() {
    if (!fs.existsSync(this.dbPath)) return

    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' })
    const data = JSON.parse(info)

    const { historial } = data

    this.historial = historial
  }
}

module.exports = Busquedas
