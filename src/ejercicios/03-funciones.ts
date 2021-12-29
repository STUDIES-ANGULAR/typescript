/*
    ===== Código de TypeScript =====
*/
function sumar (a:number, b:number){
    return (a + b).toString();
}
const resultado = sumar(8, 7);

console.log(resultado);



//funcion con tipo de retorno declarado
function multiplicar (a:number, b:number): number{
    return a * b;
}
const resultado2 = multiplicar(8, 7);

console.log(resultado2);

//funcion flecha
const sumarFlecha = (a:number, b:number) =>{
    return a + b;
}


//primero los parametros obligatorios, luego los opcionales y por ultimo los de valor por defecto

function multiplicar2 (numero:number, otroNumero?: number, base:number=2): number {
    return numero * base;
}
const resultado3 = multiplicar2(5, 0, 10);

console.log(resultado3);



// funciones con objetos como argumentos

interface PersonajeFCO{
    nombre: string;
    puntosVida: number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeFCO, curarX:number): void {
    
    personaje.puntosVida += curarX;
    // console.log(personaje);

}

const nuevoPersonaje: PersonajeFCO = {
    nombre: 'Arley',
    puntosVida: 70,
    mostrarHP(){
        console.log( 'puntos de vida: ', this.puntosVida);
    }
}

curar( nuevoPersonaje, 15);
nuevoPersonaje.mostrarHP();

