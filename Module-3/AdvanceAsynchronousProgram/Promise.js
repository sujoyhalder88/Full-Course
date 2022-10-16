var promise = new Promise((resolve, reject) => {
    let a = 10;
    let b = 9;
    if (a === b) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(() => {
        console.log(`success the program`);
    })
    .catch(() => {
        console.log(`reject the prorram`);
    });
