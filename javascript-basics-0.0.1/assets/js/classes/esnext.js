class Rectangulo {
    // propiedad privada
    #area = 0;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    // Metodo privado
    #calcularArea() {
        return this.#area;
    }
}

const r1 = new Rectangulo(10, 15);
console.log(r1);