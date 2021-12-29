/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 45,
    cancion: 'perdoname',
    detalles: {
        autor: 'Gilberto Santa R.',
        anio: 2012
    }
}

// al destructurar OBJETOS se hace por nombre de sus atributos, en los ARREGLOS  es por posicion
const {volumen, segundo:tiempo, cancion, detalles} = reproductor;
const {autor} = detalles;
// podemos usar : alias en el destructuring por si hay otra variable con ese nombre o por conveniencia


console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', tiempo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', autor);

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, , p3]= dbz; 
// para omitir una posicion solo poner la coma.

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', dbz[2]);
console.log('Personaje 3: ', p3);