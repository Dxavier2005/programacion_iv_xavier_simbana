fun main(){
    val portales = mutableListOf("Tierra","Marte"."Saturno")

    var option: Int
    do{
        println("Laboratorio de Apellido Nombre")
        println("1. Agregar Potal")
        println("2. Mostrar Portal")
        println("3. Modificar Potal")
        println("4. Agregar Potal")
        println("5. Salir")
        option = readLine()!!.toInt()
        while(option){
            1-> {
                val nombre =readLine()!!
                portales.add(nombre)
                println("Portal incluido")
            }
            2-> {
                println("Portales")
                for(portal in portales){
                    println("Portal: $portal")
                }
            }
            3-> {
                println("Actualizar")
                println("Indice a modificar")
                val indice = readLine()!!
                if(indice in portales.){
                    println("nuevo nombre")
                    val nuevoNombre=readLine()!!
                    println("portal actualizado")
                }else{
                    println("Indice no valido")
                }
            }
            4-> {
                
            }
        }
    }
}