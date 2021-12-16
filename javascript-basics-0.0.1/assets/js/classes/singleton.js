class Singleton {
    static #instancia;
    nombre = '';

    constructor(nombre = '') {
        if( !!Singleton.#instancia ) {
            return Singleton.#instancia;
        }
        Singleton.#instancia = this;
        this.nombre = nombre;
    }
}

const inst1 = new Singleton('Jose');
const inst2 = new Singleton('Jose Perez');    
console.log(`Nombre en la instancia 1 es: ${inst1.nombre}` );
console.log(`Nombre en la instancia 2 es: ${inst2.nombre}` );
