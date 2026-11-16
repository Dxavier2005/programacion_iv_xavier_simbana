data class Portal(
    val nombre:String,
    val energia:Int
)
fun main(){
    var presupuestoTotal =0.0
    println("Presupuesto de Expedicion")
    for (viaje in 1..6){
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal>=100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la expedicion %1f creditos".format(presupuestoTotal))

    val portales = arrayOf(
        Portal("Tierra", 30),
        Portal("Marte", 65),
        Portal("Jupiter", 95),
        Portal("Saturno", 130),
        Portal("Urano", 45),
        Portal("Mosquera", 89),
        Portal("Karla", 75)
    )
    val costoViaje=50;
    for (portal in portales){
        println("Portal: ${portal.nombre}")
        println("Energia: ${portal.energia}")
        when{
            portal.energia<50->{
                println("Estado: INACTIVO")
                println("No se puede realizar el viaje")
            }
            portal.energia<80->{
                println("Estado: OPERATIVO")
            }
            portal.energia<120->{
                println("Estado: ESTABLE")
                println("No se puede realizar el viaje")
            }
            else->{
                println("Estado: ALTA CAPACIDAD")
            }

        }
        if(portal.energia>=costoViaje){
            val restante = portal.energia-costoViaje
            println("Viaje autorizado")
            println("Energia restante: $restante")
        }
    }

}