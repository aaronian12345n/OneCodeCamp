// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const calculateSquare = (num) => num * num;
console.log("Square of 5:", calculateSquare(5));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Aaron";
const age = 25;
console.log(`Welcome, ${name}! You are ${age} years old.`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
const calculateArea = (length = 1, width = 1) => length * width;
console.log("Area of Rectangle (default):", calculateArea());
console.log("Area of Rectangle (3x4):", calculateArea(3, 4));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.introduce();

//Activity 2 : ES6 Methods
// Task 1: Generate a random number between 1 and 10.
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Task 2: Guess what the random generated number is.
const userGuess = prompt("Guess the number between 1 and 10:");

// Task 3: Check if the user's input is a valid number.
const parsedGuess = parseInt(userGuess);
if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 10) {
    console.log("Please enter a valid number between 1 and 10.");
} else {
    // Task 4: Check if the guess is correct.
    if (parsedGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number:", randomNumber);
    } else {
        console.log("Sorry, you guessed wrong. The correct number was:", randomNumber);
    }
}
