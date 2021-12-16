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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe heroe con el id ${id}`);
    }
}