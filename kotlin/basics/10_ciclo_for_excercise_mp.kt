data class Curso(
    val nombre: String,
    val inscritos: Int
)
fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto del curso de sacramentos")
    for (mes in 1..6) {
        val costoOriginal = mes * 25
        var descuento = 0.0
        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Mes $mes")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total del curso %1f dólares".format(presupuestoTotal))

    val cursos = arrayOf(
        Curso("Grupo A", 30),
        Curso("Grupo B", 65),
        Curso("Grupo C", 95),
        Curso("Grupo D", 130),
        Curso("Grupo E", 45),
        Curso("Grupo F", 89),
        Curso("Grupo G", 75)
    )
    val minimoInscritos = 50;
    for (curso in cursos) {
        println("Curso: ${curso.nombre}")
        println("Inscritos: ${curso.inscritos}")
        when {
            curso.inscritos < 50 -> {
                println("Estado: NO ABIERTO")
                println("No se puede iniciar el curso")
            }
            curso.inscritos < 80 -> {
                println("Estado: ABIERTO")
            }
            curso.inscritos < 120 -> {
                println("Estado: CASI LLENO")
                println("No se puede iniciar el curso")
            }
            else -> {
                println("Estado: LLENO")
            }

        }
        if (curso.inscritos >= minimoInscritos) {
            val restante = curso.inscritos - minimoInscritos
            println("Curso autorizado")
            println("Inscritos sobre el mínimo: $restante")
        }
    }

}