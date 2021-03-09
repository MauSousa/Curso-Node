// Diferencias entre var const y let

const nombre = 'Wolverine'

if( true ) {
    const nombre = 'Magneto'
    console.log( nombre )
}

console.log( nombre )


