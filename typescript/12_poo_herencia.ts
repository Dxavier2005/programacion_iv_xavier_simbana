
class 
Boxeador {
    golpeador(): void {
        console.log(" Golpe basico");

    }
}


class Rocky extends Boxeador {
    golpear() {
        throw new Error("Method not implemented.");
    }
    golpeEspecial(): void {
        console.log(" Rocky lanza un poderoso gancho");

    }
}

class Apollo extends Boxeador {
    golpear() {
        throw new Error("Method not implemented.");
    }
    golpeRapido(): void {
        console.log(" Apollo lanza un jab veloz");

    }
}


const rocky = new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();

export {};
