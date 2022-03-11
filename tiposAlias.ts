type Numero = number // rebautizar los nombres de un tipo
let n: Numero = 5;


// creo un tipo de dato LoginCredentials de tipo objeto con las siguientes propiedades
type LoginCredentials = {
    userName: string,
    password: string,
    remember?: boolean // un propiedad de tipo opcional
}



function login(data: LoginCredentials) {

}



login({
    userName: 'admin',
    password: 'admin',
   // otro: false // no deja mandar otra propiedad que no este definida
})