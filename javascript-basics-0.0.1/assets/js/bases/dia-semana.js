const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const saberDia = ( dia ) => diasSemana[dia];

dia = 1;

console.log('Día', saberDia(dia) || 'no definido');