// condicionales
let nivel: number = 5;
if (nivel < 5) {
    console.log("El charmander puede evolucionar a Charmeleon");
}


// condicionales dobles o dos caminos
if (nivel >=16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charizard");
}

// condicionales multiples o varios caminos
if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else if (nivel >= 8) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}

// condicional anidados
if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    if (nivel >= 8) {
        console.log("El charmander puede evolucionar a Charmeleon");
    } else {
        console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
    }
}
nivel= 15;
let poder: number =25
// condicional if con operadores logicos
if (nivel >= 8 && nivel < 16 && poder >= 20) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}
nivel= 5;
poder= 56;
// condicional if con operadores logicos or
if (nivel >= 8 || poder >= 20) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}

/*

*/