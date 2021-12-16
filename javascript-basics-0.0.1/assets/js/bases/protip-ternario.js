const elMayor = (a, b) => (a > b) ? a : b;

const TieneMembresia = ( miembro ) => (miembro) ? '2 dólares' : '10 dolares';

console.log(elMayor(10,15));
console.log(TieneMembresia(true));


const amigo = false;
const amigosArr = ['Peter', 'Tony', 'Doctor strange', amigo ? 'Thor': 'Loki'];

console.log(amigosArr);

const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';             
              
console.log({nota, grado});


