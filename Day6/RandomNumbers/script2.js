function EmitRandomNumberPromise(attempts = 1) { // Takes one optional parameter with a default value of 1.
    return new Promise((resolve, reject) => { // Promise object takes a function with two parameters, resolve and reject
        if (attempts > 10) { //checks if the number of attempts exceeds 10
            reject("Maximum attempts reached.");
            return;
        }
        
        setTimeout(() => { // sets up a timer using the setTimeout function
            const randomNumber = Math.floor(Math.random() * 101); // generates a random number between 0 and 100
            console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
            console.log("2 seconds have lapsed.");
            console.log(`Random number generated is ${randomNumber}.`);
            
            if (randomNumber < 80) { // checks the number is its less than 80
                EmitRandomNumberPromise(attempts + 1)
                    .then(resolve)
                    .catch(reject);
            } else {
                console.log("- - - - -");
                resolve();
            }
        }, 2000); // sets a timeout of 2 seconds before executing the code
    });
}

EmitRandomNumberPromise().catch(error => console.log(error)); // Invoke EmitRandomNumberPromise function and attaching a .catch() method to handle any errors that may occur during the execution of the promise chain.
