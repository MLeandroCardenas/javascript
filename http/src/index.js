
// import { init } from "./js/chistes-pages";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";

import * as CRUD from "./js/crud-provider";

// init();
// obtenerUsuarios().then( console.log );
// init();

CRUD.getUsuario( 1 ).then( console.log );