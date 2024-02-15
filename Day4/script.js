//Getting the User's Score
let score = parseInt(prompt("Enter your score:"));

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
//End of Getting the User's Score

//Printing Numbers in a Range
let startNumber = parseInt(prompt("Enter the starting number:"));
let endNumber = parseInt(prompt("Enter the ending number:"));

console.log(`Numbers between ${startNumber} and ${endNumber}:`);
for (let i = startNumber; i <= endNumber; i++) {
    console.log(i);
}
//End of Printing Numbers in a Range

//Guess the Secret Number Game
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber;

console.log("Welcome to the Secret Number Game!");

do {
    guessedNumber = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    
    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
        console.log(`It took you ${attempts} attempts.`);
    }
    
    attempts++;
} while (guessedNumber !== secretNumber);
// End of Guess the Secret Number Game