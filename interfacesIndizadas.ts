// arrays, objects

let vector: number[] = [];

vector[0]


let object = {
    displayName: 'foo',
    rpDispplayNama: 'foo',
    id: 1
}

let k1 = object['displayName'] /// se puede acceder por el atributo en corchetes al objeto

///////////////////////////////////////////
interface Indizable {
    [index: number]: boolean
}

let l: Indizable = {}

let k = l[4]