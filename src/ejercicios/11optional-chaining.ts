/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero = {
    nombre: 'Arley'
}

const pasajero2: Pasajero = {
    nombre: 'Juan Carlos',
    hijos: ['Juancarlitos', 'Nicol']
}

function imprimeHijos(pasajero: Pasajero): void {
    // el ? es preguntar que si esta bien preguntar por los hijos le ponga el .length, sino ponga 0 (no es un ternario)
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);