class Catequista {
    enseñar(): void {
        console.log("Enseñanza básica de catequesis");
    }
}

class CatequistaBautismo extends Catequista {
    override enseñar(): void {
        console.log("El catequista enseña sobre el sacramento del Bautismo");
    }
}

class CatequistaConfirmacion extends Catequista {
    override enseñar(): void {
        console.log("El catequista enseña sobre el sacramento de la Confirmación");
    }
}

const catequistas: Catequista[] = [
    new CatequistaBautismo(),
    new CatequistaConfirmacion(),
    new CatequistaConfirmacion()
];

catequistas.forEach(catequista => catequista.enseñar());

export {};