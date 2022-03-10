// 

abstract class Vehiculo2 {

    protected fabricante: string // se puede usar solo dentro las clases hijas y no puedo llamar desde fuera de la clase

    constructor(fabricante: string) {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`el vehiculo ${this.fabricante} se ha movido magicamente`);
        
    }

    protected llevarAlTaller() {  // se puede usar solo dentro las clases hijas
        console.log("al taller que va");
        
    }
}

class VehiculoTerreste2 extends Vehiculo2 {
    private tipo:string
    constructor(fabricante: string, tipo: string) {
        super(fabricante);
        this.tipo = tipo;
    }
    moverse() {
        console.log('brum brum');
        super.moverse();
        
    }

    reparar() {
        console.log(`un momento que me leo el manual de instrucciones ${this.fabricante}`); //puedo usar dentro la clase hija
    }
}

class VehiculoAereo2 extends Vehiculo2 {
    moverse() {
        console.log('niuuuuuuuuuuuuuuuuu');
        
    }
    reparar() {
        this.llevarAlTaller(); // solo puedo acceder dentro las clases hijas
    }
}

class VehiculoMaritimo2 extends Vehiculo2 {
    moverse() {
        console.log('* el ruido maritimo');
        
    }
}

// cuando existen clases solo para formar jerarquias como herencia, no deberia poder instancia solo Vehiculo, sino debo instanciar un tipo de vehiculo
// como VehiculoAereo, ,....
// let vehiculoaa: Vehiculo2 = new Vehiculo2('rtrtr'); // como es abstract no se puede instanciar


// cuando es una clase abstracta no se puede instanciar , se tiene que instanciar alguna de sus espcialidades
let vehiculo2 = new VehiculoAereo2("Airbus");
vehiculo.moverse()


let vehiculo22: VehiculoAereo2 = new VehiculoAereo2("Airbus");
vehiculo2.reparar()


let vehiculo3: Vehiculo2 = new VehiculoAereo2("Airbus"); // la ventaja es que que puedo declarar como Vehiculo
vehiculo3.moverse() // pero ya tengo acceso a reparar


 // la ventaja de usar abstratas es yo asigno a una funcion que acepte un atributo Vehiculo no le importa si recibo vehiculoAereo o otro hijo, no da error
 // tengo acceso a las propiedades y metodos del padre y oculto los del hijo, y muestro la informacion minima
 // vehiculo.reparar no podemos ver