
interface Programador{
    nombre: string,
    tecnologias: string[]
    sabeIngles?: boolean  | null
}

const programador: Programador = {
    nombre: 'Juan',
    tecnologias: ['JavaScript', 'TypeScript', 'Python'],
    sabeIngles: true
}


function eviarCv(programador: Programador){
    console.log(`El programador ${programador.nombre} tiene ${programador.tecnologias.length} tecnologias`)
}

eviarCv(programador)

