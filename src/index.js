class Hero {
    constructor(name, idade, tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case 'guerreiro':
                ataque = "usando espada";
                break;
            case 'monge':
                ataque = "usando artes marciais";
                break;
            default:
                ataque = "usando shuriken";
                break;
          
        }
              
        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
    
}


const hero1 = new Hero("hunter", 65, "guerreiro");
hero1.atacar(); 

const hero2 = new Hero("lucy", 150, "mago");
hero2.atacar(); 

const hero3 = new Hero('Bruce', 40, 'monge');
hero3.atacar(); 

const hero4 = new Hero('sasuke', 27, 'ninja');
hero4.atacar(); 