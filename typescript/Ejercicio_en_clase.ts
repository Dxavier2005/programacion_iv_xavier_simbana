/*En el universo de Dragon Ball existen diferentes guerreros que comparten habilidades
 básicas, pero también poseen técnicas especiales. 
 Desarrolla un programa en TypeScript que permita representar a los siguientes personajes: 

 Crea una clase padre llamada Guerrero que contenga un método atacar(), el cual muestre 
 el mensaje: "El guerrero realiza un ataque básico".
 Crea una clase hija llamada Goku que herede de Guerrero e implemente un método propio llamado kamehameha
 (), que muestre: "Goku lanza un poderoso Kamehameha".   
 Crea otra clase hija llamada Vegeta que herede de Guerrero e implemente un método llamado finalFlash(),
  que muestre: "Vegeta utiliza su poderoso Final Flash".   
  Crea un objeto de cada personaje y ejecuta tanto el método heredado como su técnica especial. 


class Guerrero {
    atacar(): void {
        console.log("El guerrero realiza un ataque básico");
    }
}

class Goku extends Guerrero {
    kamehameha(): void {
        console.log("Goku lanza un poderoso Kamehameha");
    }
}

class Vegeta extends Guerrero {
    finalFlash(): void {
        console.log("Vegeta utiliza su poderoso Final Flash");
    }
}

const goku = new Goku();
goku.atacar();
goku.kamehameha();

const vegeta = new Vegeta();
vegeta.atacar();
vegeta.finalFlash(); */





