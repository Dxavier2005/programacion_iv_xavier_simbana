// constantes
const PI: number=3.1435;
const IVA: number=15;
const SERVICIO_API:string="servicioSacramentos";
const ACTIVE: boolean = true;
console.log("PI: ", PI);
console.log("I.V.A.: ", IVA);
console.log("NOMBRE DEL SERVICIO: ", SERVICIO_API);
console.log("CURSO ACTIVO: ", ACTIVE);

// Variables
// let 

let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string="Pedro Perez";
let caducado: boolean=false;
console.log(alumno);
console.log(caducado);

let equipo: string[] = ["BAUTISMO", "CONFIRMACION", "EUCARISTIA"];
console.log(equipo);

let sacramentoInscrito: string | null = null;
let sacramentoPendiente: string | undefined;

let experienciaAcumulada: bigint = 98723982737392n;
// tipo symbol
let sacramento1: symbol = Symbol("Bautismo");
console.log(sacramento1.description);
let sacramento2: symbol = Symbol("Bautismo");
console.log(sacramento2.description);
console.log(sacramento1 === sacramento2);


let cursoSacramentos: {
    nombre: string;
    nivel: number;
    cupos: number;
    estaFinalizado: boolean;
}= {
    nombre: "Bautismo",
    nivel: 5,
    cupos: 35,
    estaFinalizado: false
};
console.log(cursoSacramentos);