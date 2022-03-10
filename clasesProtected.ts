// protected premite acceder desde clases descendientes o hijas 

class Vehiculo {

    protected fabricante: string

    constructor(fabricante: string) {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`el vehiculo ${this.fabricante} se ha movido magicamente`);
        
    }

    protected llevarAlTaller() {
        console.log("al taller que va");
        
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
        super.moverse();
        
    }

    reparar() {
        console.log(`un momento que me leo el manual de instrucciones ${this.fabricante}`);
    }
}

class VehiculoAereo extends Vehiculo {
    moverse() {
        console.log('niuuuuuuuuuuuuuuuuu');
        
    }
    reparar() {
        this.llevarAlTaller();
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