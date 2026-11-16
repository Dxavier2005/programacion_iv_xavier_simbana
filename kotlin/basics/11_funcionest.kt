fun activarPortal(){
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("1")
    println("2")
    println("3")
    println("Karla Mosquera activó el Portal")
}

fun viajar(dimension:String, viajes:Int, consumo:Int){
    println("Viajando a la dimension $dimension")
    val total=viajes*consumo
    println("Consumo total: $total")
}

fun calcularPrecio(precio:Double):Double{
    var descuento : Double=0.0
    if(precio>=100){
        descuento=precio*0.15
    }
    return descuento
}

fun calcularEneriaTotal(energias:Array<Int>): Int{
    val total=0
    for(energia in energias){
        total+=energia
        if(energia>=100){
            println("Sobre Energia $energia")
        }
    }
    return total
}

fun main(){
    activarPortal()
    activarPortal()
    viajar("Tierra", 5, 4)
    viajar("Marte",4,7)
    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Karla Mosquera tiene un descuento de $descuentoCliente")
}