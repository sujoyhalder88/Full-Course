/**
 * JavaScript Demo: Promise.all()
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    });
});

Promise.all([promise1, promise2, promise3]).then((val) => {
    console.log(val);
});
