
// En esta ocacion los datos son inferidos...

let persona = {
    nombre: "A",
    edad: 10,
    esMayor: false
}


// Otro ejemplo usando type 
/*
Para un valor opcional de coloca  ?
- acuatico?: boolean

Para dos valores distintos.
- acuatico: boolean | null 
*/

type Animal = {
    nombre: string,
    edad: number,
    acuatico: boolean
}

let Gato: Animal = {
    nombre: "A",
    edad: 10,
    acuatico: false
}