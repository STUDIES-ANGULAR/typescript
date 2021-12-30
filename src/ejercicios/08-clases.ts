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
     alterEgo: string;
     edad: number;
    //los atributos STATIC se pueden acceder sin crear una instancia de esa clase, ejemplo Heroe.nombreReal
     nombreReal: string;

    constructor(alterEgo: string){
        this.alterEgo= alterEgo;
      //  console.log('Soy el constructor de Heroe')
    }
}

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
  

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'new york, USA');
    }

}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);