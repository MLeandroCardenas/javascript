let a = 10;
let b = a;

a = 30;

console.log({a, b});

let juan = {nombre: 'juan'};
let ana  = {...juan};
ana.nombre = 'ana';

console.log( juan,ana );

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({peter, tony});

// arreglos
const  frutas = ['manzana', 'pera', 'piña'];

console.time('spred');
const otras = [...frutas];
console.timeEnd('spred');

// console.time('slice');
// const otras2 = frutas.slice();
// console.timeEnd('slice');

otras.push('Mango');

console.table({ frutas, otras });