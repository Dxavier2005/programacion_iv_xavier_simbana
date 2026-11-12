fun main (){
    val portales = mutableListOf("Tierra", "Marte", "Saturno")

    var option: Int
    do {

        println("Laboratorio de Simbana Dario")
        println("1. Agregar portal")
        println("2. Mostrar portal")
        println("3. MOdificar portal")
        println("4. Eliminar portal")
        println("5. Agegar portal")
        option = readLine()!!.toInt()
        
        when(option){
            1 -> {
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal incluido")
            }
            2 -> {
                println("Portales ")
                for (portal in portales){
                    println("portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice amodificar")
                val indice = readLien()!!
                if (indice in portales.indice){
                    print("nuevo nombre")
                    val nuevoNombre = readLine()!!
                    portales[indice] = nuevoNombre
                    println("Portal actualizado")
                }
            }
            4 -> {
                println("Ingrese el nombre del portal a eliminar")
                val portal = readLine()!!.toString()
                if (portales.contains(portal)){
                    portales.remove(portal)
                    println("Portal eliminado")
                } else {
                    println("Portal no encontrado")
                } else{
                    println("Indice no valido
                }
            }
            
        }

    } while (option != 5)    

    }