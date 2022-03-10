// sumar

function sumar(m: number, n: number): number {
    let suma = m + n;
    console.log(`${m} + ${n} = ${suma}`);
    return suma;
}

// sumar(3,4);

let restar = function(m: number, n: number): number {
    let resta = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
}

// (5,4);

let multiplicar: (m:number, n: number) => number;
multiplicar = function(m,n) {
    return m*n;
}

// console.log(multiplicar(4,5));


let multiplicar2: (a:number, b: number, callback: (r: number) => void) => void
multiplicar2 = (a, b, callback) => callback(a*b);

multiplicar2(4,5,function(result){
    console.log(`Resultado: ${result}`);
    
})