export {};

type ID = string | number;
type apellido = string;
type coordenadas = [number, number];

type Punto = {
    x: number;
    y: number;
}

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "curso.001";

type Forma = Punto & {
    z: number;
}

interface Catequista {
    readonly id: number;
    nombre: string;
    email: string;
    avatar?: string;
}

interface Empleado extends Catequista {
    cargo: string;
    salario: number;
}

const u: Catequista = {
    id: 1,
    nombre: "Ana",
    email: "ana@gmail.com"
};

const u2: Catequista = {
    id: 2,
    nombre: "Luis",
    email: "luis@gmail.com",
    avatar: "avatar.png"
}

console.log(u);
console.log(u2);

const docente: Empleado = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@parroquia.edu.ec",
    cargo: "Catequista de Confirmación",
    salario: 0
}