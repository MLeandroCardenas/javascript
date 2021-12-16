// function crearPersona(nombre, apellido){
//     return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Michael', 'Cardenas');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Michael', 'Hola', 24);

const imprimeArgumentos2 = (edad, ...args)=> {
    //console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Michael', 'Hola', 24);

console.log({casado, vivo, nombre, saludo});

const {apellido:nuevo } = crearPersona('Michael', 'Cardenas');

console.log({nuevo});


//desestructuracion de argumentos

const tony = {
    nombre: 'Tony Start',
    codeName: 'Iron Man',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulk buster']
};

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 0, trajes} )=>{
    console.log({nombre, codeName, vivo, edad, trajes});
}

imprimePropiedades(tony);