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

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Vengadores';
    }
}

const iromMan = new Heroe('IronMan', '12dndej12', 'hombre de acero');
// const spiderman = new Heroe();
console.log(iromMan);