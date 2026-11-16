type Sacramento =
| "Bautismo"
| "Confirmación"
| "Eucaristía"
| "Penitencia"
| "Matrimonio"

let sacramento: Sacramento = "Eucaristía";

switch (sacramento as Sacramento) {
    case "Bautismo":
        console.log("El Bautismo es el sacramento de iniciación cristiana");
        break;
    case "Confirmación":
        console.log("La Confirmación fortalece la fe cristiana");
        break;
    case "Eucaristía":
        console.log("La Eucaristía es el sacramento del Cuerpo y la Sangre de Cristo");
        break;
    case "Penitencia":
        console.log("La Penitencia es el sacramento de la reconciliación");
        break;
    case "Matrimonio":
        console.log("El Matrimonio es el sacramento de la unión entre los esposos");
        break;
    default:
        console.log("Sacramento desconocido");
}

type CursosSacramentales = "Bautismo" | "Confirmación" | "Eucaristía";

let cursoSacramental: CursosSacramentales = "Bautismo";
let asistencia: number = 100;
let tieneRequisitos: boolean = true;

switch (cursoSacramental as CursosSacramentales) {
    case 'Bautismo':
        if (asistencia > 80 && tieneRequisitos) {
            console.log("El alumno cumple los requisitos para el curso de Bautismo");
        } else {
            console.log("El alumno no cumple los requisitos para el curso de Bautismo");
        }
        break;
    case 'Confirmación':
        if (asistencia > 70 && tieneRequisitos) {
            console.log("El alumno cumple los requisitos para el curso de Confirmación");
        } else {
            console.log("El alumno no cumple los requisitos para el curso de Confirmación");
        }
        break;
    case 'Eucaristía':
        if (asistencia > 90 && tieneRequisitos) {
            console.log("El alumno cumple los requisitos para el curso de Eucaristía");
        } else {
            console.log("El alumno no cumple los requisitos para el curso de Eucaristía");
        }
        break;
    default:
        console.log("Curso sacramental desconocido");
}