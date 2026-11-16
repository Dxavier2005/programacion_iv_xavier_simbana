fun iniciarClase() {
    println("Iniciando la clase de catequesis")
    println("Conteo regresivo")
    println("1")
    println("2")
    println("3")
    println("Dario Simbaña inició la clase")
}

fun registrarAsistencia(catequizando: String, clases: Int, horas: Int) {
    println("Registrando asistencia de $catequizando")
    val total = clases * horas
    println("Total de horas de catequesis: $total")
}

fun calcularDescuento(cuota: Double): Double {
    var descuento: Double = 0.0
    if (cuota >= 100) {
        descuento = cuota * 0.15
    }
    return descuento
}

fun calcularTotalRecaudado(cuotas: Array<Int>): Int {
    var total = 0
    for (cuota in cuotas) {
        total += cuota
        if (cuota >= 100) {
            println("Cuota alta: $cuota")
        }
    }
    return total
}

fun main() {
    iniciarClase()
    iniciarClase()
    registrarAsistencia("María Fernanda López", 5, 4)
    registrarAsistencia("Juan Pablo Torres", 4, 7)
    val descuentoCatequizando = calcularDescuento(123.5)
    println("El catequizando Dario Simbaña tiene un descuento de $descuentoCatequizando")
}