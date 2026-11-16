fun calcularTotal(costos: List<Int>){
    var total=0
    for (costos in costos){
        total+=costo
        if (costo>150){
            println("Herramienta costosa")
        }
    }
    return total
}

fun main(){
    val destinos = listOf("Tierra","Marte","Saturnno")
    var interacion: Int = 1
    for(destino in destinos){
        println("Destino $interacion: $destino")
    }
    val costos = listOf(100,150,200,80,120)
    val total = calcularTotal(costos)
    println("Costos total de herramientas de Karla Mosquera: $total")
}