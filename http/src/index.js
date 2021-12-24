
// import { init } from "./js/chistes-pages";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";
import { init } from './js/archivos-pages'
import * as CRUD from "./js/crud-provider";

// init();
// obtenerUsuarios().then( console.log );
// init();

CRUD.getUsuario( 1 ).then( console.log );

CRUD.crearUsuario({
    name: 'Michael',
    job: 'Desarrollador'
}).then( console.log );

CRUD.actualizarUsuario(1 , {
    name: 'Leandro',
    job: 'Desarrollador Senior'
}).then( console.log );

CRUD.borrarUsuario(1).then(console.log);

init();