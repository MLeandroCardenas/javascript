import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeId = 'capi';
const heroeId2 = 'spider';

// buscarHeroe( heroeId, (err, heroe1)=> {
//     if(err) { return console.error(err); }

//     buscarHeroe(heroe2, (err, heroe2)=> {
//         if(err) { return console.error(err); }
//     });
// });

// buscarHeroe( heroeId ).then( heroe => {
//     // console.log(`Enviando a ${heroe.nombre} a la misión`);
//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

Promise.all([ buscarHeroe(heroeId), buscarHeroe(heroeId2) ])
    .then( ([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(error => {
    alert(error);
}).finally(() => {
    console.log('Se terminó el promise.all');
});

console.log('fin del programa');






