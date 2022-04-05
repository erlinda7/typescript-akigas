
interface UserData {
    readonly username: string, // puedes evitar que se cambie el valor
    created_at: Date | undefined,
    superuser?: boolean,
    readonly personal: { // solo no es modificable el objeto personal, pero puedo modificar personal.name='juana' desde afuera
        name: string,
        email:string
    }

    // solo se declara la funcion 
    logout(): void
    rename: (username:string) => void 
}

function login(): UserData {
    return {
        username: 'admin',
        created_at: new Date(),
        // superuser: true,
        personal: {
            name: 'bonoacio',
            email: 'el@example.com'
        },
        logout(){
            console.log('adios');
            
        },
        rename(username){ // no es necesario poner el tipo de dato
            console.log('Todo: rename account');
            
        }
    } /// un tipo interface obliga poner solo los atributos que tiene declarados y metodos
}


let data = login();
data.personal.name='juana'

data.created_at?.toISOString();
//como acepta date y undefinied debemos aseguranos de que sea date
data.created_at!.toISOString(); // cuando estamos seguros de que va existir al 100 % , es como data.created_at.toISOString()