const fer = {
    nombre: 'Michael',
    edad: 24,
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 18,
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 45,
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

fer.imprimir();
pedro.imprimir();
melissa.imprimir();

// Como se hacia en versiones anteriores al EMSC 6

// esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(this.nombre, this.edad);
    }
}

const maria = new Persona('Maria', 25);
console.log({maria});
maria.imprimir();

const carlos = new Persona('Carlos', 23);
console.log({carlos});
carlos.imprimir();

