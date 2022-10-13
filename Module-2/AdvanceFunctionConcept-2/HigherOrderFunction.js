/**
 *  Higher Order Function (HOF) are functions that takes other function as argument or return function as a result.
 *  example:. Arrays function such as map, filter, sort, reduce, forEach
 */

const arr = [19, 21, 35, 44, 57];
let result = arr.filter((adultChild) => {
    return adultChild > 30;
});
console.log(result);

//=========================================
const arr1 = [1, 2, 3, 4, 5];
let result1 = arr1.map((double) => {
    return double * 2;
});
console.log(result1);

//==============================================

const arr2 = [1, 2, 3, 4, 5];
let result2 = arr2.sort((a, b) => {
    return b - a;
});
console.log(result2);

//==========================================

const arr3 = [1, 2, 3, 4, 5];

let result3 = arr1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(result3);

//==============================================================
const arr4 = [1, 2, 3, 4, 5];

arr4.forEach((number, index) => {
    console.log(number, index);
});
