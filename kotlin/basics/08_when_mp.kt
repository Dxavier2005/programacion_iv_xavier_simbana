fun main() {
    val aula = 2
    when (aula) {
        1 -> println("Curso: Bautismo")
        2 -> println("Curso: Primera Comunión")
        3 -> println("Curso: Confirmación")
        else -> println("Aula no disponible")
    }

    print("Ingrese el día (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4, 5 -> println("Día de preparación de catequistas")
        6, 7 -> println("Día de clase de catequesis")
        else -> println("Día inválido")
    }

    print("Ingrese el porcentaje de asistencia: ")
    val asistencia = readLine()!!.toInt()
    when (asistencia) {
        in 0..39 -> println("Asistencia baja")
        in 40..79 -> println("Asistencia media")
        in 80..100 -> println("Asistencia alta")
        else -> println("Asistencia inválida")
    }

    /* Trabajo con condicionales y comentarios con when */
    val dineroEntregado = 80
    val cursoAbierto = true
    val cuotaCurso = 40
    when {
        dineroEntregado >= cuotaCurso && cursoAbierto -> {
            val restante = dineroEntregado - cuotaCurso
            println("Inscripción autorizada")
            println("Cambio a devolver: $restante")
        }

        dineroEntregado < cuotaCurso && cursoAbierto -> {
            println("Dinero insuficiente")
        }

        !cursoAbierto -> {
            println("El curso está cerrado")
        }
    }
}