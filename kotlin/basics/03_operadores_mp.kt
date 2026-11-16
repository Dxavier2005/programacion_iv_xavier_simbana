fun main() {
    println("Operadores en Kotlin")
    println("Operadores aritméticos")

    var cuota: Double = 10.50
    var descuento: Double = 5.0
    var suma: Double = cuota + descuento

    println("Suma + : $cuota + $descuento = ${cuota + descuento}")
    println("Suma + : $suma")
    println("Resta: $cuota - $descuento = ${cuota - descuento}")
    println("Multiplicación: $cuota * $descuento = ${cuota * descuento}")
    println("División: $cuota / $descuento = ${cuota / descuento}")
    println("Residuo: $cuota % $descuento = ${cuota % descuento}")


    println("Prioridades de los operadores aritméticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val totalClases = 10+3*5+5
    println("Total de clases: $totalClases")
    val asistencia = 15/5*5
    println("Asistencia: $asistencia")
    val totalPagar = 100+20/4*3-10%3
    println("Total a pagar: $totalPagar")

    println("Operadores de comparación")
    println("Igual a == : ${10 == 10}")
    println("Igual a == : ${10 == 5}")
    println("Distinto a != : ${10 != 5}")
    println("Distinto a != : ${10 != 10}")
    println("Mayor a > : ${10 > 5}")
    println("Mayor a > : ${15 > 10}")
    println("Menor a < : ${10 < 5}")
    println("Menor a < : ${15 < 10}")
    println("Mayor o igual a >= : ${10 >= 5}")
    println("Mayor o igual a >= : ${15 >= 10}")
    println("Menor o igual a <= : ${10 <= 5}")
    println("Menor o igual a <= : ${15 <= 10}")
}