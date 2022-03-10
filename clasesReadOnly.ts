
 // cuando una atributo es readonly solo se le puede agregar el valor en el constructor, 
 // no se puede leer su valor nisiquiera dentro la clase

//es igual que FINAL en java

 class Rectangulo2 {
    readonly ancho: number
    readonly alto: number
    constructor(ancho: number, alto: number) {
        console.log('contructor');
        this.ancho = ancho
        this.alto = alto
    }

    area() {
        // this.ancho = 0; //no se puede modificar ni aqui
        console.log('area');
        return this.ancho * this.alto;
    }

    #perimetro() {
        return this.ancho *2 + this.alto*2;
    }
}

let r11 = new Rectangulo2(10, 15);
let r22 = new Rectangulo2(4,3);

console.log(r11.area());
console.log(r22.area());

