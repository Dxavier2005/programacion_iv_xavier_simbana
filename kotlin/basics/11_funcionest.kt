fun activarPortal() {
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Dario Simbana activó el Portal")
}

fun viajar(dimension: String, viajes: Int, consumo: Int) {
    println("Viajando a $dimension")
    val total = viajes * consumo
    println("Consumo: $total")
}

fun calcularPrecio(precio: Double): Double {
    var descuento: Double = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularEnergiaTotal(energias: Array<Int>): Int {
    var total = 0
    for (energia in energias) {
        total += energia
        if (energia >= 100) {
            println("Sobre Energia $energia")
        }
    }
    return total
}

fun main() {
    activarPortal()
    activarPortal()
    viajar("Tierra", 5, 4)
    viajar("Marte", 4, 7)
    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Dario tiene este descuento: $descuentoCliente")

    val energias = arrayOf(30,50,80,100,60)
    println("Energía 1: ${energias[0]}")
    println("Energía 2: ${energias[1]}")
    println("Energía 3: ${energias[2]}")
    println("Energía 4: ${energias[3]}")
    println("Energía 5: ${energias[4]}")

    val totalEnergia = calcularEnergiaTotal(arrayOf(30,50,80,100,60))
    println("Energía total: $totalEnergia")
}