export abstract class Catequista {
    abstract enseñar(): void;

    descansar(): void {
        console.log("El catequista recupera energía");
    }
}

class CatequistaBautismo extends Catequista {
    enseñar(): void {
        console.log("El catequista imparte una clase sobre el Bautismo");
    }
}

class CatequistaConfirmacion extends Catequista {
    enseñar(): void {
        console.log("El catequista imparte una clase sobre la Confirmación");
    }
}

const catequistas: Catequista[] = [
    new CatequistaBautismo(),
    new CatequistaConfirmacion(),
];

console.log(catequistas);
catequistas.forEach(catequista => catequista.enseñar());