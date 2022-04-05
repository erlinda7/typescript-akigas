
// este es un tipo, tambien se puede hacer lo mismo que con interfaces
type Comparator = {
    (a: string, b: string) : number
    algorith: string
}


// --------------------------------------------
// que sea llamable le meto un campo tipo function y tambien tiene atributos adicionales
interface Comparator2 {
    (first: string, second: string): number //funcion
    algorthm: string // atributos
    safe: boolean
}


function sort(c: Comparator2) { // aqui lo llamo
    let out = c("first", "second")
    c.safe
}