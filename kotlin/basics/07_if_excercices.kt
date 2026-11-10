data class PistolaPortal(
    val energia: Int,
    val activa: Boolean

)

data class Robot(
    val nombre: String,
    val bateria: Int,
)

data class NaveESpacial(
    val energia: Int,
    val motorActivo: Boolean,
    val autorizacion: Boolean
)

fun main(){
    val pistola= PistolaPortal(100, true)
}