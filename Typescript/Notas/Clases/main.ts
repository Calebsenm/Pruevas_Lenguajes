
class Pelicula{
    nombre : string;
    protagonistas : string[];
    actores : string[];

    constructor( nombre:string , protagonistas:string[] , actores:string[] ){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }

    proyectarPelicula(){
        console.log("Proyectando pelicula: " + this.nombre);
    }
}

let pelicula = new Pelicula("El señor de los anillos", ["Frodo", "Sam"], ["Gandalf", "Aragorn"]);

pelicula.proyectarPelicula();
