fun main() {
    println("Inputs en terminal REPL")
    println("¿Cómo te llamas?")
    val nombre = readLine()
    println("Welcome a otro universo: $nombre")


    println("Cristales de Rick:")
    val cristalesRick = readLine()!!.toInt()
    println("Cristales de Morty:")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRick + cristalesMorty
    println("Total de cristales: $total") 

    println("CAlculadora de Energia")
    println ("Energia Inicial")
    val energiaInicial = readLine()!!.toInt()
    println ("Energia COnsumida:")
    val energiaConsumida = readLine()!!.toInt()
    val energiaREstante = energiaInicial - energiaConsumida
    println("Energia Restante: $energiaREstante")
}   