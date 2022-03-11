type A = {
    uno: boolean,
    dos: boolean
}

type B = {
    tres: boolean
}

// acepta un objeto de tipo A o B
let valorr: A | B = {uno: false, dos: false}
let valor: A | B = {tres: false}


function convertir(valor:string | number){ // puede aceptar un string o number

    // si recibimos de 2 tipos es importante que nos aseguremos de que sea un string o number
    if ( typeof(valor) === "string") {
        valor.trim() // asi tenemos acceso a todo lo que ofrece un string
        valor.toString()
    } else if (typeof(valor) === "number") {
        valor.toFixed(2);
    }
}

convertir('adasd');
convertir(23);






