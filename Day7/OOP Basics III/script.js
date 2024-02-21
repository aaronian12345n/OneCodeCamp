// Define the Character class
class Character {
    // Constructor method to initialize the object
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.stamina = 100;
        this.manna = 100;
    }
    //Method for Walk
    walk() {
        this.stamina -= 1;
    }
    //Method for Run
    run() {
        this.stamina -= 3;
    }
    //Method to Show Stats
    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nStamina: ${this.stamina}\nManna: ${this.manna}`);
    }
}
//Shaman class, which inherits from Character
class Shaman extends Character {
    // Constructor method
    constructor(name) {
        super(name);
        this.health = 150;
    }
    // Method to heal
    heal() {
        this.health += 5;
        this.stamina += 5;
        this.manna += 5;
    }
}
//Swordsman class, which inherits from Character
class Swordsman extends Character {
    // Constructor method
    constructor(name) {
        super(name);
        this.health = 170;
    }
    //Slash Method
    slash() {
        this.manna -= 10;
    }
    // Shows stats Method 
    showStats() {
        console.log("I am powerful!"); //  Override the showStats method to add custom message
        super.showStats();
    }
}

// Create instances of each character class and perform actions
let character = new Character("Summoner");
character.walk();
character.walk();
character.walk();
character.run();
character.run();
character.showStats();

let shaman = new Shaman("Soraka");
shaman.walk();
shaman.walk();
shaman.walk();
shaman.run();
shaman.run();
shaman.heal();
shaman.showStats();

let swordsman = new Swordsman("Garen");
swordsman.walk();
swordsman.walk();
swordsman.walk();
swordsman.run();
swordsman.run();
swordsman.slash();
swordsman.slash();
swordsman.showStats();

// Attempting to call 'heal' or 'slash' on instance of Character
console.log("\nAttempting to call 'heal' and 'slash' on instance of Character:");
character.heal(); // This should not work
character.slash(); // This should not work
