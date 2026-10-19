// condicionales
let nivel: number = 5;
if (nivel < 5) {
    console.log("El alumno aún no cumple los requisitos para avanzar en el curso de sacramentos");
}


// condicionales dobles o dos caminos
if (nivel >=16) {
    console.log("El alumno puede finalizar el curso de sacramentos");
} else {
    console.log("El alumno no puede finalizar el curso de sacramentos");
}

// condicionales multiples o varios caminos
if (nivel >= 16) {
    console.log("El alumno puede finalizar el curso de sacramentos");
} else if (nivel >= 8) {
    console.log("El alumno puede continuar con la preparación sacramental");
} else {
    console.log("El alumno debe continuar su preparación para los sacramentos");
}

// condicional anidados
if (nivel >= 16) {
    console.log("El alumno puede finalizar el curso de sacramentos");
} else {
    if (nivel >= 8) {
        console.log("El alumno puede continuar con la preparación sacramental");
    } else {
        console.log("El alumno debe continuar su preparación para los sacramentos");
    }
}
nivel= 15;
let poder: number =25
// condicional if con operadores logicos
if (nivel >= 8 && nivel < 16 && poder >= 20) {
    console.log("El alumno puede continuar con la preparación sacramental");
} else if (nivel >= 16) {
    console.log("El alumno puede finalizar el curso de sacramentos");
} else {
    console.log("El alumno debe continuar su preparación para los sacramentos");
}
nivel= 5;
poder= 56;
// condicional if con operadores logicos or
if (nivel >= 8 || poder >= 20) {
    console.log("El alumno puede continuar con la preparación sacramental");
} else if (nivel >= 16) {
    console.log("El alumno puede finalizar el curso de sacramentos");
} else {
    console.log("El alumno debe continuar su preparación para los sacramentos");
}

/*

*/