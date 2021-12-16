const heroes = {
    capi: {
        nombre: 'cápitan américa',
        poder: 'Aguantar inyecciones'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'trepar muros'
    }
}

const buscarHeroe = ( id ) => {
    const heroe = heroes[id];
    return new Promise( ( resolve, reject )=> {
        if( heroe ) {
            setTimeout(()=> 1000)
            resolve( heroe );
        } else {
            reject( `No existe heroe con el id ${id}` ); 
        }
    });
}

const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe) {
        return heroe;
    } else {
        throw `No existe heroe con el id ${id}`;
    }
}

const PromesaLenta = new Promise((resolve, reject)=> {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});

const PromesaMedia = new Promise((resolve, reject)=> {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const PromesaRapida = new Promise((resolve, reject)=> {
    setTimeout(() => resolve('Promesa rápida'), 1000);
});

export {
    buscarHeroe,
    buscarHeroeAsync,
    PromesaLenta, 
    PromesaMedia,
    PromesaRapida
}