fun main() {
    println("Inscripción al curso de sacramentos")
    println("¿Nombre del catequizando?")
    val nombre = readLine()
    println("Cantidad de meses a pagar:")
    val meses = readLine()!!.toInt()
    println("Cuota mensual:")
    val cuota = readLine()!!.toDouble()
    println("Dinero entregado:")
    val dineroEntregado = readLine()!!.toDouble()
    val totalPagar = meses * cuota
    val saldo = dineroEntregado - totalPagar
    println("Reporte")
    println("Catequizando: $nombre")
    println("Total a pagar: $totalPagar")
    println("Saldo: $saldo")
}