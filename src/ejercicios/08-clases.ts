/*
    ===== Código de TypeScript =====
*/

// class Heroe{
//     private alterEgo: string;
//     public edad: number;
//     //los atributos STATIC se pueden acceder sin crear una instancia de esa clase, ejemplo Heroe.nombreReal
//     static nombreReal: number;

//     constructor(){

//     }
// }

//esta forma no es muy usada ya que requiere muchas lineas de código
class HeroeForma1{
    //al no definir el tipo de acceso, por defecto es Public
     alterEgo: string;
     edad: number;
    //los atributos STATIC se pueden acceder sin crear una instancia de esa clase, ejemplo Heroe.nombreReal
     nombreReal: string;

    constructor(alterEgo: string){
        this.alterEgo= alterEgo;
      //  console.log('Soy el constructor de Heroe')
    }
}

//Forma corta de crear una clase, creo la clase y en el constructor defino sus argumentos y su alcance(public, private, etc)
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
  
   //propiedades opcionales ejemplo: public edad?: number
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'New York -  USA');
    }

}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);