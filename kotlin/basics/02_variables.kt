const val MAX_PORTALES = 10

fun main(){
    var energia = 100
    println(energia)
    println("Autor: Karla Mosquera")
    energia = 80 
    println("energia")
    println(energia)
    println("Tipos de variables en Kotlin")
    println("Tipo Integer o entero")
    var edad: Int = 14
    var portales : Int = 10
    println("edad : $edad")
    println("portales : $portales") 

    println("Tipo lONG")
    var particulas: Long = 9000000000000L
    println("particulas : $particulas")

    println("Tipo float")
    var combustible : Float = 45.5f
    println("combustible : $combustible")

    println("Tipo double")
    var distancia : Double = 45.5
    println("distancia : $distancia")

    println("Tipo char un caracter")
    var codigo : Char = 'K'
    println("codigo : $codigo")

    println("Tipo String")
    var nombre : String = "Morty Smith"
    var dimension : String = "Dimension C-137"
    println("nombre : $nombre, dimension : $dimension")

    println("Tipo Boolean")
    var portalActivo : Boolean = true
    println("portalActivo : $portalActivo")

    println("Val CONST VAR")
    val cientifico = "Rick Sanchez"
    var portalesDisponibles = 10
    println("cientifico : $cientifico")
    println("portalesDisponibles : $portalesDisponibles")
    println("MAX_PORTALES : $MAX_PORTALES")



}