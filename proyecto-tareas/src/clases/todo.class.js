export class Todo {

    static fromJson( {id, tarea, completado, creado} ) {
        const tempTodoo = new Todo( tarea );
        tempTodoo.id = id;
        tempTodoo.completado = completado;
        tempTodoo.creado = creado;

        return tempTodoo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date(); 
    }

    imprimmirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }

}