interface Window {
    accountID: number
}

function use(w: Window) {
    w.accountID
}

// si creamos una inteface con el mismo nombre de uno que ya existe , se aumenta a ese interface los atributos