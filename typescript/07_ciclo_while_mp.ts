let alumnosInscritos = 1024;
let alumnosMaximos = 2048;
while (alumnosInscritos < alumnosMaximos) {
    console.log(`Alumnos inscritos: ${alumnosInscritos}`);
    alumnosInscritos += 256;
}

let nivelPreparacion = 1;
while (nivelPreparacion <= 10) {
    console.log(`Nivel de preparación sacramental: ${nivelPreparacion}`);
    nivelPreparacion++;
}

let evaluacionesRealizadas = 0;
let evaluacionesAprobadas = 0;
while (evaluacionesRealizadas < 10) {
    evaluacionesRealizadas++;
    let aprobado = Math.random() < 0.5;
    if (aprobado) {
        evaluacionesAprobadas++;
        console.log(`Evaluación ${evaluacionesRealizadas}: ¡Aprobada! Total de aprobados: ${evaluacionesAprobadas}`);
    } else {
        console.log(`Evaluación ${evaluacionesRealizadas}: No aprobada. Total de aprobados: ${evaluacionesAprobadas}`);
    }
}

let cursosSacramentales = 0;
do {
    cursosSacramentales++;
    console.log(`Curso sacramental número: ${cursosSacramentales}`);
} while (cursosSacramentales < 5);


interface CursoSacramental {
    nombre: string;
    tipo: string;
    duracion: number;
}
const cursosEscaneados: CursoSacramental[] = [
    { nombre: "Bautismo", tipo: "Iniciación cristiana", duracion: 1800 },
    { nombre: "Primera Comunión", tipo: "Formación sacramental", duracion: 1000 },
    { nombre: "Confirmación", tipo: "Formación sacramental", duracion: 1200 },
    { nombre: "Matrimonio", tipo: "Preparación matrimonial", duracion: 900 },
    { nombre: "Bautismo", tipo: "Iniciación cristiana", duracion: 800 }

];

let indiceCurso = 0;
while (indiceCurso < cursosEscaneados.length) {
    const curso = cursosEscaneados[indiceCurso];
    if (curso?.tipo === "Formación sacramental") {
        indiceCurso++;
        continue;
    }
    if (curso && curso.duracion < 1000) {
        break;
    }

console.log(`Nombre: ${curso?.nombre}, Tipo: ${curso?.tipo}, Duración: ${curso?.duracion}`);
indiceCurso++;

}