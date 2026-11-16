fun main() {
    val catequizandos = mutableListOf("María Fernanda López", "Juan Pablo Torres", "Ana Lucía Vera")

    var opcion: Int
    do {
        println("Control de catequizandos - Dario Simbaña")
        println("1. Agregar catequizando")
        println("2. Mostrar catequizandos")
        println("3. Modificar catequizando")
        println("4. Eliminar catequizando")
        println("5. Salir")
        opcion = readLine()!!.toInt()
        when (opcion) {
            1 -> {
                println("Nombre del catequizando:")
                val nombre = readLine()!!
                catequizandos.add(nombre)
                println("Catequizando incluido")
            }
            2 -> {
                println("Catequizandos")
                for (catequizando in catequizandos) {
                    println("Catequizando: $catequizando")
                }
            }
            3 -> {
                println("Actualizar")
                println("Índice a modificar")
                val indice = readLine()!!.toInt()
                if (indice in catequizandos.indices) {
                    println("Nuevo nombre")
                    val nuevoNombre = readLine()!!
                    catequizandos[indice] = nuevoNombre
                    println("Catequizando actualizado")
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                println("Índice a eliminar")
                val indice = readLine()!!.toInt()
                if (indice in catequizandos.indices) {
                    catequizandos.removeAt(indice)
                    println("Catequizando eliminado")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo del sistema")
            else -> println("Opción inválida")
        }
    } while (opcion != 5)
}