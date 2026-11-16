type ID = String | number;
type apellido = string;
type coordenadas = [number, number];
type Punto ={
    x: number;
    y: number;
}

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "usr.001";

type Forma = Punto & {
    z: number;
}


interface usuario {
    readonly id: number;
    nombre: string;
    email: string;
    avatar?: string;
}

interface Empleado extends usuario {
    cargo: string;
    salario: number;
}

const u: usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@gmail.com"
};

const u2: usuario = {
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
    email: "pedro@.edu.ec",
    cargo: "docente tiempo completo",
    salario: 0
}





