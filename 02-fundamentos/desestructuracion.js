const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

function imprimeHeroe( heroe ) {
    const { nombre,apellido,poder } = heroe
    
    console.log( nombre, apellido, poder )

}

//imprimeHeroe( deadpool )

// Desestructuracion de arreglos
const heroes = ['Deadpool', 'Superman', 'Batman']

// const heroeUno  = heroes[0]
// const heroeDos = heroes[1]
// const heroeTres = heroes[2]

const [,,heroeTres] = heroes


console.log(heroeTres)