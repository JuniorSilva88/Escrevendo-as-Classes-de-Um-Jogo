class Hero {
    // Constructor to initialize the hero's properties
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    // Attack method
    atack() {
        let attack;

        // Determine the type of attack based on the hero's type
        switch (this.type) {
            case "Mago":
                attack = "magia";
                break;
            case "Guerreiro":
                attack = "espada";
                break;
            case "Monge":
                attack = "artes marciais";
                break;
            case "Ninja":
                attack = "shuriken";
                break;
            default:
                attack = "used an unknown attack";
        }

        // Construct and log the attack message
        const message = `The ${this.type} ${this.name} attacked using ${attack}`;
        console.log(message);
    }
}

// Example of use
const mageHero = new Hero("Gandalf", 300, "Mago");
const warriorHero = new Hero("Aragorn", 150, "Guerreiro");
const monkHero = new Hero("Bruce Lee", 130, "Monge");
const ninjaHero = new Hero("Hanzo", 125, "Ninja");

// Perform attacks
mageHero.atack();       // Output: O Mago Gandalf atacou usando magia
warriorHero.atack();    // Output: O Guerreiro Aragorn atacou usando espada
monkHero.atack();       // Output: O Monge Bruce Lee atacou usando artes marciais
ninjaHero.atack();      // Output: O Ninja Hanzo atacou usando shuriken
      