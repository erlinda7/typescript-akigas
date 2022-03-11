type Operacionsuma = {
    sumando1: number,
    sumando2: number,
    tipo: 'suma' // debe contener un campo en comun , en este caso tipo en operacionSuma y OperacionMultiplicar 
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: 'multiplicar'
}

type Operacion = Operacionsuma | OperacionMultiplicar; // aqui Operacion es suma o multiplicar

function operar(o: Operacion) { //aqui no se cual es suma o multiplicar
    if(o.tipo == 'suma') { // con el campo en comun que tiene podemos diferenciar si es suma o multiplicar
        return o.sumando1 + o.sumando2;
    } else if(o.tipo == 'multiplicar') {
        return o.operando1 * o.operando2
    }
}