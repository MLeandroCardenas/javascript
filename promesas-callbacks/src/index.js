// import './styles.css';
// import { PromesaLenta, PromesaMedia, PromesaRapida } from "./js/promesas";
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait} from "./js/await";

// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

// PromesaLenta.then( console.log );
// PromesaMedia.then( console.log );
// PromesaRapida.then( console.log );

// Promise.race([PromesaLenta, PromesaMedia, PromesaRapida])
//     .then( console.log );


// buscarHeroe( 'capi' ).then( heroe => console.log( heroe ) )
//     .catch( console.warn );
// buscarHeroeAsync( 'iron2' ).then( heroe => console.log( heroe ))
//     .catch( console.warn );

// obtenerHeroesArr().then( console.table );

// console.time('await');
// obtenerHeroeAwait('capi2')
//     .then( heroe => {
//         console.log( heroe );
//         console.timeEnd('await');
//     }).catch( console.error );

// heroesCiclo();
heroeIfAwait('iron');
