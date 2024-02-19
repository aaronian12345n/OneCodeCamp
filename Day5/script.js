// Exercise 1: Function Basics
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Aaron");
// Exercise 2: Function Expression
let add = function(a, b) {
    return a + b;
};

console.log(add(6, 7));
// Exercise 3: Is Even
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7)); 
// Exercise 4: Local vs. Global Scope
let globalVar = 10;

function localScope() {
    let globalVar = 20;
    console.log("Inside function:", globalVar);
}

localScope();
console.log("Outside function:", globalVar);
// Exercise 5: Function Hoisting
hoistedFunction(); // Works

function hoistedFunction() {
    console.log("Function is hoisted");
}

// Exercise 6: Higher-Order Function
function mathOperation(a, b, callback) {
    return callback(a, b);
}

console.log(mathOperation(5, 3, (a, b) => a + b));
console.log(mathOperation(5, 3, (a, b) => a - b));
console.log(mathOperation(5, 3, (a, b) => a * b));
console.log(mathOperation(6, 3, (a, b) => a / b));

// Exercise 7: Closure
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

let counter1 = counter();
counter1();
counter1();

let counter2 = counter();
counter2(); 

// Exercise 8: Function as a Parameter
function applyFunction(func, array) {
    return array.map(func);
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = applyFunction(function(x) { return x * x; }, numbers);
console.log(squaredNumbers);

// Exercise 9: Callback Functions
function getUserData(callback) {
    setTimeout(function() {
        const data = {
            username: 'example_user',
            email: 'example@example.com'
        };
        callback(data);
    }, 1000);
}

getUserData(function(userData) {
    console.log(userData);
});
