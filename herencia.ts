class Vehiculo {

    fabricante: string

    constructor(fabricante: string) {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`el vehiculo ${this.fabricante} se ha movido magicamente`);
        
    }
}

class VehiculoTerreste extends Vehiculo {
    private tipo:string
    constructor(fabricante: string, tipo: string) {
        super(fabricante);
        this.tipo = tipo;
    }
    moverse() {
        console.log('brum brum');
        super.moverse(); /// puedo llamar al metodo del padre y tener los dos metodos dentro de vehiculoTerrestre
        
    }
}

class VehiculoAereo extends Vehiculo {
    constructor(fabricante: string) {
        super(fabricante); /// si extiendes es obligatorio llamar al super
    }
    moverse() {
        console.log('niuuuuuuuuuuuuuuuuu');
        
    }
}

class VehiculoMaritimo extends Vehiculo {
    moverse() {
        console.log('* el ruido maritimo');
        
    }
}

//let vehiculo = new VehiculoTerreste("AIRbUS"); // si no le decimos nada automaticamente se hereda el constructor 
let vehiculo = new VehiculoTerreste("AIRbUS", "yamaha"); // la herencia pide llamar al constructor padre y mandar esos datos mas
vehiculo.moverse()

let aerei = new VehiculoAereo('sdfdfdf');