/*
    ===== Código de TypeScript =====
*/

//los Decoradores  @ sirven para cambiar las clases en el momento que son definidas (añadir, o expandir funcionalidades)
//En angular todo esta basando en clase(componentes, servicios, directivas, etc), solo varia el decorador
//un Decorador no es más que una función
//los decoradores se aplican mucho antes de instanciar la clase

function ClassDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
        reportingURL = "new property";
        hello="Override";
    };
}

@ClassDecorator //este decorador expande la clase MiSuperClase añadiendole las funcionalidades de la ClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';


    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
console.log(miClase.imprimir());