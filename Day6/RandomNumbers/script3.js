async function EmitRandomNumberAsync() { 
    let attempts = 1; 

    while (attempts <= 10) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
        console.log("2 seconds have lapsed.");
        console.log(`Random number generated is ${randomNumber}.`);
        
        if (randomNumber < 80) {
            attempts++;
        } else {
            console.log("- - - - -");
            break;
        }
    }

    if (attempts > 10) {
        console.log("Maximum attempts reached.");
    }
}

EmitRandomNumberAsync();
