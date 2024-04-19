
class Sorteo <T> {
    private dato: T;

    constructor( dato: T) {}
    
    setNumero(dato: T) {
        this.dato = dato;
    }

    getNumero(){
        return this.dato
    }
}

let sorteo1 = new Sorteo<number>(1);

