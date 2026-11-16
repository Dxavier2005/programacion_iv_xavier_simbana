fun main() {
    val asistencias = arrayOf(30, 50, 80, 100, 60)
    println(asistencias[0])
    println(asistencias[2])
    println(asistencias[4])
    asistencias[4] = 90
    println(asistencias[4])
    for (asistencia in asistencias) {
        println("Asistencia")
        val asistenciaDoble = asistencia * 2
        println("Asistencia doble $asistenciaDoble")
        if (asistenciaDoble >= 150) {
            val asistenciaReducida = asistenciaDoble - 70
            println("Asistencia reducida: $asistenciaReducida")

        }
    }
}