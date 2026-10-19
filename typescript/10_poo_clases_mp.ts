class Catequista {
    consultarEnergia(): any {
        throw new Error("Method not implemented.");
    }
    recibirDesgaste(arg0: number) {
        throw new Error("Method not implemented.");
    }
    public nombre: string;
    public conocimiento: number;
    public experiencia: number | undefined;
    public energia: number;

    constructor(
        nombre: string,
        conocimiento: number,
        energia: number,
    ) {
        this.nombre = nombre;
        this.conocimiento = conocimiento;
        this.energia = energia;
    }

    enseñar(): void {
        console.log(`${this.nombre} imparte una clase de catequesis`);
    }

    capacitarse(): void {
        this.conocimiento += 10;
        console.log(`${this.nombre} ha completado una capacitación`);
    }
}

const catequistaJuan = new Catequista("Juan", 80, 100);
const catequistaMaria = new Catequista("María", 90, 100);

catequistaJuan.enseñar();
console.log(catequistaMaria.conocimiento);
catequistaMaria.capacitarse();
catequistaMaria.capacitarse();
console.log(catequistaMaria.conocimiento);
catequistaMaria.enseñar();
catequistaMaria.enseñar();
console.log(catequistaMaria.energia);