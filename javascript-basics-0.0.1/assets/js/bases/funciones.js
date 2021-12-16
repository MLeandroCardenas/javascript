function saludar(nombre) {
    console.log(arguments);
    console.log('Hola', nombre);
    return 1;
}

const saludar2 = function(nombre) {
    console.log('Hola', nombre);
 };

const saludarFlecha = (nombre)=>{
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar('Michael', true, 40, 'Colombia');
console.log({retornoSaludar});
saludar2('Cesar');
saludarFlecha('Camila');


const sumar = (a = 0, b = 0) => a + b;

console.log(sumar());


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log('Numero aleatorio', getAleatorio2());
