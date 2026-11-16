// Input de datos
let sacramento = prompt("Ingrese sacramento (Bautismo, Confirmación, Eucaristía, Penitencia, Matrimonio):");
let edad = Number(prompt("Ingrese edad del alumno:"));
let asistencia = Number(prompt("Ingrese porcentaje de asistencia del alumno (0-100):"));

if (sacramento === "Bautismo" || sacramento === "Confirmación" || sacramento === "Eucaristía" || sacramento === "Penitencia" || sacramento === "Matrimonio") {
    if (edad >= 0 && edad <= 100) {
        if (asistencia >= 0 && asistencia <= 100) {
            console.log(`Sacramento: ${sacramento}, Edad: ${edad}, Asistencia: ${asistencia}%`);
        } else {
            console.log("Porcentaje de asistencia inválido. Debe estar entre 0 y 100.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 0 y 100.");
    }
} else {
    console.log("Sacramento desconocido. Ingrese un sacramento válido.");
}