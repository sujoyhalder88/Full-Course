//JavaScript Demo: Promise Constructor

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
});

promise1.then((val) => {
    console.log("resolve the promise", val);
});

console.log(promise1);
