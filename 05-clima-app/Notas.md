# Notas

## Aplicación de clima

Esta es una aplicación de consola hecha Node, en la cual gracias a la [librería axios](https://www.npmjs.com/package/axios 'Axios npm') podemos consumir la API de geolocalización de [MapBox](https://www.mapbox.com/ 'Mapbox') y la API [OpenWeather](https://openweathermap.org/ 'OpenWeather').

### Funcionamiento

La aplicación funciona con un menú interactivo el cual nos ofrece tres opciones, Buscar ciudad, revisar el historial o salir.

Menú interactivo
![Menú](./img/menu_inicial.png)

Cuando seleccionamos buscar ciudad nos aparecerá la opción para poder escribir la opción que queramos y nos dará un listado de las ciudades que gracias a que consumimos la API de MapBox. Podemos escoger la ciudad deseada o cancelar la búsqueda.

Búsqueda de ciudad
![Búsqueda de ciudad](./img/busqueda_ciudad.png)

En caso de seleccionar la ciudad deseada nos dará información de esta, por ejemplo, su nombre, latituda, longitud. Estos datos de latitud y longitud los utilizaremos para mandarlos como parámetros para obtener el clima de dicha ciudad.

Información de la ciudad obtenida.
![Ciudad seleccionada](./img/info_busqueda.png)

También tendremos un historial de búsquedas, el cual estará vacío la primera vez que esté funcionando, pero, ¿cómo funciona? Su funcionamiento es de forma muy sencilla, solo guardará las primeras seis búsquedas que hagamos, al realizar más de seis búsquedas, éstas se desplazarán y desaparecerán, también si buscamos una ciudad la cual ya ha sido buscada, el historial no la repetirá.

Historial vacío.
![Historial vacío](./img/historial_vacio.png)

Historial después de una búsqueda.
![Historial vacío](./img/historial_busqueda.png)
