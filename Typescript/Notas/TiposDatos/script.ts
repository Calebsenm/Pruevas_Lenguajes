
let estudiasteJS:boolean = true;

if (estudiasteJS) {
    console.log("Puedes Ver el curso");
}
else {
    console.log("Primer debes ver el curso JS");
}


// Otro ejemplo -------------------------------------------------------
let a : number = 11;
let b : number = 11;

// Void se agrega ya afirmar que no se devolverá nada.

function jugar(equipo1: number, equipo2: number): void {

    if (equipo1 > equipo2){
        console.log("Gana A");
    } 

    if (equipo1 == equipo2){
        console.log("Empatan");
    }

    if (equipo1 < equipo2){
        console.log("Gana B");
    }
}

jugar(a, b);

