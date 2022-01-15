import { Producto, calcularISVconDestructuracion } from './06-desestructuracion-argumentos-funcion';

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'telefono1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },

];

// cuando llamamos a una funcion que esta siendo importada esta hace que se ejecute todo el archivo donde se encuentra
//al importarla el vuelve y la crea en ejecucion, por lo tanto ejecuta todo el archivo desde donde se esta exportando
const [total, isv] = calcularISVconDestructuracion(carritoCompras);

console.log('Total', total);
console.log('ISV' , isv);