const listHeros = ['Batman', 'Superman', 'Mujer Maravilla', 'Shazam', 'Flash', 'Acuaman', 'Cyborg', 'Detective Marciano'];

console.warn('For tradicional');

for( let i = 0; i < listHeros.length; i++ ) {
    console.log( listHeros[i] );
}

console.warn('For in');

for( let i in listHeros ) { 
    console.log(listHeros[i]);
}

console.warn('For of');

for( let listHero of listHeros ) {
    console.log(listHero);
}


