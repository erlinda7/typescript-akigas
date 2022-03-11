type Coordenada= [ x: number, y:number]
type Vector= [ x: number, y:number]





type Posicionable = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector,
    aceleracion: Vector
}

// es combinar objetos que ya tenemos, es juntar las propiedades , metodos para fabricar un tipo mas grande
type MovibleYPosicionable = Posicionable & Movible; // nos va obligar que tenga todos los campos de los 2 Movible y Posicionable


let obj: MovibleYPosicionable = {
    // los 3 debe tener
    posicion: [5,5],
    velocidad: [4,4],
    aceleracion: [1,1],
}