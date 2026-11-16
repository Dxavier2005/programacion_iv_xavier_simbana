// Funciones simples

function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditosCatequesis = sumarCreditos(10, 20);
console.log(`Total de créditos: ${totalCreditosCatequesis}`);

// Sin devolver un valor
function mostrarCentroCatequesis(nombre: string): void {
    console.log(`Centro de catequesis: ${nombre}.`);
    const sacramentos: string[] = ["Bautismo", "Primera Comunión", "Confirmación"];
    for (const sacramento of sacramentos) {
        console.log(`Preparación para el sacramento: ${sacramento}`);
    }
}

mostrarCentroCatequesis("Parroquia San José");

// Funciones con parámetros opcionales
function prepararCatequista(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`El catequista ${nombre} está preparado en el nivel ${nivel}.`);
    } else {
        console.log(`El catequista ${nombre} está preparado.`);
        nivel = 1;
        console.log(`Nivel de preparación por defecto: ${nivel}.`);
    }
}

prepararCatequista("Carlos", 5);
prepararCatequista("María");

function prepararCatequista2(nombre: string, nivel: number = 1): void {
    console.log(`El catequista ${nombre} está preparado en el nivel ${nivel}.`);
}

prepararCatequista2("José", 5);
prepararCatequista2("Ana");

// Funciones flecha
function potenciarAprendizaje(conocimiento: number): number {
    return conocimiento * 2;
}

const potenciarAprendizajeFlecha = (conocimiento: number): number => conocimiento * 2;

const conocimientoOriginal: number = 10;
const conocimientoPotenciado: number = potenciarAprendizaje(conocimientoOriginal);
console.log(`Conocimiento original: ${conocimientoOriginal}, Conocimiento potenciado: ${conocimientoPotenciado}`);

const conocimientoPotenciadoFlecha: number = potenciarAprendizajeFlecha(conocimientoOriginal);
console.log(`Conocimiento original: ${conocimientoOriginal}, Conocimiento potenciado (flecha): ${conocimientoPotenciadoFlecha}`);