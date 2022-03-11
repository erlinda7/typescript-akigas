let verdadera:true = true;

let cinco:5 = 5;

let hola:'hola' = 'hola';

let permiso = true;

const permiso1 = true;


type LoginOperation = {
    op: 'login', // tipamos op como login
    username: string,
    password: string
}

let l: LoginOperation = {
    username: 'admin',
    password: 'admin',
    op: 'login'  // entonces debemos mandar si o si login , y no aceptara otro valor
}