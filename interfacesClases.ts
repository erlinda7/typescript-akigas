interface Shape {
    readonly sides: number
    area():number
    perimeter(): number// funcion declarada que devuelve number
}

function process(s: Shape) {
    // do something
    // aunque seas REctangulo para mi eres shape
    console.log({area: s.area()}); // solo puedo acceder a las cosas tienen en comun
    
}
///////////////////////////////////
class Rectangle implements Shape{ // ahora rectagulo es un Rectangulo tambien es Shape
    sides: number = 4; 
    constructor(readonly width: number, readonly height: number) {

    }
    

    area(): number {
        return this.width * this.height
    }
    perimeter(): number {
        return 2*this.width + 2* this.height
    }
}


let r = new Rectangle(5,5);
process(r); //rectangulo es Shape por eso no hay error