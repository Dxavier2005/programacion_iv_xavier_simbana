fun main() {
    println("Inputs de terminal readline")
    println("¿Cómo te llamas?")


    val nombre = readLine()

    println("Bienvenido al curso de sacramentos: $nombre")


    println("Cuota de inscripción de María")
    val cuotaMaria = readLine()!!.toInt()
    println("Cuota de inscripción de Juan")
    val cuotaJuan = readLine()!!.toInt()
    val total = cuotaMaria + cuotaJuan
    println("Total recaudado: $total")


    println("Calculadora de Asistencia")
    val clasesProgramadas = readLine()!!.toInt()
    println("Clases faltadas: ")
    val clasesFaltadas = readLine()!!.toInt()
    val clasesAsistidas = clasesProgramadas - clasesFaltadas
    println("Clases asistidas: $clasesAsistidas")


}