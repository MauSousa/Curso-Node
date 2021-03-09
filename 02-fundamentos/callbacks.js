// setTimeout( () => {
//     console.log( 'Hola Mundo'), 5000
// });

const getUsuarioById = ( id,callback ) => {
    
    const usuario = {
        id,
        nombre: 'Augusto'
    }
    setTimeout( () => {
        callback( usuario )
    }, 1500)
}

getUsuarioById( 10, ( usuario ) => {
    console.log( usuario )
} )




