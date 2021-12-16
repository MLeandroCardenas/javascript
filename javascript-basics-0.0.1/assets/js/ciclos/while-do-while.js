const listCars = ['Ford', 'Mazda', 'Toyota', 'Mercedes', 'Chevrolet'];

let i = 0;

// while( i < listCars.length ){
//     console.log(listCars[i]);
//     i++;
// }

console.warn('Ciclo while');

while(listCars[i]){
    if(i === 1){
        i++;
        continue;
    }
    console.log(listCars[i]);
    i++;
}

console.warn('Ciclo do while');

let j = 0;

do {
    if( j===1 ){
        j++;
        continue;
    }
    console.log(listCars[j]);
    j++;
} while(listCars[j]);