fun main (){
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")
    for (viaje in 1..6){
        val costoOriginal = viaje *25
        val descuento = 0.0
        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("descuento aplicado $descuento")
        println("Costo Final $costoFinal")

    }
    println("Presupuesto Total de las Expedicion %lf".format(presupuestoTotal))
}