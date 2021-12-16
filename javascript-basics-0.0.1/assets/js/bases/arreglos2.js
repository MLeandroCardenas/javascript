let juegos = ['zelda', 'mario', 'metroit', 'cronu'];
console.log('largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

console.info('\t Elementos del arreglo \t');


juegos.forEach( (elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-zero'); // insertar un nuevo elemento al final del arreglo
console.log({nuevaLongitud, juegos});


nuevaLongitud =  juegos.unshift('Fire emblem'); // insertar un nuevo elemento al principio del arreglo
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos}); // Borrar el ultimo elemento del arreglo

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); // borra un cierto numero de elemenetos y retorna el arreglo de elementos borrados
console.log({juegosBorrados, juegos});


let metroidIndex = juegos.indexOf('metroit'); // Saber la posicion indice de un juego
console.log({metroidIndex});