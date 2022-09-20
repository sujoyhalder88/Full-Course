/**
 *    Program to check if a number is odd or even

 */
function OddEven(n) {
    if (n < 0) return false;
    if (n % 2 == 0) {
        console.log(`${n} number is Even number`);
    } else {
        console.log(`${n} number is Odd number`);
    }
}
OddEven(11);
