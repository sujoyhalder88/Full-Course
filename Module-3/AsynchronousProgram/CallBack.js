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

// function x(y) {
//     console.log("First");
//     y();
// }
// x(() => {
//     console.log("Second");
// });

///=======================================================
// console.log("Hi");
// function callback() {
//     console.log("budy");
// }
// setTimeout(callback, 2000);
// console.log("WellCome");

//======================================================

// const call = (call_2) => {
//     call_2();
//     console.log("1st");
// };
// const secondCall = () => {
//     console.log("2nd");
// };
// call(secondCall);

//==============make a ice crem========

const order = (call_production) => {
    console.log("order place , call the production");
    call_production();
};

const production = () => {
    console.log("order resived,start production");
};
order(production);
