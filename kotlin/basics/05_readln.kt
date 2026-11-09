fun main() {
   println("Expedición interdimensional")
   println("¿Nombre del viajero?")
   val nombre = readLine()
   println("Cantidad de portales:")
   val portales = readLine()!!.toInt()
   println("Costo por portal: ")
   val costo = readLine()!!.toDouble()
   println("Creditos Disponibles:")
   val creditos = readLine()!!.toDouble()
   val costoTotal = portales * costo
   val saldo = creditos - costoTotal
   println("Reporte")
   println("Viajero: $nombre")
   println("Costo total: $costoTotal")
   println("Saldo: $saldo")
}





