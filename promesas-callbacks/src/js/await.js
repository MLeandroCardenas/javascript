import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map( id=> buscarHeroe( id ) );

const obtenerHeroesArr = async()=> {

     return await Promise.all( heroesIds.map( buscarHeroe ) ); 

    // const heroesArr = [];
    // for( let id of heroesIds ) {
    //     heroesArr.push( buscarHeroe( id ) );
    // }
    // return await Promise.all( heroesArr );
};

const obtenerHeroeAwait = async( id )=> {
    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch (error) {
        console.error('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    };
}

const heroesCiclo = async()=> {
    console.time('heroresCiclo');
    // const heroes = await Promise.all(  heroesPromesas );
    // heroes.forEach( heroe=> console.log(heroe) );
    for await ( let heroe of heroesPromesas ) {
        console.log( heroe );
    }
    console.timeEnd('heroresCiclo');
}

const heroeIfAwait = async( id )=> {
    if( (await buscarHeroeAsync( id )).nombre === 'Iron Man' ) {
        console.log('Es el mejor de todos');
    } else  {
        console.log('NO');
    }
}



export {
    obtenerHeroesArr,
    obtenerHeroeAwait,
    heroesCiclo,
    heroeIfAwait
}

