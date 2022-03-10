/**boolean */
let logico: boolean = false;
let verdader:boolean = true;

/**number */
let entero:number = 44;
let decimal:number = 44.45;
let hexadecimal:number = 0x3ebacf;
let binario: number = 0b10101;
let octal:number = 0845622;
let extremadamentelargo= 34_354_364_635  //truco para usar como separador de miles para mejor lectura

/**string */
let cadenas: string = "dfdfdf\"fgfgfgfgfd" //

/* any */
let cualquiera:any;
cualquiera ="una cadena";
cualquiera=false;

/*null */
let nada:null=null;


/** undefined */
let indefenido:undefined = undefined; // para tipar funciones cuando no devuelve nada


/*void */
let nada2:void = undefined;
function saludar() {                   //si ponemos el tipo de retorno es void
    console.log('hola');               //mas es para tipado de funciones
}



// arrays
let dias:string[] =["lunes", "martes", "miercoles"]

//tuplas
let db2: [string, number, string, boolean] = ["Dani", 26, "España", true];
let db3: [nombre:string, edad:number, pais:string, premium:boolean] = ["Dani", 26, "España", true];


//objetos
let persona:{
    nombre:string,
    edad:number,
    pais:string,
    fecha_nac:Date,
    mascota:boolean
    laboral:{
        empresa:string,
        sector:string
    }
} = {
    nombre: 'pepe perez',
    edad:30,
    pais:'colombia',
    fecha_nac: new Date(1990, 5, 14),
    mascota:true,
    laboral:{
        empresa:"empresita",
        sector:"inforamtica"
    }
}

//cuando no sabemos que campos tendra el objeto que recibiremos, 
//pero no deja ver lo que tiene dentro objeto.  , o sea no autocompleta
let objeto: object = { 
    nombre: 'pepe perez',
    edad:30,
    pais:'colombia',
    fecha_nac: new Date(1990, 5, 14),
}
