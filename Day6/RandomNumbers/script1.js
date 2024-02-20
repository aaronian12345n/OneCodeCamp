function EmitRandomNumber(callback, attempts = 1) {
    if (attempts > 10) {
        console.log("Maximum attempts reached.");
        return;
    }
    
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
        console.log("2 seconds have lapsed.");
        console.log(`Random number generated is ${randomNumber}.`);

        if (randomNumber < 80) {
            EmitRandomNumber(callback, attempts + 1);
        } else {
            console.log("- - - - -");
        }
    }, 2000);
}

EmitRandomNumber();
