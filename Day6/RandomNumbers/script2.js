function EmitRandomNumberPromise(attempts = 1) {
    return new Promise((resolve, reject) => {
        if (attempts > 10) {
            reject("Maximum attempts reached.");
            return;
        }
        
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 101);
            console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
            console.log("2 seconds have lapsed.");
            console.log(`Random number generated is ${randomNumber}.`);
            
            if (randomNumber < 80) {
                EmitRandomNumberPromise(attempts + 1)
                    .then(resolve)
                    .catch(reject);
            } else {
                console.log("- - - - -");
                resolve();
            }
        }, 2000);
    });
}

EmitRandomNumberPromise().catch(error => console.log(error));
