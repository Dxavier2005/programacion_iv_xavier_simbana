const val MAX_CUPOS = 10

fun main() {
    var asistencia = 100
    println(asistencia)
    println("Autor: Dario Simbaña")
    asistencia = 80
    println("asistencia")
    println(asistencia)
    println("Tipos de variables en Kotlin")
    println("Tipo Integer o entero")
    var edad: Int = 9
    var cupos: Int = 10
    println("edad : $edad")
    println("cupos : $cupos")

    println("Tipo Long")
    var codigoRegistro: Long = 9000000000000L
    println("codigoRegistro : $codigoRegistro")

    println("Tipo Float")
    var cuota: Float = 45.5f
    println("cuota : $cuota")

    println("Tipo Double")
    var totalRecaudado: Double = 45.5
    println("totalRecaudado : $totalRecaudado")

    println("Tipo Char un caracter")
    var inicialSacramento: Char = 'C'
    println("inicialSacramento : $inicialSacramento")

    println("Tipo String")
    var nombre: String = "María Fernanda López"
    var sacramento: String = "Primera Comunión"
    println("nombre : $nombre, sacramento : $sacramento")

    println("Tipo Boolean")
    var cursoAbierto: Boolean = true
    println("cursoAbierto : $cursoAbierto")

    println("Val CONST VAR")
    val catequista = "Rosa Andrade"
    var cuposDisponibles = 10
    println("catequista : $catequista")
    println("cuposDisponibles : $cuposDisponibles")
    println("MAX_CUPOS : $MAX_CUPOS")
}