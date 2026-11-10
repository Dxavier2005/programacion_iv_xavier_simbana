fun main (){
    val portal  = 2
    when(portal){
        1 -> println("Destino: Tierra")
        2 -> println("Destino: Marte")
        3 -> println("Destino: Saturno")
        else -> println("Portal no disponible")
    }

    print("Icluya el dia (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5 -> println("día de experimentos")
        6,7 -> println("día de descanso")
        else -> println("día inválido")
    }

    print("Ingrese la enrgia del portal")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39 -> println("Energia baja")
        in 80..100-> println("Energia Alta")
        else -> println("día inválido")
    }

    // TRabajo con when

    val energiaNuclear = 80
    val motorActivo = true
    val costoViaje=40

    /*
    trabajo con condicionales y comentarios
    con when */
    when{
        energiaNuclear >= costoViaje && motorActivo -> {
            val restanete = energiaNuclear - costoViaje
            println("Viaje Autorizado")
            println("Energia restante: $restanete")
        }
        energiaNuclear < costoViaje && motorActivo -> println("Energia insuficiente")
        !motorActivo -> println("Motor inactivo")
    }
}


