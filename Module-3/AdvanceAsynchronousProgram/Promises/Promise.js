//what is Promise
/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 */

//======== Promise resolve ========

var promise = new Promise((resolve, reject) => {
    let a = 10;
    let b = 10;
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

//============promises reject============

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
