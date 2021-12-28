/*
    ===== Código de TypeScript =====
*/

// ARREGLOS
// en este caso el arreglo es de tipo any let habilidades = [];

let  arreglo1: (boolean | string | number) [] = ['Bash',  'Counter', 'Healing', 100];

arreglo1.push(true);
console.log(arreglo1);

let habilidades : string [] = [ 'Bash', 'Countre', 'Healing'];
habilidades.push('html5');


// OBJETOS

// las interfaces nos sirven para definir el tipo de datosd el objeto y lo que se espera contenga el objeto
interface Personaje{
    nombre: string;
    edad: number;
    sexo: string;
    habilidades: string[];
    puebloNatal ?: string   
    //   el ? es para valores opcionales
}

const personaje: Personaje ={
    nombre: 'Arley',
    edad : 25,
    sexo: 'masculino',
    habilidades: ['Bash', 'Countre', 'Healing'] 
}
personaje.puebloNatal= 'Buenaventura';

console.table(personaje);