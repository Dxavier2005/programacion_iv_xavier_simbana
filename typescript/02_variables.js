// constantes
var PI = 3.1435;
var IVA = 15;
var SERVICIO_API = "apiService";
var ACTIVE = true;
console.log("PI: ", PI);
console.log("I.V.A.: ", IVA);
console.log("NOMBRE DEL SERVICIO: ", SERVICIO_API);
console.log("PRODUCTO ACTIVO: ", ACTIVE);
// Variables
// let 
var contador = 0;
console.log(contador);
contador = 5;
console.log(contador);
contador++;
console.log(contador);
contador += 5;
console.log(contador);
contador = contador + 3;
console.log(contador);
var alumno = "Pedro Perez";
var caducado = false;
console.log(alumno);
console.log(caducado);
var equipo = ["PIKACHU", "CHARMANDER", "BULBASAUR"];
console.log(equipo);
var pokemonCapturado = null;
var pokemonInicial;
var experienciaAcumulada = 98723982737392n;
// tipo symbol
var pokemon1 = Symbol("Pikachu");
console.log(pokemon1.description);
var pokemon2 = Symbol("Pikachu");
console.log(pokemon2.description);
console.log(pokemon1 === pokemon2);
var pikachu = {
    nombre: "Pikachu",
    nivel: 5,
    vida: 35,
    esLegendario: false
};
console.log(pikachu);
