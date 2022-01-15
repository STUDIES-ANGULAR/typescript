

/* Con ese <T> quiere decir que retornara un valor generico, 
    la T es de tipo, pero puede ser cualquier letra, 
    y que el T (tipo de dato) depende del tipo de argumento que recibe si no se especifica*/
function queTipoSoy<T>(argumento1: T) {
    return argumento1;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy( [1,2,3,4,5,6]);

let soyTipoExplicito = queTipoSoy<String>('soy un dato especifico <>');

console.log(soyString, soyNumber);