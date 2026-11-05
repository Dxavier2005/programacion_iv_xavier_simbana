class Catequista {
    golpeador(): void {
        console.log("Imparte una enseñanza básica de catequesis");
    }
}

class CatequistaBautismo extends Catequista {
    golpear(): void {
        console.log("El catequista prepara a los participantes para el sacramento del Bautismo");
    }

    enseñanzaEspecial(): void {
        console.log("El catequista explica la importancia del Bautismo");
    }
}

class CatequistaConfirmacion extends Catequista {
    golpear(): void {
        console.log("El catequista orienta a los jóvenes en su preparación para la Confirmación");
    }

    enseñanzaRapida(): void {
        console.log("El catequista realiza un repaso breve de los temas de Confirmación");
    }
}

const catequistaBautismo = new CatequistaBautismo();
catequistaBautismo.golpear();
catequistaBautismo.enseñanzaEspecial();

const catequistaConfirmacion = new CatequistaConfirmacion();
catequistaConfirmacion.golpear();
catequistaConfirmacion.enseñanzaRapida();

export {};