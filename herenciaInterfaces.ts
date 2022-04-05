
// las interfaces se pueden ser reemplazadas por types
type vehicle = { // igual que una interface
    readonly fabricante: string
    arrancar(): void
    respostar(): void
    detenerMotor(): void
}


type vehicleTerreste = Vehicle & { // igual que implements
    conducir(): void
}











////////////////////////////////////////////
interface Vehicle {
    readonly fabricante: string
    arrancar(): void
    respostar(): void
    detenerMotor(): void
}

interface VehicleTerreste extends Vehicle {
    conducir(): void
}

interface VehicleMaritimo  extends Vehicle{
    sonarSirena(): void
    encenderChimenea(): void
    detenerChimenea(): void
}

class OpelCorsa implements VehicleTerreste{
    fabricante: string = 'opel'
    conducir(): void {
        console.log('dfdfdfdf');
    }
    arrancar(): void {
        console.log('brum brum');
        
    }
    respostar(): void {
        console.log('echando 20 euros de gasolina');
        
    }
    detenerMotor(): void {
        console.log('turur..............');
        
    }

    abrirMAletero(): void {

    }
    
}

function procesar(v: VehicleTerreste) {
    v.conducir() // tenemos acceso a todo de vehicle terrestre
}

function procesar2(v: Vehicle) {
    v.arrancar()  // tenemos acceso a todo de vehicle
}

procesar( new OpelCorsa()) // le da igual lo que seas dentro de procesar seras VehicleTerreste