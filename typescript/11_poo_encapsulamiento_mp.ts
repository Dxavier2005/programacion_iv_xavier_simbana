// Encapsulamiento

export class Catequista {
    private energia: number = 100;

    constructor(_dato1?: unknown, _dato2?: unknown, _dato3?: unknown) {}

    recibirDesgaste(horas: number): void {
        if (horas > 0) {
            this.energia = Math.max(0, this.energia - horas);
        }
    }

    consultarEnergia(): number {
        return this.energia;
    }
}

const catequista = new Catequista();
catequista.recibirDesgaste(50);
console.log(catequista.consultarEnergia());
catequista.recibirDesgaste(25);
console.log(catequista.consultarEnergia());