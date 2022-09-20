/**
 *  Create a program to get sum of all digits of a number
 */

function sumOfAllDigit(num) {
    let store = 0;
    while (num !== 0) {
        store += num % 10;
        num = parseInt(num / 10);
    }
    return store;
}
console.log(sumOfAllDigit(123));
