
 // get por dentro es una funcion , hacia afuera se comporta como un atributo



 class Rectangulo3 {
    ancho: number
    alto: number
    private _nombre: string
    constructor(ancho: number, alto: number) {
        console.log('contructor');
        this.ancho = ancho
        this.alto = alto
    }

    // los get y set funciona como atributos, se tratar com a un atributo mas
     get area() {
        console.log('area');
        return this.ancho * this.alto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre=value;
    }

    perimetro() {
        return this.ancho *2 + this.alto*2;
    }
}

let r3 = new Rectangulo3(10, 15);

r3.nombre = "A", // se ejecuta set nombre()

console.log(`El rectangulo ${r3.nombre}`); // se ejecuta get nombre()
console.log(`area ${r3.area}`); // llamo como si fuera atributo



