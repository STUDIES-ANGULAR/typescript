/*
    ===== Código de TypeScript =====
*/



interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion:DireccionHeroe;
    mostrarDireccion: () => string
}

interface DireccionHeroe {
    calle: string;
    pais: string;
    ciudad: string
}

const superHeroe:SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'New York'
    },
    mostrarDireccion(): string{
        return this.nombre + ', '+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);