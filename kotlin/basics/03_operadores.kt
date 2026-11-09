fun main() {
    println("Operadores en Kotlin")
    println("Operadores aritmeticos")

    var numero1: Double = 10.50
    var numero2: Double = 5.0
    var suma: Double = numero1 + numero2

    println("Suma + : $numero1 + $numero2 = ${numero1 + numero2}")
    println("Suma + : $suma")
    println("Resta: $numero1 - $numero2 = ${numero1 - numero2}")
    println("Multiplicación: $numero1 * $numero2 = ${numero1 * numero2}")
    println("División: $numero1 / $numero2 = ${numero1 / numero2}")
    println("Residuo: $numero1 % $numero2 = ${numero1 % numero2}")


    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val cristales = 10+3*5+5
    println("Cristales: $cristales")
    val energia = 15/5*5
    println("Energia: $energia")
    val combustible = 100+20/4*3-10%3
    println("Combustible: $combustible")

    println("Operadores de comparacion")
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