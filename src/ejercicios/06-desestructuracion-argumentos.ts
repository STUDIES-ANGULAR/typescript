/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung s20',
    precio: 700
}

const telefono2: Producto = {
    desc: 'Xiaomi',
    precio: 450
}

// funcion sin destructurar argumentos
function calcularISV(productos: Producto[]):number{

    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    })
    return total * 0.15;
}

function calcularISVconDestructuracion(productos: Producto[]):[number, number]{

    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    })
    
    return [total, total * 0.15];
}

const articulos = [telefono, telefono2];

const isv = calcularISV(articulos);
// aplicamos destructuring al retorno de la función
const [total, isv2] = calcularISVconDestructuracion(articulos);

console.log('El Impuesto Sobre Venta es de: ', isv);
console.log('El Total de la Venta es de: ', total);
console.log('El Impuesto Sobre Venta es de: ', isv2);