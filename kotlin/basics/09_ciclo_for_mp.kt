data class Inscripcion(
    val asistencia: Int,
    val pagoAlDia: Boolean
)

fun main() {
    for (i in 1..5) {
        println("Clase número $i")
    }

    for (i in 10 downTo (1)) {
        println("Clase número $i")
    }

    for (i in 1..20 step 2) {
        println("Clase número $i")
    }

    for (i in 1..10) {
        val resultado = 3 * 1
        println("3 * $i = $resultado")
        println("3 * $i = ${i * 3}")
    }
}