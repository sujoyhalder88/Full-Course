function greet(callbackFn) {
    callbackFn();
    console.log("Welcome toGrandline");
}
greet(function () {
    console.log("Hi");
});

// Same code with arrow syntax
function greet(callbackFn) {
    callbackFn();
    console.log("Welcome to  Grandline");
}
greet(() => console.log("Hi"));
