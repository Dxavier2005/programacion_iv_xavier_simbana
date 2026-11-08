interface  ParticipanteTorneo{
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void;


}

class Goku implements ParticipanteTorneo{
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnica(): void {
        console.log("Goku utiliza el Kamehameha");

    }
    transformarse(): void {
        console.log(`Transformacion`);
    }
}



class Vegeta implements ParticipanteTorneo{
    nombre = "Vegeta";
    nivelPoder = 8500;
    transformarse(): void {
        console.log(`Transformacion`);
    }
    presentarTecnica(): void {
        console.log("Vegeta utiliza el Final flash");
    }
}

const goku = new Goku();
const vegeta = new Vegeta();

goku.transformarse();
vegeta.transformarse();
goku.presentarTecnica();
vegeta.presentarTecnica();