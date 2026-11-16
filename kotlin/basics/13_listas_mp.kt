fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Cuota alta")
        }
    }
    return total
}

fun main() {
    val cursos = listOf("Bautismo", "Primera Comunión", "Confirmación")
    var iteracion: Int = 1
    for (curso in cursos) {
        println("Curso $iteracion: $curso")
        iteracion++
    }
    val cuotas = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(cuotas)
    println("Total de cuotas del curso de Dario Simbaña: $total")
}