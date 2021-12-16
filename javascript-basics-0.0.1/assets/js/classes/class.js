class Persona {

    static _conteo = 0;

    static get getConteo() {
        return Persona._conteo;
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = ''

    constructor(nombre = null, codigo = null, frase = null) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona();
console.log(spiderman);

const iromMan = new Persona('IronMan', '12dndej12', 'hombre de acero');
console.log(iromMan);

iromMan.miFrase();

spiderman.setComidaFavorita = 'Pastel de yuca';

console.log(spiderman);

console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log(`Conteo: ${Persona._conteo}`);
console.log(Persona.getConteo);


