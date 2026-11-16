data class Inscripcion(
    val asistencia: Int,
    val pagoAlDia: Boolean
)

data class Catequista(
    val nombre: String,
    val gruposAsignados: Int
)

data class Curso(
    val asistencia: Int,
    val aulaDisponible: Boolean,
    val autorizacion: Boolean
)

fun main() {
    val inscripcion = Inscripcion(80, true)
    if (inscripcion.asistencia >= 75 && inscripcion.pagoAlDia) {
        println("El catequizando puede recibir el sacramento")
    }

    val asistenciaSemanal = arrayOf(20, 45, 85, 30, 60)
    if (asistenciaSemanal[2] > 70) {
        print("¡Excelente! Semana con alta asistencia")
    } else {
        print("Asistencia moderada")
    }

    val notas = arrayOf(80, 65, 90)
    val suma = notas[0] + notas[1] + notas[2]
    val promedio = suma / 3.0
    println("Promedio $promedio")
    if (promedio >= 70) {
        println("Catequizando aprobado")
    } else {
        println("Catequizando debe reforzar")
    }

    val catequista = Catequista("Rosa Andrade", 3)
    if (catequista.gruposAsignados >= 5) {
        println("Carga de trabajo alta")
    } else if (catequista.gruposAsignados >= 3) {
        println("Carga de trabajo normal")
    } else if (catequista.gruposAsignados >= 1) {
        println("Carga de trabajo baja")
    } else {
        println("Sin grupos asignados")
    }

    val curso = Curso(120, true, false)
    if (curso.asistencia >= 100) {
        if (curso.aulaDisponible) {
            if (curso.autorizacion) {
                println("Curso autorizado")
            } else {
                println("El curso no tiene autorización del párroco")
            }
        }
    } else {
        println("Asistencia insuficiente")
    }
}