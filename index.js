function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            // reject when attempts are greater than 100
            if (attempts > 100) {
                reject("Too many attempts");
            }

            // increase attempts
            attempts++;
            const result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }

        // resolve when headsCount is 5
        resolve(`It took ${attempts} tries to flip five "heads"`);
    });
}

fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
console.log("When does this run now?");
