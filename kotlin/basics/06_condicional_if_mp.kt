fun main() {
    println("Condicional If")
    println("Condicional Simple o un camino")
    var asistencia = 80
    if (asistencia >= 75) {
        println("El catequizando cumple la asistencia mínima")
    }
    println("Condicional if-else o dos caminos")
    asistencia = 30
    if (asistencia >= 75) {
        println("El catequizando cumple la asistencia mínima")
    } else {
        println("Asistencia insuficiente")
    }

    println("Condicional múltiple")
    asistencia = 85
    if (asistencia >= 100) {
        println("Asistencia perfecta")
    } else if (asistencia >= 75) {
        println("Asistencia suficiente")
    } else {
        println("Asistencia insuficiente")
    }

    println("Condicional enlazada")
    asistencia = 85
    val pagoAlDia = true
    if (asistencia >= 100) {
        println("Asistencia perfecta")
        if (pagoAlDia) {
            println("Puede recibir el sacramento")
        }
    } else if (asistencia >= 75) {
        println("Asistencia suficiente")
        if (pagoAlDia) {
            println("Puede recibir el sacramento")
        }
    } else {
        println("Asistencia insuficiente")
    }
}