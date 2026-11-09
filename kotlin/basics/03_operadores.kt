const val COMBUSTIBLE_MINIMO=50
fun main() {
   println("Operadores")
   println("Operadores Aritmeticos")


   val numero1 = 10
   val numero2 = 5


   val suma = numero1 + numero2


   println("Suma + : $numero1 + $numero2 = $suma")
   println("Resta - : $numero1 - $numero2 = ${numero1 - numero2}")
   println("Multiplicacion * : $numero1 * $numero2 = ${numero1 * numero2}")
   println("Division / : $numero1 / $numero2 = ${numero1 / numero2}")
   println("Residuo % : $numero1 % $numero2 = ${numero1 % numero2}")


   println("Prioridades de los operadores aritmeticos")
   println("1 ()")
   println("2 *,/,%")
   println("3 +,-")
   val cristales = 10+3*5+5
   println("Cristales $cristales")
   val energia = 3/5*5
   println("Energia $energia")
   val combustible = 100+20/4*3-10%3
   println("Combustible $combustible")


   println("Operadores de Comparacion")
   println("Igual a == ${10==10}")
   println("Igual a == ${10==11}")
   println("Diferente de != ${5!=10}")
   println("Diferente de != ${10!=10}")
   println("Mayor que > ${5>10}")
   println("Mayor que > ${15>10}")
   println("Menor que < ${5<10}")
   println("Menor que < ${15<10}")
   println("Mayor igual que > ${5>=10}")
   println("Mayor igual que > ${15>=10}")
   println("Menor igual que < ${5<=10}")
   println("Menor igual que < ${15<=10}")


   println ("Operadores logicos")
println (" && and Y")
println (" || and or")
println ("! NOT")




val combustible = 80
val portalActivo = true
val negado = !portalActivo




val puedoViajar = combustible > 50 && portalActivo
println("Puedo viajar: $puedoViajar")
println ("Negado ? $negado")




val tiendaTarjeta =  false
val autorizadoPorRick = true
val puedeEntrar = tiendaTarjeta || autorizadoPorRick
println("Puede entrar: $puedeEntrar")






println("Operadores de Asignación")
println("=, +=, -=, *=, /=, %=")
println("Control de Nave - Rick Sanchez y Anthony Gualotuña")
val pilotoNave = "Anthony Gualotuña"
var combustibleNave = 100
var portalesUniverso = 5
val motorActivoNave = true


println("Piloto: $pilotoNave")
combustibleNave+=40
portalesUniverso--
println("Combustible: $combustibleNave")
println("Portales restantes: $portalesUniverso")
val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
val tienePortales = portalesUniverso>=0
val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
println("¿Tiene combustible? $tieneCombustible")
println("¿tiene Portales? $tienePortales")
println("¿Puede Viajar? $puedeViajarNave")




}



