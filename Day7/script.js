// Exercise 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

// Exercise 2
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Exercise 3
class Shape {
    constructor() {}

    calculateArea() {
        throw new Error("This method must be implemented by subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log("Circle area:", circle.calculateArea());

// Exercise 4
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}

// Exercise 5
class Animal { //Class Animal
    // Constructor method
    constructor(name, species) {
        //Initialize properties of the object
        this.name = name;
        this.species = species;
    }

    //Make Sound Method
    makeSound() {
        console.log("Generic animal sound"); // Log to the console
    }
}

// Exercise 6
class Dog extends Animal { // Dog class extending Animal class
    makeSound() { // Method to make sound
        console.log("Woof!"); // Outputting "Woof!" when called
    }
}

class Cat extends Animal { // Cat class extending Animal class
    makeSound() { // Method to make sound
        console.log("Meow!"); // Outputting "Meow!" when called
    }
}

class Bird extends Animal { // Bird class extending Animal class
    makeSound() { // Method to make sound
        console.log("Chirp chirp!"); // Outputting "Chirp chirp!" when called
    }
}


// // Exercise 7
// Define a Shape class to represent basic shapes.
class Shape {
    // Constructor to initialize color and name properties.
    constructor(color, name) {
        this.color = color; // Set the color of the shape.
        this.name = name;   // Set the name of the shape.
    }
}
// Define a Circle class that inherits from the Shape class.
class Circle extends Shape {
    // Constructor to initialize color, name, and radius properties.
    constructor(color, name, radius) {
        super(color, name); // Call the parent class constructor to set color and name.
        this.radius = radius; // Set the radius of the circle.
    }
}
// Define a Square class that inherits from the Shape class.
class Square extends Shape {
    // Constructor to initialize color, name, and sideLength properties.
    constructor(color, name, sideLength) {
        super(color, name);   // Call the parent class constructor to set color and name.
        this.sideLength = sideLength; // Set the side length of the square.
    }
}

// Create instances of Circle and Square classes
const myCircle = new Circle("red", "Circle", 5);
const mySquare = new Square("blue", "Square", 4);

// Log properties of the instances to the console to verify they are set correctly
console.log("Circle color:", myCircle.color); // Output: red
console.log("Circle name:", myCircle.name);   // Output: Circle
console.log("Circle radius:", myCircle.radius); // Output: 5

console.log("Square color:", mySquare.color); // Output: blue
console.log("Square name:", mySquare.name);   // Output: Square
console.log("Square side length:", mySquare.sideLength); // Output: 4


// Exercise 8
// Define a Person class to represent individuals with a name and age.
class Person {
    // Constructor to initialize name and age properties.
    constructor(name, age) {
        this.name = name; // Set the name of the person.
        this.age = age;   // Set the age of the person.
    }
    // Method to greet the person.
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Create an instance of the Person class
const person1 = new Person("Alice", 30);

// Call the greet method of the person instance
person1.greet();


// Exercise 9
// Define a Student class that extends the Person class.
class Student extends Person {
    // Constructor to initialize name, age, and studentID properties.
    constructor(name, age, studentID) {
        super(name, age);    // Call the parent class constructor to set name and age.
        this.studentID = studentID; // Set the student ID.
    }

    // Override the greet method to include student ID in the greeting.
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`);
    }
}
// Create an instance of the Student class
const student1 = new Student("Bob", 25, "12345");

// Call the greet method of the student instance
student1.greet();


