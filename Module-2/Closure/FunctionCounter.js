function counter() {
    let count = 0;
    return function (value) {
        count += value;
        console.log(count);
    };
}

let counterCall = counter();
counterCall(1);
counterCall(2);
counterCall(3);
