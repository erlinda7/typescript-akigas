
 // # es la nueva forma de declarar variables o funciones como privadas 



class Rectangulo {
    private ancho: number
    #alto: number  //la almohadilla declara como privada es la nueva forma 
    constructor(ancho: number, alto: number) {
        console.log('contructor');
        this.ancho = ancho
        this.#alto = alto  // atributo privado de escma nextscript
    }

    area() {
        console.log('area');
        return this.ancho * this.#alto;
    }

    #perimetro() { //funcion privada
        return this.ancho *2 + this.#alto*2;
    }
}

let r1 = new Rectangulo(10, 15);
let r2 = new Rectangulo(4,3);

console.log(r1.area());
console.log(r2.area());

