let personaje = {
    nombre: 'Tony Start',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 12.004,
        lng: -11.984
    },
    trajes: ['Mark I', 'Mark V', 'Hulk buster'],
    direccion: {
        zip: '1080, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Los vengadores'
};

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);

console.log('Edad ', personaje.edad);
console.log('Coordenadas ', personaje.coords);
console.log('Latitud ', personaje.coords.lat);

console.log('Número de trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo ', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);


// Mas detalles

delete personaje.edad; // borrar una propiedad
console.log(personaje);

personaje.casado = true; // añadir una nueva propiedad

const entriesPares = Object.entries( personaje ); // Volver un array 
console.log(entriesPares)

Object.freeze(personaje);

personaje.dinero = 1000000000000000000000;

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});