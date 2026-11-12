data class Portal(
   val nombre: String,
   val costoViaje: Number,
)


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






val portales = arrayOf(
   Portal("Tierra", 30),
   Portal("Marte", 65),
   Portal("Saturno", 95),
   Portal("Jupiter", 130),
   Portal("Neptuno", 45),
   Portal("DArio", 89),
   Portal("SImbana", 75),




val costoViaje=50;
for (portal in portales){
   println("Portal: ${portal,nombre}")
   println("Energia: ${portal,energia}")
   when{
       portal.energia<5->{
           println("Estado: INACTIVO")
           println("No se puede relizar el viaje")
       }
       portal.energia<80->{
           println("Estado: OPERATIVO")
       }
       portal.energia<120->{
           println("Estado: ESTABLE")
       }
       else ->{
           println("Estado: ALTA CAPACIDAD")
       }
   }
   if(portal.energia>=costoViaje){
       val restante=portal.energia-costoViaje
       println("Viaje Autorizado")
       println("Energia restante $restante")
   }


}


)



