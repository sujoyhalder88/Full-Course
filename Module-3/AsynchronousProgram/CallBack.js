/*
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
*/

//=========================================================//
// function x(callback) {
//     callback();
//     console.log("First");
// }
// x(() => console.log("Second"));

//======================================================//

function x(y) {
    console.log("First");
    y();
}
x(() => {
    console.log("Second");
});
